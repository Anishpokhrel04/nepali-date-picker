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

const neLocale = {
  lang: {
    locale: "nepali",
    placeholder: "मिति चयन गर्नुहोस्",
    rangePlaceholder: ["सुरुको मिति", "अन्तिम मिति"],
    today: "आज",
    now: "अहिले",
    backToToday: "आजमा फर्कनुहोस्",
    ok: "ठीक छ",
    clear: "स्पष्ट",
    month: "महिना",
    year: "वर्ष",
    timeSelect: "समय चयन गर्नुहोस्",
    dateSelect: "मिति चयन गर्नुहोस्",
    weekSelect: "एक हप्ता चयन गर्नुहोस्",
    monthSelect: "महिना चयन गर्नुहोस्",
    yearSelect: "वर्ष चयन गर्नुहोस्",
    decadeSelect: "एक दशक चयन गर्नुहोस्",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthBeforeYear: true,
    previousMonth: "अघिल्लो महिना (PageUp)",
    nextMonth: "अर्को महिना (PageDown)",
    previousYear: "अघिल्लो वर्ष (Control + left)",
    nextYear: "अर्को वर्ष (Control + right)",
    previousDecade: "अघिल्लो दशक",
    nextDecade: "अर्को दशक",
    previousCentury: "अघिल्लो शताब्दी",
    nextCentury: "अर्को शताब्दी",
    shortMonths: nepaliMonthNames,
    shortWeekDays: weekNepaliDayNames,
  },
  timePickerLocale: {
    placeholder: "समय चयन गर्नुहोस्",
  },
};

export default neLocale;
