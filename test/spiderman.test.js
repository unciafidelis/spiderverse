const Spiderman = require('./../app/spiderman')

describe("Unit Tests for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        //Code that must be used to test the object to be
        //Creating Spiderman object instance
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

        //Code validation
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    })
    test('2) Create a Message with the actors name and studio', () => {
        const tomHoland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
        expect(tomHoland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studios") 
    })
})