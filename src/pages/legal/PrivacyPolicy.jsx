import React from "react";
import { Container } from "react-bootstrap";
import privacypolicy from "../../interfaceTexts/privacypolicy";

const PrivacyPolicy = () => {
  return (
    <div className="legal-wrapper">
      <Container className="legal-container gap-5 p-5">
        <h1 className="mb-5">Privacy Policy</h1>
        {privacypolicy.map((ele, idx) => {
          const { title = "", description = "" } = ele || {};
          return (
            <div
              key={idx}
              className="d-flex flex-column mb-2 text-start"
              style={{ fontSize: "12px" }}
            >
              {/* <h3 className="mb-2"></h3> */}
              <p className="lead mb-0">
                <strong>
                  {idx + 1}. {title}:&nbsp;
                </strong>
                {description}
              </p>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
