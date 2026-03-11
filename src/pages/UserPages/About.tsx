import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col gap-6">
        <h1>About Page</h1>
        <Link to={"/"}>Go to Home Page</Link>
      </div>
    </>
  );
};

export default About;
