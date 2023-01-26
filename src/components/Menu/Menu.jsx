import img1 from "../../assets/emojione_green-salad.svg"
import img2 from "../../assets/fluent_food-pizza-24-filled.svg"
import img3 from "../../assets/mdi_hamburger.svg"
import img4 from "../../assets/noto-v1_french-fries.svg"
import img5 from "../../assets/fluent_food-pizza-24-filled.svg"
import img6 from "../../assets/tabler_discount-2.svg"

import img11 from "../../assets/item.png"
import img12 from "../../assets/item__image.png"
import img13 from "../../assets/item__image3.png"
import img14 from "../../assets/item__image4.png"
import img15 from "../../assets/item.png"

import Category from "../Category/Category"
import Product from "../Product/Product"

const categories = [
    {
        src: img1,
        name: "Салаты",
    },
    {
        src: img2,
        name: "Напитки",
    },
    {
        src: img3,
        name: "Бургеры",
    },
    {
        src: img4,
        name: "Закуски",
    },
    {
        src: img5,
        name: "Пицца",
    },
    {
        src: img6,
        name: "Акции",
    },
];

const products = [
    {
        src: img11,
        name: "Салат “Греческий”"
    },
    {
        src: img12,
        name: "Салат “Греческий”"
    },
    {
        src: img13,
        name: "Салат “Тропический”"
    },
    {
        src: img14,
        name: "Салат “Японка”"
    },
    {
        src: img15,
        name: "Салат “Собери Сам”"
    },
    {
        src: img12,
        name: "Салат “Цезарь”"
    },
    {
        src: img13,
        name: "Салат “Оливье”"
    },
    {
        src: img14,
        name: "Салат “Летний”"
    },
];

const Menu = () => {
    return(
        <section className="menu">
            <div className="section-title">
                Наше Меню
                <div className="line"></div>
            </div>

            <div className="categories">
                {
                    categories.map((category) => <Category url={category.src} name={category.name}/>)
                }
            </div>

            <div className="products">
                {
                    products.map((product) => <Product url={product.src} name={product.name}/>)
                }
            </div>

            <button className="button button-more">
                Показать ещё
            </button>
        </section>
    )
}

export default Menu;