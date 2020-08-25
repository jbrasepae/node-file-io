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
module.exports = {Visitor, load};