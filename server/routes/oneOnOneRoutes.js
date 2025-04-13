const express = require("express");
const { addOneOnOne, getAllOneOnOnes, deleteOneOnOne, updateOneOnOne , toggleApproval} = require("../controllers/oneOnOneController");

const router = express.Router();

router.get("/", getAllOneOnOnes);       
router.post("/", addOneOnOne);      
router.delete("/:id", deleteOneOnOne);  
router.put("/:id", updateOneOnOne);
router.put("/:id/toggleApproval", toggleApproval);


module.exports = router;
