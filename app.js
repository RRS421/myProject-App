const mysql=require('mysql');
const express=require('express');

const app=express();
app.use(express.json());

//create connection
const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fullstack@32',
    database: 'srustiCollege'
});
//connect DB
db.connect((err)=>{
    if(err) throw err;
    console.log('Connected to MySQL');
});
app.get('/students',(req,res)=>{
    db.query('SELECT * FROM student',(err,results)=>{
        if(err) throw err;
        res.json(results);
    });
});

    //sample query
  //  db.query('SELECT * FROM student',(err,results)=>{
    //    if(err) throw err;
        //console.log('Student Records:',results);
        //console.table(results);
        //close connection
        //db.end();
      //  results.json(results);
    //});
//});
app.listen(3000,()=>{
    console.log('API running at http://localhost:3000');
});