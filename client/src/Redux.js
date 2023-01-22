import { configureStore, createSlice } from '@reduxjs/toolkit'
const countSlice = createSlice({
  name: 'counter',
  initialState: {
    user: {name:'lolo'},
    isLoginLoading: false,
    products: [],
    customers: [],
    activeItemMenu: 0,
    lng:'en',
    update:false
  },
  reducers: {
    login(state, action) {
      state.user = action.payload
    },
    setIsLoginLoading(state, action) {
      state.isLoginLoading = action.payload
    },
    setProduct(state, action) {
      state.products = action.payload
    },
    setCustomers(state, action) {
      state.customers = action.payload
    },
    setActiveItemMenu(state, action) {
      state.activeItemMenu = action.payload
    },
    setLng(state,action){
      state.lng=action.payload
    }
    ,setUpdate(state,action){
      state.update=!state.update
    }
  },
})
export const actions = countSlice.actions
const store = configureStore({
  reducer: countSlice.reducer,
})
export default store
