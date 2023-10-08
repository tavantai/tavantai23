import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default function Update(item) {
    const [dataUpdateUser, setDataUpdateUser] = useState({});
    const handelupdate = (event) => {
		let { name, value } = event.target;
		setDataUpdateUser({ ...dataUpdateUser, [name]: value });
	};
    return (<>
        <div className="add">
            <h2>
                <Link to="/user" style={{ textDecoration: "none" }}>⇐</Link> THÔNG TIN VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM CẦN ĐƯỢC ƯU TIÊN BẢO VỆ
            </h2>
            <h4>I. Thông tin chung về loài</h4>
            <Form style={{ width: '50%' }}>
                <Form.Group className="mb-3" controlId="Tên">
                    <Form.Label>Tên <i
                        className="fa-solid fa-star"
                        style={{ color: "#f03c00", marginLeft: "5px" }}
                    ></i></Form.Label>
                    <Form.Control type="text" placeholder="Tên" name="ten"onChange={handelupdate} defaultValue={item.ten} />
                </Form.Group>
            </Form>
            <Row className="g-2" style={{ width: '50%' }}>
                <Col md style={{ marginRight: "20px" }}>
                    <Form.Group className="mb-3" controlId="Tên khoa học">
                        <Form.Label>Tên khoa học <i
                            className="fa-solid fa-star"
                            style={{ color: "#f03c00", marginLeft: "5px" }}
                        ></i></Form.Label>
                        <Form.Control type="text" placeholder="Tên khoa học" name="ten_khoa_hoc" onChange={handelupdate} defaultValue={item.ten_khoa_hoc} />
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group className="mb-3" controlId="Tên tác giả">
                        <Form.Label>Tên tác giả</Form.Label>
                        <Form.Control type="text" placeholder="Tên tác giả" name="ten_tac_gia" onChange={handelupdate} defaultValue={item.ten_tac_gia} />
                    </Form.Group>
                </Col>
            </Row>
            <Form>
                <Form.Group className="mb-3" controlId="Tên địa phương">
                    <Form.Label>Tên địa phương</Form.Label>
                    <Form.Control type="text" placeholder="Tên địa phương" name="ten_dia_phuong" onChange={handelupdate}  defaultValue={item.ten_dia_phuong} />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group className="mb-3" controlId="Nguồn dữ liệu">
                    <Form.Label>Nguồn dữ liệu</Form.Label>
                    <Form.Control type="text" placeholder="Nguồn dữ liệu" name="nguon_du_lieu" onChange={handelupdate} defaultValue={item.nguon_du_lieu} />
                </Form.Group>
            </Form>
            {/* <h4>II. Phân loại học</h4>
                <Row className="g-2">
                    <Col md className="m-4">
                        <span>giới</span>
                        <i
                            className="fa-solid fa-star"
                            style={{ color: "#f03c00", marginLeft: "10px" }}
                        ></i>
                        <Form.Select aria-label="Default select example" onChange={handvaluegioi} >
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
                            <Chi datachi={datachi} />
                        </Form.Select>
                    </Col>
                </Row> */}
            {/* <h2>III. Tình trạng bảo tồn</h2>
                <h2>Sách đỏ</h2>
                <Row className="g-2">
                    <Col md className="m-3">
                        <span>năm</span>
                        <Form.Select aria-label="Default select example" onChange={hendvaluenam}>
                            <ListNam />
                        </Form.Select>
                    </Col>
                    <Col md className="m-3">
                        <span>hiện trạng</span>
                        <Form.Select aria-label="Default select example" onChange={hendtrangthai}>
                            <REDBOOK />
                        </Form.Select>

                    </Col>
                </Row>
                <h2>IUCN</h2>
                <Row className="g-2">
                    <Col md className="m-3">
                        <span>năm</span>
                        <Form.Select aria-label="Default select example" onChange={hendvaluenam1}>
                            <ListNam />
                        </Form.Select>
                    </Col>
                    <Col md className="m-3">
                        <span>hiện trạng</span>
                        <Form.Select aria-label="Default select example" onChange={hendtrangthai1}>
                            <IUCN />
                        </Form.Select>
                    </Col>
                </Row>
                <button onClick={handUser} style={{
                    background: "red", color: "aliceblue", width: "120px",
                    height: "40px",
                    border: "2px solid red",
                }}>Thê mới</button> */}
        </div >

    </>)
}
