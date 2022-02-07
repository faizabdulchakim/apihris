var md5 = require('md5');
const login = (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let qry = `
    SELECT
    b.name,
    a.id
    FROM 
    user_name a
    JOIN user_role b ON a.user_role_id = b.id 
    WHERE a.name='`+username+`'
    AND MD5('`+password+`') = a.password
    AND a.status=1
    AND b.status=1
    `
    req.app.get('connection').query(qry, function (error, results, fields) {
        let token = md5((Math.floor(Math.random() * 10000) + 10000).toString().substring(1))
        let qry2 = `
        update user_name set keyword='`+token+`'
        where
        id='`+results[0].id+`'
        `
        req.app.get('connection').query(qry2, function (error, results2, fields) {
            let fb = {
                role:results[0].name,
                keyword:token
            }
            res.send(JSON.stringify(fb))
        })
    })
}
module.exports =  {
    login
};