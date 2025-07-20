const FooterComp = () => {
  return (
    <footer className="pb-2 gap-3 footer">
      <p>© {new Date().getFullYear()} Handipro</p>
      <a
        href="/termsandconditions"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 0.5rem", textDecoration: "none", color: "#007bff" }}
      >
        Terms & Conditions
      </a>
      |
      <a
        href="/privacypolicy"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 0.5rem", textDecoration: "none", color: "#007bff" }}
      >
        Privacy Policy
      </a>
    </footer>
  );
};

export default FooterComp;
