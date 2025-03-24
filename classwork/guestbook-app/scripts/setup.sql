-- run as postgres SUPERUSER
-- psql --username=postgres --file=scripts/setup.sql

\echo '\n\033[1;31m[PSQL] Dropping Database guestbook\033[0m'
DROP DATABASE IF EXISTS guestbook;
DROP ROLE IF EXISTS guestbook_user;

\echo '\033[1;34m[PSQL] Creating Database guestbook\033[0m'
CREATE ROLE guestbook_user WITH LOGIN PASSWORD 'swordfish';
GRANT guestbook_user TO CURRENT_USER;
CREATE DATABASE guestbook OWNER guestbook_user;
GRANT CREATE ON DATABASE guestbook TO guestbook_user;
