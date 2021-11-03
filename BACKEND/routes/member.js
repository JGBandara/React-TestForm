const router = require("express").Router();
let Member = require("../modules/member");



http://Localhost:1000/member/add

router.route("./add").post((req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const ContactNumber = Number(req.body.ContactNumber);
    const RegNum = Number(req.body.RegNum);


    const newMember = new Member({
        name,
        age,
        gender,
        ContactNumber,
        RegNum
    })

    newMember.save().then(() =>{
        res.json("Member Added")
    }).catch((err) => {
        console.log(err);
    })
})
http://Localhost:1000/member

router.route("/").get((req,res)=>{

    Member.find().then((students) =>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})
module.exports = router;