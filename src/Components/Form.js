import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main,
  // },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form() {
  const classes = useStyles();

// set state with UseState

const [state, setState] = useState({});
const getInputs = (e) => {
  state[e.target.id] = e.target.value
  setState({...state})
}

const allValues = (e) => {
  e.preventDefault();

  axios.post('http://localhost:5000/user', state)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  
  // console.log(state);
  // localStorage.setItem('ValueInLocalStorage', JSON.stringify(state));
  // let getValueInLocalStorage = localStorage.getItem(JSON.parse('ValueInLocalStorage'));
  // const userdata = [];
  // userdata.push(getValueInLocalStorage);
  // console.log(userdata);

  // http://localhost:5000/user

  
















}






  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}> */}
          {/* <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
         Submit Personal Details
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
            autoComplete="first name"
            autoFocus
            value={state.firstname}
            onChange={getInputs}
          />



           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
            autoComplete="last name"
            autoFocus
           value={state.lastname}
          onChange={getInputs}
          />



            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="favoritedish"
            label="Favorite Dish"
            name="favoritedish"
            autoComplete="favoritedish"
            autoFocus
            value={state.favoritedish}
           onChange={getInputs}
          />
          


           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="favoritegame"
            label="Favorite Game"
            name="favoritegame"
            autoComplete="favoritegame"
            autoFocus
            value={state.favoritegame}
           onChange={getInputs}

          />

          
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={allValues}
          >
            Submit
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              {/* <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}