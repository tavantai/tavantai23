import axios from "axios";
export const  instence =axios.create(
    {
        baseURL:'https://wlp.howizbiz.com/api'
    }
)