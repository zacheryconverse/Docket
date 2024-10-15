# Docket Todo App

A simple React-based Todo application that allows users to add, display, and delete todos.

## Features

- Add new todos (limited to 40 characters).
- Display a list of todos.
- Delete individual todos.
- Input validation for empty and overly long todos.
- **Integration tests** to ensure core functionality works as expected.

## Technologies Used

- React (JavaScript)
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zacheryconverse/Docket.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Docket
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

To start the development server, run:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

### Testing

To run the tests, use:

```bash
npm test
```

## Usage

- Enter a todo in the input field and click "Add" to add it to the list.
- Click a todo's "Delete" button to clear it.
- The input is limited to 40 characters, and an error message will be shown if the input is invalid.

## Styles

The app uses a custom stylesheet (`styles.css`) for basic styling.

## Design Decisions

This code sample is intentionally kept short to align with the interview guidelines, which suggest keeping submissions concise and easy to review.

If I had more freedom to expand, I would have:

- Added more comprehensive test coverage, including edge cases and integration tests.
- Used **React Context** for state management if multiple components needed access to shared data.
- Broken down the application further into **multiple components** to promote reusability and separation of concerns.
- Used **custom hooks** to encapsulate reusable logic, such as form handling or state management.
