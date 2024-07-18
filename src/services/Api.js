import Http from "./Http"
export const getProducts=(config)=>Http.get("/products",config);
export const getCategories=(config)=>Http.get("/Categories",config);
export const getProductsCategory=(id,config)=>Http.get(`/Categories/${id}/Products`,config);
export const getCategory=(id,config)=>Http.get(`/Categories/${id}`,config);
export const getProduct=(id,config)=>Http.get(`/products/${id}`,config);