const mongoose = require("mongoose");
const User = require("./User"); // Ensure proper capitalization

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

async function createUser() {
  try {
    // Creating a new user
    // const newUser = await User.create({
    //     name: 'yogi',
    //     age: 35,
    //     email: 'citiTech@gmail.com',
    //     tasks: ['task1', 'task2'],
    //     address: {
    //         city: 'bengalore',
    //         street: '5th Avenue'
    //     }
    // });

    // Finding users with name "yogi"
    // const newUser = await User.find({ name: "yogi" });

    // Query users with name "yogi", age between 30 and 40, and select only the "age" field
    // const users = await User.where("name")
    //   .equals("yogi")
    //   .where("age")
    //   .gt(30)
    //   .lt(40).populate('employees')
    //   .select("age")
    //   .exec();
    async function getUserFullName() {
        try {
          const user = await User.findOne({ name: "siva" }); // Use `findOne()` instead of `find()`
          await user.save();
          if (user) {
            // console.log(user.getFullName()); // Call `getFullName()` on the instance
          } else {
            console.log("User not found");
          }
          
        } catch (err) {
          console.error(err);
        }
      }
      
      getUserFullName();
     
      
    // if (users.length > 0) {
    //   users[0].employees = users[0]._id; // Assigning employees correctly
    //   await users[0].save();
    // }

    // Deleting users named "siva"
    // const deletedUsers = await User.deleteMany({ name: "siva" });

    console.log(users);
  } catch (err) {
    console.error(err);
  }
}

createUser();
