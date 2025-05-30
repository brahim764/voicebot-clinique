const express = require('express');
const app = express();
app.use(express.json());

app.post('/voice', (req, res) => {
  console.log('📞 Appel reçu de SignalWire');
  res.setHeader("Content-Type", "application/json");
  res.json({
    commands: [
      {
        say: {
          text: "Bonjour, ceci est une réponse test depuis Render."
        }
      }
    ]
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("✅ Serveur en ligne sur port 3000 ou Render");
});
