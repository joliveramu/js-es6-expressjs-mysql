let express = require('express');
let app = express();
let mysql = require('mysql');
const PORT = 3000;

let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'db_training'
});

connection.connect((error, results, fields)=>{
	if(error)
		throw error;
	
	console.log("Connected!");
});

app.get("/", (request, response)=>{
	response.send("Hello!");
});

app.get("/Initialize", (request, response)=>{
	connection.query("create table if not exsists student(student_id int primary key, student_name text);", (error, results, fields)=>{
		if(error)
		{
			response.send(error);
		}
			response.send(results);
	} );
})

app.post("/Students", (request, response)=>{

	//let x = 1000+Math.floor((Math.random() * 100) + 1);
	//let values = [x,`Name ${x}`];
	connection.query("INSERT INTO student (student_id, student_name) VALUES (?,?);",request.body, (error, results, fields)=>{
		if(error)
		{
			 response.send(results)
		}
		 	 response.send(results);
	});
})

app.get("/Students",(request, response)=>{
	connection.query("select * from student;", (error, results, fields)=>{
		if(error)
		{
			 response.send(results);
		}
		 	 response.send(results);
	});
});

app.get("/Students/:id", (request, response)=>{
	const ID = request.params.id;
	connection.query("SELECT * FROM student WHERE student_id=?",[ID], (error, results, fields)=>{
		if(error)
		{
			 response.send(results);
		}
		 	 response.send(results);
	});
});

app.put("/Students/:id", (request, response)=>{
	//let x = 1000+Math.floor((Math.random() * 100) + 1);
	//let values = [`Name ${x}`, request.params.id];
	connection.query("UPDATE student SET student_name = ? where student_id = ?;", [request.body, request.params.id], (error, results, fields)=>{
		if(error)
		{
			response.send(error);
		}
			response.send(results);
	})
})

app.delete("/Students/:id", (request, response)=>{
		let ID = request.params.id;
		connection.query(`DELETE from student WHERE student_id = ?;`, [ID], (error, results, fields)=>{
		if(error)
		{
			response.send(error);
		}
			response.send(results);
	})
});

app.listen(PORT, ()=>{
console.log(`Listening at port: ${PORT}`);
});