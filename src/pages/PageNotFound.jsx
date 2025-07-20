import React from "react";
import { Container } from "react-bootstrap";

const PageNotFound = () => {
  return (
    <div className="main-section">
      <Container className="page-not-found-wrapper">
        <div className="page-not-found">
          <h1>404 - Page Not Found</h1>
          <p>Oops! The page you’re looking for doesn’t exist.</p>
          <a href="/">Go back home</a> or if you think this is a mistake.
        </div>
      </Container>
    </div>
  );
};

export default PageNotFound;
