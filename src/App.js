import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const API = "http://localhost:3000/pizzas"

class App extends Component {

  state = {
    pizzaArrayState: [],
    individualPizzaState: []
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(pizzaData => this.setState({ pizzaArrayState: pizzaData }))
  }

  clickHandler = (pizza) => {
    this.setState({ individualPizzaState:pizza })
  }

  submitHandler = (id, topping, size, vegetarian) => {
    fetch(`${API}/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        application: 'application.json'
      },
      body: JSON.stringify({ topping: topping, size:size, vegetarian:vegetarian })
    })
    .then(response => response.json())
    .then(newPizzaData => console.log(newPizzaData))
  }


  render() {
    
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.individualPizzaState} submitHandler={this.submitHandler} />
        <PizzaList pizzaArray={this.state.pizzaArrayState} clickHandler={this.clickHandler} />
      </Fragment>
    );
  }
}

export default App;
