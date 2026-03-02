// Optimized Knowledge Base
const KB={c:{n:"ADSVANCE MEDIA",f:"2015",e:"contact@adsvancemedia.com",p:"+44 7491 116650",l:"12 windsor view Dewsbury Wf127ss"},s:["Generative AI - Custom AI solutions using GPT, Claude for chatbots & automation","Machine Learning - Predictive models & ML algorithms","UI/UX Design - Modern designs for engaging digital experiences","Web Development - Full stack apps with React, Node.js, Flask","Automation - Process automation with n8n","Mobile App Development - Apps users love"],t:["SAJJAD A.K SULTAN - Director","Muhammad Suleman - CEO, Full Stack Developer","Aqsa Rani - Business Developer | AI Developer"],p:["Elevate X Crew","AI Medical Assistant","CV & Cover Letter Generator","Learn Wise AI Model","Freelancer Hourly Rate Predictor"],pt:["Inspiration Hair Nails & Beauty - inspirationhairnailsandbeauty.co.uk","Coolx Electronics - coolx.com.pk","Islamabad Laser & Skin Clinic - ilscbydraasma.com","Atlas Auto Hire - atlasautohire.com"]};

// Fast Response Map
const R={
hi:`Hello! 👋 Welcome to ${KB.c.n}. We specialize in AI, Web Development & Mobile Apps. How can I help?`,
about:`${KB.c.n} transforms ideas into high-performance digital products since ${KB.c.f}.\n\n📊 Stats:\n• 2+ Years Innovation\n• 100+ Solutions\n• 100+ Happy Clients\n• 65+ AI Tools`,
service:`🚀 Our Services:\n\n${KB.s.map((s,i)=>`${i+1}. ${s}`).join('\n')}\n\nWhich interests you?`,
ai:`🤖 AI Services:\n${KB.s[0]}\n${KB.s[1]}\n${KB.s[4]}\n\nDiscuss your AI project?`,
web:`💻 ${KB.s[3]}\n\nModern tech: React, Node.js, Flask\nNeed a website? Contact us!`,
mobile:`📱 ${KB.s[5]}\n\nCross-platform apps with native features.\nLet's build your app!`,
design:`🎨 ${KB.s[2]}\n\nBeautiful, user-friendly designs.`,
contact:`📞 Contact:\n📧 ${KB.c.e}\n📱 ${KB.c.p}\n📍 ${KB.c.l}\n💬 WhatsApp: ${KB.c.p}`,
team:`👥 Our Team:\n\n${KB.t.map(m=>`• ${m}`).join('\n')}`,
project:`🎯 Recent Projects:\n\n${KB.p.map((p,i)=>`${i+1}. ${p}`).join('\n')}\n\nVisit portfolio for more!`,
partner:`🤝 Partners:\n\n${KB.pt.map(p=>`• ${p}`).join('\n')}`,
skill:`💪 Skills:\n• Python (95%)\n• ML|DL|NLP (90%)\n• Web Dev (85%)\n• SEO (90%)\n• Agentic AI (75%)\n\nProfessional: Creativity, Communication, Problem Solving`,
price:`💰 Pricing depends on requirements:\n• Custom quotes\n• Flexible plans\n• Competitive rates\n\nContact: ${KB.c.e} or ${KB.c.p}`,
thanks:`You're welcome! 😊 Any other questions about ${KB.c.n}?`,
bye:`Goodbye! 👋 Contact anytime: ${KB.c.e}`,
default:`I help with ${KB.c.n} info! 😊\n\nAsk about:\n• Services\n• Contact\n• Team\n• Projects\n• Skills\n• Partners`
};

// Ultra-Fast Response Matcher
function getResponse(m){
const q=m.toLowerCase();
if(/^(hi|hello|hey|salam)/i.test(q))return R.hi;
if(/company|about|who.*you|business/i.test(q))return R.about;
if(/service|offer|provide/i.test(q))return R.service;
if(/\bai\b|artificial|generative|chatbot|gpt/i.test(q))return R.ai;
if(/web|website|full.*stack/i.test(q))return R.web;
if(/mobile|\bapp\b|android|ios/i.test(q))return R.mobile;
if(/design|\bui\b|\bux\b/i.test(q))return R.design;
if(/contact|email|phone|address|location/i.test(q))return R.contact;
if(/team|staff|ceo|director/i.test(q))return R.team;
if(/project|portfolio|work/i.test(q))return R.project;
if(/partner|client/i.test(q))return R.partner;
if(/skill|expertise|tech/i.test(q))return R.skill;
if(/price|cost|budget|quote/i.test(q))return R.price;
if(/thank/i.test(q))return R.thanks;
if(/bye|goodbye/i.test(q))return R.bye;
return R.default;
}
