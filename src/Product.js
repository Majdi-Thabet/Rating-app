import React, { Component } from 'react';
import {Card, ListGroupItem} from 'react-bootstrap'
import Rating from './Rating';



class Product extends Component {
    constructor(props){
    super(props);
    }
    render() {
    return (
        <Card style={{marginBottom: 16, marginTop: 16}}>

            <Card.Body>

        
        <div style={{display: "flex", flexDirection: "row",}}>
        <img
        width={64}
        height={64}
        className="mr-3"
        src={this.props.data.imageUrl}
        alt="Image"
        />
            <div style={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "flex-start"}}>

            
            <h5>{this.props.data.productName}</h5>
            { this.props.data.releasedDate }
            <Rating
            rating={this.props.data.rating} numOfReviews=
            {this.props.data.numOfReviews}
                />
                <p style={{textAlign: "left"}}>{this.props.data.description}</p>
                </div>
        </div>
        </Card.Body>
        </Card>
    )
   }
}
export default Product;




