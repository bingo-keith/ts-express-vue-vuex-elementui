console.log('express start Ok!!!')

const express = require('express');

const path = require('path')

const bodyParser = require('body-parser');

const fs = require('fs');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router()

let users = []; // 所有数据

users = fs.readFileSync(path.resolve(__dirname, '../models/users.json'), 'utf8');
users = JSON.parse(users);

console.log(users)

// RESTful风格API
router.get([
  '/getList/id/:id/grade/:grade',
  '/getList/grade/:grade/id/:id',
  '/getList',
  '/getList/id/:id',
  '/getList/grade/:grade'
],
  function (req, res) {
    res.status(200);
    let rs = users;
    const { params: { id, grade } } = req;
    if (id) {
      rs = rs.filter(v => v.id == id);
    }
    if (grade) {
      rs = rs.filter(v => v.grade == grade);
    }
    res.json(rs);
  })

router.post('/add', urlencodedParser, function (req, res) {
  const { body: data } = req;
  data.id = users.slice(-1)[0].id++;
  users.push(data);
  fs.writeFile('users.json', JSON.stringify(users), err => {
    if (err) {
      return console.err(err);
    }
  })
})

router.put('/edit', urlencodedParser, function (req, res) {
  const { body: { id, name } } = req;
  let rs = users;
  if (id && name) {
    rs = users.filter(v => v.id == id);
    rs.forEach(v => v.name = name);
    users.forEach(v => (v.id == id) && (v.name = name));
    fs.writeFile('users.json', JSON.stringify(users), err => {
      if (err) {
        return console.err(err);
      }
    })
  } else {
    rs = '必填字段不为为空';
  }
  res.status(200);
  res.json(rs);
})

router.delete('/delete', function (req, res) {
  const { query: { id } } = req;
  const deletedObj = users.filter(v => v.id == id);
  const rs = users.filter(v => v.id == id)[0];
  if (rs) {
    fs.writeFile('users.json', JSON.stringify(users.filter(v => v.id != id)), err => {
      if (err) {
        throw err;
      }
    })
    res.status(200);
    res.json({ code: 0, msg: 'success', data: rs });
  } else {
    res.status(200);
    res.json({ code: 0, msg: 'warn', data: '查无此人' });
  }
})

module.exports = router;