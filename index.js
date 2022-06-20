import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
  const pessoa = req.body;
  users.push(pessoa);
  res.send("OK");
})

app.post("/tweets", (req, res) => {
  const tweet = {
    username: req.body.username,
    tweet: req.body.tweet,
    avatar: users.find((user) => user.username === req.body.username).avatar,
  };

  tweets.push(tweet);
  res.send("OK!");
});

app.get("/tweets", (req, res) => {
const mostrar = tweets.slice(tweets.length - 10, tweets.length)

  if (tweets.length <= 10) {
    const novo = tweets.reverse()
    res.send(novo);
  } else {
    res.send(mostrar.reverse());
  }
});



app.listen(5000, ()=>console.log("Servidor iniciado"))