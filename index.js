const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

app.post('/voice', async (req, res) => {
  const userInput = req.body.transcription || req.body.prompt || "Je n'ai rien compris.";
  const from = req.body.from || "anonyme";

  const isFrench = /[àâçéèêëîïôûùüÿœ]/i.test(userInput);
  const prompt = isFrench
    ? `L'appelant a dit : "${userInput}". Réponds poliment en français comme une assistante de clinique dentaire.`
    : `The caller said: "${userInput}". Respond politely in English as a dental clinic assistant.`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.6
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        }
      }
    );

    const reply = response.data.choices[0].message.content;

    fs.appendFileSync('calls.csv', `"${new Date().toISOString()}","${from}","${userInput}","${reply}"\n`);

    res.json({
      commands: [
        { say: { text: reply } }
      ]
    });
  } catch (error) {
    console.error(error);
    res.json({
      commands: [
        { say: { text: "Nous avons un problème technique. Merci de rappeler plus tard." } }
      ]
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Voicebot clinique en ligne.');
});
