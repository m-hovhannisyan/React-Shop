import React from 'react';


class Card extends React.Component{
render(){
    return(
        <tr>
        <td>{this.props.tvyal.name}</td>
        <td>{this.props.tvyal.mycount}</td>
        <td>{this.props.tvyal.price*this.props.tvyal.mycount}</td>
        <td><button data_id={this.props.tvyal} onClick={this.props.Fplus}>+</button></td>
        <td><button data_id={this.props.indx} onClick={this.props.Fminus}>-</button></td>
        <td><button data_id={this.props.indx} onClick={this.props.Fdelet}>DELETE</button></td>
      </tr>
    
    )
}

}

export default Card;
