### How to create a new API key and validate and API using node


#### Watch this short video

[![A video on how to setup the code](https://cdn.loom.com/sessions/thumbnails/7e1eae8f592f494da5f58684f5596a27-with-play.gif "How to create a new API key and validate and API using node")](https://www.loom.com/share/7e1eae8f592f494da5f58684f5596a27)


#### Install - [The Auth API NPM library](https://www.npmjs.com/package/theauthapi)

```npm i thauthapi dotenv```


Head to the [https://theauthapi.com](https://theauthapi.com) to create your account, project, access key.


Create a new .env file

```touch .env```


Copy your new project id and access key into a .env file

```
ACCESS_TOKEN=test_access_...
TEST_KEY=
PROJECT_ID=c7b59b82-...
```

### Create your first key
Update the `createKey.js` file to include the 2 required fields:

```
name : [name]
```

(Read our API docs)[https://docs.theauthapi.com/] about the additional properties you can send on the request.

Now run 
```node createKey.js```

After creating your key, you can copy the key into your .env to run it's first validation. 

```
ACCESS_TOKEN=test_access_...
TEST_KEY=test_BXskhoH96...
PROJECT_ID=c7b59b82-...
```

Now run the key validation script to check it's valid

```node validateKey.js```
