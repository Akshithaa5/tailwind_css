import React, { useState, useEffect } from 'react';

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 5; // total number of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const images = [
    "/assets/images/finance-app.png",
    "/assets/images/new3.png",
    "/assets/images/new1.png",
    "/assets/images/new .png",
    "/assets/images/3-7.png"
  ];

  return (
    <section className="screenshots py-12 bg-gray-200" id="screenshots">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <p className="text-yellow-600 text-sm font-bold mb-2 capitalize">Screenshots</p>
          <h2 className="text-black text-4xl mb-8">Simple & Beautiful Interface</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-16 h-0.5 bg-orange-600"></div>
        </div>
        <div className="flex justify-center items-center flex-wrap relative">
          {/* Mockup Container */}
          <div className="mockup-container flex justify-around items-center w-full relative overflow-hidden">
            {images.map((image, index) => (
              <div key={index} className={`mockup-item relative ${index === 2 ? 'w-1/5' : 'w-1/8'}`}>
                {/* Screenshot Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={images[(currentIndex + index) % totalItems]}
                    alt="screenshot"
                    className={`animate-move ${index === 2 ? 'w-70 z-0' : 'w-60 z-20'}`} // Adjust width for dark mockup
                    style={{ transition: 'width 0.3s ease-in-out' }}
                  />
                </div>
                {/* Dark Mockup Overlay */}
                {index === 2 && (
                  <img
                    src="/assets/images/mockup-dark.png"
                    alt="Dark Mockup"
                    layout="fill"
                    objectFit="contain"
                    className="absolute top-0 left-0 z-30"
                  />
                )}
                {/* Light Mockup */}
                {index !== 2 && (
                  <img
                    src="/assets/images/mockup-light.png"
                    alt="Light Mockup"
                    className="absolute top-0 left-0 w-full h-full z-20 object-contain"
                  />
                )}
              </div>
            ))}
          </div>
          {/* Navigation buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none">
              &lt;
            </button>
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
