const Home = () => {
  return (
    <div className="container mx-auto">
      {" "}
      {/* Add margin-top and margin-x to the entire component */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 p-4 lg:p-8">
        <div className="mb-4 lg:mb-0 lg:w-1/2">
          {" "}
          {/* Equal width on larger screens */}
          {/* Adding Tailwind CSS classes to the img tag */}
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src="./man.svg"
            alt="Your Alt Text"
          />
        </div>

        <div className="text-center lg:text-left lg:w-1/2">
          {" "}
          {/* Equal width on larger screens */}
          {/* Adding the heading "Stanley Egbele" above the Lorem Ipsum text */}
          <h4
            className="text-3xl font-semibold mb-4"
            style={{
              color: "#131313",
              fontFamily: "Helvetica Neue",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "150%",
            }}
          >
            Stanley Egbele
          </h4>
          {/* New div added below the heading and above the Lorem text */}
          <div className="flex">
            <div className="text-center mb-4 lg:mb-0 lg:w-1/2 lg:ml-auto">
              1st position
            </div>
            <div className="lg:w-28 lg:ml-auto">28%</div>
          </div>
          <p className="text-base lg:text-lg leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            augue neque gravida in fermentum et sollicitudin ac. Hendrerit
            gravida rutrum quisque non tellus. Lorem ipsum dolor sit amet.
            Fringilla phasellus faucibus scelerisque eleifend. Lorem donec massa
            sapien faucibus. Tincidunt arcu non sodales neque. Erat velit
            scelerisque in dictum non. Varius morbi enim nunc faucibus a. Id
            venenatis a condimentum vitae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
