import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  AboutFormType,
  ConditionsFormType,
  FacilitiesFormType,
  ICreateNewApartmentSchema,
} from '../types/createNewApartmentTypes';
import { defaultAboutFormValues, defaultConditionsFormValues, defaultFacilitiesFormValues } from '../constants';
import { createNewApartment } from '../service/createNewApartmentService';

const initialState: ICreateNewApartmentSchema = {
  isLoading: false,
  aboutForm: { ...defaultAboutFormValues },
  conditionsForm: { ...defaultConditionsFormValues },
  facilitiesForm: { ...defaultFacilitiesFormValues },
  canStepToConditions: false,
  canStepToFacilities: false,
};

export const createNewApartmentSlice = createSlice({
  name: 'createNewApartmentSlice',
  initialState,
  reducers: {
    setAboutFormData: (state, action: PayloadAction<AboutFormType>) => {
      state.aboutForm = { ...action.payload };
    },
    setConditionsFormData: (state, action: PayloadAction<ConditionsFormType>) => {
      state.conditionsForm = { ...action.payload };
    },
    setFacilitiesFormData: (state, action: PayloadAction<FacilitiesFormType>) => {
      state.facilitiesForm = { ...action.payload };
    },
    setCanStepToConditions: (state, action: PayloadAction<boolean>) => {
      state.canStepToConditions = action.payload;
    },
    setCanStepToFacilities: (state, action: PayloadAction<boolean>) => {
      state.canStepToFacilities = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createNewApartment.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(createNewApartment.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(createNewApartment.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
  selectors: {
    getAboutFormData: sliceState => sliceState.aboutForm,
    getConditionsFormData: sliceState => sliceState.conditionsForm,
    getFacilitiesFormData: sliceState => sliceState.facilitiesForm,
    getCanStepToConditions: sliceState => sliceState.canStepToConditions,
    getCanStepToFacilities: sliceState => sliceState.canStepToFacilities,
    getError: sliceState => sliceState.error,
    getIsLoading: sliceState => sliceState.isLoading,
  },
});

export const { actions: createNewApartmentActions, reducer: createNewApartmentReducer } = createNewApartmentSlice;
