import { createUseStyles } from 'react-jss'
import { colors } from '../../colors'

export const styles = createUseStyles({
    main_container: {
        width: '100%',
        height: 'auto',
    },
    sub_container: {
        width: '100%',
        height: '100%',

        background: '#F3FBFB'
    },
    social_media: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 0'
    },
    left_media: {
        flex: "50%",
        display: 'flex',
        justifyContent: 'center',
    },
    socialmedia_typography: {
        padding: '0 1rem'
    },
    right_media: {
        flex: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& *': {
            marginRight: '0.2rem'
        }
    },
    navbar: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0.7rem 1rem',
        background: '#fff',
        color: '#1F201A',
    },
    goback: {
        padding: '0.5rem',
        background: '#ED836D',
        borderRadius: '12px'
    },
    center: {
        textTransform: 'uppercase',
        fontSize: '21px',
        fontWeight: 'bold'
    },
    body_container: {
        width: '95%',
        margin: '0 auto',
        height: 'auto',
        boxShadow: '0px 0px 51px -11px rgba(29,26,26,0.75)',
    },
    hospitalImage: {
        width: '100%',
        height: '500px',
        objectFit: 'cover',
        borderBottom: '1px solid black'
    },
    doctor_section: {
        width: '100%',
        padding: '3rem 0'
    },
    card: {
        width: '100%',
        display: 'flex',
        paddingButton: '2rem'
    },
    eachcard: {
        flex: '20%',
        height: 'auto',
        margin: '0 2rem',
        background: '#F3FBFB',
        borderRadius: '12px',
        overflow: 'hidden',
        border: `1px solid ${colors.primary}`,
    },
    cardImage: {
        width: '100%',
        height: '70%',
        objectFit: 'cover'
    },
    cardTypography: {
        padding: '0.4rem 0',
        background: `${colors.primary}`,
        color: '#77e4e4'
    },
    content: {
        display: 'flex',
        alignItes: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0.5rem',
        margin: '0 0.2rem'
    },
    cardButton: {
        flex: 1,
        background: `${colors.primary}`,
        borderRadius: '18px',
        padding: '0.2rem',
        color: '#fff'
    },
    connect: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    facilities_section: {
        margin: '3rem 0',
        paddingBottom: '2.5rem',
        background: '#abe1ec'
    },
    service: {
        width: '100%',
        display: 'flex',
    },
    each_facilities: {
        flex: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '1rem',
        padding: '1rem 0',
        margin: '0 1rem',
        borderRadius: '12px',
        boxShadow: '0px 0px 35px -15px rgba(0,0,0,0.75)',
        background: '#ddc8d1'
    },
    service_section: {
        width: '100%',
        padding: '3rem 0'
    },
    service: {
        display: 'grid',
        margin: '0 auto',
        gridTemplateColumns: 'repeat(3, 33.33%)',
        gridTemplateRows: 'auto',
        gridColumnGap: '1rem',
        gridRowGap: ' 2rem',
    },
    each_service: {
        width: '92%',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 0px 12px -2px rgba(0,0,0,0.84)        ',
        borderRadius: '12px',
        overflow: 'hidden'
    },
    service_img: {
        flex: '50%',
        width: '50%',
        height: '100%',
        padding: '0.3rem',
        objectFit: 'contain'
    },
    service_content: {
        flex: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    service_name: {
        flex: '70%',
        fontSize: '2rem',
        background: `${colors.primary}`,
        color: '#fff',
        display: 'grid',
        placeItems: 'center',
    },
    footer_section:{
        width: '100%',
    },
    footer:{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem',
        background: `${colors.primary}`,
        color: '#fff'
    }
})