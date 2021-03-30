const express = require('express');
const router = express.Router();
const User = require("../models/Post")



// router.get("/", (req, res) => {
//     res.send("Hello world");
// })


// UPDATE POST


//SPECIFIC POST
router.get("/:postId", async (req, res) => {
    try{
        const post = await User.findById(req.params.postId)
        res.json(post);
    }catch(err){
        res.json(err);
    }
})



//GETS ALL POSTS
router.get("/", async(req, res) => {

    try{
        const posts = await User.find()
        res.json(posts);
    }catch(err){
        res.json(err);
    }
    
})

//SUBMITS A POST
router.post("/", async(req, res) => {

    const postSchema = await new User({
        title: req.body.title,
        message: req.body.message
    })

    try{
        postSchema.save()
        res.json(postSchema);
    }catch(err){
        res.json(err);
    }
    
})


router.delete("/:postId", async (req, res) => {
    try{
        const post = await User.remove({ _id: req.params.postId})
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
})

router.patch("/:postId", async (req,res) => {
    try{
        const updatedPost = await User.updateOne({_id: req.params.postId},
            { $set : { title: req.body.title }}
        )
        
        res.json(updatedPost);
    }catch(err){
        res.json(err);
    }
})



module.exports = router;