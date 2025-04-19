/**
 * 📅 Nepali Date Conversion Utility (Bikram Sambat ↔ Gregorian)
 * -------------------------------------------------------------
 * This utility handles conversion between English (AD) and Nepali (BS) dates,
 * including weekday calculation, validation, and calendar metadata.
 *
 * Built with ❤️ by Anish Pokhrel (@anishpokhrel) - 2025
 * Designed for seamless integration with custom Ant Design DatePicker components.
 */

import dayjs from "dayjs";
import {
  ALL_NEPALI_DATES,
  START_ENGLISH_DATE_OF_2000_BS,
  START_WEEK_DAY_OF_2000,
} from "./data";

const START_ENGINE_DATE = dayjs(START_ENGLISH_DATE_OF_2000_BS);

function validateBsDate(bsDate) {
  const yearData = ALL_NEPALI_DATES.find((y) => y.year === bsDate.year);
  if (!yearData) return false;

  if (bsDate.month < 1 || bsDate.month > 12) return false;
  const daysInMonth = yearData.months[bsDate.month - 1];
  if (bsDate.day < 1 || bsDate.day > daysInMonth) return false;

  return true;
}

function getTodayBs() {
  return adToBs(dayjs());
}

function getWeekDay(bsDate) {
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
}

function adToBs(adDate) {
  const date = dayjs(adDate);
  if (!date.isValid()) return { year: 2000, month: 1, day: 1 };

  const diffDays = date.diff(START_ENGINE_DATE, "day");
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
}

function bsToAd(bsDate) {
  let daysToAdd = 0;

  for (const yearData of ALL_NEPALI_DATES) {
    if (yearData.year >= bsDate.year) break;
    daysToAdd += yearData.months.reduce((sum, days) => sum + days, 0);
  }

  const currentYearData = ALL_NEPALI_DATES.find((d) => d.year === bsDate.year);
  if (currentYearData) {
    for (let i = 0; i < bsDate.month - 1; i++) {
      daysToAdd += currentYearData.months[i];
    }
  }

  daysToAdd += bsDate.day - 1;
  return START_ENGINE_DATE.add(daysToAdd, "day");
}

function getNepaliDate(adDate) {
  return adToBs(dayjs(adDate));
}

function getEnglishDate(npYear, npMonth, npDay) {
  return bsToAd({ year: npYear, month: npMonth, day: npDay }).toDate();
}

function getDaysInMonth(year, month) {
  const yearData = ALL_NEPALI_DATES.find((d) => d.year === year);
  if (!yearData) return 30;
  return yearData.months[month - 1];
}

const NepaliDateConverter = {
  validateBsDate,
  getTodayBs,
  getWeekDay,
  adToBs,
  bsToAd,
  getNepaliDate,
  getEnglishDate,
  getDaysInMonth,
};

export default NepaliDateConverter;
