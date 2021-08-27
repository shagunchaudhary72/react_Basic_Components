import React from "react";

const Menu = ({ foodData }) => {
  return (
    <section className="section-center">
      {foodData.map((items) => {
        return (
          <article key={items.id} className="menu-item">
            <img src={items.img} alt={items.title} className="photo"/>
            <div className="item-info">
              <header>
                <h4>{items.title}</h4>
                <h4 className="price">{items.price}</h4>
              </header>
              <p className="item-text">{items.desc}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
