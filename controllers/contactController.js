import asyncHandler from 'express-async-handler';
import Contact from '../models/contactModel.js';



const getContact = asyncHandler(async function (req, res) {
    // console.log("req.user._id = ",req.user.userId);
    const contacts = await Contact.find({user_id: req.user.userId});

    res.status(200).json(contacts);
});


const createContact = asyncHandler(async function (req, res) {
    
    try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error(`All fields are mandatory looking for name, email and phone you have given-> ${name} ${email} ${phone}`);
    }
    
    const contact = await Contact.create({ name, email, phone, user_id: req.user.userId});
    res.status(201).json(contact);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message});
    }
})

const getContactById = asyncHandler( async function (req, res) {

    const contacts = await Contact.findById(req.params.id);
    if(!contacts){
        res.status(404);
        throw new Error('Contact not found');
    }
    res.status(200).json(contacts);
})

const updateContact =  asyncHandler(async function (req, res) {
    // find the contact by id if not found throw error
    const contacts = await Contact.findById(req.params.id);
    // contact contains the user.Id
    if(!contacts){
        res.status(404);
        throw new Error('Contact not found');
    }
    if(contacts.user_id.toString() !== req.user.userId){
        res.status(403);
        throw new Error('Not authorized to update contact');
    }
    // if found update the contact
    const { name, email, phone } = req.body;
    // update the contact
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        { name, email, phone },
        { new: true }
    );


    res.status(200).json({ message: `Update contact for ${req.params.id}` });
})

const deleteContact = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        
        if (!contact) {
            res.status(404);
            throw new Error('Contact not found');
        }
        if(contact.user_id.toString() !== req.user.userId){
            res.status(403);
            throw new Error('Not authorized to Delete contact');
        }
        await contact.deleteOne();

        res.status(202).json({ message: `Deleted contact for ${req.params.id} here is detail ${contact  }` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default {
    getContact,
    createContact,
    getContactById,
    updateContact,
    deleteContact
};
