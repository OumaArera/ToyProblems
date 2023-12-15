// User is promted to enter a number from 0 - 100
// Global variable
let studentScore = prompt("Enter the student's score (0-100): ");


const studentGrading = function (marks){

    // Checks that the input is a number else it throws an error.
    if (isNaN(marks)){
    console.log("Student's marks must be a number");

    // Checks the user input and confirms that it is a number from 0-100.
    // If the number doesn't not satisfy the requirement, it does not grade
    }else if (marks < 0 || marks > 100){
        console.log("Student's marks must be a number ranging from 0 to 100");
    
    // Checks that student's marks is above 79 and grades A
    }else if (marks > 79){
        console.log("Grade: A \nExcellent!");

    // Checks that student's marks is above 59 and grades B
    }else if (marks > 59){
        console.log("Grade: B \nVery Good!");

    // Checks that student's marks is above 49 and grades C
    }else if (marks > 49){
        console.log("Grade: C \nGood!");

    // Checks that student's marks is above 39 and grades D
    }else if (marks > 39){
        console.log("Grade: D\nPass!");

    // Checks that student's marks is 39 or below and grades E
    }else if (marks >=0){
        console.log("Grade: E \nFail!");
    }

}
studentGrading(studentScore);