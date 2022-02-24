# Starwars+

## Prerequisites
- [NodeJS LTS](https://nodejs.org/en/ 'NodeJS LTS')
- [MongoDB LTS](https://www.mongodb.com/en 'MongoDB LTS')

## Install

#### Dependencies across all packages are installed and hosted up to the root
level under _starwarsplus/node_modules_

<pre>
git clone git@github.com:bsandoval/starwarsplus.git
cd ~/starwarsplus
npm install
</pre>

## Environment variables

#### The following variables must be defined at the dotenv file

<pre>DB_URL=mongodb://{YOUR_LOCAL_URL}:{YOUR_PORT}/starwarsplus</pre>

## Run the server

#### Runs express server

<pre>npm start</pre>
<pre>http://localhost:8080/</pre>