console.log('Name: ' + "Kayla Adams".toUpperCase());



function displayPosition(companyName, jobTitle, description) {
    console.log("Career: " + companyName +" / "+ jobTitle);
    console.log("Description: " + description);
    
}

displayPosition("Regions", "Programmer trainee", "Developer");


var interest =  ["* rapier fighting", "* cooking", "* feasting"]; {

}
console.log("My Interests: ");
console.log(interest[0]);
console.log(interest[1]);
console.log(interest[2]);

console.log("My Previous Experience: ");

function displayPosition(companyName, jobTitle, description) {
    console.log (companyName +" / "+ jobTitle +" "+ description);
    
}

displayPosition("* Marriott", "AGM", "- Scheduled, trained, worked desk");
displayPosition("* Kohl's", "Shoe Sales", "- Organized shoes, sold shoes");
displayPosition("* Brown's", "Cashier", "- Organize, accept payment, give change");

console.log("My Skills: ");

function displaySkill(skillName, cool) {
    if (cool == true) {
        console.log("* Check it: " + skillName);
    } else {
        console.log("* " + skillName);
    }

}
displaySkill("Typing", true);
displaySkill("Dancing", false);
displaySkill("Programming", false);
displaySkill("Singing", true);
displaySkill("Jumping", false);
