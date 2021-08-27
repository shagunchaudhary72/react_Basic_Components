import React, { useState } from "react";
import "./Main.css";
import data from "./Data";
import Accordion from "./Accordion";

const Main = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section>
          {questions.map((questionsData) => {
            return <Accordion key={questionsData.id} {...questionsData} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Main;
