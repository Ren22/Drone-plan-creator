import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Coords } from '../currentCoords/currentCoords';

export interface Plan {
  id?: number;
  name: string;
  coords: Coords[];
}

export interface PlansState {
  plans: Plan[];
}

const initialState: PlansState = {
  plans: [],
};

export const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    createPlan: (state, action: PayloadAction<Plan>) => {
      const id = state.plans.length;
      state.plans.push({ ...action.payload, id });
    },
    deletePlan: (state, action: PayloadAction<Plan>) => {
      state.plans.forEach((P, idx) => {
        if (P.id === action.payload.id) {
          state.plans.splice(idx, 1);
        }
      });
    }
  },
});

export const { createPlan, deletePlan } = plansSlice.actions;

export const selectPlans = (state: RootState) => state.plans.plans;

export default plansSlice.reducer;
