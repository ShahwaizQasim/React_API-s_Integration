const Home = () => {
  return (
    <div className="h-full w-full bg-gray-100 py-24">
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
