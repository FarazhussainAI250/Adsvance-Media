// Groq API Configuration
const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// Company Knowledge Base
const KB = {
    c: {n: "ADSVANCE MEDIA", f: "2015", e: "contact@adsvancemedia.com", p: "+44 7491 116650", l: "12 windsor view Dewsbury Wf127ss"},
    s: ["Generative AI - Custom AI solutions using GPT, Claude for chatbots & automation", "Machine Learning - Predictive models & ML algorithms", "UI/UX Design - Modern designs for engaging digital experiences", "Web Development - Full stack apps with React, Node.js, Flask", "Automation - Process automation with n8n", "Mobile App Development - Apps users love"],
    t: ["SAJJAD A.K SULTAN - Director", "Muhammad Suleman - CEO, Full Stack Developer", "Aqsa Rani - Business Developer | AI Developer"],
    p: ["Elevate X Crew", "AI Medical Assistant", "CV & Cover Letter Generator", "Learn Wise AI Model", "Freelancer Hourly Rate Predictor"],
    pt: ["Inspiration Hair Nails & Beauty - inspirationhairnailsandbeauty.co.uk", "Coolx Electronics - coolx.com.pk", "Islamabad Laser & Skin Clinic - ilscbydraasma.com", "Atlas Auto Hire - atlasautohire.com"]
};

// System prompt with company context
const SYSTEM_PROMPT = `You are a helpful AI assistant for ${KB.c.n}, a digital solutions company founded in ${KB.c.f}.

Company Info:
- Services: ${KB.s.join(', ')}
- Team: ${KB.t.join(', ')}
- Contact: ${KB.c.e}, ${KB.c.p}
- Location: ${KB.c.l}
- Projects: ${KB.p.join(', ')}
- Partners: ${KB.pt.join(', ')}

Answer questions professionally and helpfully about the company, services, and general topics.`;

// Main function to get response
async function getResponse(userMessage) {
    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    {role: 'system', content: SYSTEM_PROMPT},
                    {role: 'user', content: userMessage}
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Groq API Error:', error);
        return `Sorry, I'm having trouble connecting. Please contact us at ${KB.c.e} or ${KB.c.p}`;
    }
}
