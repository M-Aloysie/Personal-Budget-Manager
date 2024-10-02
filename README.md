# Personal Budget Manager

## Description
The **Personal Budget Manager** is a simple React application that helps users track their expenses and manage their budgets. Users can add expenses, view them in a list, and see a summary of their spending by category in a pie chart. The app also allows setting budget limits for different categories and alerts users when they exceed their budget.

## Features
- Add Expense: Input the amount, date, and category of each expense.
- View Expenses: Display all the expenses in a list.
- Expense Summary: A visual summary (pie chart) of expenses by category.
- Budget Alerts: Alert users when spending in any category exceeds the budget limit.

## Setup Instructions

### 1. Clone the repository:
```bash
git clone https://github.com/M-Aloysie/personal-budget-manager.git
cd personal-budget-manager
``` 
### 2. Install Dependencies:
After cloning the repository, install the required dependencies by running:
```bash
npm install
```
### 3. Install gh-pages (for deployment):
To deploy your application to GitHub Pages, you need to install the `gh-pages` package. Run the following command:
```bash
npm install gh-pages --save-dev
```
### 3. Install gh-pages (for deployment):
To deploy your application to GitHub Pages, you need to install the `gh-pages` package. Run the following command:
```bash
npm install gh-pages --save-dev
```
### 4. Configure the Project for Deployment:
Before deploying, make sure to update your `package.json` file:

1. **Update the `homepage` field**: 
   Add the following line to specify the URL where your app will be hosted:
   ```json
   "homepage": "https://M-Aloysie.github.io/Personal-Budget-Manager"
   ```

2. **Update the `scripts` field**:

   ```json
   "scripts": {
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
     "eject": "react-scripts eject",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

### 5. Deploy to GitHub Pages:
Run the following command to deploy your project to GitHub Pages:
```bash
npm run deploy
```

## Author
- [M-Aloysie](https://github.com/M-Aloysie)
