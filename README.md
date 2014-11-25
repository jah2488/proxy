proxy server example
=====

###To create a Proxy server based on this code you will need to do the following
_I would recommend creating a new repo with the following files **package.json, server.js, heroku\_server.js, and Procfile** and then take the following steps_
- Add your own `proxify` calls to map the API you are using to the URLs you'd like to use.
- Create a heroku app
- push your code to heroku

##To Test Your Proxy Server Locally##
Run `npm install`
Run `foreman start` and then navigate to the correct port on localhost

##To Test This Repo Running Live on Heroku##

Go to https://sheltered-earth-7471.herokuapp.com/walmart/search?apikey=t5k2mrf5py2s5nsgd3yg4usd&query=ipod
