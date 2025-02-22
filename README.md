TEMPLATE README

# Project Title & Description

This is a simple React-based application that fetches data from an API, allows users to filter returned companies by country and industry, and sort them by name or number of employees. Filtering and sorting is done on the frontend, because backend does not support it. The app is responsive, optimized for performance, and follows best practices in frontend development.

# Deployment

The app is deployed on Vercel:

🔗 [Live Demo](https://squiz-three.vercel.app/)

# Features

✔ Fetches data from the provided API

✔ Filters displayed data by country and industry

✔ Sorts data by name and number of employees (ascending, descending)

✔ Responsive two-column desktop and stacked mobile layout

✔ Error handling for API failures

✔ Loading skeletons

✔ Switches between list and tiled view

✔ Darkmode and lightmode

✔ Deployed on Vercel

# Tech Stack

<table align="center">
   <tbody>
      <tr>
        <td align="center">
          <img width="55" height="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/>
          <p>React</p>
        </td>
        <td align="center">
          <img width="55" height="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/typescript-icon.svg"/>
          <p>TypeScript</p>
        </td>
        <td align="center">
          <img width="55" height="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/tailwindcss-icon.svg"/>
          <p>Tailwind CSS</p>
        </td>
        <td align="center">
          <img width="55" height="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/vitejs.svg"/>
          <p>Vite</p>
        </td>
        <td align="center">
          <img width="55" height="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/axios.svg"/>
          <p>Axios</p>
        </td>
        <td align="center">
          <img width="55" height="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/eslint.svg"/>
          <p>ESLint</p>
        </td>
        <td align="center">
          <img width="55" height="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/prettier.svg"/>
          <p>Prettier</p>
        </td>
        <td align="center">
          <img width="55" height="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/vercel-icon.svg"/>
          <p>Vercel</p>
        </td>
      </tr>
   </tbody>
</table>

Frontend: React, TypeScript, TailwindCSS, Vite

State Management: React useState/useEffect

Utilities: Axios (for data fetching), react-tooltip (for displaying tooltips)

Deployment: Vercel

# Installation & Running Locally

**Prerequisites**

Ensure you have Node.js (v16+) and npm or yarn installed. (I used Node.js 23.8.0).

Clone the Repository

```sh
git clone https://github.com/WitchDevelops/squiz.git
cd squiz
```

Install Dependencies

```sh
npm install
# or
yarn install
```

Run the Development Server

```sh
npm run dev
# or
yarn dev
```

Now, visit http://localhost:5173 in your browser.

# Project Structure

```perl
📦 squiz
├── 📂 src
│   ├── 📂 components         # Reusable components
│   ├── 📂 hooks              # Custom hooks (for data fetching)
│   ├── 📂 services           # Global services (currently only httpClient)
│   ├── 📂 types              # Types for type safety
│   ├── 📂 utils              # Utility function for filtering/sorting
│   ├── App.css               # Component styles
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global styles for light/dark mode
├── 📜 .prettierrc.json       # Basic Prettier configuration
├── 📜 eslint.config.js       # Simple ESLint configuration for linting
├── 📜 index.html
├── 📜 package.json           # Dependencies & scripts
├── 📜 README.md              # Project documentation
├── 📜 tailwind.config.js     # Tailwind configuration with custom colors
├── 📜 tsconfig.app.json      # Typescript configuration
├── 📜 tsconfig.json          # Typescript configuration
└── 📜 vite.config.ts         # Vite configuration

```

# API Usage

The application fetches data from:

📌 URL: https://dujour.squiz.cloud/developer-challenge/data

This endpoint returns an array of objects with company data and the following structure:

```json
[
  {
    "id": 1,
    "name": "Company A",
    "country": "USA",
    "industry": "Technology",
    "numberOfEmployees": 1000
  },
  {
    "id": 2,
    "name": "Company B",
    "country": "Germany",
    "industry": "Finance",
    "numberOfEmployees": 500
  }
]
```

# Filtering & Sorting Logic

## Filtering

Data is first fetched from the API, then displayed are only the items that match the selected filters, sorted in the provided direction.
As a default, displayed data is sorted by name in the ascending direction (A-Z).

First, filters are set such they display only the entries that are exactly matching the given query. The `FilterAndSortControls.tsx` component displays the filtering options based on the data that comes from the API, so only the company names that exist are displayed. Hence direct comparison is the logical choice here.
Simply put:

```js
const Filter = (data, filters) => {
  return data.filter(
    (item) =>
      (!filters.country || item.country === filters.country) &&
      (!filters.industry || item.industry === filters.industry)
  );
};
```

If the filter is set, it only keeps the objects that match the given settings. If the filter is not set, it doesn't do anything. This allows for using multiple filters at once.

Then, filtered data is sorted based on the given sort option.

## Sorting

### Sorting an array of numbers

Simply put, sorting an array of numbers based on the provided sort order (ascending or descending) is done like this:

```js
function sortNumbers(arr, ascending = true) {
  return arr.sort((a, b) => (ascending ? a - b : b - a));
}
```

I have implemented this like so:

```js
const sortByNumber = (data, sortOrder) => {
  return data.sort((a, b) => {
    return sortOrder.ascending
      ? a.numberOfEmployees - b.numberOfEmployees
      : b.numberOfEmployees - a.numberOfEmployees;
  });
};
```

### Sorting an array of strings

Sorting an array of strings can be handled in several ways. Given that we are working with company names, that can be uppercase (should be), lowercase, contain local accents or not, the three main ways of sorting such an array are:

1. using a `.sort()` with direct comparison

```js
array.sort((a, b) => (a.name > b.name ? 1 : -1));
```

2. using `.sort()` with `toLowerCase()`

```js
array.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
```

3. using `.sort()` with `localeCompare()`

```js
array.sort((a, b) => a.name.localeCompare(b.name));
```

The method [`localeCompare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) can handle accents, special characters and is case-insensitive by default. However, it can be slower for large datasets.

The method `toLowerCase()` handles case sensitivity and is faster than `localeCompare()` in most cases. But, for example, "ä" and "a" would not be treated as letter "a". It is also inefficient for bigger sets, because it creates lowercase copy of each string.

Method with direct comparison is the fastest, but it is case-sensitive (so, for example, "apple" and "Apple" will not be treated equally) and it is not locale-aware. Words containing accents mayb be sorted incorrectly.

I decided to use the `localeCompare()` method.

## Putting it together

Since filtering and sorting should work together, per requirements:

> Enable filtering by “country” and “industry” values;

> Changing filters should not reset sort order selection

> Enable ascending and descending sorting by “name” or “numberOfEmployees” values;

> Changing the sort order should not reset filters selection

I decided to combine filtering and sorting into a single function. Final implementation (omiting TS types, and the `export` keyword for clarity)

```js
const filterAndSortData = (data, filters, sortOrder) => {
  return data
    .filter(
      (item) =>
        (!filters.country || item.country === filters.country) &&
        (!filters.industry || item.industry === filters.industry)
    )
    .sort((a, b) => {
      if (sortOrder.key === "name") {
        return sortOrder.ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (sortOrder.key === "numberOfEmployees") {
        return sortOrder.ascending
          ? a.numberOfEmployees - b.numberOfEmployees
          : b.numberOfEmployees - a.numberOfEmployees;
      }
      return 0;
    });
};
```

Explanation:

- if the `country` filter is provided, it retains only the items that match the given country
- if the `industry` filter is retained, it retains only the items that match the given industry
- if one or both of the country or industry filters are not provided, the condition is ignored, so the returned dataset is not filtered
- sorting is done based on the `sortOrder` key (ascending or descending):
  - ascending (true) -> a - b,
  - descending (false) -> b - a
- as a fallback, `return 0` leaves the sorting order unchanged if it is not provided

This function can be easily expanded if more filters or sorting options were provided.

# Useful resources and general notes

1. While setting up Tailwind in the project, I noticed that [Tailwind](https://tailwindcss.com/) introduced a new major version 4, which changed many things. Because I was pressed for time I decided to use the version I'm more familiar with, which is version 3.

2. For the favicon and logo I started with Midjourney, but I wasn't happy with the result and didn't want to spend too much time on it. So I found one on Flaticon.com that seemed good enough and adjusted the colors to fit my chosen color scheme. Attribution: Favicon made by [lutfix](https://www.flaticon.com/authors/lutfix) from [Flaticon](www.flaticon.com).

3. While pondering over the best way to sort an array of companies that may have international names, I came upon the `localeCompare()` JS method. It was my first time encountering it, as I hadn't had such a problem before. Turns out it can handle different accents and special characters (å, ä, ü, ï, ö, ø, ë, ÿ, æ, ą, ę, ł, ó, other fun stuff). Despite my data set didn't contain any special characters, it potentially could - it returns a list of **international** companies. [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare).

4. I decided to add a 'clear filters' button, because it improves the UX a lot.
5. I also added switching between list and grid view and mode switcher - because darkmode is awesome. And I had a lot of fun implementing it (did it extend the time I spent on this project? Oh yes it did. By a lot. But as a frontend developer I care about my UI looking nice).