import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import CardComp from "../components/CardComp";
import { markets } from "../interfaceTexts/markets";
import NavigateBack from "../components/NavigateBack";

const Markets = () => {
  const navigate = useNavigate();

  const onClickCard = (keyName) => {
    navigate(`/markets/${keyName}`, {
      state: {
        keyName: keyName,
      },
    });
  };

  return (
    <div className="main-section">
      <NavigateBack />
      <Container className="container-section pt-5">
        <h1 className="mb-5 lead display-4">Markets</h1>
        {markets?.map((obj) => {
          const { category = "", items = [] } = obj || {};
          return (
            <div className="markets p-4 mb-5" key={category}>
              <div className="market-category">
                <h4 className="d-flex">{category}</h4>
              </div>
              <div className="d-flex flex-wrap gap-4">
                {items?.length
                  ? items.map((i) => {
                      const { key, name, emoji, info } = i || {};
                      return (
                        <CardComp
                          keyName={key}
                          title={`${emoji}${name}`}
                          info={info}
                          onClickCard={onClickCard}
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
