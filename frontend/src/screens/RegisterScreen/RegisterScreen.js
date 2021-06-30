import { styles } from './RegisterScreenCss'
import {Grid, Box, Typography } from '@material-ui/core'
import {Link} from 'react-router-dom'

const LoginScreen = () => {
    const classes = styles()
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
                                <span ><Link to="/register" className={classes.highlight}>Login</Link></span>
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
                                        <Typography variant="h4">Create Account</Typography>
                                        <Grid container className={classes.form_grid_container}>
                                            <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="name">Name</label>
                                                <input type="text" name="name" />
                                            </Grid>
                                            <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email" />
                                            </Grid>
                                            <Grid item xs={12} className={classes.styled_form}>
                                                <div className={classes.styled_inner_form}>
                                                    <label htmlFor="phone">Phone Number</label>
                                                    <input type="tel" name="phone" />
                                                </div>
                                                <div className={classes.styled_inner_form}>
                                                    <label htmlFor="birth">Date of Birth</label>
                                                    <input type="date" name="birth" />
                                                </div>
                                            </Grid>
                                            <Grid item className={classes.form_grid_item} xs={12}>
                                                <label htmlFor="password">Password</label>
                                                <input type="password" name="password" />
                                            </Grid>
                                            <Grid item className={classes.form_grid_item} >
                                                <button className={classes.button}>GET STARTED</button>
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