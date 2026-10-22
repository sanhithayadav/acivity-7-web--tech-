const student = require("./students");
const getMarks = require("./results");

async function displayResult() {
    try {
        const marks = await getMarks();

        let total = 0;

        for (let i = 0; i < marks.length; i++) {
            total += marks[i];
        }

        const average = total / marks.length;

        console.log("Student ID:", student.id);
        console.log("Student Name:", student.name);
        console.log("Marks:", marks);
        console.log("Total Marks:", total);
        console.log("Average Marks:", average);

        if (marks.every(mark => mark >= 40)) {
            console.log("Result: PASS");
        } else {
            console.log("Result: FAIL");
        }

    } catch (error) {
        console.log("Error:", error.message);
    }
}

displayResult();