import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavigateBack = () => {
  const navigate = useNavigate();
  return (
    <div className="navigate-back-arrow d-flex">
      <FaArrowLeft onClick={() => navigate(-1)}></FaArrowLeft>
    </div>
  );
};

export default NavigateBack;
