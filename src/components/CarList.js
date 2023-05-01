import { useSelector } from "react-redux";


function CarList() {
    const cars = useSelector((state) => {
        return state.cars.data;
    })

    const renderCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger">
                    Delete
                </button>
            </div>
        )
    })

    return <div>{renderCars}</div>
}

export default CarList;