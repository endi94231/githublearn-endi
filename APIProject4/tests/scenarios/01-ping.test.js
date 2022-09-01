import { assert } from "chai";
import herokuappAPI from "$root/pages/herokuapp.api";

describe ('As a guest, I want to confirm whether the API is up and running', ()=>{
    it('Should succesfully to confirm the API is up', async() => {
        const response = await herokuappAPI.ping_get();

        assert.equal(response.status, 201);
        assert.equal(response.data, "Created");
    });
});