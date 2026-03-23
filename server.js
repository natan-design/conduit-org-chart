import 'dotenv/config';
import express from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json({ limit: '2mb' }));
app.use(express.static(__dirname));

app.post('/api/claude-proxy', async (req, res) => {
  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const { system, messages, max_tokens } = req.body;

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: max_tokens || 8000,
      system,
      messages
    });

    res.json(response);
  } catch (err) {
    res.status(500).json({ error: { message: err.message } });
  }
});

app.listen(PORT, () => {
  console.log(`Conduit Org Chart running at http://localhost:${PORT}`);
});
