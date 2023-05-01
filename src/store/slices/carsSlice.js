import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        searchTeam: "",
        data: [],
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTeam = action.payload;
        },
        addCar(state, action) {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            });
        },
        removeCar(state, action) {
            const updateCars = state.data.filter((car) => {
                return car.id !== action.payload
            })

            state.data = updateCars;
        }
    }
});

export const { changeSearchTerm, removeCar, addCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;