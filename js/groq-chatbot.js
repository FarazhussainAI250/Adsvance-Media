// Groq API Configuration
const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// Conversation history for context
let conversationHistory = [];

// System prompt with PDF data
const SYSTEM_PROMPT = `You are a professional Sales AI Assistant for ADSVANCE MEDIA.

Company Information:
${typeof PDF_DATA !== 'undefined' ? PDF_DATA : 'Loading company data...'}

YOUR ROLE:
1. Engage clients professionally and warmly
2. Understand their needs by asking smart questions
3. Suggest the best services from our portfolio
4. Build trust and close deals
5. Generate beautiful proposals when client is ready
6. For pricing/budget questions, provide contact: +44 7491 116650 or +44 7401 116650

IMPORTANT RULES:
- Keep responses SHORT and CONCISE (2-4 lines max)
- Be friendly, professional, and solution-focused
- Ask ONE qualifying question at a time
- When client shows interest, create a BRIEF PROPOSAL with key points only
- For pricing: "For pricing, contact our team at +44 7491 116650. They'll help you!"
- Use emojis sparingly: ✨ 🚀 💼 ✅`;

// Main function to get response
async function getResponse(userMessage) {
    try {
        // Add user message to history
        conversationHistory.push({role: 'user', content: userMessage});
        
        // Keep only last 10 messages for context
        if (conversationHistory.length > 10) {
            conversationHistory = conversationHistory.slice(-10);
        }

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
                    ...conversationHistory
                ],
                temperature: 0.6,
                max_tokens: 200
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const botResponse = data.choices[0].message.content;
        
        // Add bot response to history
        conversationHistory.push({role: 'assistant', content: botResponse});
        
        return botResponse;
    } catch (error) {
        console.error('Groq API Error:', error);
        return `Technical issue. Please contact:\n📞 +44 7491 116650\n📧 contact@adsvancemedia.com`;
    }
}
