import FormComponent from "./FormComponent";
import { render, fireEvent, cleanup } from "@testing-library/react";

describe("FormComponent", () => {
  afterEach(cleanup);

  it("should not allow empty string when submitting form", () => {
    const { getByText, getByPlaceholderText } = render(<FormComponent />);
    const submitButton = getByText("Submit");
    const textAreaInput = getByPlaceholderText("Please insert string");
    fireEvent.change(textAreaInput, { target: { value: "" } });
    fireEvent.click(submitButton);
    expect(textAreaInput).toHaveValue("");
  });

  it("should copy text to clipboard when clicking copy button", () => {
    const { getByText, getByPlaceholderText } = render(<FormComponent />);
    const copyButton = getByText("Copy");
    const textAreaInput = getByPlaceholderText("Please insert string");
    fireEvent.change(textAreaInput, { target: { value: "hello world" } });
    fireEvent.click(copyButton);
    expect(textAreaInput).toHaveValue("hello world");
  });
});
