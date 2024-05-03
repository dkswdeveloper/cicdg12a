//create a new repo
// add .readme .gitignore files
// copy the url
// git clone https://github.com/username/repo.git 
// open the project in code (cd repofolder)
// npm init -y
// add new file app.js with some console statements
// npm i 
// git add .
// git commit -m "message to add file"
// git push
console.log("app.js file for node");
console.log(new Date());
console.log("added line 3");
console.log("edited in browser");
const app = require('express')();
app.get("/", (req,res) => {
    res.json({message : "Server running"})
})
app.listen(7000, () => {
    console.log("server running on 7000");
})

