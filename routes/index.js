const express = require('express');
const router = express.Router();

const {login} = require('../controllers/user');
const {ListEmployee,DeleteEmployee,AddEmployee, EditEmployee,UpdateSalary} = require('../controllers/employee');

router.post('/login', login);
router.post('/delete', DeleteEmployee);
router.post('/add_employee', AddEmployee);
router.post('/edit_employee/:id',EditEmployee)
router.post('/update_salary/:id',UpdateSalary)
router.get('/list_employee', ListEmployee);

module.exports = router;