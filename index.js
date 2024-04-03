// Code your solution in this file!
function distanceFromHqInBlocks(distance){
 let distanceFromHqInBlocks = Math.abs(distance - 42);
 return distanceFromHqInBlocks;
}

function distanceFromHqInFeet(feet){

    let distanceFromHqInFeet= (Math.abs(feet-42)*264)
    return distanceFromHqInFeet;
}

function distanceTravelledInFeet(start, end){
    
    let distanceTravelledInFeet = (Math.abs(start-end)*264)
    return distanceTravelledInFeet
}

function calculatesFarePrice(start, destination) {
    let distInFt = Math.abs(start - destination) * 264;
    if (distInFt <= 400) {
        return 0;
    } else if (distInFt > 400 && distInFt <= 2000) {
        return Math.abs(distInFt - 400) * 0.02;
    } else if (distInFt > 2000 && distInFt <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
    }