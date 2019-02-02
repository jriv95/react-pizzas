import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  mapThroughPizzas = () => {
     const pizzas = this.props.pizzas.map(pizza => (< Pizza key={pizza.id} pizzaObj={pizza} sendToPizzaForm={this.props.sendToPizzaForm}/>))
     return pizzas
  }


  render() {

    console.log(this.props)

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
            this.mapThroughPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
