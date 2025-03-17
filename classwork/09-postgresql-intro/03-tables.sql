-- run as signups user
-- psql --username=signups --dbname=signups --file=03-tables.sql

DROP TABLE IF EXISTS signups;

CREATE TABLE signups (
    id SERIAL PRIMARY KEY,
    username text NOT NULL,
    email citext NOT NULL,
    created_at timestamp(0) WITH TIME ZONE NOT NULL DEFAULT NOW()
);

INSERT INTO signups (username, email) VALUES ('andreshung', '2018118240@ub.edu.bz');

SELECT * FROM signups;