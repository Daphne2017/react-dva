/**
 * 注意分清
 * req.query
 * req.params
 * req.body
 */

module.exports = {
    "GET /api/product":(req,res) => {  // 注意路径不要写错了
        console.log('productreq.params',req);
        console.log('productreq.query',req.query); // { product: '高粱' },
        res.send({
            name:"高粱"
        })
    }
}