console.log("Employee Wage Project Started");

const IS_PRESENT = 1;
const PART_TIME = 1;
const FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

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

function calculateMonthlyWage() {
    let totalEmpHours = 0;

    for (let day = 1; day <= NUM_OF_WORKING_DAYS; day++) {

        let employeeCheck = Math.floor(Math.random() * 2);

        if (employeeCheck == IS_PRESENT) {
            console.log("Day " + day + ": Employee Present");

            let empHours = getWorkHours();
            totalEmpHours += empHours;

        } else {
            console.log("Day " + day + ": Employee Absent");
        }
    }

    let totalEmpWage = totalEmpHours * WAGE_PER_HOUR;

    console.log("--------------------------------");
    console.log("Total Working Hours = " + totalEmpHours);
    console.log("Monthly Employee Wage = $" + totalEmpWage);
}

calculateMonthlyWage();