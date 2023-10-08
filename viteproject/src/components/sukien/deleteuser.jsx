import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { deleteUserAction, getUserAction } from "../stors/action";

function DeleteUser({ id }) {
  const { pagination } = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handdelete =(id) => { 
     dispatch(deleteUserAction({ id: id }))
     .then(()=>{ 
        alert("bạn xóa thành công")
        handleClose(false);
       dispatch(getUserAction({ page: pagination.page, search: "", perpage: pagination.perpage }));
       
      })
      .catch((error) => {
        console.error("Error:", error);
    });
   
  }

  return (
    <>
      <i className="fa-solid fa-trash" onClick={handleShow}></i>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bạn có chắc muốn xóa người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handdelete(id)}>Đồng ý</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteUser;
