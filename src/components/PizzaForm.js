import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={props.changePizzaTopping} type="text" className="form-control" placeholder="Pizza Topping" value={
                props.editedPizza.topping
              }/>
        </div>
        <div className="col">
          <select value={props.editedPizza.size} className="form-control" onChange={props.changePizzaSize}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={props.editedPizza.vegetarian} onChange={props.changeVegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.editedPizza.vegetarian} onChange={props.changeVegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.submitPizzaData}>Submit</button>
        </div>
      </div>
  )
}

export default PizzaForm
