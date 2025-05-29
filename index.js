const express = require('express');
const app = express();

app.use(express.json());

app.post('/voice', (req, res) => {
  console.log('✅ Appel reçu !');

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    commands: [
      {
        say: {
          text: "Bonjour, ceci est la réponse depuis Render. Tout fonctionne."
        }
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
