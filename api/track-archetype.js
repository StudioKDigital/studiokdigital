// /api/track-archetype.js
// Reçoit { email, archetype } depuis le quiz et met à jour le subscriber MailerLite.
// La clé API reste côté serveur (variable d'env Vercel), jamais dans le JS du navigateur.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, archetype } = req.body || {};

  if (!email || !archetype) {
    return res.status(400).json({ error: 'email et archetype requis' });
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
      },
      body: JSON.stringify({
        email,
        fields: { archetype }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('MailerLite error:', data);
      return res.status(response.status).json(data);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('track-archetype error:', err);
    return res.status(500).json({ error: 'internal error' });
  }
}
