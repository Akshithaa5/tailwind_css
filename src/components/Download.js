import React from 'react';

const Download = () => {
  return (
    <section className="relative bg-section download py-12 text-white flex justify-center items-center" id="download">
  {/* Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1] opacity-0" style={{ backgroundImage: "url('/assets/images/background.jpg')" }}></div>
  
  {/* Download Box */}
  <div className="bg-purple-800 rounded-3xl p-20 w-full max-w-[1300px] z-10 text-center">
    {/* Heading */}
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl mb-4">Download App Now <br /> And Save Your Money</h2>
      <p className="text-lg mb-8">Serving an impressive list of long-term money with experience and expertise in <br />multiple industries.</p>
    </div>

    {/* Download Action Buttons */}
    <div className="flex justify-center gap-4">
      <a className="inline-flex items-center justify-center bg-white rounded-lg py-4 px-6 transition-transform hover:translate-y-[-5px] hover:scale-110" href="iOS App Store">
        <img src="assets/images/ios-store-dark.png" alt="iOS App Store" className="w-32 h-auto transition-transform hover:scale-110" />
      </a>
      <a className="inline-flex items-center justify-center bg-white rounded-lg py-4 px-6 transition-transform hover:translate-y-[-5px] hover:scale-110" href="Google Play Store">
        <img src="assets/images/g-play-dark.png" alt="Google Play Store" className="w-32 h-auto transition-transform hover:scale-110" />
      </a>
    </div>
  </div>
</section>
  );
};

export default Download ;
