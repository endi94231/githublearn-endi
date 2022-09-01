import { assert } from "chai";
import herokuappAPI from "$root/pages/herokuapp.api";
import * as data from "$root/data/booking.data";

describe ('As a guest, I want to create a booking', ()=>{
    it.only('Should succesfully create a booking, and receive booking id', async() => {
        const response = await herokuappAPI.booking_post(data.VALID_BOOKING);

        console.log(response.data);
        assert.equal(response.status, 200);
    });
});

// describe ('As a guest, I want to see booking details', ()=>{
//     it('Should display booking details"', async() => {
//         const userId = await getUserId
//         const response = await herokuappAPI.auth_detail_get(userId);

//         assert.equal(response.status, 200);
//     });
// });