import { assert } from "chai";
import ReqresAPI from "$root/pages/reqress.api";
import * as data from "$root/data/user.data";
import * as lib from "$helper/lib-api.js";

describe ('As a guest, I want to register', ()=>{
    it('Should succesfully register using valid account', async() => {
        const response = await ReqresAPI.register(data.VALID_REGISTER);
        var x = lib.getParams("https://www.google.com/search?q=google&oq=goog")
        console.log(x);

        assert.isTrue(x.has('oq'));
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["id", "token"]);
        assert.isNumber(response.data.id);
        assert.isString(response.data.token);
    });
});