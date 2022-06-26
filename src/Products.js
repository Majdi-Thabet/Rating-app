import React, { Component } from 'react';
import Product from './Product';

function getProducts  ()  {
    return [
    {
    imageUrl: "http://loremflickr.com/150/150?random=1",
    productName: "Product 1",
    releasedDate: "May 31, 2016",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
    rating: 4,
    numOfReviews: 2
    },
    {
    imageUrl: "http://loremflickr.com/150/150?random=2",
    productName: "Product 2",
    releasedDate: "October 31, 2016",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus    laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
    rating: 2,
    numOfReviews: 12
    },
    {
    imageUrl: "http://loremflickr.com/150/150?random=3",
    productName: "Product 3",
    releasedDate: "July 30, 2016",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus  laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
    rating: 5,
    numOfReviews: 2
    }];
    }


class Products extends Component {
 render() {

    //1. We declare an array products in Products Component 

    const products = ["Learning React","Pro React","Beginning React"];

    //2. We next define an ES6 arrow function 
    //that returns an <li> element for each product
    //We then pass in this function
    //into map which loops through each element, calls the function that returns
    //an <li></li> element for each product

 const listProducts = getProducts().map((product, idx) =>
    <Product data={product} key={idx} />
 
 // <li key={product.toString()}>{product}</li>
 );

    //returned a new array of
    //elements which we assign to listProducts.

 return (
    <div>
        <ul>{listProducts}</ul> 
    </div>
    );
}
}
   
export default Products;