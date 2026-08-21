import React, { useState } from "react";
import "../style/Contact.css";

const contact = () => {
  //Ek State Object Banayenge
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  //Ye state hum success/error message store karne ke liye use karenge.

  const handleSubmit = async (e) => {
    e.preventDefault(); //browser ke default form submission ko rokta hai.

    setStatus("sending");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        // hmara express server -> localhost:5000 | backend route -> POST /api/contact
        method: "POST",

        headers: {
          "Content-Type": "application/json", //Backend ko bata rahe hain: "Jo data main bhej raha hoon wo JSON hai."
        },

        body: JSON.stringify(formData),
      });

      const result = await response.json();
      /*Backend ne:
      res.status(201).json({
        message: "Contact message saved successfully",
        data,
      });
      bheja tha. To frontend us JSON ko read kar raha hai. */

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      console.log(result);

      setStatus("success");

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  return (
    <div className="contact_section">
      <section className="contact_section_1">
        <h1 className="contact_head">Get in touch</h1>
        <h2 className="contact_header">
          Let's Build Something Amazing Together
        </h2>
      </section>
      <section className="contact_section_2">
        <h2 className="contact_form_header">Contact Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="contact_input_row">
            <div className="contact_field">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.full_name}
                //User type karega, lekin formData.full_name update kaise hoga? Uske liye onChange chahiye.
                onChange={(e) =>
                  setFormData({
                    ...formData, // ...formData -> (Purana pura object copy karo, bas full_name ko new value se replace karo.)
                    full_name: e.target.value,
                  })
                }
              />
            </div>

            <div className="contact_field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="xyz@gmail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="contact_input_row">
            <div className="contact_field">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="9876543210"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
              />
            </div>

            <div className="contact_field">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Website Development"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    subject: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="contact_field">
            <label>Message</label>
            <textarea
              placeholder="Write your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
            ></textarea>
          </div>

          <button
            type="submit"
            className="send_btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "sending" && (
          <p className="form_status">Sending message...</p>
        )}
        {status === "success" && (
          <p className="form_status success">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="form_status error">
            Something went wrong. Please try again.
          </p>
        )}
      </section>
    </div>
  );
};

export default contact;
