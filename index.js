const express = require('express');
const app = express();
app.use(express.json());

app.post('/voice', (req, res) => {
  console.log('📞 SignalWire a POST sur /voice');

  res.json({
    commands: [
      {
        say: {
          text: "Bonjour, ceci est la réponse depuis Render. Tout fonctionne."
        }
      }
    ]
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("✅ Serveur lancé, clé API chargée.");
});

