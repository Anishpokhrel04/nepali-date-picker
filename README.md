📄 README.md for antd-nepali-datepicker
markdown
Copy
Edit
# 🗓️ AntD Nepali DatePicker

A custom React DatePicker and RangePicker component for [Ant Design](https://ant.design/) that supports **Nepali (Bikram Sambat) calendar**, with English dates displayed at the bottom-right of each cell.

---

![AntD Nepali DatePicker Preview](https://your-preview-image-link.com) <!-- (Optional preview GIF or image) -->

## ✨ Features

- 🌐 Fully compatible with Ant Design ecosystem
- 🗓️ Supports both DatePicker and RangePicker
- 🇳🇵 Displays Nepali dates prominently
- 🇬🇧 English dates shown subtly for reference
- 🎨 Styled and responsive
- 🌘 Dark mode support (inherits from AntD)

---

## 📦 Installation

```bash
npm install antd-nepali-datepicker
# or
yarn add antd-nepali-datepicker
Make sure antd and react are already installed in your project.

🚀 Usage
jsx
Copy
Edit
import React from "react";
import { NepaliDatePicker, NepaliRangePicker } from "antd-nepali-datepicker";
import "antd/dist/antd.css"; // if not already imported

const App = () => {
  return (
    <div>
      <h3>Single Date Picker</h3>
      <NepaliDatePicker onChange={(date, dateString) => console.log(date, dateString)} />

      <h3>Range Picker</h3>
      <NepaliRangePicker onChange={(dates, dateStrings) => console.log(dates, dateStrings)} />
    </div>
  );
};

export default App;
🛠️ Props
Both NepaliDatePicker and NepaliRangePicker accept all the props from Ant Design’s original components.

Common props you can use:

Prop	Type	Description
onChange	function	Callback when date changes
value	moment	Controlled value (moment object)
format	string	Format string (default: YYYY-MM-DD)
placeholder	string or [string, string]	Custom placeholder text
disabled	boolean	Disable the picker
...	any	All AntD DatePicker props are supported
📌 Notes
Internally uses bikram-sambat-js for conversion.

You can show or hide English dates using a prop (coming soon).

Fully supports dark mode if your app has it enabled with Ant Design.

🧪 Demo
You can run the demo locally (if provided), or visit the hosted playground (coming soon).

bash
Copy
Edit
git clone https://github.com/your-username/antd-nepali-datepicker.git
cd antd-nepali-datepicker
npm install
npm run dev
📷 Screenshots

Picker	Range Picker
🙌 Contributing
PRs are welcome! Feel free to open issues for bugs, suggestions, or feature requests.

🧾 License
MIT © Anish Pokhrel

📬 Contact
📧 anishpokhrel.dev@gmail.com

🌐 Portfolio

python
Copy
Edit

---

### ✅ Next steps:

1. Add screenshots in a `screenshots/` folder.
2. Host a preview image or demo if you'd like to add a live example.
3. Update GitHub repo name and username in the placeholders.

Let me know if you'd like me to generate a `vite.config.js` for building the package in library mode or help with publishing it to GitHub as well!







