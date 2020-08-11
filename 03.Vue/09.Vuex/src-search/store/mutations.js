const mutations = {
    REQUESTING(state){
        state.isFirstView=false;
        state.isLoading=true;
    },
    REQUESET_SUCCESS(state,payload){
        state.isLoading=false;
        state.users=payload;
    },
    REQUEST_ERROR(state,payload){
        state.isLoading=false;
        state.users=null;
        state.error='网络出现故障....';
    }
}

export default mutations;