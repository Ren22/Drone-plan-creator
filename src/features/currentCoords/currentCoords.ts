import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface Coords {
  lat: number;
  lng: number;
}

export interface CurrentCoordsState {
  currentCoords: Coords[];
}

const initialState: CurrentCoordsState = {
  currentCoords: [],
};

export const currentCoordsSlide = createSlice({
  name: 'current-coords',
  initialState,
  reducers: {
    addCurrentCoords: (state, action: PayloadAction<Coords>) => {
      state.currentCoords.push({ ...action.payload });
    },
    restoreCoords: (state, action: PayloadAction<Coords[]>) => {
      state.currentCoords = action.payload;
    }
  },
});

export const { addCurrentCoords, restoreCoords } = currentCoordsSlide.actions;

export const selectCurrentCoords = (state: RootState) => state.currentCoords.currentCoords;

export default currentCoordsSlide.reducer;
