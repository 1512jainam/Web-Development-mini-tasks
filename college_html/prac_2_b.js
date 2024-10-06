const f = require('fs');

const user = {
    firstname: "Jainam",
    lastname: "Bhatt",
    age: 19,
    mail: "jainam@gmail.com",
    rollno: "22BCE034"
};

// Writing to JSON file
const Json = JSON.stringify(user);
f.writeFile('Output.json', Json, (err) => {
    if (err) throw err;
    else {
        console.log("File written successfully");
        
        // Reading from JSON file
        f.readFile('Output.json', 'utf8', (readErr, data) => {
            if (readErr) throw readErr;
            
            const parsedData = JSON.parse(data);
            console.log("Content of Output.json:", parsedData);
        });
    }
});

