import {useState, useEffect} from 'react'
import { styles } from './UserRegisterCss'
import {Grid, Box, Typography } from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {userRegisterAction} from '../../../actions/userActions'
import {Link} from 'react-router-dom'

const LoginScreen = ({history}) => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [dob, setdob] = useState('')
    const [contacts, setcontacts] = useState('')

    const classes = styles()
    const dispatch = useDispatch()
    const userRegister= useSelector(state=> state.userRegister)
    const {loading, error, userInfo}= userRegister

    useEffect(() => {
        if(userInfo){
            history.push('/')
        }
    }, [userInfo,history])

    const registerHandler=(e)=>{
        e.preventDefault()
        if(password === cpassword){
            dispatch(userRegisterAction(name, email, dob, contacts, password))
        }else{
            alert('Password not matching')
        }
    }

    return (
        <>
            <div className={classes.main_loginScreenContainer}>
                <div className={classes.sub_loginScreenContainer}>
                    <Grid container >
                        <Grid items className={classes.gird_item}>
                            <Link to="/" className={classes.brandName}>
                                <span>Doctor</span><span className={classes.highlight}>Sahab</span>
                            </Link>
                            <div className={classes.login}>
                                <span>Already have and account? </span>
                                <span ><Link to="/user_login" className={classes.highlight}>Login</Link></span>
                            </div>
                        </Grid>
                        <Grid item className={classes.form_root_container}>
                            <Box m={6} className={classes.form_right}>
                                <div className={classes.svg}>
                                    <img src="grid-left.svg" alt="img" />
                                </div>
                                <div className={classes.line}></div>
                                <div className={classes.form_container}>
                                    <Box px={4}>
                                        <Typography variant="h4">Client Account</Typography>
                                        <Grid container className={classes.form_grid_container}>
                                            <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="name">Name</label>
                                                <input onChange={(e)=> setname(e.target.value)} type="text" name="name" />
                                            </Grid>
                                            <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="email">Email</label>
                                                <input onChange={(e)=> setemail(e.target.value)} type="email" name="email" />
                                            </Grid>
                                            <Grid item xs={12} className={classes.styled_form}>
                                                <div className={classes.styled_inner_form}>
                                                    <label htmlFor="phone">Phone Number</label>
                                                    <input onChange={(e)=> setcontacts(e.target.value)} type="tel" name="phone" />
                                                </div>
                                                <div className={classes.styled_inner_form}>
                                                    <label htmlFor="birth">Date of Birth</label>
                                                    <input onChange={(e)=> setdob(e.target.value)} type="date" name="birth" />
                                                </div>
                                            </Grid>
                                            <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="password">Password</label>
                                                <input onChange={(e)=> setpassword(e.target.value)} type="password" name="password" />
                                            </Grid>
                                            <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="cpassword">Confirm Password</label>
                                                <input onChange={(e)=> setcpassword(e.target.value)} type="password" name="cpassword" />
                                            </Grid>
                                            <Grid item className={classes.form_grid_item}>
                                                <Typography>Need account for hospital? <Link className={classes.link_highlighter} to="/hospital_register">Click Here</Link></Typography>
                                            </Grid >
                                            <Grid item className={classes.form_grid_item} >
                                                <button onClick={registerHandler} className={classes.button}>GET STARTED</button>
                                            </Grid>
                                        </Grid> 
                                    </Box>
                                </div>
                            </Box>

                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default LoginScreen