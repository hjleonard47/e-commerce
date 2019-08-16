let users = [];

const signin = (email, password) => {
    const user = users.find(user => user.email == email && user.password == password);
    
    if (user) {
        return 'Signed in successful.';
    }

    return 'Signin failed.';
};

const signup = (user) => {
    users.push({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        type: user.type,
        gender: user.gender,
        timestamp: user.timestamp,
        email: user.email,
        password: user.password
    });
    return 'Signup successful.';
};

////////
/// Test
////////

let message = signup({
    id: 1,
    firstname: 'Dominique',
    lastname: 'Nsengimana',
    type: 'Customer',
    gender: 'Male',
    timestamp: Date.now(),
    email: 'email@email.com',
    password: 'password'
});

console.log(message);
console.log(`Created user: ${users[users.length - 1].firstname +' '+ users[users.length - 1].firstname}`);

message = signin('email@email.com', 'password');
console.log(message);