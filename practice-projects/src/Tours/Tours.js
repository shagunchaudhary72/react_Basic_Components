import React from "react";
import Tour from "./Tour";

const Tours = ({ toursData ,removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {toursData.map((items) => {
          return (
            <Tour
              key={items.id}
             {...items}
             removeTour={removeTour}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
