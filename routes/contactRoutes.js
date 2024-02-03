import express from 'express';

import contactController from "../controllers/contactController.js";

const {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact
} = contactController;

const router = express.Router();

// how to make your own middleware using .use() method
// middleware is function which has access to req and res objects and next() function which is called when middleware is done

router.route('/')
  .get(getContact)
  .post(createContact);

router.route('/:id')
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact);

// export in module.exports
export default router;