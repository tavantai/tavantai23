import React, { useEffect, useState } from 'react'
import axios from "axios"
const token_acset = localStorage.getItem('token')
export const  REDBOOK=()=>{
    const [redbook,setredbook]= useState([])
    useEffect(() => {
        axios.get("https://wlp.howizbiz.com/api/danhmuccha?ma_danh_mucs[]=REDBOOK", {
            headers: {
                Authorization: `Bearer ${token_acset}`,
            }
        })
            .then((res) => {
                setredbook(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return(
        <>
        {redbook.map((getitem)=>(
            getitem.childs.map((ids)=>(
                < React.Fragment key={ids.id}>
                <option value={ids.id}>{ids.ten}-{ids.ma_danh_muc}</option>
                </React.Fragment>
            ))

        ))}
        </>
    )
}