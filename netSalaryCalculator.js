// Calculates Net salary
const netSalaryCalculator = (annualBasicSalary, annualBenefits, annualDisabilityExempltion, ) => {

    // Calculates annual gross salary
    const annualGrossSalary = parseFloat(annualBasicSalary) + parseFloat(annualBenefits);

    // Calculating PAYE annually
    let annualPaye;

    if(annualGrossSalary <= 288000){
        annualPaye = annualGrossSalary * 0.1;

    } else if (annualGrossSalary > 288000 && annualGrossSalary <= 388000){
        annualPaye = (288000 * 0.1) + ((annualGrossSalary - 288000) * 0.25);

    } else if(annualGrossSalary > 388000 && annualGrossSalary <= 6000000){
        annualPaye = (288000 * 0.1) + (100000 * 0.25) + ((annualGrossSalary - 388000) * 0.3);

    } else if(annualGrossSalary > 6000000 && annualGrossSalary <= 9600000){
        annualPaye = (288000 * 0.1) + (100000 * 0.25) + (2120000 * 0.3) + ((annualGrossSalary - 6000000) * 0.325);

    } else {
        annualPaye = (288000 * 0.1) + (100000 * 0.25) + (2120000 * 0.3) + (3600000 * 0.325) + ((annualGrossSalary - 9600000) * 0.35);

    }

    // Calculating NHIF annual deductions
    let annualNHIF;

    if(annualGrossSalary <= 71988){
        annualNHIF = 150*12;
    } else if (annualGrossSalary > 71988 && annualGrossSalary <= 95988){
        annualNHIF = 300*12;
    } else if(annualGrossSalary > 95988 && annualGrossSalary <= 143988){
        annualNHIF = 400*12;
    } else if(annualGrossSalary > 143988 && annualGrossSalary <= 179988){
        annualNHIF = 500*12;
    } else if(annualGrossSalary > 179988 && annualGrossSalary <= 239988){
        annualNHIF = 600*12;
    } else if(annualGrossSalary > 239988 && annualGrossSalary <= 299988){
        annualNHIF = 750*12;
    } else if(annualGrossSalary > 299988 && annualGrossSalary <= 419988){
        annualNHIF = 850*12;
    } else if(annualGrossSalary > 419988 && annualGrossSalary <= 479988){
        annualNHIF = 950*12;
    } else if(annualGrossSalary > 479988 && annualGrossSalary <= 539988){
        annualNHIF = 1000;
    } else if(annualGrossSalary > 539988 && annualGrossSalary <= 599988){
        annualNHIF = 1100*12;
    } else if(annualGrossSalary > 599988 && annualGrossSalary <= 719988){
        annualNHIF = 1200*12;
    } else if(annualGrossSalary > 719988 && annualGrossSalary <= 839988){
        annualNHIF = 1300;
    } else if(annualGrossSalary > 839988 && annualGrossSalary <= 959988){
        annualNHIF = 1400*12;
    } else if(annualGrossSalary > 959988 && annualGrossSalary <= 1079988){
        annualNHIF = 1500*12;
    } else if(annualGrossSalary > 1079988 && annualGrossSalary <= 1199988){
        annualNHIF = 1600*12;
    } else {
        annualNHIF = 1700*12;
    }

    //Calculating NSSF Annual Deductions
    let annualNSSF = annualGrossSalary * .06;

    // Calculating Annual housing levy
    let annualHousingLevy = annualGrossSalary * 0.015

    // Personal tax relief 
    const annualPersonalRelief = 2400*12;

    //Calculating Annual net salary
    let annualNetSalary = annualGrossSalary - annualPaye - annualNHIF - annualNSSF - annualHousingLevy + annualPersonalRelief + annualDisabilityExempltion;
    let monthlyNetSalary = annualNetSalary/12;
    console.log(`Net Annual Salary = ${annualNetSalary}`);
    console.log(`Net Monthly Salary = ${monthlyNetSalary}`);
    
}

// For a person earning 1.2m (KES 100,000) annual as basic salary
// The person has a montly benefit of KES 20,000 ie KES 240,000 annualy
// The person has no disability. I found it quite insensitive to ignore persons enabled differently
netSalaryCalculator(1200000, 240000, 0)