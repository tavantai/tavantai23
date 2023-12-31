import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Gioi } from "../apithem.jsx/Gioi";
import { getUserAction, newuser } from "../stors/action";
import { useDispatch, useSelector } from "react-redux";
import { Nganh } from "../apithem.jsx/Nganh";
import { Lop } from "../apithem.jsx/Lop";
import { Ho } from "../apithem.jsx/Ho";
import { Chi } from "../apithem.jsx/Chi";
import { Bo } from "../apithem.jsx/Bo";
import { Link, useNavigate } from "react-router-dom";
import "./sukien.scss"
import { REDBOOK } from "../apithem.jsx/REDBOOK";
import { IUCN } from "../apithem.jsx/IUCN";
import { ListNam } from "../apithem.jsx/nam";
import Tblogout from "./logout";

export default function Adduser() {
    const navigate = useNavigate();
    const { pagination } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const datagioi = "ranks[]=Kingdom";
    const datanganh = "ranks[]=Phylum";
    const datalop = "ranks[]=Class";
    const databo = "ranks[]=Order";
    const dataho = "ranks[]=Family";
    const datachi = "ranks[]=Genus";
    const [DataCreateUser, setDataCreateUser] = useState("");
    //    const[valSachDo,setvalSachDo]=useState([])
    const [valuegioi, setvaluegioi] = useState()
    const [valuenganh, setvaluenganh] = useState()
    const [valuelop, setvaluelop] = useState()
    const [valuebo, setvaluebo] = useState()
    const [valueho, setvalueho] = useState()
    const [valuechi, setvaluechi] = useState()
    const [valuenam, setvaluenam] = useState()
    const [valuetrangthai, setvaluetrangthai] = useState()
    const [valuenam1, setvaluenam1] = useState()
    const [valuetrangthai1, setvaluetrangthai1] = useState()
    const handvalue = (event) => {
        let { name, value } = event.target;
        setDataCreateUser({ ...DataCreateUser, [name]: value });
    }
    const handvaluegioi = (event) => {
        const event_nameber = parseFloat(event.target.value)
        setvaluegioi(event_nameber)
    }
    const handvaluenganh = (event) => {
        const event_nameber1 = parseFloat(event.target.value)
        setvaluenganh(event_nameber1)
    }
    const handvaluelop = (event) => {
        const event_nameber2 = parseFloat(event.target.value)
        setvaluelop(event_nameber2)
    }
    const handvaluebo = (event) => {
        const event_nameber3 = parseFloat(event.target.value)
        setvaluebo(event_nameber3)
    }
    const handvalueho = (event) => {
        const event_nameber4 = parseFloat(event.target.value)
        setvalueho(event_nameber4)
    }

    const handvaluechi = (event) => {
        const event_nameber5 = parseFloat(event.target.value)
        setvaluechi(event_nameber5)
    }
    const sachdo = []
    sachdo.push({ "nam": valuenam, "id": valuetrangthai })
    const unl = []
    unl.push({ "nam": valuenam1, "id": valuetrangthai1 })

    const handUser = () => {
         alert("Thành công");
        navigate("/user");
        dispatch(newuser({ data: DataCreateUser, class_id: valuelop, family_id: valueho, genus_id: valuechi, kingdom_id: valuegioi, order_id: valuebo, phylum_id: valuenganh, sach_dos: sachdo, iucns: unl }))
             .then(() => {
                dispatch(getUserAction({ page: pagination.page, search: "", perpage: pagination.perpage }));          
            })    
    }
        
    const hendvaluenam = (event) => {
        const event_nameber6 = parseFloat(event.target.value)
        setvaluenam(event_nameber6)
    }

    const hendtrangthai = (event) => {
        const event_nameber7 = parseFloat(event.target.value)
        setvaluetrangthai(event_nameber7)
    }
    const hendvaluenam1 = (event) => {
        const event_nameber8 = parseFloat(event.target.value)
        setvaluenam1(event_nameber8)
    }
    const hendtrangthai1 = (event) => {
        const event_nameber9 = parseFloat(event.target.value)
        setvaluetrangthai1(event_nameber9)
    }
    return (
        < >
            <div className="user row ">
                <div className="col-1">
                    <img src="http://wlp.howizbiz.com/static/img/logoColor.e5de23ce.png"
                        alt="" />
                </div>
                <div className="col-8 ul ">
                    <h5 className="">
                        HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM ĐƯỢC ƯU TIÊN BẢO VỆ
                    </h5>
                </div>
                <div className="col-3 row">
                    <Tblogout />
                </div>
            </div>
            <div className="usermain row ">
                <div className="main_user_letf col-2 row" >
                    <ul>
                        <li><button><i className="fa-solid fa-house-laptop"></i>Bảng điều khiển</button></li>
                        <li><button><i className="fa-solid fa-user"></i>quản lý người dùng</button></li>
                        <li><button><i className="fa-solid fa-layer-group"></i>Phân loại học</button></li>
                        <li><button><i className="fa-solid fa-face-smile"></i>Loài nguy cấp quý hiếm</button></li>
                        <li><button><i className="fa-solid fa-pen"></i>Bài viết<table></table></button></li>
                        <li><button><i className="fa-solid fa-book"></i>Phiếu đều xuất</button></li>
                    </ul>
                </div>
            
            <div className="add col-10">
              <div style={{margin:"0 60px"}} >
                <h2>
                    <Link to="/user" style={{ textDecoration: "none",color:'red' }}>⇐</Link> THÔNG TIN VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM CẦN ĐƯỢC ƯU TIÊN BẢO VỆ
                </h2>
                <h4>I. Thông tin chung về loài</h4>
                <Form style={{ width: '50%' }}>
                    <Form.Group className="mb-3" controlId="Tên">
                        <Form.Label>Tên <i
                            className="fa-solid fa-star"
                            style={{ color: "#f03c00", marginLeft: "5px" }}
                        ></i></Form.Label>
                        <Form.Control type="text" placeholder="Tên" name="ten" onChange={handvalue}  />
                    </Form.Group>
                </Form>
                <Row className="g-2" style={{ width: '50%' }}>
                    <Col md style={{ marginRight: "20px" }}>
                        <Form.Group className="mb-3" controlId="Tên khoa học">
                            <Form.Label>Tên khoa học <i
                                className="fa-solid fa-star"
                                style={{ color: "#f03c00", marginLeft: "5px" }}
                            ></i></Form.Label>
                            <Form.Control type="text" placeholder="Tên khoa học" name="ten_khoa_hoc" onChange={handvalue} />
                        </Form.Group>
                    </Col>
                    <Col md>
                        <Form.Group className="mb-3" controlId="Tên tác giả">
                            <Form.Label>Tên tác giả</Form.Label>
                            <Form.Control type="text" placeholder="Tên tác giả" name="ten_tac_gia" onChange={handvalue} />
                        </Form.Group>
                    </Col>
                </Row>
                <Form>
                    <Form.Group className="mb-3" controlId="Tên địa phương">
                        <Form.Label>Tên địa phương</Form.Label>
                        <Form.Control type="text" placeholder="Tên địa phương" name="ten_dia_phuong" onChange={handvalue} />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3" controlId="Nguồn dữ liệu">
                        <Form.Label>Nguồn dữ liệu</Form.Label>
                        <Form.Control type="text" placeholder="Nguồn dữ liệu" name="nguon_du_lieu" onChange={handvalue} />
                    </Form.Group>
                </Form>
                <h4>II. Phân loại học</h4>
                <Row className="g-2">
                    <Col md className="m-4">
                        <span>giới</span>
                        <i
                            className="fa-solid fa-star"
                            style={{ color: "#f03c00", marginLeft: "10px" }}
                        ></i>
                        <Form.Select aria-label="Default select example" onChange={handvaluegioi} >
                        <option value={0}></option> 
                            <Gioi datagioi={datagioi} />
                        </Form.Select>
                    </Col>
                    <Col md className="m-4">
                        <span>Ngành</span>
                        <i
                            className="fa-solid fa-star"
                            style={{ color: "#f03c00", marginLeft: "10px" }}
                        ></i>
                        <Form.Select aria-label="Default select example" onChange={handvaluenganh}>
                        <option value={0}></option>
                            <Nganh datanganh={datanganh} />
                        </Form.Select>
                    </Col>
                    <Col md className="m-4">
                        <span>lớp</span>
                        <i
                            className="fa-solid fa-star"
                            style={{ color: "#f03c00", marginLeft: "10px" }}
                        ></i>
                        <Form.Select aria-label="Default select example" onChange={handvaluelop}>
                        <option value={0}></option>
                           <Lop datalop={datalop} />
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="g-2">
                    <Col md className="m-4">
                        <span>Bộ</span>
                        <i
                            className="fa-solid fa-star"
                            style={{ color: "#f03c00", marginLeft: "10px" }}
                        ></i>
                        <Form.Select aria-label="Default select example" onChange={handvaluebo}>
                        <option value={0}></option>
                            <Bo databo={databo} />
                        </Form.Select>
                    </Col>
                    <Col md className="m-4">
                        <span>Họ</span>
                        <i
                            className="fa-solid fa-star"
                            style={{ color: "#f03c00", marginLeft: "10px" }}
                        ></i>
                        <Form.Select aria-label="Default select example" onChange={handvalueho}>
                        <option value={0}></option>
                            <Ho dataho={dataho} />
                        </Form.Select>
                    </Col>
                    <Col md className="m-4">
                        <span>Chi</span>
                        <i
                            className="fa-solid fa-star"
                            style={{ color: "#f03c00", marginLeft: "10px" }}
                        ></i>
                        <Form.Select aria-label="Default select example" onChange={handvaluechi}>
                        <option value={0}></option>
                            <Chi datachi={datachi} />
                        </Form.Select>
                    </Col>
                </Row>
                <h2>III. Tình trạng bảo tồn</h2>
                <h2>Sách đỏ</h2>
                <Row className="g-2">
                    <Col md className="m-3">
                        <span>năm</span>
                        <Form.Select aria-label="Default select example" onChange={hendvaluenam}>
                        <option value={0}></option>
                            <ListNam />
                        </Form.Select>
                    </Col>
                    <Col md className="m-3">
                        <span>hiện trạng</span>
                        <Form.Select aria-label="Default select example" onChange={hendtrangthai}>
                        <option value={0}></option>
                            <REDBOOK />
                        </Form.Select>

                    </Col>
                </Row>
                <h2>IUCN</h2>
                <Row className="g-2">
                    <Col md className="m-3">
                        <span>năm</span>
                        <Form.Select aria-label="Default select example" onChange={hendvaluenam1}>
                        <option value={0}></option>
                            <ListNam />
                        </Form.Select>
                    </Col>
                    <Col md className="m-3">
                        <span>hiện trạng</span>
                        <Form.Select aria-label="Default select example" onChange={hendtrangthai1}>
                        <option value={0}></option>
                            <IUCN />
                        </Form.Select>
                    </Col>
                </Row>
                <button onClick={handUser} style={{
                    background: "red", color: "aliceblue", width: "120px",
                    height: "40px",
                    border: "2px solid red",
                }}>Thê mới</button>
            </div >
            </div>
        </div>
        </>
    );
}
