const { TestWatcher } = require("jest")

describe("Test Suite Dummy Description", () => {
    TestWatcher('Case 1 Dummy', () => {
        const resultOfSomething = 1 + 2
        expect(resultOfSomething).toBe(18)
    })
})