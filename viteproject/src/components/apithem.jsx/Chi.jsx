import React, { useEffect, useState } from 'react'
import axios from "axios"
const token_acset = localStorage.getItem('token')
export function Chi({ dataChi }) {
    const [chi, setchi] = useState([])
    useEffect(() => {
        axios.get(`https://wlp.howizbiz.com/api/phanloaihoc?${dataChi}`, {
            headers: {
                Authorization: `Bearer ${token_acset}`,
            }
        })
            .then((res) => {
                setchi(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [dataChi]);
    return (
        <>
            {chi.map((getitem, index) => (
                <React.Fragment key={index}>
                    <option value={getitem.uuid}>
                        {getitem.ten && getitem.ten_khoa_hoc ? `${getitem.ten} - ${getitem.ten_khoa_hoc}` : getitem.ten || getitem.ten_khoa_hoc}
                    </option>              
                  </React.Fragment>
            ))}

        </>
    )
}

