import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store/slices/carsSlice";



function CarList() {
    const dispath = useDispatch();
    const cars = useSelector((state) => {
        const { data, searchTeam } = state.cars;

        return data.filter((car) => {
            return car.name.toLowerCase().includes(searchTeam.toLowerCase());
        });

    })

    const handleCarDelete = (car) => {
        dispath(removeCar(car.id))
    }

    const renderCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger"
                    onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>
            </div>
        )
    })

    return <div className="car-list">
        {renderCars}
        <hr />
    </div>
}

export default CarList;