import React, { useState, useEffect } from "react";

const CarouselSlider = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1725708358944-844db020a73a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1734197294272-71acf8e2ae79?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1734550268367-9e6badcfbce4?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1732053890668-1df891b0e8af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 3000); // Auto change every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative w-[800px] h-[800px] perspective-[1000px]">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(-${currentIndex * 90}deg)`,
            transition: "transform 1s",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute w-[700px] h-[500px] overflow-hidden rounded-lg shadow-lg"
              style={{
                transform: `rotateY(${index * 90}deg) translateZ(350px)`,
              }}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Manual Navigation Buttons */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow-lg hover:bg-gray-300 z-10"
          onClick={handlePrev}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow-lg hover:bg-gray-300 z-10"
          onClick={handleNext}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;
