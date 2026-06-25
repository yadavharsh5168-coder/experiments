const categories = [
  "Grocery",
  "Mobiles",
  "Fashion",
  "Electronics",
  "Home",
  "Travel",
  "Toys"
]

function CategoryBar() {
  return (
    <div className="categoryBar">

      {categories.map((item, index) => (
        <div key={index} className="categoryItem">
          {item}
        </div>
      ))}

    </div>
  )
}

export default CategoryBar