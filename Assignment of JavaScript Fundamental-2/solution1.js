const allUsers = ["Anurag", "Mithun", "Alka", "Prabir", "Govind", "Rahul", "Suman", "Aditya"];

function isUserPresent(user){
    if(allUsers.includes(user)){
        console.log(`Yes, ${user} is a valid user.`);
    }
    else {
        console.log(`No, ${user} is not a valid user.`);
    }
}
isUserPresent("Mithun")
isUserPresent("Someone")