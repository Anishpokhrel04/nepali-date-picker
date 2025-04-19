/**
 * 📅 Nepali Date Conversion Utility (Bikram Sambat ↔ Gregorian)
 * -------------------------------------------------------------
 * This utility handles conversion between English (AD) and Nepali (BS) dates,
 * including weekday calculation, validation, and calendar metadata.
 *
 * Built with ❤️ by Anish Pokhrel (@anishpokhrel) - 2025
 * Designed for seamless integration with custom Ant Design DatePicker components.
 */
const nepaliMonthNames = [
  "Baishakh",
  "Jestha",
  "Ashad",
  "Shrawan",
  "Bhadra",
  "Ashwin",
  "Kartik",
  "Mangsir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra",
];
const weekNepaliDayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const enLocale = {
  lang: {
    locale: "english",
    placeholder: "Select date",
    rangePlaceholder: ["Start date", "End date"],
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "OK",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "Select time",
    dateSelect: "Select date",
    weekSelect: "Select a week",
    monthSelect: "Select a month",
    yearSelect: "Select a year",
    decadeSelect: "Select a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthBeforeYear: true,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Previous year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Previous decade",
    nextDecade: "Next decade",
    previousCentury: "Previous century",
    nextCentury: "Next century",
    shortMonths: nepaliMonthNames,
    shortWeekDays: weekNepaliDayNames,
  },
  timePickerLocale: {
    placeholder: "Select time",
  },
};

export default enLocale;
