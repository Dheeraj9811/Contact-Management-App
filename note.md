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
    <h2><code>async</code> Keyword:</h2>

<ol>
    <li>
        <strong>Definition:</strong>
        <ul>
            <li>The <code>async</code> keyword is a JavaScript language feature used to define asynchronous functions.</li>
            <li>Asynchronous functions return promises, allowing the use of the <code>await</code> keyword inside their bodies.</li>
        </ul>
    </li>
    
    <li>
        <strong>Purpose:</strong>
        <ul>
            <li>Enables the creation of functions that perform asynchronous operations.</li>
            <li>Allows the use of <code>await</code> to wait for promises to resolve without blocking the execution of the entire program.</li>
        </ul>
    </li>
    
    <li>
        <strong>Usage Example:</strong>
        <pre><code>
async function fetchData() {
    // Asynchronous operations using await
    const result = await someAsyncFunction();
    return result;
}
        </code></pre>
    </li>
</ol>

<h2><code>asyncHandler</code>:</h2>

<ol>
    <li>
        <strong>Definition:</strong>
        <ul>
            <li><code>asyncHandler</code> is a utility function commonly used in web development, especially in Node.js applications.</li>
            <li>It wraps asynchronous route handlers and ensures that any errors thrown during the asynchronous operation are caught and forwarded to the error-handling middleware.</li>
        </ul>
    </li>

    <li>
        <strong>Purpose:</strong>
        <ul>
            <li>Simplifies error handling in asynchronous route handlers.</li>
            <li>Avoids the need to wrap every asynchronous route handler with a try-catch block.</li>
        </ul>
    </li>

    <li>
        <strong>Usage Example in an Express.js Route Handler:</strong>
        <pre><code>
const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

// Example usage in an Express.js route handler
app.get('/someRoute', asyncHandler(async (req, res) => {
    const result = await someAsyncFunction();
    res.json(result);
}));
        </code></pre>
    </li>
</ol>