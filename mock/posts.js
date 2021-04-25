import Mock from 'mockjs'
module.exports = {
    'GET /api/posts':(req,res) =>{
        res.status(200).json({
            user:Mock.mock({
                'list|80-100':[
                    {
                        id:'@id',
                        name:'@name',
                        nickName:'@last',
                        phone:/^1[34578]\d{9}$/,
                        'age|11-99':1,
                        address:'@country(true)',
                        isMale: '@boolean',
                        email:'@email',
                        createTime: '@datetime',
                        avatar(){
                            return Mock.Random.image('100x100')
                        }
                    }
                ]
            })
        })
    }
}

// Mock.mock({
//     'data|4-8': [
//       {
//         id: '@id',
//         title: '@title',
//         namespace: 'desctab',
//         content: '@paragraph',
//         isPublish: '@boolean',
//         createTime: '@datetime',
//         'fileList|1-10': [{
//           name: '@integer(1,960)',
//           uid: '-@name',
//           url: 'http://xxxxx.xxx.clouddn.com/@name',
//           status: 'done',
//         }],
//       },
//     ],
// })