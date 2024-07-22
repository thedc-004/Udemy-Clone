import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3001;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Udemy",
  password: "1107",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let users = (await db.query('SELECT * FROM users')).rows;
console.log(users);

app.get("/", (req, res) => {
    // res.render("home.ejs"); go on home page which will give u options of login or register
  });
  
  app.get("/login", (req, res) => {
    //res.render("login.ejs"); //create login papge
  });
  
  app.get("/register", (req, res) => {
    //res.render("register.ejs");// create register page
  });
  
  app.post("/register", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const username=req.body.username
    console.log(email,password,username);
    try {
      const checkResult = await db.query("SELECT * FROM users WHERE email_id = $1", [
        email,
      ]);
  
      if (checkResult.rows.length > 0) {
        res.send("Email already exists. Try logging in.");
      } else {
        const result = await db.query(
          "INSERT INTO users (user_name,email_id, user_password) VALUES ($1, $2,$3)",
          [username,email, password]
        );
        console.log(result);
        // res.redirect("") //Enter the home Page
        res.send("User registerd succesfully");
        res.send(result)
      }
    } catch (err) {
      console.log(err);
    }
  });
  
  app.post("/login", async (req, res) => {
    const username=req.body.username
    const email = req.body.email;
    const password = req.body.password;
  
    try {
      const result = await db.query("SELECT * FROM users WHERE email_id = $1", [
        email,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedPassword = user.user_password;
  
        if (password === storedPassword) {
          //res.render("secrets.ejs");
          res.send("Logged in");
        } else {
          res.send("Incorrect Password");
        }
      } else {
        res.send("User not found");
      }
    } catch (err) {
      console.log(err);
    }
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  