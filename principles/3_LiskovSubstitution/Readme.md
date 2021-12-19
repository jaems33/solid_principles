# Liskov Substitution Principle

Video tutorial: [Design Patterns: Interface Segregation Principle Explained Practically in C# (The I in SOLID)](https://youtu.be/-3UXq2krhyw)

If S is a subtype of T, objects of T should be replaceable by S without breaking the program.

`Employee` is the base type.

It is okay for `CalculatePerHourRate` to calculate rate at a different rate depending on the `class` but it can't throw an Exception in a situation where another similar class wouldn't have.

Should be able to replace `Employee` with `CEO`, but can't because it throws an error due to CEO's not having a manager.

## Definitions
- Covariance: The return type of a method shouldn't change. In Javascript/Typescript you **CAN** modify the return type of a *virtual* method, although it's not advisable.
- Contravariance: The input type of a method shouldn't change.
- Pre-conditions: You cannot strengthen them.
- Post-conditions: You cannot weaken them, meaning if a parent methods does some checks for a return type you can't make the criteria of what is allowable weaker in child methods.
- Expanded version of LSP: Cannot return new exceptions (i.e. CEO `AssignManager` vs. Employee `AssignManager`)

The reason why it's important to protect the code from throwing errors in new circumstances is because the code working with the parent is unlikely to be expecting errors in a specific circumstance, resulting in an unhandled exception.

This is why it might be preferable to use an Interface instead of Inheritance. Inheritance must have an `IS A` relationship. A Manager `IS A` Employee. But `IS A` CEO an Employee? No, because based on the different information assigned to the `Employee` class.

LSP is putting a flashlight on the inheritance structure to ensure you're doing something wrong. Look at this from the perspective of true inheritance: is this really true? If it's not, then change the structure.

Don't have the idea of inherit everything.

Extra methods in child classes don't violate LSP, because swapping a parent class would never have referenced the method since it never had it.

## Connection to OSP
In order to override a method, a number of languages require you to designate the method as `virtual`. This is not applicable to TypeScript/JavaScript since there is no virtual methods (and everything can be overriden), but it's just something to note that it could violate OSP due to a class requiring changes to it's base class.

## Refactoring

What are commonalities between CEO, Employee, and Manager?
- All have first and lastname
- All have a salary
- All can calculate per hour rate

What are non-commonalities?
- Not all have managers
- Only manager and CEOs have `generatePerformanceReviews()`

A manager has employee stuff, but also some additional functionality for a manager, where `IManager` comes into play

A CEO does not implement `Employee` but rather `BaseEmployee`, because that has all the things in common with all three roles.

We can make BaseEmployee abstract to avoid using it directly. Abstract is inheritable but not used directly.

LSP allows one to flexibly use child classes where parent classes exist and not break implementation. Tries to make a good inheritance structure.