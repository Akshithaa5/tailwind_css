import React from 'react';

const Features = () => {
  return (
    <section className="features bg-white py-12" id="Features">
    <h2 className="text-center text-md text-orange-600 text-sm font-bold mb-2 capitalize ">Features</h2> 
    <h3 className="text-center text-black text-4xl mb-8">Our Features</h3>
    <div className="features-row container mx-auto flex justify-center mt-6">
        <div className="feature-item bg-bg-white text-black p-8 md:p-12 w-full md:w-80 shadow-md rounded-md text-center transition duration-300 hover:bg-blue-700 hover:text-white">
            <div className="icon mb-5 mx-auto flex justify-center items-center">
                <img src="assets/images/icon-features-1.png" alt="Feature Icon" className="h-14 w-14 bg-orange-400 square-full p-2" />
            </div>
            <h4 className="text-xl font-bold mb-2">Expense Tracking</h4>
            <p className="text-black">We use an application designed a testing gnose to keep away</p>
        </div>
        <div className="feature-item bg-blue-700 text-white p-8 md:p-12 w-full md:w-80 shadow-md rounded-md text-center transition duration-300 hover:bg-blue-700 mt-8 md:mt-0 md:ml-4">
            <div className="icon mb-5 mx-auto flex justify-center items-center">
                <img src="assets/images/icon-features-2.png" alt="Feature Icon" className="h-14 w-14 bg-orange-400 square-full p-2" />
                </div>
            <h4 className="text-xl font-bold mb-2">Finance Snapshot</h4>
            <p className="text-black">We use an application designed a testing gnose to keep away</p>
        </div>
        <div className="feature-item bg-bg-white text-black p-8 md:p-12 w-full md:w-80 shadow-md rounded-md text-center transition duration-300 hover:bg-blue-700 hover:text-white mt-8 md:mt-0 md:ml-4">
            <div className="icon mb-5 mx-auto flex justify-center items-center">
                <img src="assets/images/icon-features-3.png" alt="Feature Icon" className="h-14 w-14 bg-orange-400 square-full p-2" />
            </div>
            <h4 className="text-xl font-bold mb-2">Support 24/24</h4>
            <p className="text-black">We use an application designed a testing gnose to keep away</p>
        </div>
    </div>
</section>
  );
};

export default Features;
