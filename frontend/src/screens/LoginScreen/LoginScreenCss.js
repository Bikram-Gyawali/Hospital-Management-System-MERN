import {createUseStyles} from 'react-jss'

export const styles= createUseStyles({
    main_loginScreenContainer:{
        width: '100%',
    },
    sub_loginScreenContainer:{
        width: '80%',
        margin: '0 auto',
        color: '#4F3928'
    },
    gird_item:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 3.2rem',
        fontSize: '17px',
    },
    highlight:{
        color: 'cyan'
    },
    form_root_container:{
        paddingTop: '2.3rem',
        width: '100%',
    },
    form_grid_container:{
        marginTop: '1rem',

        // '& *':{
        //     margin: '0.5rem 0'
        // }
    },
    form_right:{
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '400px',
    },
    svg:{
        flex: '50',
        display: 'flex',
        justifyContent: 'center',

        '& img':{
            width: '300px'
        }
    },
    line:{
        width: '1px',
        height: '500px',
        background: 'black'
    },
    form_container:{
        flex: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '2rem',

    },
    form_grid_item:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '1.1rem',

        '& input':{
            padding: '0.6rem',
            borderRadius: '8px',
            outline: 'none',
            border: '1px solid #4dadbd',
            background: 'rgba(77, 173, 189, 0.1)',
            fontSize: '1rem',
            fontWeight: '600'
        }
    },
    typography:{
        color: ' #4dadbd',
        cursor: 'pointer',
    },
    button:{
        width: '150px',
        height: '45px',
        borderRadius: '20px',
        border: 'none',
        outline: 'none',
        marginTop: '1.1rem',
        background: '#396F78',
        color: 'white',
        fontSize: '1rem',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        transition: 'all 0.4s ease',

        '&:hover': {
            background: 'rgba(57, 111, 120, 0.7)',
        }
    }
})
