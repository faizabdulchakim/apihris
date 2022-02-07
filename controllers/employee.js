const ListEmployee = (req, res) => {
    let auth_ = req.headers.authorization
    let qry = `
    SELECT
    b.name
    FROM 
    user_name a
    JOIN user_role b ON a.user_role_id = b.id 
    WHERE
    a.keyword='`+auth_+`'
    AND a.status=1
    AND b.status=1
    `
    console.log(qry)
    req.app.get('connection').query(qry, function (error, results, fields) {
        let qry = ""
        if(results[0].name=="admin"){
            qry = "select id,full_name,preferred_name,phone1,phone2,email,'Confidential' as 'gross_salary' from employee where status=1 order by id desc"
        }else{
            qry = "select * from employee where status=1 order by id desc"
        }
        
        req.app.get('connection').query(qry, function (error0, results, fields) {
            res.send(JSON.stringify(results))
        })
    })
}
const DeleteEmployee = (req,res) => {
    let id = req.body.id
    let qry = "update employee set status=0 where id="+id
    req.app.get('connection').query(qry, function (error0, results, fields) {
        res.send(JSON.stringify("ok"))
    })
}
const AddEmployee = (req,res) => {
    let full_name       = req.body.full_name       
    let preferred_name  = req.body.preferred_name
    let phone1          = req.body.phone1
    let phone2          = req.body.phone2
    let email           = req.body.email
    let qry = `
    insert into employee
    (full_name,preferred_name,phone1,phone2,email)
    value
    ('`+full_name+`','`+preferred_name+`','`+phone1+`','`+phone2+`','`+email+`')
    `
    req.app.get('connection').query(qry, function (error0, results, fields) {
        res.send(JSON.stringify("ok"))
    })
    
}

const EditEmployee = (req,res) => {
    let id              = req.params.id
    let full_name       = req.body.full_name       
    let preferred_name  = req.body.preferred_name
    let phone1          = req.body.phone1
    let phone2          = req.body.phone2
    let email           = req.body.email
    let qry = `
    update employee set
    full_name='`+full_name+`',
    preferred_name='`+preferred_name+`',
    phone1='`+phone1+`',
    phone2='`+phone2+`',
    email='`+email+`'
    where
    id='`+id+`'
    `
    req.app.get('connection').query(qry, function (error0, results, fields) {
        res.send(JSON.stringify("ok"))
    })
}


const UpdateSalary = (req,res) =>{
    let id              = req.params.id
    let salary          = req.body.gross_salary
    let qry = `
    update employee set
    gross_salary='`+salary+`'
    where
    id='`+id+`'
    `
    req.app.get('connection').query(qry, function (error0, results, fields) {
        res.send(JSON.stringify("ok"))
    })
}

module.exports =  {
    ListEmployee,DeleteEmployee,AddEmployee,EditEmployee,UpdateSalary
};