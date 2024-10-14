import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("adds a new todo", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Enter your todo here");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New todo" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New todo")).toBeInTheDocument();
});

test("displays error message when todo exceeds 40 characters", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Enter your todo here");

  fireEvent.change(input, { target: { value: "a".repeat(41) } });

  expect(
    screen.getByText("Todo cannot exceed 40 characters")
  ).toBeInTheDocument();
});

test("removes a todo", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Enter your todo here");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New todo" } });
  fireEvent.click(addButton);

  const removeButton = screen.queryByText("Delete");
  fireEvent.click(removeButton);

  expect(screen.queryByText("New todo")).not.toBeInTheDocument();
});
