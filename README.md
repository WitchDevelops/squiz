TEMPLATE README

# Project Title & Description

Frontend Filtering & Sorting App
A simple React-based application that fetches data from an API, allows users to filter by country and industry, and sort by name or number of employees. The app is responsive, optimized for performance, and follows best practices in frontend development.

# Features

✔ Fetches data from the provided API

✔ Filtering by country and industry

✔ Sorting by name (A-Z, Z-A) and number of employees (ascending, descending)

✔ Responsive two-column desktop and stacked mobile layout

✔ State management to persist filter/sort selections

✔ Error handling for API failures

✔ Deployed on Vercel/Netlify

# Tech Stack

Frontend: React, TailwindCSS (or Styled Components), Vite

State Management: React useState/useEffect

Utilities: Lodash (for sorting/filtering optimizations)

Deployment: Vercel/Netlify

Testing (if included): Jest & React Testing Library

# Installation & Running Locally

**Prerequisites**

Ensure you have Node.js (v16+) and npm or yarn installed.

Clone the Repository

```sh
git clone https://github.com/yourusername/frontend-filter-sort-app.git
cd frontend-filter-sort-app
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

Now, visit http://localhost:5173 (if using Vite) in your browser.

# Project Structure

```perl
📦 frontend-filter-sort-app
├── 📂 src
│   ├── 📂 components   # Reusable components
│   │   ├── FilterPanel.jsx
│   │   ├── SortControls.jsx
│   │   ├── DataList.jsx
│   │   ├── ListItem.jsx
│   ├── 📂 hooks        # Custom hooks (if any)
│   ├── 📂 styles       # Global styles (CSS/Tailwind)
│   ├── 📂 utils        # Utility functions for filtering/sorting
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   ├── index.css       # Global styles
├── 📜 package.json     # Dependencies & scripts
├── 📜 README.md        # Project documentation
└── 📜 .gitignore       # Ignored files

```

# API Usage

The application fetches data from:
📌 URL: https://dujour.squiz.cloud/developer-challenge/data

The data structure is as follows:

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

- Users can select one or more countries and industries.
- The list updates dynamically based on the selected filters.
- Filtering does not reset the sorting selection.

## Sorting

- Users can sort by name (A-Z, Z-A) or numberOfEmployees (ascending, descending).
- Sorting persists when filters are changed.

# Deployment

The app is deployed on Vercel:
🔗 Live Demo

# Future Improvements

🔹 Implement search functionality for company names

🔹 Improve UI/UX with animations

🔹 Add unit tests for components

# Contributors

👤 Your Name

📧 your.email@example.com

🔗 GitHub Profile

