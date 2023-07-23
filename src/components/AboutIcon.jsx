import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutIcon = () => {
  return (
    <div className="about-link">
      <Link to={{ pathname: "/about" }}>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIcon;
