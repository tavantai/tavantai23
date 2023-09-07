import React, { useEffect, useState } from 'react'
import axios from "axios"
const token_acset = localStorage.getItem('token')
export function Bo({ databo }) {
    const [bo, setbo] = useState([])
    useEffect(() => {
        axios.get(`https://wlp.howizbiz.com/api/phanloaihoc?${databo}`, {
            headers: {
                Authorization: `Bearer ${token_acset}`,
            }
        })
            .then((res) => {
                setbo(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
            {bo.map((getitem) => (
                <React.Fragment key={getitem.uuid}>
                    <option value={getitem.uuid}>{getitem.ten}-{getitem.ten_khoa_hoc}</option>
                </React.Fragment>
            ))}

        </>
    )
}
