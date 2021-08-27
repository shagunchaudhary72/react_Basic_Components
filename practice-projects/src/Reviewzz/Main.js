import React from "react";
import "./Main.css";
import Reviews from "./Reviews";

const Main = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Reviewss</h2>
          <div className="underline"></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
};

export default Main;
