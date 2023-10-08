import React, { useEffect, useState } from 'react'
import axios from "axios"
const token_acset = localStorage.getItem('token')
export function Ho({ dataho }) {
    const [ho, setHo] = useState([])
    useEffect(() => {
        axios.get(`https://wlp.howizbiz.com/api/phanloaihoc?${dataho}`, {
            headers: {
                Authorization: `Bearer ${token_acset}`,
            }
        })
            .then((res) => {
                setHo(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
            {ho.map((getitem) => (
                <React.Fragment key={getitem.uuid}>
                    <option value={getitem.uuid}>
                        {getitem.ten && getitem.ten_khoa_hoc ? `${getitem.ten} - ${getitem.ten_khoa_hoc}` : getitem.ten || getitem.ten_khoa_hoc}
                    </option>              
                      </React.Fragment>
            ))}

        </>
    )
}
