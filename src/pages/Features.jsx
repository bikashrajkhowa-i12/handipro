import { Container } from "react-bootstrap";
import { features } from "../interfaceTexts/features";

const Features = () => {
  return (
    <div className="main-section">
      <Container className="container-section">
        <h1 className="display-4 lead mb-5">Features</h1>
        <div className="p-4">
          {features.map((e, idx) => {
            const { name = "", description = "" } = e || {};
            return (
              <div key={idx} className="d-flex flex-column mb-5 text-start">
                <h3 className="mb-2">{name}:</h3>
                <p className="lead mb-0" style={{ whiteSpace: "pre-line" }}>
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Features;
