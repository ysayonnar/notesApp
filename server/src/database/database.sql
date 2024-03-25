create TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);

create TABLE notes(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    date VARCHAR(255),
    userId INT,
    FOREIGN KEY (userId) REFERENCES person(id)
);