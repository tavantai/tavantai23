const validate = (dataForm) => { 
    const errors = {}; 
    
    if (!dataForm.ten) { 
     errors.ten = "Trường tên không được bỏ trống."; 
    } 
    
    if (!dataForm.ten_khoa_hoc) { 
     errors.ten_khoa_hoc = "Trường tên khoa học không được bỏ trống."; 
    } 
    
    if (!dataForm.kingdom) { 
     errors.gioi = "Trường giới không được bỏ trống."; 
    } 
    
    if (!dataForm.phylum) { 
     errors.nganh = "Trường ngành không được bỏ trống."; 
    } 
    
    if (!dataForm.class) { 
     errors.lop = "Trường lớp không được bỏ trống."; 
    } 
    
    if (!dataForm.order) { 
     errors.bo = "Trường bộ không được bỏ trống."; 
    } 
    
    if (!dataForm.family) { 
     errors.ho = "Trường họ không được bỏ trống."; 
    } 
    
    if (!dataForm.genus) { 
     errors.chi = "Trường chi không được bỏ trống."; 
    } 
    
    return errors; 
   };  
   export default validate;