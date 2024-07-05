import React, { useState } from "react";
import testimonials from "./testimonials"; 

const TestimonialSection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section id="testimonial" className="testimonial-section py-12 bg-white">
      <div className="container mx-auto text-center">
        <h4 className="text-orange-600 text-sm font-bold mb-2 capitalize">Testimonial</h4>
        <h2 className="text-3xl mb-8">
          What Clients Say About <br /> Our App After Using It
        </h2>

        {/* Reviews */}
        <div className="flex justify-center flex-wrap mb-4 gap-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`review text-center relative cursor-pointer ${
                index === currentTestimonialIndex ? "highlighted" : ""
              }`}
              onClick={() => setCurrentTestimonialIndex(index)}
            >
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="avatar rounded-full w-24 h-24"
              />
              {index === currentTestimonialIndex && (
                <div className="highlighter absolute top-0 left-0 right-0 bottom-0 rounded-full border-4 border-red-400"></div>
              )}
            </div>
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="testimonial-text text-2xl mb-4">
          "{currentTestimonial.text}"
        </p>

        {/* Navigation */}
        <div className="flex items-center justify-center mb-8">
          <button className="prev mr-4" onClick={handlePrev}>
            <img
              src="assets/images/left-arrow.png"
              alt="Previous"
              className="arrow w-6 h-6"
            />
          </button>
          <div className="user-info text-center">
            <p className="author text-lg mb-2 text-red-500">
              {currentTestimonial.name}
            </p>
            <p className="occupation text-sm text-gray-700">
              {currentTestimonial.occupation}
            </p>
          </div>
          <button className="next ml-4" onClick={handleNext}>
            <img
              src="assets/images/next-arrow.png"
              alt="Next"
              className="arrow w-6 h-6"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

