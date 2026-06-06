CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10,2),
    method VARCHAR(50),
    transaction_ref VARCHAR(255),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);