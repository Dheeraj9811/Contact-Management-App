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


