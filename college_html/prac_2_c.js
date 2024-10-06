const arr=[
    {
      name: 'jainam bhatt',
      age: 19,
      address:{
        city: 'abc',
        country: 'India',
      },
    },
    {
      name: 'abcdef',
      age: 19,
      address:{
        city: 'xyz',
        country: 'USA',
      },
    },
    {
      name: 'xyzw',
      age: 20,
      address:{
        city: 'Bombay',
        country: 'UK',
      },
    },
];

console.log(arr);

console.log('\nAccessing Individual Elements:');
console.log('Name of the first person:', arr[0].name);
console.log('Age of the second person:', arr[1].age);
console.log('Age of the third person:', arr[2].age);
console.log('Country of the first person:', arr[0].address.country);
console.log('City of the second person:', arr[1].address.city);


// var siteInfo = {
// 	"name" : "blogger",
// 	"users" : [
// 		[ "admins", "1", "2" , "3"],
// 		[ "editors", "4", "5" , "6"],
// 	]
// }

// console.log(siteInfo.users[0][3]);