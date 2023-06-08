import { useState } from "react";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    // const result = message?.split("-") ?? null;
    // if ("0" !== result?.[0]?.trim()) {
    //   return sanitize(message);
    // }
    // const formattedMessage = result?.[1]?.trim() ?? null;
    // return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <div>
      <h3 className="mb-1 uppercase font-bold">Subscribe to newsletter</h3>
      <div className="flex flex-col sm:flex-row gap-3 newsletter-input-fields">
        <input
          onChange={(event) => setEmail(event?.target?.value ?? "")}
          type="email"
          placeholder="Enter Your email"
          className="h-[50px] outline-none basis-3/5 bg-transparent border-b border-b-white"
          onKeyUp={(event) => handleInputKeyEvent(event)}
        />

        <button
          className="py-1 bg-green text-black px-2 basis-2/5 font-bold"
          onClick={handleFormSubmit}
        >
          Subscribe!
        </button>
      </div>
      <div className="min-h-42px">
        {"sending" === status ? "loading" : null}
        {"error" === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {"success" === status && "error" !== status && !error && (
          <div
            className="text-green-200 font-bold pt-2"
            // dangerouslySetInnerHTML={{ __html: sanitize(message) }}
          />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
