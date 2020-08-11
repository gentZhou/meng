import axios from 'axios'

const actions = {
    search({ commit }, searchName) {
        commit(REQUESTING);

        axios
            .get(`https://www.baidu.com/${searchName}`)
            .then((result) => {
                commit(RESQUEST_SUCCESS, result.data.items);
            })
            .catch((err) => {
                commit(REQUES_ERROR, err)
            });
    },
}

export default actions;