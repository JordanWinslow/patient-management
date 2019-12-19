import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import DeleteIcon from "@material-ui/icons/Delete"

import { removePatient } from "../redux/features/patients/patientsSlice"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    marginTop: "3rem",
    backgroundColor: theme.palette.background.paper
  }
}))

const ListPatients = () => {
  const classes = useStyles()
  const { patientData } = useSelector(state => state.patients)
  const dispatch = useDispatch()

  return (
    <Container component="main" maxWidth="xs">
      <List component="nav" className={classes.root} aria-label="patients">
        {patientData.map(patient => {
          const {
            id,
            firstName,
            lastName,
            phoneNumber, // would be used in a patientDetails component, not here, but showing this state is avaiable
            birthDate,
            email
          } = patient
          return (
            <ListItem button>
              <ListItemText primary={`${firstName} ${lastName}`} />
              <ListItemIcon
                onClick={
                  () =>
                    dispatch(
                      removePatient(id)
                    ) /*check redux dev tools to see it does dispatch a removePatient operation but the logic isn't yet implemented to remove it properly*/
                }
              >
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}

export default ListPatients
