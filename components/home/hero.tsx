// const images = [
//   "https://example.com/image1.jpg",
//   "https://example.com/image2.jpg",
//   "https://example.com/image3.jpg",
//   // Add more image URLs as needed
// ];

const Hero = () => {
  return (
    <div className="container mx-auto bg-black text-white mt-4 p-20 rounded-md">
      <p className="text-xl text-center uppercase">
        Redefining elegance with a modern twist.
      </p>
      {/* <div>
        <Carousel>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </CarouselItem>
          ))}
        </Carousel>
      </div> */}
    </div>
  );
};

export default Hero;
