# parameter passing
    -> we can pass multiple parameter in url
    eg:
        ```app.get('/api/contacts/:id/:name', (req, res) => {
            console.log(req.params);
            res.status(200).json({ message: 'Hello World' });
        });```
    if we want to name parameter not to be mandatory then we can use '?' after parameter name. Now if name not passed it is undefined
    eg:
        ```app.get('/api/contacts/:id/:name?', (req, res) => {
            console.log(req.params);
            res.status(200).json({ message: 'Hello World' });
        });```

    other way to pass parameter is 
    2) using query string
    3) using body

# middleware
    defination : middleware is a function that has access to the request and response object. It can modify the request and response object.
    It can end the request response cycle. It can call the next middleware in the stack.

    keyword: "use" is used to use middleware
    eg-> 
        ```app.use((req, res, next) => {
            console.log('Middleware 1');
            next();
        });

    ### route handler is also a middleware:
     
    import express from 'express';
    const router = express.Router();
    
    it as 2 parameter first one is if url is matched then it will be called and second is function to call for that url

    eg:
        ```app.get('/api/contacts', (req, res) => {
            console.log('Route Handler');
            res.status(200).json({ message: 'Hello World' });
        });```
    
    you can see eg in server.js file where I am using ,middle ware to route to the right place
    app.use('/api/contacts', contactRoutes);   if url is /api/contacts then it will call contactRoutes function

    in contactRoutes.js file I am using route handler to route to the right place

using mongoose for mogodb , mongoose give us predefine function so we dont have to code much here
    -> since javascript is an asynchronous and concurrent programming language that offers a lot of flexibility
    but we need asyanc await to make it synchronous 


# async await
    watch video : https://www.youtube.com/watch?v=xnedbgDoRkA 90 to 94
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


# error handeling
    To handel error globally we can use middleware with '{must-> 4 paramenter}' {error, req, res, next} 
    so to use error handeling middleware we have to use next() to pass the error to next middleware , 
    pass anthing to next(anything) automatically go for error handeling middleware but 

    -> if we are using async await then we have to use asyncHandler automatically pass the error to next middleware so we dont have to use next() to pass the error to next middleware

    eg: blow
        
        ```const createContact = asyncHandler(async function (req, res) {
        // console.log(req.body);
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            res.status(400);
            throw new Error(`All fields are mandatory looking for name, email and phone you have given-> ${name} ${email} ${phone}`);
        }
        const contact = await Contact.create({ name, email, phone });
        res.status(201).json(contact);```
})