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
        height: "120vh", // Full viewport height
      }}
    >
      <div>
        <NepaliDatePicker type="ne" defaultValue={dayjs()} />
      </div>
    </div>
  </React.StrictMode>
);
