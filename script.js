// Add Font Awesome icons
const icons = document.querySelectorAll('.links-list i');
icons.forEach(icon => {
  const className = icon.className.split(' ')[1];
  icon.classList.add(`fa-${className}`);
});

// Open links in new tab
const links = document.querySelectorAll('.links-list a');
links.forEach(link => {
  link.setAttribute('target', '_blank');
});

const MongoClient = require("mongodb");
const uri = "mongodb://localhost:27017/rxnder";
const db = await MongoClient.connect(uri);
const collection = db.collection("users");

const formData = new FormData(document.querySelector("form"));
const email = formData.get("email");
const password = formData.get("password");

const user = {
  email: email,
  password: password,
};

await collection.insertOne(user);

console.log("User data saved successfully!");