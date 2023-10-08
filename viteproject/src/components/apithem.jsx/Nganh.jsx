import React, { useEffect, useState } from "react";
import axios from "axios";
const token_acset = localStorage.getItem("token");
export function Nganh({ datanganh }) {
  const [nganh, setNganh] = useState([]);
  useEffect(() => {
    axios
      .get(`https://wlp.howizbiz.com/api/phanloaihoc?${datanganh}`, {
        headers: {
          Authorization: `Bearer ${token_acset}`,
        },
      })
      .then((res) => {
        setNganh(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      {nganh.map((getitem) => (
        <React.Fragment key={getitem.uuid}>
          <option value={getitem.uuid}>
            {getitem.ten && getitem.ten_khoa_hoc
              ? `${getitem.ten} - ${getitem.ten_khoa_hoc}`
              : getitem.ten || getitem.ten_khoa_hoc}
          </option>{" "}
        </React.Fragment>
      ))}
    </>
  );
}
