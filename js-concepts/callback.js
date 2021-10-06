function welcomeMessage(name, greetHandler) {

    greetHandler(name);
}

// const name = ['Tom Hanks', 'Tom Bardy', 'Tom Cruise'];
// const myObj = { name: 'Tom Hanks', age: 11 };
function greetMorning(name) {
    console.log('Good Morning', name);
}
welcomeMessage('Dip Das', greetMorning);