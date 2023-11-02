const account_Id = 11
let account_Email = "moon123@gamil.com"
var account_Password = "12345"
account_City = "Rajshahi" // shouldn't follow


// account_Id = 22 // const value change not allowed
console.log(account_Id);


account_Email = "mkm12@gamil.com" // let value can change
console.log(account_Email);


account_Password = "1234" // var value can be change
console.log(account_Password);



// table
console.table([account_Email, account_Id, account_City, account_Password])


/*
prefer not to use var.
because of issue in block scope and functional scope
*/

let account_State; 
// it will show undefine. means no value assigned.
// value not define

console.table([account_State, account_Email, account_Id, account_Password, account_City])