import { Router } from "express";
import Account from "../models/account";

const router = Router();

router.post('/signup', (req, res) => {
  let usernameRegex = /^[a-z0-9]+$/;
  const {username, password} = req.body;

  if(!usernameRegex.test(username)) {
    return res.status(400).json({
      error: 'BAD USERNAME'
    })
  }

  if(password.length < 4 || typeof password !== 'string') {
    return res.status(400).json({
      error: 'BAD PASSWORD'
    })
  }

  Account.findOne({username: username}, (err, exists) => {
    if(err) throw err;
    if(exists) {
      return res.status(409).json({
        error: 'USERNAME EXISTS'
      })
    }
  })

  let account = new Account({
    username: req.body.username,
    password: req.body.password
  });
  
  account.password = account.generateHash(account.password);

  account.save(err => {
    if (err) throw err;
    res.status(200).json({ success: true });
  });
});

router.post('/login', (req, res) => {
  const {username, password} = req.body;

  if(typeof password !== 'string') {
    return res.status(401).json({
      error: 'LOGIN FAILED'
    })
  }

  Account.findOne({username: username}, (err, account) => {
    if(err) throw err;

    if(!account) {
      return res.status(401).json({
        error: 'LOGIN FAILED'
      })
    }

    if(!account.validateHash(password)) {
      return res.status(401).json({
        error: 'LOGIN FAILED'
      })
    }

    let session = req.session;
    session.loginInfo = {
      _id: account._id,
      username: account.username
    }
  
    return res.status(200).json({
      success: true
    })
  })
});

router.get('/getinfo', (req, res) => {
  if(typeof req.session.loginInfo === 'undefined') {
      return res.status(401).json({
          error: 'NOT LOGGEDIN'
      })
  }

  res.status(200).json({ info: req.session.loginInfo })
});

router.get('/logout', (req, res) => {
  req.session.destroy(err => { if(err) throw err })
  return res.status(200).json({ success: true });
});

export default router;
