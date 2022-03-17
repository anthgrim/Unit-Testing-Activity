const greet = require("./scripts")

describe('Greeting function tests', () => {
    const singleName = "Elizabeth";
    const nullName = "";
    const upperName = "JOSE";
    const twoNames = ["Jose", "Pep"];
    const names = ["Jose", "Pep", "Julius", "Maria"];

    //Test 1 - Test regular single name
    it("Should return Hello, Elizabeth", () => {
        expect(greet(singleName)).toBe("Hello, Elizabeth");
    });

    //Test 2 - Test for nulls
    it("Should return Hello there!", () => {
        expect(greet(nullName)).toBe("Hello there!");
    });

    //Test 3 - Test for upper case
    it("Should return HELLO JOSE!", () => {
        expect(greet(upperName)).toBe("HELLO JOSE!")
    })

    //Test 4 - Test for two names passed in array
    it("Should return Hello, Jose, Pep", () => {
        expect(greet(twoNames)).toBe("Hello, Jose, Pep");
    });

    //Test 5 - Test for lenghty array (length more than 2)
    it("Should return Hello, and all the names in array", () => {
        expect(greet(names)).toBe("Hello, Jose, Pep, Julius, Maria")
    })

})