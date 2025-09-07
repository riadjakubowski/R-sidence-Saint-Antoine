// /api/careers.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    try {
        const { firstName, lastName, email, position, coverLetter } = req.body;

        const r = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Carrières <no-reply@yourdomain.com>',
                to: process.env.TO_EMAIL,
                subject: `Candidature - ${position} - ${firstName} ${lastName}`,
                html: `
            <h2>Nouvelle candidature</h2>
            <p><b>Nom:</b> ${firstName} ${lastName}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Poste:</b> ${position}</p>
            <pre>${coverLetter || '(pas de lettre)'}</pre>
          `
            })
        });

        if (!r.ok) return res.status(500).json({ ok: false, error: await r.text() });
        res.status(200).json({ ok: true });
    } catch (e) {
        res.status(500).json({ ok: false, error: e.message });
    }
}
