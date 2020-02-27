import React from 'react';


class Product extends React.Component{
    render(){
        return(
            <tr>
            <td>{this.props.tvyal.id}</td>
            <td>{this.props.tvyal.name}</td>
            <td>{this.props.tvyal.count}</td>
            <td>{this.props.tvyal.price}</td>
            <td><img width='50' height='50' src={this.props.tvyal.image}/></td>
            <td><button onClick={this.props.myfunction} >ed-card</button></td>
          </tr>
        )
    }

}

export default Product;
