# kualiCodingChallenge

Rules
1. Initialize the elevator simulation with the desired number of elevators, and the desired
number of floors. Assume ground/min of 1.
(DONE)

2. Each elevator will report as is moves from floor to floor.
(DONE)

3. Each elevator will report when it opens or closes its doors.
(DONE)

4. An elevator cannot proceed above the top floor.
(DONE)

5. An elevator cannot proceed below the ground floor (assume 1 as the min)
(DONE)

6. An elevator request can be made at any floor, to go to any other floor.
(DONE)

7. When an elevator request is made, the unoccupied elevator closest to it will answer the call, unless an occupied elevator is moving and will pass that floor on its way. The exception is that if an unoccupied elevator is already stopped at that floor, then it will always have the highest priority answering that call.

(DONE)

8. The elevator should keep track of how many trips it has made, and how many floors it has passed. The elevator should go into maintenance mode after 100 trips, and stop
functioning until serviced, therefore not be available for elevator calls.
(DONE)
