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
import React from "react";
import ReactDOM from "react-dom/client";
import NepaliDatePicker from "./components/NepaliDatePicker";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "120vh",
      }}
    >
      <div>
        <NepaliDatePicker type="nepali" defaultValue={dayjs()} />
        <NepaliDatePicker type="english" defaultValue={dayjs()} />
      </div>
    </div>
  </React.StrictMode>
);
