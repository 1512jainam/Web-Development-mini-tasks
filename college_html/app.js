const f=require('fs');

const user={
    firstname : "Jainam",
    lastname : "Bhatt",
    age : 19,
    mail:"jainam@gmail.com",
    rollno:"22BCE034"
}

const Json=JSON.stringify(user);
console.log(Json);

f.writeFile('Output.txt', Json, (err) => {
 
    // In case of a error throw err.
    if (err) throw err;
    else{
        console.log("File written successfully");
    }
})
