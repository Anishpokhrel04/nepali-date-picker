import dayjs from "dayjs";
import {
  ALL_NEPALI_DATES,
  START_ENGLISH_DATE_OF_2000_BS,
  START_WEEK_DAY_OF_2000,
} from "./data";

const NepaliDateConverter = {
  START_ENGINE_DATE: dayjs(START_ENGLISH_DATE_OF_2000_BS),

  validateBsDate(bsDate) {
    const yearData = ALL_NEPALI_DATES.find((y) => y.year === bsDate.year);
    if (!yearData) return false;

    if (bsDate.month < 1 || bsDate.month > 12) return false;
    const daysInMonth = yearData.months[bsDate.month - 1];
    if (bsDate.day < 1 || bsDate.day > daysInMonth) return false;

    return true;
  },

  getTodayBs() {
    return this.adToBs(dayjs());
  },

  getWeekDay(bsDate) {
    let totalDays = 0;

    for (const yearData of ALL_NEPALI_DATES) {
      if (yearData.year >= bsDate.year) break;
      totalDays += yearData.months.reduce((sum, days) => sum + days, 0);
    }

    const yearData = ALL_NEPALI_DATES.find((y) => y.year === bsDate.year);
    if (yearData) {
      for (let i = 0; i < bsDate.month - 1; i++) {
        totalDays += yearData.months[i];
      }
    }

    totalDays += bsDate.day - 1;
    return (START_WEEK_DAY_OF_2000 + totalDays) % 7;
  },

  adToBs(adDate) {
    const date = dayjs(adDate);
    if (!date.isValid()) return { year: 2000, month: 1, day: 1 };
    const diffDays = date.diff(this.START_ENGINE_DATE, "day");

    if (diffDays < 0) return { year: 2000, month: 1, day: 1 };

    let remainingDays = diffDays;
    let year = 2000;
    let month = 1;
    let day = 1;

    for (const yearData of ALL_NEPALI_DATES) {
      const daysInYear = yearData.months.reduce((sum, days) => sum + days, 0);

      if (remainingDays >= daysInYear) {
        remainingDays -= daysInYear;
        continue;
      }

      year = yearData.year;

      for (let i = 0; i < 12; i++) {
        const daysInMonth = yearData.months[i] ?? 30;
        if (remainingDays >= daysInMonth) {
          remainingDays -= daysInMonth;
          continue;
        }

        month = i + 1;
        day = remainingDays + 1;
        return { year, month, day };
      }
      break;
    }

    return { year, month, day: day || 1 };
  },

  bsToAd(bsDate) {
    let daysToAdd = 0;

    for (const yearData of ALL_NEPALI_DATES) {
      if (yearData.year >= bsDate.year) {
        break;
      }
      daysToAdd += yearData.months.reduce((sum, days) => sum + days, 0);
    }

    const currentYearData = ALL_NEPALI_DATES.find(
      (d) => d.year === bsDate.year
    );
    if (currentYearData) {
      for (let i = 0; i < bsDate.month - 1; i++) {
        daysToAdd += currentYearData.months[i];
      }
    }

    daysToAdd += bsDate.day - 1;
    return this.START_ENGINE_DATE.add(daysToAdd, "day");
  },

  getNepaliDate(adDate) {
    return this.adToBs(dayjs(adDate));
  },

  getEnglishDate(npYear, npMonth, npDay) {
    return this.bsToAd({ year: npYear, month: npMonth, day: npDay }).toDate();
  },

  getDaysInMonth(year, month) {
    const yearData = ALL_NEPALI_DATES.find((d) => d.year === year);
    if (!yearData) return 30;
    return yearData.months[month - 1];
  },
};

export default NepaliDateConverter;
