import img1 from "../../assets/emojione_green-salad.svg"
import img2 from "../../assets/fluent_food-pizza-24-filled.svg"
import img3 from "../../assets/mdi_hamburger.svg"
import img4 from "../../assets/noto-v1_french-fries.svg"
import img5 from "../../assets/fluent_food-pizza-24-filled.svg"
import img6 from "../../assets/tabler_discount-2.svg"

const Menu = () => {
    return(
        <section className="menu">
            <div className="section-title">
                Наше Меню
                <div className="line"></div>
            </div>

            <div className="categories">
                <div className="category active">
                    <img src={img1} alt="" />
                    <p className="category-name">
                        Салаты
                    </p>
                </div>

                <div className="category">
                    <img src={img2} alt="" />
                    <p className="category-name">
                        Напитки
                    </p>
                </div>

                <div className="category">
                    <img src={img3} alt="" />
                    <p className="category-name">
                        Бургеры
                    </p>
                </div>

                <div className="category">
                    <img src={img4} alt="" />
                    <p className="category-name">
                        Закуски
                    </p>
                </div>

                <div className="category">
                    <img src={img5} alt="" />
                    <p className="category-name">
                        Пицца
                    </p>
                </div>

                <div className="category">
                    <img src={img6} alt="" />
                    <p className="category-name">
                        Акции
                    </p>
                </div>
            </div>

            <div className="products">
                <div className="product">
                    <img src="src/assets/item.png" alt="" />
                </div>

                <div className="product">
                    <img src="src/assets/item__image.png" alt="" />

                    <div className="product-text">
                        <p className="product-name">
                            Салат “Греческий”
                        </p>
                        <p className="product-weight">
                            300 грамм - 1 порция
                        </p>
                        <p className="product-kcall">
                            36 - белков, 11 - жиров, 55 - углеводов
                        </p>

                        <a href="#" className="add-to-cart">
                            Добавить в корзину
                        </a>
                    </div>
                </div>

                <div className="product">
                    <img src="src/assets/item__image3.png" alt="" />

                    <div className="product-text">
                        <p className="product-name">
                            Салат “Тропический”
                        </p>
                        <p className="product-weight">
                            300 грамм - 1 порция    
                        </p>
                        <p className="product-kcall">
                            36 - белков, 11 - жиров, 55 - углеводов
                        </p>

                        <a href="#" className="add-to-cart">
                            Добавить в корзину
                        </a>
                    </div>
                </div>

                <div className="product">
                    <img src="src/assets/item__image4.png" alt="" />

                    <div className="product-text">
                        <p className="product-name">
                            Салат “Греческий”
                        </p>
                        <p className="product-weight">
                            300 грамм - 1 порция
                        </p>
                        <p className="product-kcall">
                            36 - белков, 11 - жиров, 55 - углеводов
                        </p>

                        <a href="#" className="add-to-cart">
                            Добавить в корзину
                        </a>
                    </div>
                </div>

                <div className="product">
                    <img src="src/assets/item5.png" alt="" />

                    <div className="product-text">
                        <p className="product-name">
                            Салат “Греческий”
                        </p>
                        <p className="product-weight">
                            300 грамм - 1 порция
                        </p>
                        <p className="product-kcall">
                            36 - белков, 11 - жиров, 55 - углеводов
                        </p>

                        <a href="#" className="add-to-cart">
                            Добавить в корзину
                        </a>
                    </div>
                </div>

                <div className="product">
                    <img src="src/assets/item__image4.png" alt="" />

                    <div className="product-text">
                        <p className="product-name">
                            Салат “Греческий”
                        </p>
                        <p className="product-weight">
                            300 грамм - 1 порция
                        </p>
                        <p className="product-kcall">
                            36 - белков, 11 - жиров, 55 - углеводов
                        </p>

                        <a href="#" className="add-to-cart">
                            Добавить в корзину
                        </a>
                    </div>
                </div>


                <div className="product">
                    <img src="src/assets/item__image4.png" alt="" />

                    <div className="product-text">
                        <p className="product-name">
                            Салат “Греческий”
                        </p>
                        <p className="product-weight">
                            300 грамм - 1 порция
                        </p>
                        <p className="product-kcall">
                            36 - белков, 11 - жиров, 55 - углеводов
                        </p>

                        <a href="#" className="add-to-cart">
                            Добавить в корзину
                        </a>
                    </div>
                </div>

                <div className="product">
                    <img src="src/assets/item__image8.png" alt="" />

                    <div className="product-text">
                        <p className="product-name">
                            Салат “Греческий”
                        </p>
                        <p className="product-weight">
                            300 грамм - 1 порция
                        </p>
                        <p className="product-kcall">
                            36 - белков, 11 - жиров, 55 - углеводов
                        </p>

                        <a href="#" className="add-to-cart">
                            Добавить в корзину
                        </a>
                    </div>
                </div>
            </div>

            <button className="button button-more">
                Показать ещё
            </button>
        </section>
    )
}

export default Menu;