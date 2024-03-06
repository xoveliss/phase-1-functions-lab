function distanceFromHqInBlocks(pickUpLocation) {
    const hqLocation = 42;
    return Math.abs(hqLocation - pickUpLocation);
  }
  function distanceFromHqInFeet(pickUpLocation) {
    const blocks = distanceFromHqInBlocks(pickUpLocation);
   const feet = blocks * 264;
   return feet;
  } 
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    const feet = blocks * 264;
    return feet;
  }
  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start)* 264;

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}