export default ({ constraints, store, api }) => {
 
    const getUser = async ( id ) => {
      const data = await api.get( "/" + id)
      return data;
    }
  
  
    const updatedbUser = async (data ) => {
      const status = store.dispatch('user/setObject', data)
      return status;
    }
  
  
    return { updatedbUser, getUser };
  
  }
  
  