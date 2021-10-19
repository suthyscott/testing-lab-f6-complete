const {returnTwo, greeting, add, subtract, divide, multiply} = require('./functions')

describe("Math Operations", ()=>{
    test("Should add two numbers and return the sum", ()=>{
        expect(add(1,2)).toBe(3)
        expect(add(5,9)).toBe(14)
    })

    test('Should subtract the second number from the first and return the result', ()=>{
        expect(subtract(2,1)).toBe(1)
        expect(subtract(18,3)).toBe(15)
    })

    test('Should divide the first number by the second', ()=>{
        expect(divide(49, 7)).toBe(7)
        expect(divide(100, 10)).toBe(10)
    })

    test('Should multiply two numbers and return the result', ()=>{
        expect(multiply(3,4)).toBe(12)
        expect(multiply(3,2)).toBe(6)
    })
    
})


test('Should return 2', ()=> {
    expect(returnTwo()).toBe(2)

    expect(greeting("James")).toEqual("Hello, James")
    expect(greeting('Jill')).toEqual('Hello, Jill')
})