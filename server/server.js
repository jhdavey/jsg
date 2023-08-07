const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi} = require("openai");
const { typeDefs, resolvers } = require("./schemas");

require('dotenv').config();

//Initialize instance of express server
const app = express();

//Start middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//End middleware

//Start Open Ai connection setup
const config = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
})

app.post("/chat", async (req, res) => {
  const {prompt} = req.body;

  const openai = new OpenAIApi(config);
  
  const completion = openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: `You are a travel assistant that provides recommended activities to users based on the destination provided. Given the following destination, please include some information about the destination and list the most popular activities in the destination, numbered from 1-10. Do not provide answers unless the query includes a recognizable city, province, parish, state, country, or continent.` + prompt,
  });
  res.send((await completion).data.choices[0].text);
})
//End Open Ai connection setup


// import user defined files
const { authMiddleware } = require('./utils/auth');

const db = require("./config/connection");


// instance of Apollo server. pass in schema data
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve client/build as static assets while in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/"));
});

// new instance of an Apollo server with GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT||3001;

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Call async function to start the server
startApolloServer(typeDefs, resolvers);















app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/"));
});


