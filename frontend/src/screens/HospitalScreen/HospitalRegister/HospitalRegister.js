import { useState, useEffect } from 'react'
import { styles } from './HospitalRegisterCss'
import { Grid, Box, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {hospitalRegisterAction} from '../../../actions/hospitalActions'
import { Link } from 'react-router-dom'

const HospitalRegisterScreen = ({ history }) => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [contact1, setcontact1] = useState('')
    const [contact2, setcontact2] = useState('')

    const classes = styles()
    const dispatch = useDispatch()
    const hospitalRegister = useSelector(state => state.hospitalRegister)
    const {hospitalInfo } = hospitalRegister

    useEffect(() => {
        if (hospitalInfo) {
            history.push('/')
        }
    }, [hospitalInfo, history])

    const registerHandler = (e) => {
        e.preventDefault()
        if (password === cpassword) {
            dispatch(hospitalRegisterAction(name, email, password, contact1, contact2))
        } else {
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
                                <span ><Link to="/hospital_login" className={classes.highlight}>Login</Link></span>
                            </div>
                        </Grid>
                        <Grid item className={classes.form_root_container}>
                            <Box m={6} className={classes.form_right}>
                                <div className={classes.svg}>
                                </div>
                                <img src="grid-left.svg" alt="img" />
                                <div className={classes.line}></div>
                                <div className={classes.form_container}>
                                    <Box px={4}>
                                        <Typography variant="h4">Hospital Account</Typography>
                                        <Grid container className={classes.form_grid_container}>
                                            <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="name">Name</label>
                                                <input onChange={(e) => setname(e.target.value)} type="text" name="name" />
                                            </Grid>
                                            <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="email">Email</label>
                                                <input onChange={(e) => setemail(e.target.value)} type="email" name="email" />
                                            </Grid>
                                            {/* <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="address">Address</label>
                                                <input onChange={(e)=> setemail(e.target.value)} type="address" name="address" />
                                            </Grid> */}
                                            <Grid item xs={12} className={classes.styled_form}>
                                                <div className={classes.styled_inner_form}>
                                                    <label htmlFor="contact1">Contact1</label>
                                                    <input onChange={(e) => setcontact1(e.target.value)} type="number" name="contact1" />
                                                </div>
                                                <div className={classes.styled_inner_form}>
                                                    <label htmlFor="contact2">Contact2</label>
                                                    <input onChange={(e) => setcontact2(e.target.value)} type="number" name="contact2" />
                                                </div>
                                            </Grid>
                                            <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="password">Password</label>
                                                <input onChange={(e) => setpassword(e.target.value)} type="password" name="password" />
                                            </Grid>
                                            <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="cpassword">Confirm Password</label>
                                                <input onChange={(e) => setcpassword(e.target.value)} type="password" name="cpassword" />
                                            </Grid>
                                            <Grid item className={classes.form_grid_item} >
                                                <Typography>Need account for individual? <Link className={classes.link_highlighter} to="/user_register">Click Here</Link></Typography>
                                            </Grid>
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
export default HospitalRegisterScreen