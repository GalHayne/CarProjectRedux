import { useSelector } from "react-redux";


function CarList() {
    const { data } = useSelector((state) => {
        return state.cars;
    })

    console.log(data);

    return <div>CarList</div>
}

export default CarList;