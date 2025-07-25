import { Container } from "react-bootstrap";
import { markets } from "../interfaceTexts/markets";
import NavigateBack from "../components/NavigateBack";

const Learn = () => {
  return (
    <div className="main-section">
      <NavigateBack />
      <Container className="container-section p-5">
        <h1 className="lead display-4 mb-5">Learn</h1>
        <div className="p-4">
          {markets.map((e) => {
            const { items = [] } = e || {};
            return (
              items.length &&
              items.map((item, idx) => {
                const { name, info, description } = item || {};
                return (
                  <div key={idx} className="d-flex flex-column mb-5 text-start">
                    <h3 className="mb-2">{name}:</h3>
                    <p className="lead mb-0" style={{ whiteSpace: "pre-line" }}>
                      {info}
                      <br />
                      {description}
                    </p>
                  </div>
                );
              })
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Learn;
