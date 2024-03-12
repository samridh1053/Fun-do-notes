import { render, screen, act } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Signup from "../Pages/signup";
import { BrowserRouter } from "react-router-dom";

describe("Testing the Signup Component", () => {
  test("rendering the login from with 1 button", async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });

  test("renders the form with input fields", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    const firstNameInput = screen.getByPlaceholderText("First Name*");
    const lastNameInput = screen.getByPlaceholderText("Last Name*");
    const emailInput = screen.getByPlaceholderText("User Name*");
    const passwordInput = screen.getByPlaceholderText("Password*");
    const confirmInput = screen.getByPlaceholderText("Confirm*");

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmInput).toBeInTheDocument();
  });

  test("validates form and shows error messages on submit", async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const submitButton = screen.getByTestId("submit-button");
    await act(async () => {
      fireEvent.click(submitButton);
    });

    const errorMessages = await screen.findAllByTestId("error-message");
    expect(errorMessages).toHaveLength(4);
    expect(screen.getByText("First Name is required")).toBeInTheDocument();
    expect(screen.getByText("Last Name is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  test("navigates to the login page when clicking 'Sign in instead'", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const signInInsteadLink = screen.getByText("Sign in instead");
    fireEvent.click(signInInsteadLink);

    expect(screen.getByTestId("login-page")).toBeInTheDocument();
  });
});
