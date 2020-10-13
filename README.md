## React: Creating and Hosting a Full-Stack Site
Learning how to create an interface from React components, develop a Node.js server, tie in a MongoDB database, and deploying the site on Amazon Web Services.

### Learning Objectives
- [x] Creating the app component
- [x] Using React-Router links
- [x] Setting up an Express server
- [x] Route parameters in Express
- [x] Adding the comments functionality
- [x] Installing and adding MongoDB to your project
- [x] Rewriting the endpoints
- [x] Adding React hooks
- [x] Adding buttons and forms
- [x] Pushing code to GitHub
- [x] Running a full-stack app on AWS

## Running Project
### `frontend`

`npm start` Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. This is the React JS frontend. 

### `backend`
Navigate to `backend/` and run `npm start` to start the backend server. The server runs on port `:8000 TCP` by default. 

### `database`

Make sure you have a local/remote installation of MongoDB. The default database name is `my-blog`.

articles table
----

```json
{
    "_id": {
        "$oid": "5f71c9f4c574c9ef84ec8efb"
    },
    "name": "learn-react",
    "upvotes": 11,
    "comments": [{
        "username": "john_doe",
        "text": "Hello"
    }]
}
```

