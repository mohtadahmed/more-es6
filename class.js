// Defining a Class
class Instructor{
    name;
    designation = 'Web Course Instructor';
    team = 'Web Team';
    location;
    constructor(objectName, objectLocation){
        this.name = objectName;
        this.location = objectLocation;
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}


const khan = new Instructor('Amir Khan', 'Mumbai');
console.log(khan);
khan.startSupportSession('9.00');
khan.createQuiz(50);

const solaiman = new Instructor('Solaiman Khan', 'Dhaka');
console.log(solaiman);
