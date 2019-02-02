import React from "react"

const Pizza = (props) => {


  return(
    <tr>
      <td>{props.pizzaObj.topping}</td>
      <td>{props.pizzaObj.size}</td>
      <td>{props.pizzaObj.vegetarian? "Veggie": "nahh" }</td>
      <td><button onClick={() => (props.sendToPizzaForm(props.pizzaObj))} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
