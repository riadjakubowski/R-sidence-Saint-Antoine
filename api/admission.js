// /api/admission.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    try {
        const { residentFirstName, residentLastName, contactEmail, ...rest } = req.body;

        const r = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Formulaire <no-reply@yourdomain.com>',
                to: process.env.TO_EMAIL,
                subject: `Admission - ${residentFirstName} ${residentLastName}`,
                html: `
            <h2>Nouvelle demande d’admission</h2>
            <p><b>Résident:</b> ${residentFirstName} ${residentLastName}</p>
            <p><b>Contact:</b> ${contactEmail || '(non fourni)'}</p>
            <pre>${JSON.stringify(rest, null, 2)}</pre>
          `
            })
        });

        if (!r.ok) return res.status(500).json({ ok: false, error: await r.text() });
        res.status(200).json({ ok: true });
    } catch (e) {
        res.status(500).json({ ok: false, error: e.message });
    }
}
