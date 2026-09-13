"use client";

import Swal from "sweetalert2";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting Hero Kidz. We'll get back to you soon.",
      confirmButtonText: "Okay",
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-7 space-y-5">
      {/* Name + Email */}
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="label">
            <span className="label-text font-medium">Your Name</span>
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-medium">
              Email Address
            </span>
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="label">
          <span className="label-text font-medium">Subject</span>
        </label>

        <input
          type="text"
          placeholder="What can we help you with?"
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Message */}
      <div>
        <label className="label">
          <span className="label-text font-medium">Message</span>
        </label>

        <textarea
          placeholder="Write your message here..."
          className="textarea textarea-bordered h-36 w-full resize-none"
          required
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn btn-primary w-full rounded-full"
      >
        Send Message
      </button>
    </form>
  );
}