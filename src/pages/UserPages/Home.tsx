const Home = () => {
  return (
    <div className="h-full w-full bg-gray-100 py-24">
      <div className="container mb-10 flex justify-center flex-col sm:flex-row gap-7 mx-auto sm:h-auto py-10">
        <div className="h-full w-full ">
          <div className="flex justify-center items-center h-full">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/001/229/958/small/silver-linked-bracelet-and-black-round-chronograph-watch.jpeg"
              alt="watch_image"
              className="h-60"
            />
          </div>
        </div>
        <div className="h-full w-full">
          <div className="flex flex-col justify-center items-center text-center px-6 h-full">
            <h1 className="font-semibold text-3xl">Smart Watch</h1>
            <p className="pt-2">
              A watch is a portable timepiece designed to be worn on the wrist
              or carried in a pocket to track time consistently. It consists of
              a protective case, a dial with time displays, and a movement
              (mechanical or quartz) that powers the hands or digital display,
              often secured by a strap or bracelet
            </p>
            <p className="pt-4 font-bold text-xl">Price: $100</p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center">
        Welcome to the Home Page
      </h1>

      <div className="flex justify-center items-center flex-col mx-auto  sm:flex-row gap-6 mt-8">
        <div className="border border-red-500 w-56 py-10 flex justify-center items-center">
          <h1>Left Side</h1>
        </div>
        <div className="border border-red-500 w-56 py-10 flex justify-center items-center ">
          <h1>middle</h1>
        </div>
        <div className="border border-red-500 w-56 py-10 flex justify-center items-center ">
          <h1>Right Side</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
