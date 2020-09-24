import delay from 'redux-saga';

describe("The question list", () => {
    beforeEach(()=>{
        // console.log("Before each!");
    })
    beforeAll(()=>{
        // console.log("Before All!");
    })
    afterEach(()=>{
        // console.log("after each!");
    })
    afterAll(()=>{
        // console.log("after All!");
    })


    it("should display a list of items", () => {
        expect(2+2).toEqual(4);
    });

    it("should asdhfahksdfhdskh a list of items", () => {
        expect(2+2).toEqual(4);
    });

    it("async test 1", done => {
        setTimeout(done, 100);
    });

    it("async test 2", () => {
        return new Promise(
            resolve => setTimeout(resolve, 1500)
        );
    });

    it("async test 3", async () =>
        await delay(100)
    );
});