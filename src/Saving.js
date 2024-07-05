import React from 'react';

const Saving = () => {
  return (
    <section className="saving-money-section bg-gray-100 py-12 rounded-md shadow-inner">
      <div className="container mx-auto flex justify-between items-center">
        <div className="saving-money-image mr-9">
          <img
            src="/assets/images/iPhone-displaying-Mint-monthly-b.png"
            alt="iPhone displaying Mint monthly budget"
            className="w-full max-w-2xl h-auto rounded-md"
          />
        </div>
        <div className="saving-money-description bg-gray-100 p-5 rounded-md ml-20">
          <h2 className="text-orange-600 text-sm font-bold mb-2 capitalize">Saving Money</h2>
          <h1 className="text-black text-4xl mb-8">Best Financing App To Save Your Money</h1>
          <p className="text-base mb-0 text-gray-700 max-w-lg">
            Best financing app ever in the world. Easy to use and very user friendly for mobile banking. 
            You can control your card easily and send money to someone with just one click.
          </p>
          <button className="bg-orange-600 text-white py-4 px-14 mt-5 rounded-md cursor-pointer transition duration-300 hover:bg-blue-700 hover:transform hover:scale-105">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Saving;
