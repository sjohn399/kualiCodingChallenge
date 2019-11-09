class Elevator {
  constructor(id) {
    this.id = id;
    this.position = 1;
    this.floorRequests = [];
    this.open = false;
    this.peopleInside = 0;
    this.numTrips = false;
    this.direction = 0;
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

  hasPassed(floor) {
    if (this.direction == 0) {
      return false;
    }
    else if (this.direction == 1) {
      return floor < this.position;
    }
    else if (this.direction == -1) {
      return floor > this.position
    }
  }

  isOccupied() {
    return this.peopleInside > 0;
  }

  isMoving() {
    return this.direction != 0;
  }

  addRequests(floorAt, floorReq) {
    this.floorRequests.push(floorAt)
    this.floorRequests.push(floorReq)

    if (this.direction == 1 ) {
      this.floorRequests = this.floorRequests.sort();
    }

  }
  //This situation we use this in is for floor requests. If there is more than one
  //occupant then this elevator is moving. If so then we need to pick the closest
  //(lowest) floor requested to stop off at.
  getFloorRequests(floor) {
    return this.floorRequests;
  }

  toggleDoors() {
    this.open = !this.open
    if (this.open) {
      console.log("Doors open")
    }
    else if (!this.open) {
      console.log("Doors closed")
    }
  }

  move(floor) {

    this.direction = this.getDirection(floor)

    //Move until we get there.
    while (this.position != floor) {
      console.log(this.position)
      this.position = this.position + this.direction;
    }

    //We're done moving. Add 1 to trips
    this.numTrips = this.numTrips + 1;
  }

  //Get the direction we're going. If the floor is greater than
  //our position then we need to go up (+1) if the floor is less
  //than our position we need to go down (-1)
  getDirection(floor) {
    if (floor >= this.position) {
      return 1
    }
    else if (floor < this.position) {
      return -1
    }
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

    //Get the list of current requests in the object
    closestElevator.addRequests(floorAt, floorReq)

    while(closestElevator.getFloorRequests().length != 0) {
        //Move to floor. Take away an occupant. Toggle doors.
        var nextFloor = closestElevator.getFloorRequest().shift();
        closestElevator.move(nextFloor)
        closestElevator.toggleDoors();
        closestElevator.toggleDoors();
    }

    closestElevator.occupied = false
  }

  getClosestElevator(floorAt) {
    //Set the initial closest distance to something higher than the max
    var closestDistance = this.maxFloor + 1;
    var selectedElevator;

    //Loop through each elevator object. Check if it needs service or is
    //currently moving.
    //Get the distance for that elevator and replace the selected elevator
    //until the smallest distance is found. Return the selected elevator.
    this.elevators.forEach(function(currentElevator) {
      if(currentElevator.needsService() || currentElevator.hasPassed()) {
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
