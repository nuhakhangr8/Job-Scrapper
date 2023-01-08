const express = require("express");
const router = express.Router();
const main = require("../scrapeFn/scrape");
 
router.post("/indeed",async(req,res)=>{
  try{
    const {skill}=req.body.skill;
    let scrp= await main(skill);
    return res.status(200).json({
      status:"ok",
      list:scrp?.list || {}
    })
  }
  catch(e){
    return res.status(500).send(e);
  }
})

router.get('/getData',async (req,res)=>{
  try{
    const jobs=path.join(__dirname,'..','jobs.json');
    return res.status(200).sendFile(jobs);
  }catch(e){
    return res.status(500).send(e);
  }
})
module.exports=router;