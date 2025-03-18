"use client";
import React, { useState, useEffect, forwardRef } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  // UseEffect to ensure the component is only client-side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures the component is rendered on the client side
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate email sending
      await sendEmail(formData);
      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus("Failed to send message. Please try again later.");
    }

    setIsSubmitting(false);
  };

  const sendEmail = async (data: { name: string; email: string; message: string }) => {
    console.log("Sending email with data:", data);
    return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
  };

  // If the component is still being server-rendered, return null to avoid hydration mismatch
  if (!isClient) return null;

  return (
    <div ref={ref} className="bg-gray-50 py-12">
      <div className="container mx-auto p-6 lg:px-16">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12">Contact Us</h1>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaPhoneAlt className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Call Us</h3>
            <p className="text-gray-600">+256 757 734304</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaEnvelope className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Email Us</h3>
            <p className="text-gray-600">leranerspride@school.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <IoLocationSharp className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Visit Us</h3>
            <p className="text-gray-600">123 School St, City, Country</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows={6}
              required
            ></textarea>
          </div>

          {formStatus && (
            <div className={`mb-4 text-lg font-semibold ${formStatus.includes("success") ? "text-green-600" : "text-red-600"}`}>
              {formStatus}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md focus:outline-none ${
              isSubmitting ? "bg-gray-400" : "hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
});

ContactUs.displayName = "ContactUs"; // Set display name

export default ContactUs;
