export default (T)=>{

    return {
        namespaced: true,
    
        state: T,
        mutations: {

            SET_OBJECT(state,data){
                Object.assign(state[data.key],data.val)
            },
            
            SET_ARRAY(state,data){
                state[data.key].splice(0)
                state[data.key].push(...data.val)
            },
            SET_VARIABLE(state,data){
                state[data.key]=data.val
            },

            INCRESS_ARRAY(state,data){
                state[data.key].push(...data.val)
            },
            
          
            
           
        },
    
        actions: {
            setObject({commit},data) {return commit('SET_OBJECT',data)},
            setArray({commit},data) {return commit('SET_ARRAY',data)},
            setVariable({commit},data) {return commit('SET_VARIABLE',data)},
            incrArray({commit},data) {return commit('INCRESS_ARRAY',data)},
    
        },
    
        getters: {
            get: state => () => state[T]
        },
    
      }
}