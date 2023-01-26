import bannerImg from "../../assets/banner-img.png"

const Banner = () => {
    return(
        <section className="banner">
            <div className="left-block">
                <p className="overtext">
                    Экспресс-доставка от Яндекс.Еды
                </p>

                <h1 className="title">
                Быстро<br></br>
                и вкусно<span>.</span>
                </h1>

                <p className="undertext">
                    Сеть быстрого питания #1 в Казани
                </p>

                <div className="buttons">
                    <button className="button">
                        Сделать заказ
                    </button>

                    <div className="aboutbutton-text">
                        бесплатная доставка<br />
                        от 500 рублей
                    </div>
                </div>
            </div>

            <div className="rigth-block">
                <img src={bannerImg} alt="" />
            </div>

        </section>
    )
}

export default Banner;