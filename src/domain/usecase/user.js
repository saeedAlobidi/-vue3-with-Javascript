


export default ({ services, repos }) => {
 

  const updateUser = services.asyncHandler(
    async ( id ) => {

      const data = await repos.userRepos.getUser(id)
      const status = await repos.userRepos.updatedbUser({ key:"user",val: data })
      return status;

    });


  return { updateUser };

}

