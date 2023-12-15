// Calculates Net salary
const netSalaryCalculator = (annualBasicSalary, annualBenefits, annualDisabilityExempltion) => {

    // Contribution benefit
    const contributionBenefit = 1080*12;

    // Calculates annual gross salary
    const annualGrossTaxableIncome = parseFloat(annualBasicSalary) + parseFloat(annualBenefits)-contributionBenefit;

    // Calculating PAYE annually
    let annualPaye;

    if(annualGrossTaxableIncome <= 288000){
        annualPaye = annualGrossTaxableIncome * 0.1;

    } else if (annualGrossTaxableIncome > 288000 && annualGrossTaxableIncome <= 388000){
        annualPaye = (288000 * 0.1) + ((annualGrossTaxableIncome - 288000) * 0.25);

    } else if(annualGrossTaxableIncome > 388000 && annualGrossTaxableIncome <= 6000000){
        annualPaye = (288000 * 0.1) + (100000 * 0.25) + ((annualGrossTaxableIncome - 388000) * 0.3);

    } else if(annualGrossTaxableIncome > 6000000 && annualGrossTaxableIncome <= 9600000){
        annualPaye = (288000 * 0.1) + (100000 * 0.25) + (2120000 * 0.3) + ((annualGrossTaxableIncome - 6000000) * 0.325);

    } else {
        annualPaye = (288000 * 0.1) + (100000 * 0.25) + (2120000 * 0.3) + (3600000 * 0.325) + ((annualGrossTaxableIncome - 9600000) * 0.35);

    }

    // Calculating NHIF annual deductions
    let annualNHIF;

    if(annualGrossTaxableIncome <= 71988){
        annualNHIF = 150*12;
    } else if (annualGrossTaxableIncome > 71988 && annualGrossTaxableIncome <= 95988){
        annualNHIF = 300*12;
    } else if(annualGrossTaxableIncome > 95988 && annualGrossTaxableIncome <= 143988){
        annualNHIF = 400*12;
    } else if(annualGrossTaxableIncome > 143988 && annualGrossTaxableIncome <= 179988){
        annualNHIF = 500*12;
    } else if(annualGrossTaxableIncome > 179988 && annualGrossTaxableIncome <= 239988){
        annualNHIF = 600*12;
    } else if(annualGrossTaxableIncome > 239988 && annualGrossTaxableIncome <= 299988){
        annualNHIF = 750*12;
    } else if(annualGrossTaxableIncome > 299988 && annualGrossTaxableIncome <= 419988){
        annualNHIF = 850*12;
    } else if(annualGrossTaxableIncome > 419988 && annualGrossTaxableIncome <= 479988){
        annualNHIF = 950*12;
    } else if(annualGrossTaxableIncome > 479988 && annualGrossTaxableIncome <= 539988){
        annualNHIF = 1000;
    } else if(annualGrossTaxableIncome > 539988 && annualGrossTaxableIncome <= 599988){
        annualNHIF = 1100*12;
    } else if(annualGrossTaxableIncome > 599988 && annualGrossTaxableIncome <= 719988){
        annualNHIF = 1200*12;
    } else if(annualGrossTaxableIncome > 719988 && annualGrossTaxableIncome <= 839988){
        annualNHIF = 1300;
    } else if(annualGrossTaxableIncome > 839988 && annualGrossTaxableIncome <= 959988){
        annualNHIF = 1400*12;
    } else if(annualGrossTaxableIncome > 959988 && annualGrossTaxableIncome <= 1079988){
        annualNHIF = 1500*12;
    } else if(annualGrossTaxableIncome > 1079988 && annualGrossTaxableIncome <= 1199988){
        annualNHIF = 1600*12;
    } else {
        annualNHIF = 1700*12;
    }

    //Calculating NSSF Annual Deductions
    let annualNSSF = annualGrossTaxableIncome * .06;
    if (annualNSSF > (6000*12)){
        annualNSSF = 6000*12;
    }

    // Calculating Annual housing levy
    let annualHousingLevy = annualGrossTaxableIncome * 0.015

    // Personal tax relief 
    const annualPersonalRelief = 2400*12;

    //Calculating Annual net salary
    let annualNetSalary = annualGrossTaxableIncome - annualPaye - annualNHIF - annualNSSF - annualHousingLevy + annualPersonalRelief + annualDisabilityExempltion;
    let monthlyNetSalary = annualNetSalary/12;
    console.log(`Net Annual Salary = ${annualNetSalary}`);
    console.log(`Net Monthly Salary = ${monthlyNetSalary}`);
    
}

// For a person earning 1.2m (KES 100,000) annual as basic salary
// The person has a montly benefit of KES 20,000 ie KES 240,000 annualy
// The person has no disability. I found it quite insensitive to ignore persons enabled differently
netSalaryCalculator(1200000, 240000, 0)