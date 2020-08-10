import React, { Component } from 'react';
import Pizza from '../components/Pizza'


class PizzaList extends Component {

  pizzaArray = () => {
    return this.props.pizzaArray.map(pizza => {return <Pizza key={pizza.id} pizza={pizza} clickHandler={this.props.clickHandler} />})
  }

  render() {

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.pizzaArray()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
