# Examples of Javascript Control Flow

The goal of this project was to come up with a simple set of instructions that had to be executed
asynchronously with some calls that are parallel, and some that are sequential. Along with this, I also
wanted to keep error handling in mind.

I have come up with a short example in which you get a message and a tag, and then add the tag and index the message.
* getMessage()
* getTag()
  * tagMessage()
  * indexMessage()

Here are the different implementations:

* [Javascript Callbacks](a.js)
* [Javascript Callbacks with `async` library](b.js)
* [Typescript Promises](c.ts)
* [Typescript Promises with async/await](d.ts)

## Todo
* The first two implementations do not perform getMessage() and getTag() in parallel.
* The last two implementations don't have error checking at every function call