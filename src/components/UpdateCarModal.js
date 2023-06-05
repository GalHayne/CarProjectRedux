import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCar } from "../store/slices/carsSlice";

const UpdateCarModal = ({ onClose, selectedCar }) => {

    const dispath = useDispatch();

    const [car, setCar] = useState(selectedCar);

    const handleChangeName = (e) => {
        setCar((prevCar) => {
            const updateCar = { ...prevCar, name: e.target.value }
            return updateCar;
        })
    }

    const handleChangeCost = (e) => {
        setCar((prevCar) => {
            const updateCar = { ...prevCar, cost: parseInt(e.target.value) }
            return updateCar;
        })
    }

    const hadnleUpdateCar = () => {
        dispath(updateCar(car))
        onClose();
    }

    return (
        <div className="bg-light p-3 rounded" style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}>
            <h3>
                Car Update
            </h3>
            <button className="border-0 bg-transparent position-absolute top-0 end-0" onClick={onClose}>X</button>
            <input className="rounded m-2" type="text" value={car.name} onChange={(e) => handleChangeName(e)} required />
            <input className="rounded m-2" type="number" min={1} value={car.cost} onChange={(e) => handleChangeCost(e)} required />
            <button className="button is-primary m-2" onClick={() => hadnleUpdateCar()}>Update
            </button>
            <button className="button is-danger m-2" onClick={onClose}>Close</button>

        </div>
    )
}

export default UpdateCarModal;