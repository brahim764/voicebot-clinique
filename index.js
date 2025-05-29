const express = require('express');
const app = express();
app.use(express.json());

app.post('/voice', (req, res) => {
  console.log('✅ Appel reçu !');
  res.json({
    commands: [
      { say: { text: "Bonjour, votre appel fonctionne parfaitement." } }
    ]
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("✅ Serveur lancé, clé API chargée.");
});
