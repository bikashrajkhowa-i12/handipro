import { Container } from "react-bootstrap";

import CardComp from "../components/CardComp";
import { markets } from "../interfaceTexts/markets";

const Markets = () => {
  return (
    <div className="main-section">
      <Container>
        <h1 className="mb-5 lead display-4 text-center">Markets</h1>
        {markets?.map((obj) => {
          const { category = "", items = [] } = obj || {};
          return (
            <div className="markets mb-5" key={category}>
              <div className="market-category">
                <h4 className="d-flex">{category}</h4>
              </div>
              <div className="d-flex flex-wrap gap-4">
                {items?.length
                  ? items.map((i) => {
                      const { key, name, emoji, description } = i || {};
                      return (
                        <CardComp
                          keyName={key}
                          title={`${emoji}${name}`}
                          description={description}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Markets;
