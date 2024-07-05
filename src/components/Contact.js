import React from 'react';

const Contact = () => {
  return (
    
    <section className="bg-gray-200 py-12" id="contact">
  <div className="container mx-auto max-w-4xl text-center">
    <h2 className="text-orange-600 text-sm font-bold mb-2 capitalize">Have A Question</h2>
    <h3 className="text-black text-4xl mb-8">Get In Touch</h3>
    <form className="bg-gray-200 p-8 rounded-lg shadow-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-left text-xs mb-1">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" required className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-left text-xs mb-1">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-left text-xs mb-1">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Phone" required className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="company" className="text-left text-xs mb-1">Company</label>
          <input type="text" id="company" name="company" placeholder="Company" className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <label htmlFor="request-details" className="text-left text-xs mb-1">Request Details</label>
          <textarea id="request-details" name="request-details" placeholder="Request Details" rows="5" required className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300">Send Message</button>
      </div>
    </form>
  </div>
</section>
  );
};

export default Contact;
