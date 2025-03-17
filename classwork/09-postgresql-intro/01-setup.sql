-- run as postgres SUPERUSER
-- psql --username=postgres --file=01-setup.sql

DROP DATABASE IF EXISTS signups;
DROP ROLE IF EXISTS signups;

CREATE ROLE signups WITH LOGIN PASSWORD 'orchidplum';
GRANT signups TO CURRENT_USER;
CREATE DATABASE signups OWNER signups;
GRANT CREATE ON DATABASE signups TO signups;
