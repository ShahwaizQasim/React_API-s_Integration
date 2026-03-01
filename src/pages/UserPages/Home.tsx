import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home Page
      <br></br>
      <br></br>
      <Link to="/about">Go To About Page</Link>
      <br />
      <br />
      <Link to="/register">Go To SignUp Page</Link>
    </div>
  );
};

export default Home;
