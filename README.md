# 🧩 Browser Extension Manager

A responsive, feature-rich web application built with **React (Vite)** and **Tailwind CSS** to manage browser extensions efficiently. It allows users to filter, activate/deactivate, and delete extensions with complete **Dark Mode** support.

---

## ✨ Features

- **Dynamic Extension List**: Displays extensions with custom logos, titles, and descriptions.
- **Filter by Status**: Seamlessly filter between `All`, `Active`, and `Inactive` extensions.
- **Toggle State**: Interactive custom switch button to instantly enable or disable any extension.
- **Delete Functionality**: Remove unwanted extensions from the dashboard with state cleanup.
- **Dark Mode Support**: Full light/dark theme toggle with dynamic background and contrast styling.
- **Fully Responsive**: Grid layout designed for mobile, tablet, and desktop screens.

---

## 🛠️ Built With

- **React.js** (Vite setup)
- **Tailwind CSS** (v4 styling & custom variants)
- **FontAwesome Icons**
- **JavaScript (ES6+)**

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

```bash
git clone [https://github.com/MennahRagab24/browser-extension-manager.git](https://github.com/MennahRagab24/browser-extension-manager.git)
cd browser-extension-manager
npm install
npm run dev
```
### Project Structure
src/
├── components/
│   ├── Buttons.jsx       # Filter control buttons
│   ├── Cards.jsx         # Extension grid layout container
│   ├── Header.jsx        # Navigation bar & theme switcher
│   └── SingleCard.jsx    # Individual extension card component
├── data/
│   └── data.json         # Initial extensions mock dataset
├── pages/
│   └── Home.jsx          # Main page & centralized state management
├── App.jsx
├── index.css
└── main.jsx

Author
GitHub: @MennahRagab24
