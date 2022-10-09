// Common Property of Objects
class TeamMember {
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}


class Instructor extends TeamMember{
    designation = 'Web Course Instructor';
    team = 'Web Team';

    constructor(name,location){
        super(name, location);
    }
    
    startSupportSession(time){
        console.log(`Start the support session at ${time}`)
    }
    
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}



class Developer extends TeamMember{
    designation = 'Web Course Instructor';
    team = 'Web Team';
    tech;

    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    
    developFeature(feature){
        console.log(`Please develop the ${feature}`)
    }
    
    release(version){
        console.log(`Please release the version ${version}`)
    }
}



class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos';
    team = 'Job Placement';
    region;

    constructor(name, location, region){
        super(name,location);
        this.region = region;
    }

    provideResume(resume){
        console.log(`Please develop the ${resume}`)
    }

    prepareStudent(guideline){
        console.log(`Please release the version ${guideline}`)
    }
}


const alia = new Instructor('Alia Bhat', 'Dhaka');
console.log(alia);


const pritty = new Developer('Pritty Jinta', 'Bangladesh', 'React');
console.log(pritty);


const katrina = new JobPlacement('Katrina Kaif', 'Chittagong', 'USA');
console.log(katrina);