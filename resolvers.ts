const { sign } = require("jsonwebtoken");
const resolvers = {
  Query: {
    hello: () => "Hello, World!",
  },

  Mutation: {
    login: (parent, { username, password }, context) => {
      // Replace with your authentication logic (e.g., check username and password)
      if (username === "user" && password === "password") {
        const token = sign({ username }, "your-secret-key", {
          expiresIn: "1h",
        });
        return token;
      } else {
        throw new Error("Invalid credentials");
      }
    },
  },
};

module.exports = resolvers;
