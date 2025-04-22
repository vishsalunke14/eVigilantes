import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    Email: "",
    Subject: "",
    Message: ""
  });

  const [status, setStatus] = useState({ loading: false, success: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ loading: false, success: true });
        setFormData({ name: "", Email: "", Subject: "", Message: "" });
      } else {
        setStatus({ loading: false, success: false });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ loading: false, success: false });
    }
  };

  return (
    <div className="contact-form-wrapper">
      <div className="aisaas-form-block ">
        <h4 className="contact-title">Get in Touch</h4>
        <form
          onSubmit={handleSubmit}
          className="aisaas-form"
        >
          <div className="aisaas-field-wrapper">
            <div className="aisaas-field-block">
              <label htmlFor="name" className="aisaas-field-label">Name</label>
              <input
                className="aisaas-text-field w-input"
                name="name"
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="aisaas-field-block">
              <label htmlFor="Email" className="aisaas-field-label">Email</label>
              <input
                className="aisaas-text-field w-input"
                name="Email"
                type="email"
                id="Email"
                required
                value={formData.Email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="aisaas-field-block">
            <label htmlFor="Subject" className="aisaas-field-label">Subject</label>
            <input
              className="aisaas-text-field w-input"
              name="Subject"
              type="text"
              id="Subject"
              required
              value={formData.Subject}
              onChange={handleChange}
            />
          </div>
          <div className="aisaas-field-block">
            <label htmlFor="Message" className="aisaas-field-label">Message</label>
            <textarea
              id="Message"
              name="Message"
              className="aisaas-text-field aisaas-text-area w-input"
              required
              value={formData.Message}
              onChange={handleChange}
            ></textarea>
          </div>
          <input
            type="submit"
            className="aisaas-button w-button"
            value={status.loading ? "Sending..." : "Submit"}
            disabled={status.loading}
          />
        </form>

        {status.success === true && (
          <div className="aisaas-success-message ">
            <div className="aisaas-message">
              Thank you! Your submission has been received!
            </div>
          </div>
        )}
        {status.success === false && (
          <div className="aisaas-error-message ">
            <div className="aisaas-message">
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
