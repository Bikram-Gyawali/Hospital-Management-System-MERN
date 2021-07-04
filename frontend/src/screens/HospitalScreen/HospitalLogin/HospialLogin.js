import {useState, useEffect } from 'react'
import { styles} from './HospitalLoginCss'
import {Grid, Box, Typography } from '@material-ui/core'
import {hospitalLoginAction} from '../../../actions/hospitalActions'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

const LoginScreen = ({history}) => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const classes = styles()

    const dispatch = useDispatch()
    const hospitalLogin= useSelector(state=> state.hospitalLogin)
    const {hospitalInfo, error}= hospitalLogin

    useEffect(()=>{
        if(hospitalInfo){
            history.push(`/${hospitalInfo._id}/hospitalDashboard`)
        }
    }, [hospitalInfo, history])

    const loginHandler=(e)=>{
        e.preventDefault()
        dispatch(hospitalLoginAction(email, password))
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
                                <span>New to DoctorSahab? </span>
                                <span ><Link to="/hospital_register" className={classes.highlight}>Register</Link></span>
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
                                        <Typography  variant="h4">Hospital LogIn</Typography>
                                        <Grid container className={classes.form_grid_container}>
                                            {error && (
                                                <Grid item className={classes.form_grid_item}>
                                                    <Typography className={classes.typography}>{error}</Typography>
                                                </Grid >
                                            )}
                                            <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="email">Email</label>
                                                <input onChange={(e)=> setemail(e.target.value)} value={email} type="email" name="email" />
                                            </Grid>
                                            <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="password">Password</label>
                                                <input onChange={(e)=> setpassword(e.target.value)} value={password} type="password" name="password" />
                                            </Grid>
                                            <Grid item className={classes.form_grid_item}>
                                                <Typography className={classes.link_highlighter}>Forget your password?</Typography>
                                            </Grid >
                                            <Grid item className={classes.form_grid_item}>
                                                <Typography>Login for client? <Link to="/user_login" className={classes.link_highlighter}>Click Here</Link></Typography>
                                            </Grid >
                                            <Grid item className={classes.form_grid_item} >
                                                <button onClick={loginHandler} className={classes.button}>Login</button>
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