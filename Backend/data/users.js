import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "AdminUser@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: "true",
  },
  {
    name: "AmreshGupta",
    email: "AmreshGupta@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: "false",
  },
  {
    name: "RameshKumar",
    email: "RameshKumar@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: "false",
  },
];

export default users;
