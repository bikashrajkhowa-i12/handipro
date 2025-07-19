import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

import DetailsForm from "../components/DetailsForm";
import NavigateBack from "../components/NavigateBack";

import { markets } from "../interfaceTexts/markets";
import { formFields } from "../configs/constants";
import { calculateCoreMarket, calculateHandicap } from "../utility/helper";

const DetailsPage = () => {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { keyName = null } = location.state || {};

  useEffect(() => {
    if (!keyName) {
      navigate("/markets");
    }
  }, [keyName, navigate]);

  const fields = formFields[keyName] || [];

  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = field.default || "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  const displayMarket = markets
    .flatMap((ele) => ele.items || [])
    .find((i) => i.key === keyName);

  const calculateResult = (inputData) => {
    const fn = ["1x2", "double_chance", "btts", "over_under"].includes(keyName)
      ? calculateCoreMarket
      : keyName === "handicap"
      ? calculateHandicap
      : null;
    return fn
      ? keyName === "btts"
        ? fn({ ...inputData, result: inputData["btts"] })
        : fn(inputData)
      : {};
  };

  const handleSubmit = (e) => {
    setResult(calculateResult({ ...e, name: keyName }));
  };

  const handleReset = (e) => {
    setFormData(initialState);
    setResult(null);
  };

  const handleFormChange = (e) => {
    setResult(null);
    const { name, value, type } = e.target || {};
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value,
    }));
  };

  if (!displayMarket) return null;

  const color =
    result?.outcome === "Loss"
      ? "red"
      : result?.outcome === "Win"
      ? "green"
      : result?.outcome === "Push"
      ? "blue"
      : "yellow";

  return (
    <div className="main-section">
      <NavigateBack />
      <Container className="container-section d-flex justify-content-center align-items-center">
        <div style={{ width: "500px" }}>
          <div className="mb-5">
            <h1>{displayMarket.name}</h1>
          </div>
          <div className="d-flex flex-column m-4 gap-5">
            <Container className="calculator-container p-4 d-flex flex-column text-black gap-4">
              <h3>Calculator</h3>
              <div className="text-start gap-4 d-flex flex-column">
                <DetailsForm
                  fields={fields}
                  onSubmit={handleSubmit}
                  handleFormChange={handleFormChange}
                  formData={formData}
                  handleReset={handleReset}
                />
                {result && (
                  <Table
                    striped
                    bordered
                    hover
                    responsive
                    style={{ borderColor: "#00000037", borderWidth: "1.5px" }}
                  >
                    <thead>
                      <tr>
                        <th>Result</th>
                        <th>Stake</th>
                        <th>Payout</th>
                        <th>Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ color }}>{result.outcome}</td>
                        <td style={{ color: "grey" }}>{result.stake}</td>
                        <td style={{ color }}>{result.payout}</td>
                        <td style={{ color }}>{result.profit}</td>
                      </tr>
                    </tbody>
                  </Table>
                )}
              </div>
            </Container>
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailsPage;
