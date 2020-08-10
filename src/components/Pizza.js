import React from "react"

class Pizza extends React.Component{

  clickHandler = () => {
    this.props.clickHandler(this.props.pizza)
  }

  pizzaVeggieBool = () => {
    if(this.props.pizza.vegetarian === true){
      return "Yes"
    }
    else{
      return "No"
    }
  }

  render(){
    return(
      <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        <td>{this.pizzaVeggieBool()}</td>
        <td><button onClick={this.clickHandler} type="button" className="btn btn-primary">Edit Pizza</button></td>
      </tr>
    )
  }
}

export default Pizza
