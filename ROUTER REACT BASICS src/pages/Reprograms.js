import { Link } from "react-router-dom";

const Reprograms = () => {
  return (
    <div>
      <h1>Lets REPROGRAM Your BRAIN for SUCCESS</h1>
      <ul>
      {/* after clicking on Link you deliver specified path into browser url */}
        <li><Link to="/Programs/Energy">Energy Management</Link></li>
				<li><Link to="/Programs/Limitless">Break your limitations</Link></li>
				<li><Link to="/Programs/Confidence">Unlock your confidence</Link></li>
      </ul>
    </div>
  );
};

export default Reprograms;
