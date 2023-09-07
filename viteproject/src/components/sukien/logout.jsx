import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


export default function Tblogout() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const naviget= useNavigate();
    const handUser = () => {
          localStorage.clear();
        naviget("/login")
    }
    const userMe = localStorage.getItem("userMe");
    const json_userme = JSON.parse(userMe);
    return (
        <>
              <h4 style={{ color: '#414141' }}onClick={handleShow}><b>{json_userme?.name.slice(0, 1)}</b>{json_userme && json_userme.username}</h4>
               <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>bạn có muốn thoát tài khoản không</Modal.Title>
               </Modal.Header>
               <Modal.Footer>
              <Button variant="primary" onClick={handUser}>Đồng ý</Button>
            </Modal.Footer>
            </Modal>
        </>
    )

}