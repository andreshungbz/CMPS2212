-- run as postgres SUPERUSER
-- psql --username=postgres --dbname=signups --file=02-extensions.sql

CREATE EXTENSION IF NOT EXISTS citext;