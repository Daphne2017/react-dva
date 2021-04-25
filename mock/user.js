module.exports = {
    "POST /api/login": (req,res) =>{
        console.log('reqreqreqreqreq',req.body);
        res.send({
            msg:"登录成功"
        })
    }
}