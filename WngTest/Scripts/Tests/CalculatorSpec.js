/// <reference path="../Scripts/jasmine.js"/>
/// <reference path="../Calculator.js" />
/// <reference path="../jquery-1.10.2.min.js" />

describe("calculator functionality", function () {
    it("test even number", function () {
        var cal = new Calculator();
        cal.testEvenNumber(4);
        expect(cal.evenNumbers.length).toBe(1);
    });

    it("test not even number", function () {
        var cal = new Calculator();
        cal.testEvenNumber(3);
        expect(cal.evenNumbers.length).toBe(0);
    });

    it("test odd number", function () {
        var cal = new Calculator();
        cal.testOddNumber(3);
        expect(cal.oddNumbers.length).toBe(1);
    });

    it("test not odd number", function () {
        var cal = new Calculator();
        cal.testOddNumber(4);
        expect(cal.oddNumbers.length).toBe(0);
    });

    it("test E number", function () {
        var cal = new Calculator();
        cal.allceTest(3);
        expect(cal.allceNumbers).toEqual(['C']);
    });

    it("test C number", function () {
        var cal = new Calculator();
        cal.allceTest(5);
        expect(cal.allceNumbers).toEqual(['E']);
    });

    it("test Z number", function () {
        var cal = new Calculator();
        cal.allceTest(15);
        expect(cal.allceNumbers).toEqual(['Z']);
    });

    it("test fibonacci number", function () {
        var cal = new Calculator();
        cal.fibonacciTest(15);
        expect(cal.fibonacciNumbers).toEqual([0,1,1,2,3,5,8,13]);
    });
});