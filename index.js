const parser = require("simple-excel-to-json");
const json2xls = require("json2xls");
const fs = require("fs");

var option = {
    isToCamelCase: true,
}

const document = parser.parseXls2Json("./SET_D.xlsx", option)[0];

const formattedDoc = document.map((emp) => {
    return {
        name: emp.fullName,
        empId: emp.eEID,
        gender: emp.gender,
        country: emp.country,
        city: emp.city,
        salary: emp.annualSalary,
    };
});

const salAbove = formattedDoc.filter(emp => emp.salary > 100000);
const salBelow = formattedDoc.filter(emp => emp.salary <= 100000);

var empDetails = {
    salaryAbove: [],
    salaryBelow: [],
};

salAbove.map(function(emp) {
    empDetails.salaryAbove.push(emp);
});

salBelow.map(function(emp) {
    empDetails.salaryBelow.push(emp);
});

console.log(empDetails);