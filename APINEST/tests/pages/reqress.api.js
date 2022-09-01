import BaseAPI from "./base.api";
import {user_id} from "$root/scenarios/user.test";

const ReqresAPI = {
    register: (data) => BaseAPI.post('/register', data),
    user_create: (data) => BaseAPI.post('/users', data),
    user_get: () => BaseAPI.get('/users/'+2),
    user_put: (data) => BaseAPI.put('/users/2', data),
    user_patch: (data) => BaseAPI.patch('/users/2', data),
    user_delete: () => BaseAPI.delete('/users/2'),
}

export default ReqresAPI;