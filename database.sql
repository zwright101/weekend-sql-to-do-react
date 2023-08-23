-- CREATE DATABASE "weekend-to-do-app"

-- Table Structure
CREATE TABLE "todo" (
	"id"  SERIAL PRIMARY KEY,
	"task" VARCHAR (2048),
	"complete" BOOLEAN DEFAULT 'false'

);

INSERT INTO "todo" ("task")
VALUES ('Do Dishes')