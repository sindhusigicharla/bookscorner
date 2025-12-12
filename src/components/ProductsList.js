import "./Components.css";
import Productsitem from "./ProductsItem";
function ProductsList(props) {

    console.log("products in product list:",props.products);
  return (
    <div className="products-list">
      {props.products && props.products.map((product) => (
        <Productsitem title
        ={product.title} price={product.price} author={product.author}
        description={product.description} imageUrl={product.imageUrl}/>
      ))}
    </div>
  );
}

export default ProductsList;
