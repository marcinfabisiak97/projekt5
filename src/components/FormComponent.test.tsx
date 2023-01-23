import FormComponent from "./FormComponent";
import { render, fireEvent, cleanup } from "@testing-library/react";

describe("FormComponent", () => {
  afterEach(cleanup);

  it("should not allow empty string when submitting form", () => {
    const { getByText, getByPlaceholderText } = render(<FormComponent />);
    const submitButton = getByText("Submit");
    const textAreaInput = getByPlaceholderText(
      "Please insert text for removing spaces"
    );
    fireEvent.change(textAreaInput, { target: { value: "" } });
    fireEvent.click(submitButton);
    expect(textAreaInput).toHaveValue("");
  });
  it("should reset form when clicking reset button", () => {
    const { getByText, getByPlaceholderText } = render(<FormComponent />);
    const resetButton = getByText("Reset");
    const textAreaInput = getByPlaceholderText(
      "Please insert text for removing spaces"
    );
    fireEvent.change(resetButton, { target: { value: "" } });
    fireEvent.click(resetButton);
    expect(textAreaInput).toHaveValue("");
  });
  it("should copy text to clipboard when clicking copy button", () => {
    const { getByText, getByPlaceholderText } = render(<FormComponent />);
    const copyButton = getByText("Copy");
    const textAreaInput = getByPlaceholderText(
      "Please insert text for removing spaces"
    );
    fireEvent.change(textAreaInput, { target: { value: "hello world" } });
    fireEvent.click(copyButton);
    expect(textAreaInput).toHaveValue("hello world");
  });
  it("should copy button be disabled", () => {
    const { getByText } = render(<FormComponent />);
    const copyButton = getByText("Copy");
    expect(copyButton).toHaveProperty("disabled", true);
  });
  it("should copy button be enabled when there is text in output", () => {
    const { getByText, getByPlaceholderText, getByRole, getByTestId } = render(
      <FormComponent />
    );
    const copyButton = getByText("Copy");
    const textAreaInput = getByPlaceholderText(
      "Please insert text for removing spaces"
    );
    const submitButton = getByText("Submit");
    const outputText = getByRole("outputtext");

    fireEvent.change(textAreaInput, { target: { value: "hello world" } });
    fireEvent.click(submitButton);
    expect(outputText).toHaveTextContent("helloworld");
    expect(copyButton).toHaveProperty("disabled", false);
  });
});
