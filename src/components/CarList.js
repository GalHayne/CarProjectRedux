import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store/slices/carsSlice";
import useModal from "./hooks/use-modal";
import Modal from "./UI/Modal";
import UpdateCarModal from "./UpdateCarModal";
import { useState } from "react";

function CarList() {
    const dispath = useDispatch();

    const [modalStatus, openModal, closeModal] = useModal();

    const [selectedCar, setSelectedCar] = useState();

    const { cars, name } = useSelector(({ form, cars: { data, searchTeam } }) => {

        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTeam.toLowerCase());
        });

        return {
            cars: filteredCars,
            name: form.name
        };

    })

    const handleCarDelete = (car) => {
        dispath(removeCar(car.id))
    }
    const handleCarUpdate = (car) => {
        openModal();
        setSelectedCar(car);
    }

    const renderCars = cars.map((car) => {

        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());


        return (
            <div key={car.id} className={`panel ${bold && 'bold has-text-danger'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <div>
                    <button className="button is-warning m-2"
                        onClick={() => handleCarUpdate(car)}
                    >
                        Update
                    </button>
                    <button className="button is-danger m-2"
                        onClick={() => handleCarDelete(car)}>
                        Delete
                    </button>
                </div>
            </div>
        )
    })


    return <div className="car-list">
        {renderCars}
        <hr />
        <Modal modalStatus={modalStatus} onClose={closeModal}>
            <UpdateCarModal onClose={closeModal} selectedCar={selectedCar} />
        </Modal>
    </div>
}

export default CarList;