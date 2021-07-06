import { useEffect, useState } from 'react'
import { styles } from './HospitalProfileCss'
import Button from '../../components/GlobalComponents/Button/index'
import { KeyboardBackspace, LocationOn, MailOutline, Facebook, Instagram, Twitter, LinkedIn, Link } from '@material-ui/icons'
import { Typography, Box, Divider } from '@material-ui/core'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AppomntButton from 'components/AppointmentButton/AppomntButton'

const HospitalProfile = () => {
    const [doctors, setdoctors] = useState([])
    const params = useParams();
    const classes = styles()
    const [hospitalData, setHospitalData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/hospitals/${params.id}/allDoctors`).then((response) => {
            setdoctors(response.data)
            console.log(response.data)
        }).catch((e) => console.log(e))
    }, [])

    useEffect(() => {
        console.log(params.id);
        const getHospitalData = async () => {
            let data = await axios.get(`http://localhost:5000/api/hospitals/${params.id}`);
            setHospitalData(data.data)
            console.log(data)
        }
        getHospitalData()
    }, [])


    const stringifyImage = (image) => {
        let string = "";
        console.log(image)
        for (let char in image[0]) {
            string += image[0][char]
        }
        return string;
    }


    return (
        <>
            <div className={classes.main_container}>
                <div className={classes.sub_container}>
                    <div className={classes.social_media}>
                        <div className={classes.left_media}>
                            <Typography className={classes.socialmedia_typography} variant="body2"><span>hospital@gmail.com</span><MailOutline style={{ color: '#E50914' }} /></Typography>
                            <Typography className={classes.socialmedia_typography} variant="body2"><span>Find our location</span><LocationOn style={{ color: '#78C257' }} /></Typography>
                        </div>
                        <div className={classes.right_media}>
                            <Facebook style={{ color: '#4267B2' }} />
                            <Twitter style={{ color: '#1DA1F2' }} />
                            <LinkedIn style={{ color: '#0072b1 ' }} />
                            <Instagram style={{ color: ' #833AB4' }} />
                        </div>
                    </div>
                    <nav className={classes.navbar}>
                        <div className={classes.left}>
                            <KeyboardBackspace /><span>Go back</span>
                        </div>
                        <div className={classes.center}>
                            {hospitalData?.name && hospitalData.name}
                        </div>
                        <div className={classes.center}>
                            <AppomntButton />
                        </div>
                    </nav>
                    <div className={classes.body_container}>
                        {
                            hospitalData?.hospitalImages && <img className={classes.hospitalImage} src={stringifyImage(hospitalData.hospitalImages)} alt="img" />
                        }

                        <div className={classes.doctor_section}>
                            <Box py={4}><Typography align="center" variant="h4">Our Consultants</Typography></Box>
                            <div className={classes.card}>
                                {doctors && doctors.map((doctor, index) => {
                                    return (

                                        <div className={classes.eachcard} key = {doctor._id}>
                                            <img className={classes.cardImage} src={doctor.pic} alt="img" />
                                            <Typography className={classes.cardTypography} align="center">{doctor.name}</Typography>
                                            <Divider />
                                            <div className={classes.content}>
                                                <button className={classes.cardButton}>{doctor.spec}</button>
                                                <div className={classes.connect}>
                                                    <Facebook style={{ color: '#4267B2' }} />
                                                    <Twitter style={{ color: '#1DA1F2' }} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={classes.service_section}>
                            <Box py={4}><Typography align="center" variant="h4">Our Facilities</Typography></Box>
                            <div className={classes.service}>

                                {/* each services */}
                                {
                                    hospitalData?.services && hospitalData.services.map(service => (
                                        <div className="card" style={{ width: "22rem" }} key={service._id}>
                                            <img className="card-img-top" src={service.img} alt="Cardcap" />
                                            <div className="card-body">
                                                <h5 className="card-title">{service.topic}</h5>
                                                <div className="text-secondary">Rs. {service.serviceCharge}</div>
                                                <p className="card-text">{service.desc}</p>
                                            </div>
                                        </div>
                                    ))

                                }
                            </div>
                        </div>

                        <div className={classes.event_section}>
                            <div className={classes.events}>
                                <div className="mx-auto mt-12 color">
                                    <Box py={5}>
                                        <Typography variant="h5" align="center">
                                            Events Organized By Us
                                        </Typography>
                                    </Box>
                                    {
                                        hospitalData?.events && hospitalData.events.map(event => (
                                            <section style={{ boxShadow: '0px 0px 35px -15px rgba(0,0,0,0.9)' }} className="text-gray-600 my-3 body-font overflow-hidden" key = {event._id}>
                                                <div className="container px-5 py-3 mx-auto">
                                                    <div className="-my-8 divide-y-2 divide-gray-100">
                                                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                            <div className="md:flex-grow">
                                                                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                                                                    {event.eventName}
                                                                </h2>
                                                                <p className="leading-relaxed">
                                                                    {event.desc}
                                                                </p>
                                                                <span href="/" className="text-indigo-500 inline-flex items-center mt-2">
                                                                    Learn More
                                                                    <svg
                                                                        className="w-4 h-4 ml-2"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        fill="none"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    >
                                                                        <path d="M5 12h14"></path>
                                                                        <path d="M12 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </section>
                                        ))    
                                    }
                                    <section style={{ boxShadow: '0px 0px 35px -15px rgba(0,0,0,0.9)' }} className="text-gray-600 my-3 body-font overflow-hidden">
                                        <div className="container px-5 py-3 mx-auto">
                                            <div className="-my-8 divide-y-2 divide-gray-100">
                                                <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                    <div className="md:flex-grow">
                                                        <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                                                            Covid Vaccine Available
                                                        </h2>
                                                        <p className="leading-relaxed">
                                                            Our Hospital Is Providing Covid Vaccine to the
                                                            normal citizens this is an information and
                                                            invitation to the people of age group 18-50 yrs old
                                                            public.
                                                        </p>
                                                        <a href="/" className="text-indigo-500 inline-flex items-center mt-2">
                                                            Learn More
                                                            <svg
                                                                className="w-4 h-4 ml-2"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="M5 12h14"></path>
                                                                <path d="M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </section>
                                    <section style={{ boxShadow: '0px 0px 35px -15px rgba(0,0,0,0.9)' }} className="text-gray-600 my-3 body-font overflow-hidden">
                                        <div className="container px-5 py-3 mx-auto">
                                            <div className="-my-8 divide-y-2 divide-gray-100">
                                                <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                    <div className="md:flex-grow">
                                                        <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                                                            Blood Donation
                                                        </h2>
                                                        <p className="leading-relaxed">
                                                            Our Hospital Is Providing Covid Vaccine to the
                                                            normal citizens this is an information and
                                                            invitation to the people of age group 18-50 yrs old
                                                            public.
                                                        </p>
                                                        <a href="/" className="text-indigo-500 inline-flex items-center mt-2">
                                                            Learn More
                                                            <svg
                                                                className="w-4 h-4 ml-2"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="M5 12h14"></path>
                                                                <path d="M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>

                        <div className={classes.contact_section}>
                            <div className={classes.contact_details}>
                                <section className="text-gray-600 body-font relative">
                                    <div className="container px-5 py-24 mx-auto">
                                        <div className="flex flex-col text-center w-full mb-12">
                                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                                        </div>
                                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                            <div className="flex flex-wrap -m-2">
                                                <div className="p-2 w-1/2">
                                                    <div className="relative">
                                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                    </div>
                                                </div>
                                                <div className="p-2 w-1/2">
                                                    <div className="relative">
                                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                    </div>
                                                </div>
                                                <div className="p-2 w-full">
                                                    <div className="relative">
                                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                                    </div>
                                                </div>
                                                <div className="p-2 w-full">
                                                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                                                </div>
                                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                                    <a href="/" className="text-indigo-500">hospital@gmail.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className={classes.footer_section}>
                            <div className={classes.footer}>
                                <Typography>Emergency Contacts: 101, 103</Typography>
                                <Typography>webwizards@copyright2021</Typography>
                                <Typography>DoctorSahab</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HospitalProfile;