import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add form validation if needed

    setSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mqkvvwoy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        setFormSuccess(true);
      } else {
        // Handle error
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 md:p-8 bg-white rounded-lg shadow-lg">
      {formSuccess ? (
        <div className="text-green-500 text-center font-bold mb-4">Form successfully sent!</div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-800"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300 w-full"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;


