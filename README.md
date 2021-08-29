# twitter-search-enginge-backend-ts

A simple REST API search engine that receive information from the Twitter API and send it to the client.

This REST API has two endpoints :

1. GET /search?q=<keyword> => it searches content related to the keyword on twitter
2. GET /users/<user_id> => it gets the content related to the user on twitter

> you can find the code source of the REACT APP using this REST API at : [twitter-search-engine-react](https://github.com/M-JARIDI/twitter-search-engine-react-app).

## Getting started in local

1. Sign up over at [developer.twitter.com/en/apply-for-access](https://developer.twitter.com/en/apply-for-access) to get 4 keys :

   - CONSUMER_KEY
   - CONSUMER_SECRET
   - ACCESS_TOKEN
   - ACCESS_TOKEN_SECRET

2. Fork the project and clone it locally.
3. Create a file at the root of the REST API project called `.env` with the following contents:

```sh
TWITTER_CONSUMER_KEY='your key'
TWITTER_CONSUMER_SECRET='your key'
TWITTER_ACCESS_TOKEN_KEY='your key'
TWITTER_ACCESS_TOKEN_SECRET='your key'
```

4. To run in local : `npm run devStart`

- Don't forget to install modules `npm install` before running

---

### Exercise Node.js / TypeScript + React :

Object: Retrieve content from twitter api and display it on a dashboard Language: Node.js / Typescript + React (Redux if you want)

### Part 1: API

Build an API using Node / Typescript that has two endpoints :

1. GET /search?q=<keyword> => it searches content related to the keyword on twitter
2. GET /users/<user_id> => it gets the content related to the user on twitter
   The output is an express app, and a readme explaining how to launch it.

### Part 1: Web app

Build a react app that consume this API and has the following functionalities :

1. a page with an input where you can type your search + a search button (like google)
2. a page where it displays content related to the search, each search content is composed with a tweet content (basic info, image if any + text) and a link of the user who posted it (+ avatar)
3. each search is opened in a new tab, and we can navigate between tabs, and close tabs (so it should keep content related to each search)
4. when we click on the user link, it displays a closable popup window, with the user profile.
5. a feature to open the detail of a tweet, and in this page add two button one to see the prev tweet and the next tweet, based on the content list you got from the search

- The output is a react app + a readme which explains how to setup and launch it
