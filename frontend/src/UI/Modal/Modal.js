import React from 'react';
import BSModal from 'react-bootstrap/Modal';
import classes from './modal.module.css';

const Modal = (props) => {
    return (
        <BSModal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={classes.Modal}
        >
            <BSModal.Body className={classes.ModalBody}>
                <button
                    id="modalclosebutton"
                    type="button" className="close"
                    onClick={props.onHide}
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {props.title ? <h4>{props.title}</h4> : null}
                {props.children}
            </BSModal.Body>
        </BSModal>
    );
};

export default Modal;
