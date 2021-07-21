DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE books(
    id INTEGER NOT NULL,
    book_name VARCHAR(30),
    price DECIMAL(10,2)    
);

CREATE TABLE jedis(
    id INTEGER NOT NULL,
    first_name VARCHAR(30),
    alignment VARCHAR(30)
);
