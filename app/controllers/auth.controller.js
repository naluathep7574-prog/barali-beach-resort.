const db = require("../models");
const User = db.user;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv/config");

exports.signin = (req, res) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Email Not Found." });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }

      const token = jwt.sign(
        { id: user.id },
        process.env.SECRET_KEY,
        {
          algorithm: "HS256",
          allowInsecureKeySizes: true,
          expiresIn: "1d", // หรือใช้ '1h', '1w', '1m', '1y'
        }
      );

      user.getRoles().then((roles) => {
        let authorities = [];
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }

        res.status(200).json({
          id: user.id,
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
