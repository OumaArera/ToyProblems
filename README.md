# ToyProblems

# Wk1-FridayAssignment

# Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

# Solution
# studentGradeGenerator.js

1. Declare a global variable that prompts user to enter a number. We use prompt() method. The variable is #studentScore
2. Declare a function, #studentGrading, that checks the grading. We pass marks as a parameter to the function
3. We need to ensure that the input is a number, because it is possible that somebody enters something that is not a number. So we use isNaN() method to check that marks is a number. If it is not, then we let the user know that they must enter a number.
4. Now we need to ensure that the number entered is from 0 to 100. So we use an if statement to check that the user input, marks, is greater than or equal to zer0 and also less than or equal to 100. If it doesn't satisfy that then we need to throw a log as an error.
5. Now that the first two set of conditions are not violated, we need to check that marks is greater than 79. If it is then the student is gets grade A. If it is not then we go to the next condition.
6. If the previous condition was not met then we'll check to see if marks is greater than 59 and less than  or equal to 79. If that is met then the student gets grade B. Otherwise, we move to the next condition.
7. Here we will check if the student's marks is greater than 49 and is less than or equal to 59. If that is met then the student is awarded Grade C.
8. We now check to see if the student's marks is greater than 39 and is less than or equal to 49. If so then the student is graded D.
9. Finally we check if marks is less than or equal to 39. The student is graded E.
10. We then call the our function by passing in #studentScore as an argument.


 

# Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

# Solution
# speedDetector.js

1. We declare a global variable, #limit, and assign it 70 i.e 70km/h.
2. We declare a function, #speedCheck, that checks speed of a driver. We pass #speed as a parameter
3. We declare a variable called speedDiference = speed - limit
4. Declare a variable demeritPoint and initialize it at zero
5. Check if speed(driver's speed) is less than or equal to limit. If it is then log "OK"
6. In case the previous condition is false, we calsculate demeritPoints by assigning 1 point for every 5km/h on top of 70. We use Math.floor() method and pass speedDiference as an argument. We log the points to the driver.
7. Check if the demeritPoints are greater than 12. If that is true then we log "License Suspended"
8. Call the function by passing the driver's speed as argument.

 

# Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

Links to an external site.-  Links to an external site.Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

# Solution
# netSalaryCalculator.js

1. Declare a function, netSalaryCalculator, and pass in three parameters i.e annualBasicSalary, annualBenefits, annualDisabilityExemption.
2. Declare a constant variable, annualContributionBenefit and assign it annual contribution benefit which is 1080 per month.
3. Declare a variable, annualGrossTaxableIncome, that calculates the annual gross taxable income.
4. Calculate PAYE. The conditions check where an employee's contribution fall and calculate the amount they should pay as PAYE.
5. Calculate annual NHIF contribution depending on the member's income.
6. Calculate annual NSSf contribution. It should be 6% of the annual gross taxable income but in case it goes above 6,000 then we reassign annualNSSF variable to 6,000 because that is the maximum a member should contribute.
7. Declare a variable, annualHousingLevy that calculates the total amount that a member should contribute in a year. It is 1.5% of the annual gross taxable income.
8. Declare a constant variable, annualPersonalRelief, and assign it annual personal tax relief. Tax relief per mont is 2400.
9. Declare a variable, annualNetSalary, that calculates annual net salary by deducting paye, nhif, nssf, housingLevy, and adding personal tax relief.
10. Declare a variable, monthlyNetSalary, that calculates net monthly salary by dividing annualNetSalary by 12 months.
11. Call our function by passing in annual basic pay, annual benefits, and annual disability exemption in case one is enabled differently.




