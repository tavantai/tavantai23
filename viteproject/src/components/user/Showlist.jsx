import React from 'react'
import { useSelector } from 'react-redux'
import DeleteUser from '../sukien/deleteuser';
import "./user.scss"



export default function Showlist() {

    
    
    const url = 'https://wlp.howizbiz.com'
    const { data } = useSelector((state) => state.user);

    return (<>
        {data.map((item) => (
            <tr key={item.id}>
                <td className='d-flex justify-content-between' >
                    <span className='col-3' >{item.attachments && item.attachments.length > 0 ? (
                        <img src={`${url}${item.attachments[0].path}`} alt="" />
                    ) : (
                        <img src="http://wlp.howizbiz.com/static/img/image3.2ffc6960.png" />
                    )}</span>
                    <span className='col-8' >{item.ten}</span>
                </td>
                <td>{item.ten_khoa_hoc}</td>
                <td>{item.kingdom.ten}</td>
                <td>{item.phylumn.ten}</td>
                <td>
                    {item.class.ten === null || item.family.ten === "" ? item.class.ten_khoa_hoc : item.class.ten}
                </td>
                <td>
                    {item.order.ten === null || item.order.ten === "" ? item.order.ten_khoa_hoc : item.order.ten}
                </td>
                <td>
                    {item.family.ten === null || item.family.ten === "" ? item.family.ten_khoa_hoc : item.family.ten}
                </td>
                <td>
                    {item.genus.ten === null || item.genus.ten === "" ? item.genus.ten_khoa_hoc : item.genus.ten}
                </td>
                <td style={{ width: '10%' }}>
                  
                    <DeleteUser id={item.id} />
                </td>
            </tr>
        ))}
    </>
    )
}
