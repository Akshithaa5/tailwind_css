import React from 'react';

const Video = () => {
  return (
    <section id="video" className="video py-12 bg-gray-100 relative">
      <div className="container mx-auto text-center height-500px">
        <h2 className="text-yellow-600 text-sm font-bold mb-1 capitalize">Video Demo</h2>
        <h1 className="text-3xl mb-6">Whatever The Challenge, We Deliver A Solution.</h1>
        <div className="relative bg-white overflow-hidden flex justify-center items-center">
          <div className="w-full max-w-5xl">
            <video
              title="Appzy Video Demo"
              className="w-full rounded-lg overflow-hidden"
              controls
              poster="/assets/images/1 (3).png" 
            >
              <source
                src="/assets/videos/Playcodec%20-%20Animated%20Explainer%20Video%20Financial%20App.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
            <img src="/assets/images/animated button.gif" alt="Play Button Animation" width={160} height={150} />
          </div>
          <div className="absolute bottom-0 left-0 -mb-12 ml-40">
            <img src="/assets/images/bottom-left.png" alt="Decorative Bottom Left" width={150} height={100} />
          </div>
          <div className="absolute top-0 right-0 -mt-10 mr-40"> 
            <img src="/assets/images/top-right.png" alt="Decorative Top Right" width={150} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
