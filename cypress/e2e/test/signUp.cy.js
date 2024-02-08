//import { register } from "../../pages/signUp";
import { register } from "../../pages/signUp";

const registerObj = new register();
describe("register test", function () {
    it('sign flow automation', () =>{
        registerObj.openURL();
        registerObj.clickSignUp();
        registerObj.enterUsername('Amin');
        registerObj.enterPassword(1111);
        registerObj.clickSignupSubmit();
    })

})
