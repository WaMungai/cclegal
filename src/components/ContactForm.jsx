// src/components/ContactForm.jsx
import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="pt-16">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="mb-6">
          Fill out the form below or reach out directly via email or phone.
        </p>
        {/* Placeholder form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded px-4 py-2 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded px-4 py-2 w-full"
          />
          <textarea
            placeholder="Your Message"
            className="border rounded px-4 py-2 w-full"
            rows={5}
          />
          <button
            type="submit"
            className="bg-[#D4AF37] text-[#101527] px-6 py-3 rounded font-semibold hover:bg-[#c29d2f] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
