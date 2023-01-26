const Product = ({ url, name }) => {
    return(
        <div className="product">
            <div className="black">
                <img className="product-img" src={url} alt="" />
            </div>

            <div className="product-text">
                <p className="product-name">
                    {name}
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
    )
}

export default Product;