function ProductSection({ title, items, addToCart }) {

  function buyNow(name) {
    alert(`Buying ${name}`)
  }

  return (

    <div className="productSection">

      <h2>{title}</h2>

      <div className="products">

        {items.map((item, index) => (

          <div className="productCard" key={index}>

            <img
              src={item.image}
              alt={item.name}
            />

            <p>{item.name}</p>

            <div className="buttonGroup">

              <button
                className="cartBtn"
                onClick={addToCart}
              >
                Add to Cart
              </button>

              <button
                className="buyBtn"
                onClick={() => buyNow(item.name)}
              >
                Buy Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default ProductSection