# Single Responsibility Principle

Video tutorial: https://youtu.be/5RwhyZnVRS8


To run the code, run `ts-node .\Program.ts` from either `original/` or `refactored/`

A class should have only one responsibility. It should only have one reason to change per class. 

In the original code (`original/Program.ts`), we would have to change `main()` if we:
- Changed messaging to the user
- Changed how we capture the first and last name
- Changed how we validate first/last names
- Changed how we capture the first and last name

For StandardMessage.ts, 'one single change' would be a change in the messaging

Once refactored, `main()` within `Program.ts` becomes more of a control flow

Rationale:
- When making a change, you want to know where exactly to go
- More readable
- Encourages small classes and methods, making it easier to reveal what's happening within a class

These are principles, not requirements. Need to balance creation of classes with bloating.
