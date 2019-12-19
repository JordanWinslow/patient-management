import { createSlice } from "@reduxjs/toolkit"
// createSlice makes all action creators and reducers in the same file so no separation of logic is necessary

/***************STATE SLICE***************/

const patientsSlice = createSlice({
  name: "patients",
  initialState: {
    patientData: [],
    loading: false
  },
  reducers: {
    toggleLoading(state) {
      state.loading = !state.loading
    },
    addPatient(state, action) {
      const {
        id,
        firstName,
        lastName,
        phoneNumber,
        birthDate,
        email
      } = action.payload
      const newPatient = {
        id,
        firstName,
        lastName,
        phoneNumber,
        birthDate,
        email
      }
      state.patientData.push(newPatient) // immer is running under the hood so we can write this without mutating state.
    },
    removePatient(state, action) {
      const patientIndex = state.patientData.findIndex(
        patient => patient.id === action.payload.id
      )
      delete state.patientData[patientIndex] // this is not the correct logic, we would replace this with logic to remove the patient object from the patientDetails array.
    },
    updatePatient(state, action) {
      // not implemented anywhere yet
      const patientIndex = state.patientData.findIndex(
        patient => patient.id === action.payload.id
      )
      state.patientData[patientIndex] = action.payload
    }
  }
})

/***************EXPORTED ACTIONS & REDUCERS***************/

export default patientsSlice.reducer

export const {
  addPatient,
  removePatient,
  updatePatient
} = patientsSlice.actions
