const students = {
    name: 'Abdul Kuddus',
    age: 15,
    class: 'Ten',
    marks:{
        math: 85,
        physics: 92,
        chemistry: 69,
        bangla: 88,
        english: 89,
    }
}


// Accessing Marks using Dot Notation
const marks = students.marks.bangla;
// console.log(marks);

const physicsMarks = students.marks.physics;
// console.log(physicsMarks);



// Accessing Marks using Bracket Notation
const chemistry = students['marks']['chemistry'];
// console.log(chemistry);

const banglaMarks = students['marks']['bangla'];
// console.log(banglaMarks);

// Assigning variable for accessing the element in an object
const subject = 'english';
const englishMarks = students['marks'][subject];
console.log(englishMarks);