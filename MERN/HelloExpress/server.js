const express = require("express");
const app = express();

// req is short for request
// res is short for response
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
  
app.post("/api/users", (req, res) => {
      // req.body will contain the form data from Postman or from React
      console.log(req.body);
      // we can push it into the users array for now...
      // later on this will be inserted into a database
      users.push(req.body);
      // we always need to respond with something
      res.json( { status: "ok" } );
  });
  

app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
