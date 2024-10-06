const mysql= reqire('mysql');

const connection= mysql.createConnection(
    {
        host:"localhost",
        user : "root",
        password : " ",
        database: "jainam"
    }
);

connection.connect((err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("connected");
    }
});


connection.query(`CREATE DATABASE JAINAM IF NOT EXISTS`,(err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("created");
    }
});


const creatable=()=>{
    const query=`CREATE TABLE IF NOT EXISTS my_tab (id INT AUTO_INCREMENT PRIMARY KEY , NAME VARCHAR(255) )`;
    connection.query(query,(err,result)=>{
        if (err){throw err;}
    });
}

const insert=(name)=>{
    const query=`INSERT INTO my_tab (NAME) VALUES (?)`;
    connection.query(query,[name],(err,result)=>{
        if(err) throw err;
    });
}

const select=()=>{
    const query=`SELECT * FROM my_tab`;
    connection.query(query,(err)=>{

    })
}

const delete1=(id)=>{
    const query=`DELETE FROM my_tab where id=(?)`;
    connection.query(query,[id],(err)=>{

    })
}

const update=(id,name)=>{
    const query=`UPDATE my_tab set name=? where id = ? `;

}

const drop=()=>{
    const query=`drop table if exists my_tab`;
    connection.query(query,(err,res)=>{
        if(err) throw err;
        
    });
}