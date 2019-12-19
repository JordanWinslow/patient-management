import React from "react"
import { Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import ListPatients from "./components/ListPatients"
import AddPatientForm from "./components/AddPatientForm"

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={ListPatients} />
        {/*<Route path="/patients/:id" component={PatientDetails} />*/}
        <Route path="/add-patient" component={AddPatientForm} />
      </Switch>
      {/*<Route path="/" component={BottomNav} />*/}
    </div>
  )
}

export default App
