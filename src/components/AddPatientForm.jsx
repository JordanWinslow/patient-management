import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

import { addPatient } from "../redux/features/patients/patientsSlice" // this is our action creator made by redux toolkit

function Footer() {
  // would be refactored into a separate component for final version
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Created by Jordan Winslow | "}
      <Link color="inherit" href="https://JordanWinslow.dev">
        https://JordanWinslow.dev
      </Link>
    </Typography>
  )
}

// MATERIAL UI STYLES
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function AddPatientForm() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { patientData } = useSelector(state => state.patients)
  const id = patientData.length + 1

  // needs refactoring: FORM CONTROLS
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [email, setEmail] = useState("")

  const createNewPatient = e => {
    e.preventDefault()
    const newPatientData = {
      id: id,
      firstName,
      lastName,
      phoneNumber,
      birthDate,
      email
    }
    dispatch(addPatient(newPatientData))
    // Clear form data
    // Definitely needs to be optimized, this is just a prototype
    setFirstName("")
    setLastName("")
    setBirthDate("")
    setEmail("")
    setPhoneNumber("")
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Patient
        </Typography>
        <form className={classes.form} noValidate onSubmit={createNewPatient}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                type="tel"
                id="phone"
                autoComplete="tel"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="birthDate"
                label="Birth Date"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                value={birthDate}
                onChange={e => setBirthDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Patient
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Or View Existing Patients
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Footer />
      </Box>
    </Container>
  )
}
