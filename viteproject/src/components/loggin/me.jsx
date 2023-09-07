import  { useEffect, useState } from "react"
import axios from "axios" 

const token_acset= localStorage.getItem('token')

export default function ME() {  
        axios.get("https://wlp.howizbiz.com/api/me",{
            headers:{
                Authorization: `Bearer ${token_acset}`,
            }
        })
         .then(res => {const data =res.data;
            localStorage.setItem('userMe',JSON.stringify(data.user))
            return data}
            
            )

         .catch(err=>console.log(err))
}