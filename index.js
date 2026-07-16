console.log("Employee Wage Project Started");

const PART_TIME = 1;
const FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
const MAX_HOURS = 160;
const MAX_WORKING_DAYS = 20;

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
    let totalWorkingDays = 0;

    while (totalEmpHours < MAX_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {

        totalWorkingDays++;

        let empHours = getWorkHours();
        totalEmpHours += empHours;

        console.log(
            "Day " + totalWorkingDays +
            " : Hours Worked = " + empHours
        );
    }

    let totalEmpWage = totalEmpHours * WAGE_PER_HOUR;

    console.log("---------------------------");
    console.log("Total Working Days = " + totalWorkingDays);
    console.log("Total Working Hours = " + totalEmpHours);
    console.log("Monthly Employee Wage = $" + totalEmpWage);
}

calculateMonthlyWage();