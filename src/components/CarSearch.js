import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/slices/carsSlice"

function CarSearch() {
    const dispath = useDispatch();

    const searchTeam = useSelector((state) => {
        console.log(state.cars.searchTeam);
        return state.cars.searchTeam;

    })

    const handleSearchTermChange = (event) => {
        dispath(changeSearchTerm(event.target.value));
    };


    return <div className="list-header">
        <h3 className="title is-3">My Cars</h3>
        <div className="search field is-horizontal">
            <label className="label">Search</label>
            <input
                className="input"
                value={searchTeam}
                onChange={handleSearchTermChange}
            />
        </div>

    </div>
}

export default CarSearch;