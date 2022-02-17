Prac 6 - installed Mocha and Chai
and created test cases to test project API
Screen dump is available in ./public/assets/TenTestsPassed-p6\_.jpg

/============ Received the following output:
^C
PS C:\Users\Julia\SIT725\sit725-2021-t3-p6-A> npm run test

> project-pitch@0.0.1 test
> mocha --reporter spec

test get all projects
✔ returns status code 200 when calling api (259ms)
✔ returns status code 200 when calling api - By Wrong Title (247ms)
✔ returns status code 200 when calling api - By Existing Title (252ms)
✔ returns status code 400 when calling api - date does not exst
✔ returns status code 200 when calling api - bad date (266ms) ✔ returns exactly 10 projects as body of the response (246ms) ✔ returns status code 200 when calling api - creates new entry
✔ returns status code 200 when calling api - finds new entry
(251ms)
✔ returns an array as the body of request (253ms)
✔ returns exactly 10 projects as body of the response (258ms)

10 passing (2s)

/================= Tests passed

Repeat of prac 05, routes - API - services.
Added project delete.

Repeating Prac4 here
Hello from Julia again.

The issue with env.js not calling $.ajax which closed modal, zeroed out its values
and reloaded webpage was in the server line 92

app.post("/project", function(request, response){
// add proper validation
// if (!request.body) response.sendStatus (500)
// else { projects.push(request.body);
// response.status(204);}
console.log(request.body)

    projects.push(request.body);

response.sendStatus(200); // SEND THE RESPONSE!!!!!
});
response.status(204); is not returning the value to the front end
and hence nothing was happening. This is also why postman kept on "posting", but never showed the status.

Now I installed mongoDB and will write the projects to the DB.

Created mongoDB entries with file stored in the collection entries.
If image file is too big, error message is "Payload is too big"
Suspect limit is ~50Kb.

https://docs.mongodb.com/manual/tutorial/query-documents/
https://www.mongodb.com/developer/quickstart/cheat-sheet/#crud

Hello from Julia.

This is Prac 3 where I added date to the list of projects and
filtered them by date.

I also fixed the issue with project cards display, and they are resizing much better now.

I ran into a huge problem with gitHub commit due to image sizes and I am doing only incremengtal updates now.

Hello by Alessio:

This is my boilerplate for creating simple new applications.
This boilerplate is very basic and should be used as a training ground

It comprises of
Jquery for advanced manipulations
Materialize for the UI interface
Socket IO for real time comunications

After installing, run the server using

    npm start

If instead, you get something like the following, someone is already
using the default port of 8080:

    Server running at http://127.0.0.1:8080/

    events.js:72
        throw er; // Unhandled 'error' event
                  ^
    Error: listen EADDRINUSE
        at errnoException (net.js:901:11)
        at Server._listen2 (net.js:1039:14)
        at listen (net.js:1061:10)
        at Server.listen (net.js:1127:5)
        ...

Once the server is running, test it by visiting the following URL in your
browser:

    http://localhost:8080/

Next, test it by visiting the following URL in your
browser:

    http://localhost:8080/hello

When you visit the above url the content will be Hello World

    Hello World

## files in this repository

`server.js`

The server written with node.js. This server was adapted from the
_[example provided in the node docs](http://nodejs.org/api/synopsis.html)_.

The difference is that the port, binding host, and url are determined
via the [`cfenv` package](https://www.npmjs.org/package/cfenv). This will
return appropriate values both when running in Cloud Foundry and when running
locally.

---

`.cfignore`

List of file patterns that should **NOT** be uploaded to Bluemix.

See the Cloud Foundry doc
_[Prepare to Deploy an Application](http://docs.cloudfoundry.org/devguide/deploy-apps/prepare-to-deploy.html)_
for more information.

In this case, the contents of the file are:

    node_modules

This indicates the node modules you installed with `npm install` will **NOT** be
uploaded to Bluemix. When your app is "staged" (ie, built on Bluemix during
`cf push`), an
`npm install` will be run there to install the required modules. By avoiding
sending your node modules when you push your app, your app will be uploaded
quicker than
if you **HAD** sent the modules. But you can send the modules you have installed
if you like; just delete the `.cfignore` file.

---

`.gitignore`

List of file patterns that should **NOT** be stored in git. If you aren't using
git, you don't need this file. And the contents are personal preference.

See the npm google groups topic
_['node_modules in git' from FAQ](https://groups.google.com/forum/#!topic/npm-/8SRXhD6uMmk)_
for discussion.

---

`LICENSE`

The open source license for this sample; in this case, it's licensed under
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

---

`manifest.yml`

This file contains information that's used when you `cf push` the application.

See the Cloud Foundry doc
_[Deploying with Application Manifests](http://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html)_
for more information.

---

`package.json`

Standard package.json file for node packages. You will need this file for two
reasons:

- identify your node package dependencies during `npm install`
- identify to Bluemix that this directory contains a node.js application

See the npm doc
_[package.json](https://npmjs.org/doc/json.html)_
for more information.

---

`Procfile`

Used to indicate the command to start the server.

See the Cloud Foundry doc
_[Tips for Node.js Applications](http://docs.cloudfoundry.org/buildpacks/node/node-tips.html)_
and the Heroku doc
_[Process Types and the Procfile](https://devcenter.heroku.com/articles/procfile)_
for more information.

In this case, the file has a single line:

    web: node server

This indicates that the command `node server` should be run when the app is
started.

---

`README.md`

This file!
