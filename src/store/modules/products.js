import axiosApi from "@/config"

export const state = {
    products:[],
    spinner:false
}
export const getters = {
    GET_PRODUCTS : (state) => state.products,
    GET_SPINNER : (state) => state.spinner
}
export const mutations = {
    SET_PRODUCTS : (state,data) => state.products = data,
    SET_SPINNER : (state,data) => state.spinner = data
   
}
export const actions = {
    async getProducts({commit}){
        try{
         commit('SET_SPINNER',true)
            let response=await axiosApi.get("products")
            if(response.status == 200){
                console.warn(response.data)
                commit('SET_PRODUCTS',response.data)
            }
        }catch(e){
            console.warn(e)
        }finally{
            commit('SET_SPINNER', false)
        }
    }

}
