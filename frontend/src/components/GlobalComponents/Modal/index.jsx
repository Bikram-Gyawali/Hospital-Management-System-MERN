import { colors } from 'colors';
import Modal from 'react-modal'
import styled from 'styled-components'
import CrossIcon from 'assets/images/cross-icon.svg'


Modal.setAppElement('#modal');

const customStyles = {
    content: {
        maxWidth: "768px",
        margin: "auto",
        padding: "50px 30px",
        background: colors.secondaryWhite,
        borderRadius: "20px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    overlay: {
        zIndex: 100
    }
}

const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    
`
const IMG = styled.img`
    cursor: pointer;
`

const ModalBody = styled.div``
const ModalWrapper = ({ children, open, setOpen }) => {
    
    
    return (
        <Modal isOpen={open} onRequestClose ={()=>setOpen(false)} style = {customStyles}>
            <ModalHeader>
                <IMG src={CrossIcon} alt={"Cross Icon"} onClick={ ()=>setOpen(false)}/>
            </ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
        </Modal>
    )
}

export default ModalWrapper
