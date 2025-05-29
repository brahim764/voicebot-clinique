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

