// Set the speed limit to 70km/h
const limit = 70;

// Function checks drivers speed
const speedCheck = (speed) => {

    // Checks the difference between limit and the driver's speed
    const speedDiference = speed - limit;

    // Initialize the demerit points at 0
    let demeritPoints = 0;

    // Checks is the speed is less than or equal to limit
    if (speed <= limit){
        console.log("OK");

    // Since speed is above 70, we need to check the demerit points
    }else {
        demeritPoints = Math.floor(speedDiference/5);
        console.log(`Points: ${demeritPoints}`);
        
        // Check if the demeritPoints are more than 12 and suspend license
        if (demeritPoints > 12){
            console.log("License suspended");
        }
    }

}
speedCheck(180)