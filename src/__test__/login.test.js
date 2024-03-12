import { render, screen, act } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Login from "../Pages/login";
import { BrowserRouter } from "react-router-dom";

describe("Testing the Login Component", () => {
  test("rendering the login from with 1 button", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });

  test("navigates to the signup page when clicking 'Create account'", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const createAccountLink = screen.getByText("Create account");
    fireEvent.click(createAccountLink);

    expect(screen.getByTestId("signup-page")).toBeInTheDocument();
  });

  test("renders the form with input fields", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailInput = screen.getByPlaceholderText("Email or phone*");
    const passwordInput = screen.getByPlaceholderText("Password*");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("updates email and password state on input change", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText("Email or phone*");
    const passwordInput = screen.getByPlaceholderText("Password*");

    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@gmail.com");
    expect(passwordInput.value).toBe("password123");
  });
});
