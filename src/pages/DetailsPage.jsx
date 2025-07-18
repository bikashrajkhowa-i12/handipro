import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import { markets } from "../interfaceTexts/markets";
import { formFields } from "../configs/constants";
import DetailsForm from "../components/DetailsForm";
import { calculateCoreMarket, calculateHandicap } from "../utility/helper";

const DetailsPage = () => {
  const [result, setResult] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { keyName = null } = location.state || {};

  //to check in case of direct access through url, navigate to "/markets"
  useEffect(() => {
    if (!keyName) {
      navigate("/markets");
    }
  }, [keyName, navigate]);

  const displayMarket = markets
    .flatMap((ele) => ele.items || [])
    .find((i) => i.key === keyName);

  const fields = formFields[keyName] || [];

  const calculateResult = (inputData) => {
    const fn = ["1x2", "double_chance", "btts", "over_under"].includes(keyName)
      ? calculateCoreMarket
      : keyName === "handicap"
      ? calculateHandicap
      : null;
    return fn ? fn(inputData) : {};
  };

  const handleSubmit = (e) =>
    setResult(calculateResult({ ...e, name: keyName }));

  if (!displayMarket) return null;

  return (
    <div className="main-section">
      <Container className="container-section d-flex justify-content-center align-items-center">
        <div style={{ width: "500px" }}>
          <div className="mb-5">
            <h1>{displayMarket.name}</h1>
          </div>
          <div className="d-flex flex-column m-4 gap-5">
            <Container className="p-2 d-flex flex-column">
              <h4 className="lead fw-bold mb-4 text-start">Description:</h4>
              <div>
                <p className="text-start lead">
                  {displayMarket.info}
                  {<br />}
                  {displayMarket.description}
                </p>
              </div>
            </Container>
            <Container className="calculator-container p-4 d-flex flex-column text-black gap-3">
              <h3>Calculator</h3>
              <div className="text-start">
                <DetailsForm fields={fields} onSubmit={handleSubmit} />
              </div>
              {result && (
                <p className="text-green">
                  Outcome: {result.outcome} Pay-out: {result.payout} Profit:{" "}
                  {result.profit}
                </p>
              )}
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailsPage;
