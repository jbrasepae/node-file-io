const {Visitor} = require('../src/node_file')
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
    it('save() should be defined', function(){
        expect(alice.save()).toBeDefined()
    })
    it(" should create and save file as json", function(){
        expect(alice.save()).toBe('file is saved')
    })
    // it(" should throw error when function cannot create file as json", function(){
    //     expect(save()).toThrow('file was not saved')
    // })
    // it(" should read the files data with the defined name", function(){
    //     jsonData = {
    //         "fullName": "Alice Cooper",
    //         "age": 20,
    //         "dateOfVisit": "15/03/2020",
    //         "timeOfVisit": "11h00",
    //         "comments": "great service",
    //         "assistedBy": "Boitumelo"
    //     }
    //     expect(alice.load('Alice Cooper')).toBe(jsonData)
    // })
})

