import React, { useEffect, useState } from 'react'
import axios from "axios"

const token_acset = localStorage.getItem('token')
const nam = [{ name: 2023 },
{ name: 2022 },
{ name: 2021 },
{ name: 2020 },
{ name: 2019 },
{ name: 2018 },
{ name: 2017 },
{ name: 2016 },
{ name: 2015 },
{ name: 2014 },
{ name: 2013 },
{ name: 2012 },
{ name: 2011 },
{ name: 2010 },
{ name: 2009 },
{ name: 2008 },
{ name: 2007 },
{ name: 2006 },
{ name: 2005 },
{ name: 2004 },
{ name: 2003 },
{ name: 2002 },
{ name: 2001 },
{ name: 1999 },
{ name: 1998 },
{ name: 1997 },
{ name: 1996 },
{ name: 1995 },
{ name: 1994 },
]


export function Gioi({ datagioi }) {
    const [gioi, setgioi] = useState([])
    useEffect(() => {
        axios.get(`https://wlp.howizbiz.com/api/phanloaihoc?${datagioi}`, {
            headers: {
                Authorization: `Bearer ${token_acset}`,
            }
        })
            .then((res) => {
                setgioi(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [datagioi]);

    return (
        <>
            {gioi.map((getitem, index) => (
                <React.Fragment key={getitem.uuid}>
                    <option value={getitem.uuid}>
                        {getitem.ten && getitem.ten_khoa_hoc ? `${getitem.ten} - ${getitem.ten_khoa_hoc}` : getitem.ten || getitem.ten_khoa_hoc}
                    </option>
                </React.Fragment>
            ))}

        </>
    )
}












