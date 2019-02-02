import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzaArray : [],
    editedPizza: {}
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(r => r.json())
    .then(pizzasArr => {
      this.setState({
        pizzaArray: pizzasArr
      })
    })
  }

  sendToPizzaForm = (pizzaObj) => {
    this.setState({
      editedPizza: pizzaObj
    })
  }
  
  changeVegetarian = (e) => {
    this.setState({
      editedPizza: {
        ...this.state.editedPizza,
        vegetarian: e.target.value==="Vegetarian"
      }
    })
  }

  changePizzaSize = (e) => {
    this.setState({
      editedPizza: {
        ...this.state.editedPizza,
        size: e.target.value
      }
    })
  }

  changePizzaTopping = (event) => {
    this.setState({
      editedPizza: {
        ...this.state.editedPizza,
        topping: event.target.value
      } 
    })
  }

  submitPizzaData = (e) => {
    if(this.state.editedPizza.id){
    const id = this.state.editedPizza.id
    // const size = this.state.editedPizza.size
    // const topping = this.state.editedPizza.topping
    // const veggie = this.state.editedPizza.vegetarian
    const editedPizza = {...this.state.editedPizza}
    delete editedPizza.id
    
    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(editedPizza),
      headers: {
        'Content-Type': "application/json" 
      }
    })
    .then(r => r.json())
    .then(pizzaResponse => {
      const newPizzaArray = this.state.pizzaArray.map(pizzaObj => (pizzaObj.id === id ? pizzaResponse: pizzaObj))
      this.setState({
        pizzaArray: newPizzaArray
      })
    })
    }
  }  

  render() {


    return (
      <Fragment>
        <Header/>

        <PizzaForm editedPizza={this.state.editedPizza}
        changeVegetarian={this.changeVegetarian}
        changePizzaTopping={this.changePizzaTopping}
        changePizzaSize={this.changePizzaSize}
        submitPizzaData={this.submitPizzaData}/>

        <PizzaList pizzas={this.state.pizzaArray} sendToPizzaForm={this.sendToPizzaForm}/>
      </Fragment>
    );
  }
}

export default App;
