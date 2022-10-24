import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('initials', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'jdoe@example.com',
    password: bcrypt.hashSync('initials', 10),
  },
  {
    name: 'Juan Dela Cruz',
    email: 'jdelacruz@example.com',
    password: bcrypt.hashSync('initials', 10),
  },
];

export default users;
