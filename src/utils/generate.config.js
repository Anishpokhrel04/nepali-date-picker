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
import weekOfYear from "dayjs/plugin/weekOfYear";
import { NepaliDateConverter } from "..";

dayjs.extend(weekOfYear);

const nepaliMonthNames = [
  "बैशाख",
  "जेठ",
  "असार",
  "श्रावण",
  "भदौ",
  "आश्विन",
  "कार्तिक",
  "मंसिर",
  "पुष",
  "माघ",
  "फाल्गुन",
  "चैत्र",
];

const weekNepaliDayNames = [
  "आइत",
  "सोम",
  "मंगल",
  "बुध",
  "बिही",
  "शुक्र",
  "शनि",
];

// Function to convert English digits to Nepali
const englishToNepaliNumbers = (number) => {
  const nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  return number
    .toString()
    .split("")
    .map((digit) => nepaliDigits[parseInt(digit)])
    .join("");
};

export const nepaliDateConfig = {
  // Get methods
  getNow: () => dayjs(),

  getFixedDate: (string) => {
    return dayjs(string);
  },

  getEndDate: (date) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    const daysInMonth = NepaliDateConverter.getDaysInMonth(
      bsDate.year,
      bsDate.month
    );
    return date.date(daysInMonth);
  },

  getWeekDay: (date) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    return NepaliDateConverter.getWeekDay(bsDate);
  },

  getYear: (date) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    return bsDate.year;
  },

  getMonth: (date) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    return bsDate.month - 1; // Convert to 0-based month
  },

  getDate: (date) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    return bsDate.day;
  },

  getHour: (date) => {
    return date.hour();
  },

  getMinute: (date) => {
    return date.minute();
  },

  getSecond: (date) => {
    return date.second();
  },

  getMillisecond: (date) => {
    return date.millisecond();
  },

  // Set methods
  addYear: (date, diff) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    const newDate = {
      year: bsDate.year + diff,
      month: bsDate.month,
      day: bsDate.day,
    };
    return NepaliDateConverter.validateBsDate(newDate)
      ? NepaliDateConverter.bsToAd(newDate)
      : date;
  },

  addMonth: (date, diff) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    let year = bsDate.year;
    let month = bsDate.month + diff;

    while (month > 12) {
      year += 1;
      month -= 12;
    }
    while (month < 1) {
      year -= 1;
      month += 12;
    }

    const daysInMonth = NepaliDateConverter.getDaysInMonth(year, month);
    const day = Math.min(bsDate.day, daysInMonth);

    const newDate = { year, month, day };
    return NepaliDateConverter.validateBsDate(newDate)
      ? NepaliDateConverter.bsToAd(newDate)
      : date;
  },

  addDate: (date, diff) => {
    return date.add(diff, "day");
  },

  setYear: (date, year) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    const newDate = {
      year,
      month: bsDate.month,
      day: bsDate.day,
    };
    return NepaliDateConverter.validateBsDate(newDate)
      ? NepaliDateConverter.bsToAd(newDate)
      : date;
  },

  setMonth: (date, month) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    const newDate = {
      year: bsDate.year,
      month: month + 1, // Convert from 0-based month
      day: bsDate.day,
    };
    return NepaliDateConverter.validateBsDate(newDate)
      ? NepaliDateConverter.bsToAd(newDate)
      : date;
  },

  setDate: (date, day) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    const newDate = {
      year: bsDate.year,
      month: bsDate.month,
      day,
    };
    return NepaliDateConverter.validateBsDate(newDate)
      ? NepaliDateConverter.bsToAd(newDate)
      : date;
  },

  setHour: (date, hour) => {
    return date.hour(hour);
  },

  setMinute: (date, minute) => {
    return date.minute(minute);
  },

  setSecond: (date, second) => {
    return date.second(second);
  },

  setMillisecond: (date, millisecond) => {
    return date.millisecond(millisecond);
  },

  // Compare methods
  isAfter: (date1, date2) => {
    if (!date1.isValid() || !date2.isValid()) return false;
    return date1.isAfter(date2);
  },

  isValidate: (date) => {
    return date.isValid();
  },

  locale: {
    shortMonths: nepaliMonthNames,
    shortWeekDays: weekNepaliDayNames,
    getWeekFirstDay: () => 0,
    getWeekFirstDate: (_, date) => {
      return date.startOf("week");
    },
    getWeek: (_, date) => {
      return date.week();
    },
    format: (_, date, format) => {
      if (!date || !date.isValid()) return "";

      const bsDate = NepaliDateConverter.adToBs(date);

      // Convert numbers to Nepali before returning
      const formatNepaliNumbers = (str) =>
        str.replace(/\d/g, (digit) => englishToNepaliNumbers(digit));

      // Cell display (just the day number)
      if (format === "date") {
        return formatNepaliNumbers(bsDate.day.toString());
      }

      // Year display in header
      if (format === "YYYY" || format === "yearFormat") {
        return formatNepaliNumbers(bsDate.year.toString());
      }

      // Month display in header
      if (format === "M" || format === "monthFormat") {
        return formatNepaliNumbers(bsDate.month.toString());
      }

      // Day display
      if (format === "D" || format === "dayFormat") {
        return formatNepaliNumbers(bsDate.day.toString());
      }

      // Input field display
      if (format === "dateFormat" || format === "YYYY-MM-DD") {
        return `${formatNepaliNumbers(
          bsDate.year.toString()
        )}-${formatNepaliNumbers(
          bsDate.month.toString().padStart(2, "0")
        )}-${formatNepaliNumbers(bsDate.day.toString().padStart(2, "0"))}`;
      }

      return bsDate.year.toString();
    },
    parse: (_, text) => {
      if (!text) return dayjs(null);

      // Parse YYYY-MM-DD format
      const [yearStr, monthStr, dayStr] = text.split("-");
      const year = parseInt(yearStr, 10);
      const month = parseInt(monthStr, 10);
      const day = parseInt(dayStr, 10);

      if (isNaN(year) || isNaN(month) || isNaN(day)) {
        return dayjs(null);
      }

      const bsDate = { year, month, day };
      return NepaliDateConverter.validateBsDate(bsDate)
        ? NepaliDateConverter.bsToAd(bsDate)
        : dayjs(null);
    },
  },
};
