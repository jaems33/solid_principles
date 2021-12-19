# Dependency Inversion Principle (DI)

High level modules should not depend on low level modules, rather both should depend on abstractions that don't depend on details.

Video Tutorial: [Design Patterns: Dependency Inversion Principle Explained Practically in C# (The D in SOLID)](https://youtu.be/NnZZMkwI6KI)

The program creates a `Person` and connects them with a `Chore`. The chore can be worked on, and once completed, it will log information out and send an email to the `Owner` of the `Chore`

In this instance, a high level module is something that calls something else. `main()` calls into the `Person` and `Chore` class. 

The `Chore` class is also higher level because it depends on the `Logger` and `Emailer` class.

The `Emailer` currently depends on nothing, and neither does the `Logger`, so both are lower level.

Changing `Logger` might break `Chore` which might break `main()`

DI states that the lower level modules should depend on the higher level modules, and both should depend on abstractions. Abstractions should not depend on details.

Everytime you have `new SomeClass()` in a function tightly couples dependencies on lower level modules. Of course, you can't avoid using new some place in the application, but DI tries to focus on centralizing these routines in one place to make it easier to swap things in and out.

**Dependency Injection** is one of the ways to make this principle work.

One solution is to create a class that queues up different types of class instances that the program needs, at the highest level.

The only place we use `new` is in Factory.

Can swap out parts because we don't depend on the instantiation, we rely on the abstractions.

Dependency Injection removes the need of Factory classes.

Also easier to Unit test components of the application separately.