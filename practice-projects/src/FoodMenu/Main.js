import React, { useState } from "react";
import "./Main.css";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "./Data";

const allCategories = ["all", ...new Set(data.map((items) => items.category))];
console.log(allCategories);

const Main = () => {
  const [foodData, setFoodData] = useState(data);
  const [categories,setCategories]=useState(allCategories);
  console.log(foodData);

  const sortItems = (category) => {
    if (category === "all") {
        setFoodData(data);
      return;
    }
    const sortedItems = data.filter((items) => items.category === category);
    setFoodData(sortedItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu Items</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} sortItems={sortItems} />
        <Menu foodData={foodData} />
      </section>
    </main>
  );
};

export default Main;
