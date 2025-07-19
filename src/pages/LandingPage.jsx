import { useNavigate } from "react-router-dom";
import { Container, Badge, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

import { displayTexts } from "../interfaceTexts/landing";
import "../styles/app.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/markets");
  };

  return (
    <div className="main-section mt-5">
      <Container>
        <Badge
          bg="light"
          text="primary"
          className="fs-6 rounded-pill shadow-lg mb-3 px-3 py-2"
        >
          {displayTexts.badgeText}
        </Badge>
        <h1 className="display-2 fw-bold mb-3">{displayTexts.primaryLabel}</h1>
        <h2 className="display-5 mb-3">{displayTexts.secondaryLabel}</h2>
        <p className="lead mb-4 color-white">{displayTexts.description}</p>
        <Button
          variant="primary"
          className="rounded-pill px-4 py-2 shadow-lg mt-4 bg"
          onClick={() => onClickButton()}
        >
          {displayTexts.buttonText} <FaArrowRight className="right-arrow" />
        </Button>
      </Container>
    </div>
  );
};

export default LandingPage;
