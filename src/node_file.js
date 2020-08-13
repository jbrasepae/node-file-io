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
        let theirFullNames = this.fullName.toLowerCase().split(" ").join("_");
        fs.writeFile(`visitor_${theirFullNames}.json`, JSON.stringify(this, "\n", 4), (err) =>{
            if(err) {
                throw Error('file was not saved');
            }
            // else{
            // console.log("file is saved");
            // }
        });
        return "file is saved"     
    }

     load(FullNames){
        let theirFullNames = FullNames.toLowerCase().split(" ").join("_"); 
        fs.readFile(`./visitor_${theirFullNames}.json`, 'utf8', (err, data) => {
           if (err) {
                   throw Error("invalid data");
               }
               else{
               console.log(data);
               } 
        });
    }
}

let alice = new Visitor('Alice Cooper', 20, '15/03/2020', '11h00', 'great service', 'Boitumelo');
alice.save();
alice.load("Alice Cooper")

let bob = new Visitor('Bob Marley', 18, '10/09/2019', '09H00', 'keep up the good work', 'Jeanette');
bob.save();
bob.load("Bob Marley");

let charlie = new Visitor('Charley Sheen', 22, '20/04/2019', '10h30', 'amazing work', 'Bontle');
charlie.save();
charlie.load("Charley Sheen")

module.exports = {Visitor};