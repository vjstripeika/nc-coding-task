# NeckCare technical assignment

Greetings,

Thank you taking the time to look through this technical assignment.

## About

I was given a static image to create a mock landing page for NeckCare.
The image included the desired page without any mobile, accessibility or functional requirements.
From this task I realized that the goal is to see my approach rather than provide me with a technical challenge.

[NeckCare - example](example.png)

## Mini-design

For this task I've made several decisions:

- I wanted to use server-side rendering, because it is a better fit for content websites due to SEO indexing and possibility to cache static/rarely changing content.
- I added a SQLite as embedded database. I think that even mock tasks should simulate real world applications, so I've decided to add a DB layer. I've chosen drizzle as a library to interact with it, because it provides easy to use and easy to understand query builder and migration tool.
- This naturally created a need for DB seeding function. Since there is not a lot of data, I wrote a custom util to do so.
- Since the project runs sever-side for most part, data is fetched in nextjs server components directly. However, I've added `/api/features` and `/api/reviews` to showcase how such an api could look like.

## Setting up the project

This project requires node `v22.13.1` to run. Use `nvm use` command to use this version.

- Copy `.env.example` and rename it to `.env`
- Run `yarn` to install dependencies
- Run `yarn migrate` to create `local.db`
- Run `yarn seed` once to seed the DB.

Congratz! You're good to go!

## Running the project

There are two ways to run the project: dev mode or build.

- `yarn dev` to run it in dev mode.
- `yarn build` and then `yarn start` to run it as built project.
