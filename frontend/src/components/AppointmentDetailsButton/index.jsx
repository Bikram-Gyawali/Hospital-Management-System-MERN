import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Button from 'components/GlobalComponents/Button'
import Modal from 'components/GlobalComponents/Modal';
import styled from "styled-components";
import { colors } from "colors";
// import "bootstrap/dist/css/bootstrap.css";



const ModalBody = styled.div`
    color: ${colors.primary};
`
const ModalBodyMain = styled.div``

const ModalSection = styled.div`
    margin: 20px 0;
`

const SPAN = styled.span``

const ModalHeader = styled.div`
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: medium;
`

const DetailsButton = styled(Button)`
    padding: 6px 15px;
`

const ModalTitle = styled.h2``

function AppointmentDetailsButton({ res }) {
    const hospitalLogin = useSelector((state) => {
        return state.hospitalLogin;
    });
    const { hospitalInfo } = hospitalLogin;

    const [fullscreen, setFullscreen] = useState(true);

    const [lgShow, setLgShow] = useState(false);
    function handleShow() {
        setFullscreen(!fullscreen);
        setLgShow(true);
    }
    // console.log("button", res);


    return (
        <div>
            <DetailsButton
                onClick={() => handleShow()}
                outlined
            >
                View Details
            </DetailsButton>
            <Modal
                open={lgShow}
                setOpen={setLgShow}
            >
                <ModalHeader closeButton>
                    <ModalTitle>
                        Appointment Details
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <ModalBodyMain>
                        <ModalSection>
                            <SPAN>Name: </SPAN>
                            <SPAN>{res?.name && res?.name}</SPAN>
                        </ModalSection>
                        <ModalSection>
                            <SPAN>Age: </SPAN>
                            <SPAN>{res?.age && res?.age}</SPAN>
                        </ModalSection>
                        <ModalSection>
                            <SPAN>Contacts: </SPAN>
                            <SPAN>{res?.contact && res?.contact}</SPAN>
                        </ModalSection>
                        <ModalSection>
                            <SPAN>Service: </SPAN>
                            <SPAN>{res?.services && res?.services}</SPAN>
                        </ModalSection>
                        <ModalSection>
                            <SPAN>Address: </SPAN>
                            <SPAN>{res?.location && res?.location}</SPAN>
                        </ModalSection>
                        <ModalSection>
                            <SPAN >Description: </SPAN>
                            <SPAN>
                                {res?.desc && res?.desc}
                            </SPAN>
                        </ModalSection>

                    </ModalBodyMain>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default AppointmentDetailsButton;
