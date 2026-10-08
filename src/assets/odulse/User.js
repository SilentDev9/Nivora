const User ={
  namespaced:true,
   state:{
    user:null
   },
   mutationd:{
    SET_USER(state,user){
      state.user = user
    },
    CLEAR_USER(state){
      state.user= null
    }
   },
   getters:{
    user(state){
      return state.user
    }
   }
}

export default User
