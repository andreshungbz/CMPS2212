/* Filename: tables.sql */

-- script that creates the necessary database table(s)
-- meant to be run after setup.sql and assumes the database and user exists
-- psql --username=guestbook_user --dbname=guestbook --file=scripts/tables.sql

\echo '\n\033[1;31m[PSQL] Dropping TABLE message\033[0m'
DROP TABLE IF EXISTS  message;

\echo '\033[1;34m[PSQL] Creating TABLE message\033[0m'
CREATE TABLE message (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);