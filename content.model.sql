CREATE TABLE content (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    body TEXT,
    type VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);