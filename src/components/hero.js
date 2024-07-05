import React from 'react';

const Hero = () => {
  return (
    <section id="Hero" className="hero bg-white-200 py-24" >
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="hero-text md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-9 text-black">
          Awesome App for Your<br />Financial.
        </h1>
            <p className="text-lg mb-5 text-center">
                This should be used to tell a story and let your users know a little more <br /> about app and it’s use, How can benefit them.
            </p>
            <div className="flex justify-center">
                <input type="email" placeholder="Email Address" className="py-2 px-3 rounded border-none w-64 text-lg mr-3 transition duration-300" />
                <button className="bg-blue-800 text-white py-2 px-4 rounded cursor-pointer transition duration-300 hover:bg-orange-600">Subscribe</button>
            </div>
        </div>
        <div className="hero-image md:ml-8">
            <img src="assets/images/Insights.png.png" alt="HeroImage" className="image max-w-xs md:max-w-full" />
        </div>
    </div>
</section>
  );
};

export default Hero;
