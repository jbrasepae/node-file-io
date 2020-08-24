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
        });
        return "file is saved"     
    }
}
function load(FullName){
    let theirFullNames = FullName.toLowerCase().split(" ").join("_"); 
    fs.readFile(`./visitor_${theirFullNames}.json`, 'utf8', (err, data) => {
       if (err) {
               throw Error("invalid data");
           }
           else{
           console.log(data);
        } 
    });
}

let alice = new Visitor('Alice Cooper', 20, '15/03/2020', '11h00', 'great service', 'Boitumelo');
alice.save();
load("Alice Cooper");

let bob = new Visitor('Bob Marley', 19, '10/09/2019', '09H00', 'keep up the good work', 'Jeanette');
bob.save();
load("Bob Marley");

let charlie = new Visitor('Charley Sheen', 22, '20/04/2019', '10h30', 'amazing work', 'Bontle');
charlie.save();
load("Charley Sheen");

module.exports = {Visitor, load};