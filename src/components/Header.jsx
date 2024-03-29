import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography
              variant="h6"
              className={classes.title}
              style={{ marginRight: "2rem" }} // DEFINITELY needs to be replaced. but good for prototype
            >
              View Patients
            </Typography>
          </Link>
          <Link to="/add-patient">
            <Typography variant="h6" className={classes.title}>
              Add Patients
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
