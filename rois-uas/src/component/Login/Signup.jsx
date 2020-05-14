import React, {Component} from 'react';
import { withStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';
import {signUp} from '../../actions/auth';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { connect } from 'react-redux';



const styles = () => ({
    "@global": {
        body: {
            backgroundColor: "#fff"
        }
    },
    paper: {
        marginTop: 100,
        display: "flex",
        padding: 20,
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f50057"
    },
    form: {
        marginTop: 1
    },
    p:{
        marginTop: 10
    },
    errorText: {
        color: "#f50057",
        marginBottom: 5,
        textAlign: "center"
    }
});

class SignUp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {username:'', email:'', password:''}
    }

    onSubmit = event =>{
        event.preventDefault();     
        const {dispatch} = this.props;
        const {email, password, username} = this.state;
        dispatch(signUp(email, password, username));
        window.confirm("data berhasil ditambahkan klik signin")
    }
    
    onEmailChange = ({target})=>{
        this.setState({email:target.value});
    }

    onPasswordChange = ({target})=>{
        this.setState({password:target.value});
    }

    onUsernameChange = ({target})=>{
        this.setState({username:target.value});
    }

    render() {
        const {
            email,
            passwordOne,
            error
        } = this.state;

        const isInvalid = 
            passwordOne === '' || email === '';

        const classes = this.props;
      return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
            <Typography component="h1" variant="h5">Sign Up</Typography>

            <TextField variant="outlined" 
                    margin="normal" 
                    fullWidth 
                    id="username" 
                    label="Username" 
                    name="username" 
                    onChange={this.onUsernameChange}/>
    
            <TextField variant="outlined" 
                       margin="normal" 
                       fullWidth 
                       id="email"
                       value={email} 
                       label="Alamat Email" 
                       name="email" 
                       onChange={this.onEmailChange}/>

            <TextField variant="outlined" 
                       margin="normal" 
                       fullWidth 
                       id="password"
                       name="passwordOne" 
                       label="Password" 
                       type="password" 
                       value={passwordOne}
                       onChange={this.onPasswordChange}/>
                       
          
                <Button type="button" 
                    disabled={isInvalid}
                    fullWidth 
                    variant="contained" 
                    color="primary" 
                    className={classes.submit} 
                    onClick={this.onSubmit}>
                    Sign In
                </Button>
                {error && <p>{error.message}</p>}

                <Typography variant="body1" component="p">Sudah punya akun ? <Link to="/login">Sign In</Link></Typography>
            </Paper>
        </Container>
      )
    };  
}

const mapStateToProps = (state) =>{
    return {
        isSignUp: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated
    }
}


export default withStyles(styles) (connect(mapStateToProps)(SignUp));