const express = require('express');
const app = express();
app.use(express.json());

app.post('/voice', (req, res) => {
  console.log("📞 SignalWire a bien appelé /voice");
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify({
    commands: [
      {
        say: {
          text: "Test simple. SignalWire doit lire ce message."
        }
      }
    ]
  }));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("✅ Serveur en ligne sur port 3000 ou Render");
});
