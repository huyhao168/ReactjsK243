import Http from "./Http"
export const getProducts=(config)=>Http.get("/products",config);