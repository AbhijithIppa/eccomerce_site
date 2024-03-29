const express=require("express")
const router=express.Router();
const {getContact,createContact,updateContact,deleteContact}=require("../controllers/contactController")

router.route('/').get(getContact)

router.route('/').post(createContact)

router.route('/:id').put(updateContact)

router.route('/:id').get(getContact)

router.route('/:id').delete(deleteContact)







module.exports=router;