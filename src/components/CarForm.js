import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName, addCar } from "../store";

function CarForm() {
    const dispatch = useDispatch();
    const { name, cost, cars } = useSelector((state) => {
        return {
            cars: state.cars.cars,
            name: state.form.name,
            cost: state.form.cost,
        }
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    }

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0
        dispatch(changeCost(carCost));
    };

    const handleSumbit = (event) => {
        event.preventDefault();

        dispatch(addCar({ name, cost }))
        // dispatch(changeName(""));
        // dispatch(changeCost(""));
    };


    return (
        <div className="car-form panel">CarForm
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSumbit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            required
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                </div>

                <div className="field-group">
                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            required
                            className="input is-expanded"
                            value={cost || ""}
                            onChange={handleCostChange}
                            type="number"
                            min={1}
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Sumbit</button>
                </div>
            </form>
            {JSON.stringify(cars)}
        </div>
    )
}

export default CarForm;