
// export default {
//     ...require("./mock/product"),
//     ...require("./mock/user")
// };  
/**
 * 为了减少这种写法
 * 采用一下的方式
 */
import fs from 'fs'
import path from 'path'
const mock = {}


fs.readdirSync(path.join(__dirname + '/mock')).forEach(function(file){
    if(file.match(/\.js$/)){
        Object.assign(mock,require('./mock/'+ file))  // 注意不要写错
    }
})
export default mock