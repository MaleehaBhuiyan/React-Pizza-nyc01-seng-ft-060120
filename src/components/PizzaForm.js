import React from "react"

class PizzaForm extends React.Component {

  state = {
    topping: "",
    size: this.props.pizza.size,
    vegetarian: this.props.pizza.vegetarian
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.props.pizza.id, this.props.pizza.topping, this.props.pizza.size, this.props.pizza.vegetarian)
  }

  changeHandler = (e) => {
    let oldTopping = this.props.pizza.topping
    this.setState({ topping:oldTopping })
    this.setState({ [e.target.name]:[e.target.value] })
    console.log(this.state.topping)
  }

  render(){
    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping" onChange={this.changeHandler} value={
                  this.state.topping
                }/>
          </div>
          <div className="col">
            <select value={this.props.pizza.size} className="form-control" onChange={this.changeHandler}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" checked={this.props.pizza.vegetarian === true}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" checked={this.props.pizza.vegetarian === false}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.submitHandler}>Submit</button>
          </div>
        </div>

    )
  }
}

export default PizzaForm
