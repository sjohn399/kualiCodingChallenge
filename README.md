# kualiCodingChallenge

I'm going to use my last 15 minutes to explain what I did.

I went with an Elevator Controller instead of registering state between Elevator
objects because I don't think it makes much sense conceptually to link Elevator
states. There is a button that calls an elevator and it should know all the things
it needs to in order to manipulate what elevator does what. The Elevator should
know about itself and what it is doing. The controller should make inquiries about
the state of the Elevator to figure out what to do with the call.

The contrary example would be if we had a bunch of plane objects that needed to
communicate position to each other in order not to crash. Every time a plane's
position is updated, the other planes need to know where they are relative to the
other planes and make corrections to not get too close.

The callElevator function is the maestro here. It finds the closest elevator
available elevator (not needing service and has not passed the floor if moving) and
returns it to be given the request. Requests are added to a floorRequests array in
the addRequests function and are sorted based on what direction was established. In
ascending order if we're going down (at 3 going to 2 and 1) and descending order if
we're going up (at 3 going to 4 and 5).

While each elevator object has requests (length not of zero) it will shift the first
request and move to that floor. When that is done the doors will toggle (theoretically) a person will get out. After all requests are done occupied is
set to false.

In the interest of oversharing I'll put relevant functions below the rules where
I think I covered the rules.

Thank you for the opportunity with this code challenge. I hope you like it!

Rules

1. Initialize the elevator simulation with the desired number of elevators, and the desired
number of floors. Assume ground/min of 1.
(DONE) - ElevatorController.constructor

2. Each elevator will report as is moves from floor to floor.
(DONE) - Elevator.toggleDoors

3. Each elevator will report when it opens or closes its doors.
(DONE) - Elevator.move

4. An elevator cannot proceed above the top floor.
(DONE) - ElevatorController.isInputValid

5. An elevator cannot proceed below the ground floor (assume 1 as the min)
(DONE) - ElevatorController.isInputValid

6. An elevator request can be made at any floor, to go to any other floor.
(DONE) - ElevatorController.callElevator, Elevator.getFloorRequests/addRequests

7. When an elevator request is made, the unoccupied elevator closest to it will answer the call, unless an occupied elevator is moving and will pass that floor on its way. The exception is that if an unoccupied elevator is already stopped at that floor, then it will always have the highest priority answering that call.
(DONE) - Elevator.hasPassed/getFloorRequests

8. The elevator should keep track of how many trips it has made, and how many floors it has passed. The elevator should go into maintenance mode after 100 trips, and stop
functioning until serviced, therefore not be available for elevator calls.
(DONE) - Elevator.move/needsService, ElevatorController.getClosestElevator
