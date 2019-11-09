class Elevator {
  constructor(id) {
    //Set the attributes of the elevator. Give it some unique id.
  }

  getElevatorPosition() {
    //return the elevators position
  }

  isOpen() {
    //return whether the elevator is open
  }

  needsService() {
    //Checks if the elevator needs service
  }

  getIsMoving() {
    //Returns whether the elevator is moving or not
  }

  toggleDoors() {
    //Toggles the doors
  }

  move(floor) {
    //Move the elevator to and from floors
  }
}

class ElevatorController {
  constructor(numElevators, numFloors) {
    //Initialize elevator objects and set floor min and max
  }

  getAllElevators() {
    //Return all the elevators
  }

  callElevator(floorAt, floorReq) {
    //Call the elevator. Pass in what floor it is being called from
    //and what floor is being requested to go to
  }
}
