import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { startCase } from "lodash";
import { Container } from "react-bootstrap";

import { ENABLED_MARKETS } from "../configs/constants";

const DetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { keyName = null } = location.state || {};

  //to check in case of direct access through url, navigate to "/markets"
  useEffect(() => {
    if (!keyName) {
      navigate("/markets");
    }
  }, [keyName, navigate]);

  return (
    <div className="main-section">
      <Container>
        <h1>{startCase(keyName)}</h1>
      </Container>
    </div>
  );
};

export default DetailsPage;
