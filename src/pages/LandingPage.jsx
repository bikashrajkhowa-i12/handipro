import { Container, Badge, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="main-section">
      <Container>
        <Badge
          bg="light"
          text="dark"
          className="fs-6 rounded-pill shadow-sm mb-3 px-3 py-2"
        >
          ⚡ All in one
        </Badge>
        <h1 className="display-3 fw-bold mb-3">Handipro</h1>
        <h2 className="display-5 mb-3">
          Software for football clarity and insight
        </h2>
        <p className="lead text-muted mb-4">
          Handipro is a simple, beginner-friendly toolkit that helps you decode
          football match markets with ease. From handicaps and over/under goals
          to double chance and either-half wins, everything is explained in a
          clear, structured way — all in one place. Best of all, no login is
          ever required to get started.
        </p>
        <Button
          variant="primary"
          className="rounded-pill px-4 py-2 shadow-lg mt-4 bg"
        >
          Get Started <FaArrowRight className="right-arrow" />
        </Button>
      </Container>
    </div>
  );
};

export default LandingPage;
