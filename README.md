# Nepali Date Picker

A antd Nepali DatePicker component for Ant Design with full Bikram Sambat (BS) ↔ Gregorian (AD) conversion support.
[![npm](https://img.shields.io/npm/v/antd-nepali-date-picker)](https://www.npmjs.com/package/antd-nepali-date-picker)


## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
- [Contributing](#contributing)
- [License](#license)

## 📦 Installation

````bash
npm install antd-nepali-date-picker

## Features

- Bikram Sambat (BS) to Gregorian (AD) conversion and vice versa.
- Supports both Nepali and English locales.
- Based on Ant Design `DatePicker` and `RangePicker`.
- Clean and customizable UI with optional dark mode support.

## Usage

### Basic Usage

```javascript
import NepaliDatePicker from "antd-nepali-date-picker";


// Get today's date in Nepali calendar
const todayNepali = NepaliDateConverter.getTodayBs();
````

Then, you can use the Nepali date picker component in your React project as follows:

```bash
import React from 'react';
import NepaliDatePicker from "antd-nepali-date-picker";

import 'antd/dist/antd.css';

const App = () => {
  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <h1>Nepali Date Picker</h1>
<NepaliDatePicker type="nepali" lang="nepali" onChange={handleChange} />
<NepaliDatePicker type="english" onChange={handleChange} />
    </div>
  );
};

export default App;

```

### Components

#### NepaliDatePicker

The NepaliDatePicker component supports all the same props as the Ant Design DatePicker component. Please refer to the [Ant Design DatePicker documentation](https://ant.design/components/date-picker/) for detailed information.

## Contributing

If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes and commit them (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Create a new Pull Request.

## License

This project is licensed under the MIT License.
