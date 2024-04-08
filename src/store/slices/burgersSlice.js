import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//Get all burgers from API
export const fetchBurgers = createAsyncThunk(
    'burgers/fetchBurgers',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://my-burger-api.herokuapp.com/burgers');

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    burgers: [],
    status: null,
    error: null,
};

const burgersSlice = createSlice({
    name: 'burgers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBurgers.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchBurgers.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.burgers = action.payload.map(burger => {
                    const randomPrice = ((Math.random() * (5.00)) + 5.00).toFixed(2);

                    //As soon as burgers from API without price, manually adding them
                    return {
                        ...burger,
                        price: randomPrice,
                        currency: '$',
                    }
                });
            })
            .addCase(fetchBurgers.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            });
    },
});

export default burgersSlice.reducer;
