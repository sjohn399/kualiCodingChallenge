class Elevator {
  constructor(id) {
    this.id = id;
    this.position = 1;
    this.open = false;
    this.occupied = false;
    this.isMoving = false;
    this.numTrips = false;
  }

  getElevatorPosition() {
    return this.position;
  }

  isOpen() {
    return this.open;
  }

  needsService() {
    return this.numTrips >= 100;
  }

  getIsMoving() {
    return this.isMoving
  }

  toggleDoors() {
    this.open = !this.open
  }

  move(floor) {
    //Move the elevator to and from floors
  }
}

class ElevatorController {
  constructor(numElevators, numFloors) {
    this.elevators = [];
    for (i = 0; i < numElevators; i++) {
      newElevator = new Elevator(i + 1)
      this.elevators.push(newElevator)
    }

    this.minFloor = 1;
    this.maxFloor = numFloors;
  }

  getAllElevators() {
    return this.elevators
  }

  callElevator(floorAt, floorReq) {
    //Check for invalid parameters. Hopefully there's some parameter validation
    //from where these are coming from.
    var inputValid = this.isInputValid(floorAt, floorReq)

    if (!inputValid) {
      return
    }

    var closestElevator = this.getClosestElevator(floorAt);

  }

  getClosestElevator(floorAt) {
    //Set the initial closest distance to something higher than the max
    var closestDistance = this.maxFloor + 1;
    var selectedElevator;

    //Loop through each elevator object. Check if it needs service or is
    //currently moving. Go to the next object if either is true.
    //Get the distance for that elevator and replace the selected elevator
    //until the smallest distance is found. Return the selected elevator.
    this.elevators.forEach(function(currentElevator) {
      if(currentElevator.needsService() || currentElevator.getIsMoving()) {
        return
      }

      var distance = Math.abs(currentElevator.getElevatorPosition() - floorAt);

      if(closestDistance > distance) {
        closestDistance = distance;
        selectedElevator = currentElevator;
      }
    })

    return selectedElevator
  }

  isInputValid(floorAt, floorReq) {
    try {
      if(floorAt < this.minFloor ||
         floorReq > this.maxFloor) {
           throw "Floor destination out of range";
         }
      if (floorAt < this.minFloor ||
          floorReq > this.maxFloor) {
            throw "Floor requested out of range";
          }
    }
    catch(err) {
      alert(err);
      return false
    }

    return true
  }
}
