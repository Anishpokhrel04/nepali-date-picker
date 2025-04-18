import { DatePicker } from "antd";
import generatePicker from "antd/es/date-picker/generatePicker";
import { forwardRef } from "react";
import { nepaliDateConfig } from "../utils/generate.config";
import enLocale from "../utils/ne-locale";
import neLocale from "../utils/en-locale";
import "./datepicker.css";

const CustomDatePicker = generatePicker(nepaliDateConfig);

const NepaliDatePicker = forwardRef(({ type, lang, ...rest }, ref) => {
  const locale = lang === "ne" ? neLocale : enLocale;

  if (type === "ne")
    return (
      <CustomDatePicker {...rest} locale={locale} ref={ref} lang="nepali" />
    );
  return <DatePicker {...rest} ref={ref} />;
});

export default NepaliDatePicker;
