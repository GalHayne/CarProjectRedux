import { useSelector } from "react-redux";

function CarValue() {
    const totalCost = useSelector(({ cars: { data, searchTeam } }) => {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTeam.toLowerCase());
        })
        return filteredCars.reduce((acc, car) => {
            return acc + car.cost;
        }, 0)

    });

    return <div className="car-value">
        Total Cost: ${totalCost}
    </div>
}

export default CarValue;