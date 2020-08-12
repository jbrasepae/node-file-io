let fs = require('fs')

class Visitor{
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, assistedBy){
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.assistedBy = assistedBy;
    }

    save(){
        let nameOfFiles = this;
        let dataOfFiles = JSON.stringify(nameOfFiles, "\n", 4);
        var theirFullNames = this.fullName.split(" ").join("_");

        fs.writeFile(`visitor_${theirFullNames}.json`, dataOfFiles, (err) =>{
            if(err) {
                throw(Error + 'data was not saved')
            }
            else{
            console.log("data is saved")
            }
        });
        
    }
}

function load(name){
      var fullName = name.split(" ").join("_");
     fs.readFile(`./visitor_${fullName}.json`, 'utf8', (err, jsonData) => {
        if (err) {
                throw err;
            }
            console.log("data loaded", jsonData); 
        })

}

let alice = new Visitor('alice cooper', 20, '15/03/2020', '11h00', 'great service', 'Boitumelo');
alice.save();
load("alice cooper")

let bob = new Visitor('bob marley', 18, '10/09/2019', '09H00', 'how to apply', 'Jeanette');
bob.save();
load("bob marley");

let charlie = new Visitor('charley sheen', 22, '20/04/2019', '10h30', 'which department does umuzi offer', 'Bontle');
charlie.save();
load("charley sheen")