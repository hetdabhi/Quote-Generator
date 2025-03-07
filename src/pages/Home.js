import React from "react";
import QuoteBox from "../components/QuoteBox";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center"
    }}>
      <ThemeToggle />
      <h1 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px" }}>
        Random Quote Generator
      </h1>
      <QuoteBox />
    </div>
  );
};

export default Home;
