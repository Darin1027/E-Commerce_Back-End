// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// todo - Getting Started
//* Use the schema.sql file in the db folder to create your database using MySQL shell commands. Use environment variables to store sensitive data, like your MySQL username, password, and database name.

// todo - Database Models
// Your database should contain the following four models, including the requirements listed for each model:

//! Category
//? id
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment
//? category_name
// String
// Doesn't allow null values

//! Product
//? id
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment
//? product_name
// String
// Doesn't allow null values
//? price
// Decimal
// Doesn't allow null values
// Validates that the value is a decimal
//? stock
// Integer
// Doesn't allow null values
// Set a default value of 10
// Validates that the value is numeric
//? category_id
// Integer
// References the category model's id

//! Tag
//? id
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment
//? tag_name
// String

//! ProductTag
//? id
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment
//? product_id
// Integer
// References the product model's id
//? tag_id
// Integer
// References the tag model's id

// todo - Associations
// You'll need to execute association methods on your Sequelize models to create the following relationships between them:
// Product belongs to Category, as a category can have multiple products but a product can only belong to one category.
// Category has many Product models.
// Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.
// Tag belongs to many Product models.
