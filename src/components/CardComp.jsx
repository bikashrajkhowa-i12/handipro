import { Badge, Card } from "react-bootstrap";
import "../styles/components.css";
import { ENABLED_MARKETS } from "../configs/constants";

const CardComp = (props) => {
  const {
    keyName = "",
    title = "",
    header = "",
    info = "",
    onClickCard,
  } = props || {};
  return (
    <Card
      className="card shadow-lg d-flex flex-column h-200 mb-5"
      onClick={
        onClickCard && ENABLED_MARKETS.includes(keyName)
          ? () => onClickCard(keyName)
          : undefined
      }
    >
      {header && <Card.Header>{header}</Card.Header>}
      <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted">{info}</Card.Text>
        <div className="mt-auto">
          {ENABLED_MARKETS.includes(keyName) ? (
            <Badge bg="success" text="light" className="rounded-pill">
              Try It!
            </Badge>
          ) : (
            <Badge bg="warning" text="dark" className="rounded-pill">
              Coming soon..
            </Badge>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
