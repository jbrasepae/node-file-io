const {Visitor, load} = require('../src/node_file');
let fs = require("fs");

let alice = new Visitor('Alice Cooper', 20, '15/03/2020', '11h00', 'great service', 'Boitumelo');

describe("Visitor", function(){
    it("should show Alice_Cooper as a fullname", function(){
        expect(alice.fullName).toBe("Alice Cooper")
    })
    it("should show the age 25", function(){
        expect(alice.age).toBe(20)
    })
    it("should show the date ",function(){
        expect(alice.dateOfVisit).toBe("15/03/2020")
    })
    it("should show the time ",function(){
        expect(alice.timeOfVisit).toBe("11h00")
    })
    it("should show the person who assisted the visitor", function(){
        expect(alice.assistedBy).toBe("Boitumelo")
    })
    it(" should create and save file as json", function(){
        expect(alice.save()).toBe('file is saved')
    })
})
describe('function load()', function(){
    it('should exists', function(){
        expect(load).toBeDefined()
    })
})
