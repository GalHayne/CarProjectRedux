import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store/slices/carsSlice";



function CarList() {
    const dispath = useDispatch();
    const { cars, name } = useSelector(({ form, cars: { data, searchTeam } }) => {

        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTeam.toLowerCase());
        });

        console.log(filteredCars);

        return {
            cars: filteredCars,
            name: form.name
        };

    })

    const handleCarDelete = (car) => {
        dispath(removeCar(car.id))
    }

    console.log(cars);

    const renderCars = cars.map((car) => {

        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());


        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
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