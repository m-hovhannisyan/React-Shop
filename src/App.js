import React from 'react';
import Product from './components/poduct'
import Card from './components/card'

class App extends React.Component{
  constructor(){
    
    super()


    this.state={
      
      product:[
        {id:1,name:'Aa',count:7,price:200,image:'images/1.jpg' },
        {id:2,name:'Ba',count:12,price:400,image:'images/2.jpg' },
        {id:3,name:'Ca',count:20,price:500,image:'images/3.jpg' },
      ],      
      card:[
        
        // {id:1,name:'Aa',count:0,price:200,image:'images/1.jpg' ,mycount:},

      ],
      inputvalue:{id:'',name:'',count:'', price:'',image:''},
      
      count:0,

      price:0,

    }
   this.state.count=this.state.card.reduce((a,b)=>{
      return a+b.price*b.mycount
    },0)

   this.setState({})
    this.Total()
  }

  cardplus=(a)=>{
    let y={...a}
    let z=this.state.card.filter(b=>b.id===y.id)
    if(z.length===0){
      y.mycount=1
      this.state.card.push(y)
    }
    else if(y.count>z[0].mycount) {
      z[0].mycount++
    }
    this.Total()
    this.setState({})
  }

  cardminus=(e)=>{
    let y=e.target.getAttribute('data_id')
    this.state.card[y].mycount--
    this.setState({})
    this.Total()
  }

  Delet=(e)=>{
    let y=e.target.getAttribute('data_id')
    this.state.card.splice(y,1)
    this.setState({})
    this.Total()
  }

  Total=()=>{
    this.state.price=this.state.card.reduce((a,b)=>{
      return a+b.mycount*b.price
    },0)
    this.setState({})
  }

  addcard(a){
   let y={...a}
   let z=this.state.card.filter(b=>b.id===y.id)
   if(z.length===0){
    y.mycount=1
    this.state.card.push(y)
   }
   else if(y.count>z[0].mycount) {
     z[0].mycount++
   }
   this.Total()
   this.setState({})
    
  }

Add=()=>{
  this.state.inputvalue.id=+this.state.product.length+1
  let x={...this.state.inputvalue}
  this.state.product.push(x)
  this.state.inputvalue={id:'',name:'',count:'', price:'',image:''}
  this.setState({})

}
changeInput=(e)=>{
  let x=e.target.value
  let y=e.target.getAttribute('data-id')
  this.state.inputvalue[y]=x
  this.setState({})
}

render(){
  return(<div className='container'>
    {this.state.count}
    <div>
      <input onChange={this.changeInput} data-id='name' placeholder='name' value={this.state.inputvalue.name}></input>
      <input onChange={this.changeInput} data-id='count' placeholder='count' value={this.state.inputvalue.count}></input>
      <input onChange={this.changeInput} data-id='price' placeholder='price' value={this.state.inputvalue.price}></input>
      <input onChange={this.changeInput} data-id='image' placeholder='image' value={this.state.inputvalue.image}></input>
      <button onClick={this.Add}>Add</button>
    </div>
    <div className='row'>

      <div className='col-md-8'>
        <table>
          <thead>
            <th>id</th>
            <th>name</th>
            <th>count</th>
            <th>price</th>
            <th>image</th>
            <th>ed-card</th>
          </thead>
          <tbody>
            {
              this.state.product.map((v,i)=>{
                if(v.count>0){
                  return(
                   <Product key={i} tvyal={v} myfunction={this.addcard.bind(this,v) } />
                  )
                }
              })
            }
          </tbody>
        </table>
      </div>

      <div className='col-md-4'>
        <table>
          <thead>
            <th>name</th>
            <th>mycount</th>
            <th>price</th>
          </thead>
          <tbody>
            {
              this.state.card.map((x,j)=>{
                if(x.mycount>0){
                 return(
                  <Card  key={j} tvyal={x} indx={j} Fdelet={this.Delet.bind(this.x)} Fplus={this.cardplus.bind(this,x)} Fminus={this.cardminus.bind(this.x)} />
                  )
                }
              })          
            }
            <tr>
              <th>Yndhanur gumar</th>
              <td>{this.state.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>)
}
}

export default App;
