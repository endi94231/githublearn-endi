import { assert } from "chai";
import ReqresAPI from "$root/pages/reqress.api";
import * as data from "$root/data/user.data";

var user_id;

describe ('As a guest, I want to create user', ()=>{
    it('Should succesfully create user', async() => {
        const response = await ReqresAPI.user_create(data.CREATE_USER);

        console.log(response.data.id);
        user_id = response.data.id;
        assert.equal(response.status, 201);
    }); 
});

export var user_id;

describe ('As a guest, I want to get user', ()=>{
    it('Should succesfully get user', async() => {
        const response = await ReqresAPI.user_get();
        
        console.log(response.data)
        assert.equal(response.status, 200);
        
    });
});

describe ('As a guest, I want to put user', ()=>{
    it('Should succesfully put user', async() => {
        const response = await ReqresAPI.user_put(data.UPDATE_USER);

        assert.equal(response.status, 200);
    });
});

describe ('As a guest, I want to patch user', ()=>{
    it('Should succesfully patch user', async() => {
        const response = await ReqresAPI.user_patch(data.PATCH_USER);

        assert.equal(response.status, 200);
    });
});

describe ('As a guest, I want to delete user', ()=>{
    it('Should succesfully delete user', async() => {
        const response = await ReqresAPI.user_delete();

        assert.equal(response.status, 204);
    });
});