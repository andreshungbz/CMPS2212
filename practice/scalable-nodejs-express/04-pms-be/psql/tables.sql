DROP TABLE IF EXISTS roles CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;
DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE roles (
	role_id UUID PRIMARY KEY,
	name VARCHAR(60) NOT NULL UNIQUE,
	description VARCHAR(30),
	rights TEXT NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP
);

CREATE TABLE users (
	user_id UUID PRIMARY KEY,
	email VARCHAR(60) NOT NULL UNIQUE,
	full_name VARCHAR(30),
	username VARCHAR(30) NOT NULL UNIQUE,
	password VARCHAR(100) NOT NULL,
	role_id UUID REFERENCES roles(role_id),
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP
);

CREATE TABLE projects (
	project_id UUID PRIMARY KEY,
	name VARCHAR(60) NOT NULL UNIQUE,
	description VARCHAR(200),
	user_ids UUID[],
	start_time TIMESTAMP,
	end_time TIMESTAMP,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP
);

CREATE TABLE tasks (
	task_id UUID PRIMARY KEY,
	name VARCHAR(60) NOT NULL UNIQUE,
	description VARCHAR(300),
	project_id UUID REFERENCES projects(project_id),
	user_id UUID REFERENCES users(user_id),
	estimated_start_time TIMESTAMP,
	estimated_end_time TIMESTAMP,
	actual_start_time TIMESTAMP,
	actual_end_time TIMESTAMP,
	priority VARCHAR(20),
	status VARCHAR(30) NOT NULL,
	supported_files TEXT[],
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP
);

CREATE TABLE comments (
	comment_id UUID PRIMARY KEY,
	comment VARCHAR(300) NOT NULL,
	task_id UUID NOT NULL REFERENCES tasks(task_id),
	user_id UUID NOT NULL REFERENCES users(user_id),
	supported_files TEXT[],
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP
);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";