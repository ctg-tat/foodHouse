const Category = ({url, name}) => {
    return(
        <div className="category">
            <img src={url} alt="" />
            <p className="category-name">
                {name}
            </p>
        </div>
    )
}

export default Category;