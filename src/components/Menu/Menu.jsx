import { useEffect, useState } from "react";

import Product from "../Product/Product";
import { CATEGORIES } from "../../data/categories";
import { PRODUCTS } from "../../data/products";

const Menu = () => {
  const [products, setProducts] = useState(PRODUCTS);

  const [selectedCategory, setSelectedCategory] = useState("none");

  const onClickCategoryHandle = (type) => {
    setSelectedCategory(type);
  };

  useEffect(() => {
    setProducts((prevState) => {
      prevState = [...prevState];

      prevState = PRODUCTS.filter(
        (product) => product.type === selectedCategory
      );

      if (selectedCategory === "none") {
        prevState = PRODUCTS;
      }

      return prevState;
    });
  }, [selectedCategory]);

  return (
    <section className="menu">
      <div className="section-title">
        Наше Меню
        <div className="line"></div>
      </div>

      <div className="categories">
        {CATEGORIES.map((category) => {
          return (
            <div
              onClick={() => onClickCategoryHandle(category.type)}
              className="category"
            >
                {category.src}
              <p className="category-name">{category.name}</p>
            </div>
          );
        })}
      </div>

      <div className="products">
        {products.map((product) => (
          <Product url={product.src} name={product.name} />
        ))}
      </div>

      <button className="button button-more">Показать ещё</button>
    </section>
  );
};

export default Menu;
