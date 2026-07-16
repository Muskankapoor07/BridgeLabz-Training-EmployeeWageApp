console.log("Employee Wage Project Started");

const IS_PRESENT = 1;
const PART_TIME = 1;
const FULL_TIME = 2;
const WAGE_PER_HOUR = 20;

function getWorkHours() {
    let empCheck = Math.floor(Math.random() * 3);

    switch (empCheck) {
        case PART_TIME:
            return 4;

        case FULL_TIME:
            return 8;

        default:
            return 0;
    }
}

function calculateDailyWage() {

    let employeeCheck = Math.floor(Math.random() * 2);

    if (employeeCheck == IS_PRESENT) {

        console.log("Employee is Present");

        let empHours = getWorkHours();
        let empWage = empHours * WAGE_PER_HOUR;

        console.log("Employee Hours = " + empHours);
        console.log("Daily Employee Wage = $" + empWage);

    } else {

        console.log("Employee is Absent");
        console.log("Employee Hours = 0");
        console.log("Daily Employee Wage = $0");
    }
}


calculateDailyWage();