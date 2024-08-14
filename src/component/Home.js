import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div style={styles.divStyles}>
        <Link style={styles.buttonStyles} to="/counter">
          Counter
        </Link>
        <Link style={styles.buttonStyles} to="/forex">
          Forex
        </Link>
      </div>
    </div>
  );
};

export default Home;

const styles = {
  divStyles: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyles: {
    padding: "10px",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  },
};
