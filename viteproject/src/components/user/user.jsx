import "./user.scss"
import ME from "../loggin/me";
import { useEffect, useState } from "react";
import Showlist from "./Showlist";
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '../stors/action';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Tblogout from "../sukien/logout";





export default function User() {

    const dispatch = useDispatch();
    const { pagination, data } = useSelector((state) => state.user);
    const [page, setpage] = useState(1);
    const [search, setsearch] = useState("");
    const [perpage, setperpage] = useState(10)

    const handtrang = (event) => {

        const event_nameber = parseFloat(event.target.value)
        setperpage(event_nameber)
    }

    useEffect(() => {
        dispatch(getUserAction({
            page: page,
            search: search,
            perpage: perpage,
        }))
    }, [dispatch, page, search, perpage])

    const userMe = localStorage.getItem("userMe");

    const handelsearch = (e) => {
        const searchText = e.target.value;
        setsearch(searchText);

    }
 let start = (page - 1) * perpage + 1;
  let end = page * perpage;
  if (end >=pagination.total) {
    end =pagination.total;
  }

    useEffect(() => {
        ME();
    }, []);
    const json_userme = JSON.parse(userMe);
    return (
        <>
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
                <div className="main_user_letf col-2 row">
                    <ul>
                        <li><button><i className="fa-solid fa-house-laptop"></i>Bảng điều khiển</button></li>
                        <li><button><i className="fa-solid fa-user"></i>quản lý người dùng</button></li>
                        <li><button><i className="fa-solid fa-layer-group"></i>Phân loại học</button></li>
                        <li><button><i className="fa-solid fa-face-smile"></i>Loài nguy cấp quý hiếm</button></li>
                        <li><button><i className="fa-solid fa-pen"></i>Bài viết<table></table></button></li>
                        <li><button><i className="fa-solid fa-book"></i>Phiếu đều xuất</button></li>
                    </ul>
                </div>
                <div className="main_user_right  col-10 "> <span><i className="fa-solid fa-user-secret"></i> Loài nguy cấp quý hiếm</span>
                    <div className="row  main_user_Search justify-content-between">
                        <div className="col-7 positioninput">
                        <i className="fa-solid fa-magnifying-glass"></i>
                            <input
                            type="text"
                            placeholder=" tìm kiếm theo tên hoặc số điện thoại"
                            onChange={(e) => handelsearch(e)}/>
                        </div>
                        <Link to="/adduser" className="col-2" style={{ background: "red", textAlign: "center", color: "white", borderRadius: "10px", textDecoration: "none" }}>✚  Thêm mới</Link>
                    </div>
                    <div className=" dulieu_api">
                        <table>
                            <thead>
                                <tr
                                    style={{
                                        position: "sticky",
                                        top: "0px",
                                        background: "#fcfcfc",
                                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                                    }}
                                >
                                    <th style={{width:"15%"}}>Tên</th>
                                    <th style={{width:"15%"}}>Tên khoa học</th>
                                    <th style={{width:"10%"}}>Giới</th>
                                    <th style={{width:"10%"}}>Ngành</th>
                                    <th style={{width:"10%"}}>Lớp</th>
                                    <th style={{width:"10%"}}>Bộ</th>
                                    <th style={{width:"10%"}}>Họ</th>
                                    <th style={{width:"10%"}}>Chi</th>
                                    <th style={{width:"10%"}}>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Showlist />
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            {start}-
                            {end}/
                            {pagination.total}
                        </div>
                        <div>
                            <Stack spacing={1}>
                                <Pagination
                                    count={Math.ceil(pagination.total / perpage || 1)}
                                    color="primary"
                                    onChange={(event, value) => {
                                        setpage(value);
                                    }}
                                />
                            </Stack>
                        </div>
                        <div>
                            <Form.Select aria-label="Default select example" onChange={handtrang} >
                                <option value='5'>5/Trang</option>
                                <option value='10'>10/Trang</option>
                                <option value='25'>25/Trang</option>
                                <option value='50'>50/Trang</option>
                            </Form.Select>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}