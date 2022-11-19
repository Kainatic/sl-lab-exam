const parser = require("simple-excel-to-json");
const json2xls = require("json2xls");
const fs = require("fs");

const document = parser.parseXls2Json("./EmployeeDetails.xlsx")[0];

const salaryAbove = document.filter(emp => emp.salary > 100000);
const salaryBelow = document.filter(emp => emp.salary <= 100000);

console.log(salaryAbove);
console.log(salaryBelow);

// const sortedDocument = document.sort((a, b) => b.CGPA - a.CGPA);

const empDetails = document.map((emp) => {
    if (seats[emp.OPTION_1] > 0) {
        emp.ELECTIVE = emp.OPTION_1;
        seats[emp.OPTION_1]--;
    } else if (seats[emp.OPTION_2] > 0) {
        emp.ELECTIVE = emp.OPTION_2;
        seats[emp.OPTION_2]--;
    } else if (seats[emp.OPTION_3] > 0) {
        emp.ELECTIVE = emp.OPTION_3;
        seats[emp.OPTION_3]--;
    } else if (seats[emp.OPTION_4] > 0) {
        emp.ELECTIVE = emp.OPTION_4;
        seats[emp.OPTION_4]--;
    }
    return emp;
});

// console.log(document);

/* const electiveAllotmentExcelData = json2xls(
    electiveAllotment.map((student) => {
        //Returning a new student object whose options value will be the subject name along with the seats available
        return {
            REGNO: student.REGNO,
            NAME: student.NAME,
            CGPA: student.CGPA,
            OPTION_1: student.OPTION_1_SEATS,
            OPTION_2: student.OPTION_2_SEATS,
            OPTION_3: student.OPTION_3_SEATS,
            OPTION_4: student.OPTION_4_SEATS,
            ELECTIVE: student.ELECTIVE,
        };
    })
); */

// fs.writeFileSync("ElectiveAllotment.xlsx", electiveAllotmentExcelData, "binary");