import { instence } from "./axios";
import queryString from "query-string";

const token_login = localStorage.getItem("token")

export const add_user = (data, class_id, family_id, genus_id,kingdom_id,order_id,phylum_id,sach_dos,iucns ) => {
  const newuser = {
    toa_dos:[],
    ten_khoa_hoc: data.ten_khoa_hoc,
    ten_tac_gia: data.ten_tac_gia,
    ten_dia_phuong: data.ten_dia_phuong,
    ten: data.ten,
    nguon_du_lieu: data.nguon_du_lieu,
    class_id:class_id,
    family_id:family_id,
    genus_id:genus_id,
    kingdom_id:kingdom_id,
    order_id:order_id,
    phylum_id:phylum_id,
    sach_dos:sach_dos,
    iucns:iucns,
  }
  instence.post('/species', newuser, { headers: { Authorization: `Bearer ${token_login}` } })
    .then(response => response.data)
    .catch(err => { return err })
}



export const deleteUser = (id) => {
  instence.delete(`/species/${id}`, { headers: { Authorization: `Bearer ${token_login}` } })
    .then(response => response.data)
    .catch(err => { return err })
}


export const UpdateUser = (id,data, class_id,family_id, genus_id,kingdom_id,order_id,phylum_id,sach_dos,iucns ) => {
  const updata = {
    id:id,
    toa_dos:[],
    ten_khoa_hoc: data.ten_khoa_hoc,
    ten_tac_gia: data.ten_tac_gia,
    ten_dia_phuong: data.ten_dia_phuong,
    ten: data.ten,
    nguon_du_lieu: data.nguon_du_lieu,
    class_id:class_id,
    family_id:family_id,
    genus_id:genus_id,
    kingdom_id:kingdom_id,
    order_id:order_id,
    phylum_id:phylum_id,
    sach_dos:sach_dos,
    iucns:iucns,
  }
  instence.update('/species', updata, { headers: { Authorization: `Bearer ${token_login}` } })
    .then(response => response.data)
    .catch(err => { return err })

}




export const Apilits = async (page, search, perpage) => {
  const query = queryString.stringify({
    perpage:perpage,
    paginate: true,
    inactive:-1,
    page: page,
    search: search,
  
  })
  const dataQueryparams = queryString.stringify({
    with: 'roles,createdBy'
  },
  {
    encode :false,
  }
  )

  const fullQueryparams = query + "&" + dataQueryparams;
  try {
    const res = await instence
      .get(`/species?${fullQueryparams}`, {
        headers: {
          Authorization: `Bearer ${token_login}`
        },
      });
    if (res.data === undefined) {
      throw new Error("Kiểm tra dữ liệu trả về có tìm thấy không");
    }
    return res.data;
  } catch (error) {
    console.error("Lỗi khi gọi API", error);
    throw error;
  }
}

