import React from "react";

const Categories = ({ categories, sortItems }) => {
  return (
    <div className="btn-container">
      {categories.map((items, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => sortItems(items)}
          >
            {items}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
