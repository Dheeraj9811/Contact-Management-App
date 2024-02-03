using mongoose for mogodb , mongoose give us predefine function so we dont have to code much here
    -> since javascript is an asynchronous and concurrent programming language that offers a lot of flexibility
    but we need asyanc await to make it synchronous 


# async await
    -> async await is a way to write asynchronous code in a synchronous way
    -> async await is a special syntax to work with promises in a more comfortable fashion
    -> async await is a syntax sugar for promises
    -> async await is non blocking
    
    so it asnyc promise to return the  value when available till that time another code can be executed
    syntax:
        ```const getContact = asyncHandler(async function (req, res) {

            const contacts = await Contact.find({});   // when await is used it will wait for the promise to return the value

            res.status(200).json(contacts);
            }); ```

 another eg : when promise is breaked use new ERROR to throw error which break the promise , error is store inside messgage property of class
 '''const deleteContact = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            res.status(404);
            throw new Error('Contact not found');   // when promise is breaked use new ERROR to throw error which break the promise , error is store inside messgage property of class
        }

        await contact.deleteOne();

        res.status(202).json({ message: `Deleted contact for ${req.params.id} here is detail ${contact  }` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    });'''


# async vs asyncHandler

<!-- lsit -->

## async Keyword:
    The async keyword is a language feature in JavaScript used to define asynchronous functions. Asynchronous functions return promises, allowing the use of the await keyword inside their bodies. This is useful when performing asynchronous operations and wanting to wait for promises to resolve without blocking the execution of the entire program.

    Usage Example:
    async function fetchData() {
        // Asynchronous operations using await
        const result = await someAsyncFunction();
        return result;
    }
## asyncHandler:
    asyncHandler is a utility function commonly used in web development, especially in Node.js applications. It wraps asynchronous route handlers, ensuring that any errors thrown during the asynchronous operation are caught and forwarded to the error-handling middleware. This helps simplify error handling without the need to wrap every asynchronous route handler with a try-catch block.

    Usage Example in an Express.js Route Handler:
    const getContact = asyncHandler(async function (req, res) {

    const contacts = await Contact.find({});

    res.status(200).json(contacts);
    });
    In the example above, if someAsyncFunction throws an error, it will be caught by the asyncHandler, and the error will be forwarded to the Express.js error-handling middleware.

    Feel free to customize the headings and examples as needed for your specific README.md file.