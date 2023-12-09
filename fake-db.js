const users = [
    {
        id: 1,
        name: "Adrien Olczak",
        phone: 4153101619,
        email: "adrien@instawork.com",
        role: "Admin"
    },
    {
        id: 2,
        name: "Charlene Pham",
        phone: 4153101619,
        email: "charlene@instawork.com",
        role: "Regular"
    },
    {
        id: 3,
        name: "Benson Mach",
        phone: 4153101619,
        email: "benson@instawork.com",
        role: "Regular"
    },
    {
        id: 4,
        name: "Dan Petrie",
        phone: 4153101619,
        email: "dan@instawork.com",
        role: "Regular"
    },
];
 
function getUser(id) {
    return users.find((user) => user.id === id);
}
 function getUsers() {
    return users;
}

function addUser(name, phone, email, role) {
    const id = Math.max(...users.map((user) => user.id)) + 1;
    users.push({ id, name, phone, email, role });
    return { id, name, phone, email, role};
}
  
  
  module.exports = {
    addUser,
    getUsers,
    getUser,
  };
  