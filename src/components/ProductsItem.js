import { useState } from 'react';
import  './Components.css';
function Productsitem(props){

    const [readMore, setReadMore] = useState(false);
    return(
        <div className="book-item">
            <img src={props.imageUrl} alt="book image" className="book-image"/>
            <h2>{props.title}</h2>
            <p>{readMore? props.description : props.description.slice(0, 50)} <span className='see-more'
            onClick={()=>setReadMore(!readMore)}>{readMore?'..see less':'...sea more'}</span></p>
            <p>price: {props.price}</p>
            <p>Author: {props.author}</p>
            <button className='btn'>Add to Cart</button>
        </div>
    );
}
export default Productsitem;