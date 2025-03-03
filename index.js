function distanceFromHqInBlocks(block) {
    const headquarters = 42;
    return Math.abs(block - headquarters);
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else {
        return "cannot travel that far"; 
    }
}


console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInBlocks(34)); 
console.log(distanceFromHqInFeet(50)); 
console.log(distanceFromHqInFeet(34)); 
console.log(distanceTravelledInFeet(34, 38)); 
console.log(distanceTravelledInFeet(50, 42)); 
console.log(calculatesFarePrice(34, 38)); 
console.log(calculatesFarePrice(50, 42)); 
console.log(calculatesFarePrice(10, 100)); 
