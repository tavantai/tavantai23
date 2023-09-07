import React, { useEffect, useState } from 'react'
import axios from "axios"
const token_acset = localStorage.getItem('token')
export const  IUCN=()=>{
    const [iucn,setiucn]= useState([])
    useEffect(() => {
        axios.get("https://wlp.howizbiz.com/api/danhmuccha?ma_danh_mucs[]=IUCN", {
            headers: {
                Authorization: `Bearer ${token_acset}`,
            }
        })
            .then((res) => {
                setiucn(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return(
        <>
        {iucn.map((getitem)=>(
            getitem.childs.map((ids)=>(
                <React.Fragment key={ids.id}>
                <option value={getitem.id}>{ids.ten}-{ids.ma_danh_muc}</option>
                </React.Fragment>
            ))

        ))}
        </>
    )
}