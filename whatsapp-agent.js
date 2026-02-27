// Advanced WhatsApp AI Agent for ADSVANCE MEDIA
const KB = {
  greetings: ["hi", "hello", "hey", "salam", "assalam", "good morning", "good afternoon", "good evening"],
  services: ["service", "what do", "offerings", "solutions", "provide", "deliver", "kya karte", "skills", "expertise"],
  ai: ["ai", "artificial intelligence", "machine learning", "ml", "deep learning", "nlp", "generative"],
  web: ["web", "website", "development", "full stack", "frontend", "backend", "react", "node"],
  mobile: ["mobile", "app", "android", "ios", "application", "flutter"],
  design: ["design", "ui", "ux", "interface", "graphic", "logo"],
  seo: ["seo", "optimization", "ranking", "google", "search engine"],
  automation: ["automation", "automate", "workflow", "n8n", "zapier"],
  contact: ["contact", "phone", "email", "reach", "number", "address", "location", "kaise contact"],
  pricing: ["price", "cost", "quote", "budget", "kitna", "charges", "fee", "payment"],
  team: ["team", "who", "founder", "ceo", "director", "members", "staff", "kaun"],
  registration: ["register", "sign up", "join", "start", "begin", "onboard", "kaise shuru"],
  about: ["about", "company", "adsvance", "who are you", "kya hai", "history", "since when"],
  portfolio: ["portfolio", "projects", "work", "examples", "case study", "previous", "done"],
  partners: ["partner", "collaboration", "fecto", "britsync", "collaborate"],
  experience: ["experience", "years", "kitne saal", "how long", "expertise"],
  clients: ["clients", "customers", "happy", "satisfied", "kitne clients"],
  technologies: ["technology", "tech stack", "tools", "framework", "language", "python", "javascript"],
  process: ["process", "how work", "methodology", "approach", "kaise kaam"],
  support: ["support", "help", "assist", "maintenance", "after delivery"],
  timeline: ["timeline", "duration", "kitna time", "how long", "delivery time"],
  thanks: ["thank", "thanks", "shukriya", "appreciate"]
};

const INFO = {
  phone: "+44 7491 116650",
  email: "contact@adsvancemedia.com",
  location: "12 Windsor View, Dewsbury WF127SS, UK",
  founded: "2015",
  clients: "100+",
  projects: "100+",
  experience: "2+ years"
};

function matchKeywords(msg, keywords) {
  return keywords.some(k => msg.includes(k));
}

function getResponse(userMessage) {
  const msg = userMessage.toLowerCase().trim();
  
  if (matchKeywords(msg, KB.greetings)) {
    return "👋 Hello! Welcome to *ADSVANCE MEDIA*\n\n🚀 Your trusted partner for:\n• AI & ML Solutions\n• Full Stack Development\n• Mobile Apps\n• UI/UX Design\n\nHow can I assist you today?\n\n💡 Try: 'services', 'pricing', 'portfolio'";
  }
  
  if (matchKeywords(msg, KB.about)) {
    return "🏢 *About ADSVANCE MEDIA*\n\n✨ Since 2015, we transform ideas into high-performance digital products.\n\n📊 Our Stats:\n• 100+ Projects Delivered\n• 100+ Happy Clients\n• 65+ AI Tools Expertise\n• 2+ Years Innovation\n\n🎯 Mission: Empowering businesses with smart, scalable software solutions.\n\n📞 Learn more: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.services)) {
    return "🚀 *Our Services*\n\n1️⃣ *Generative AI*\nGPT, Claude, LLMs, Chatbots, Content Generation\n\n2️⃣ *Machine Learning*\nPredictive Models, Data Analysis, ML Algorithms\n\n3️⃣ *Full Stack Development*\nReact, Node.js, Flask, Modern Web Apps\n\n4️⃣ *Mobile Apps*\nCross-platform, Native Features\n\n5️⃣ *UI/UX Design*\nModern Interfaces, User Experience\n\n6️⃣ *SEO & Automation*\nRanking, Workflow Optimization\n\n📞 Discuss your project: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.ai)) {
    return "🤖 *AI & Machine Learning Services*\n\n✅ Generative AI (GPT, Claude)\n✅ Custom Chatbots & Virtual Assistants\n✅ NLP & Text Analysis\n✅ Computer Vision\n✅ Predictive Analytics\n✅ ML Model Development\n✅ AI Integration\n\n💼 Recent Projects:\n• AI Medical Assistant\n• Context-based QA Chatbot\n• CV & Cover Letter Generator\n\n📞 Build your AI solution: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.web)) {
    return "💻 *Web Development Services*\n\n🔧 Technologies:\n• Frontend: React, HTML5, CSS3, JavaScript\n• Backend: Node.js, Flask, Python\n• Database: MySQL, MongoDB, PostgreSQL\n• APIs: RESTful, GraphQL\n\n✨ We Build:\n• Custom Web Applications\n• E-commerce Platforms\n• SaaS Solutions\n• Enterprise Software\n\n📞 Start your project: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.mobile)) {
    return "📱 *Mobile App Development*\n\n✅ Cross-platform Apps\n✅ Native Features Integration\n✅ iOS & Android\n✅ Flutter & React Native\n✅ App Store Deployment\n\n🎯 From concept to launch, we craft apps users love!\n\n📞 Build your app: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.design)) {
    return "🎨 *UI/UX Design Services*\n\n✨ What We Offer:\n• Modern UI Design\n• User Experience Optimization\n• Responsive Design\n• Graphic Design\n• Brand Identity\n• Prototyping & Wireframing\n\n🎯 Creating intuitive, engaging digital experiences!\n\n📞 Design with us: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.portfolio)) {
    return "💼 *Our Portfolio*\n\n🏆 100+ Projects Delivered:\n\n🤖 AI Projects:\n• AI Medical Assistant\n• Learn Wise AI Model\n• Context QA Chatbot\n• CV Generator\n\n💻 Web Apps:\n• Shop Manager System\n• Quiz Management\n• Course Management\n\n📱 Mobile Apps:\n• WhatsApp Bulk Sender\n• Car Price Estimator\n\n🔗 View full portfolio on our website!\n📞 Discuss your idea: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.partners)) {
    return "🤝 *Our Partners*\n\n1️⃣ *Fecto Digital* (Dubai)\n🔹 Research-Driven Innovation\n🔹 AI Research for Modern Businesses\n\n2️⃣ *BritSync AI* (UK)\n🔹 Brand of Ascentra Global Ltd\n🔹 Advanced AI & ML Solutions\n\n✨ We collaborate with industry leaders for cutting-edge innovation!\n\n📞 Partner with us: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.team)) {
    return "👥 *Our Leadership Team*\n\n🎯 *Khwaja Sajjad Ahmad Sultan*\nDirector | Visionary Leader\nDriving sustainable growth & excellence\n\n💻 *Muhammad Suleman*\nCEO & Full Stack Developer\nExpert in AI, Full Stack & Database\n\n🚀 *Aqsa Rani*\nBusiness Developer | AI & Python Developer\nCombining strategy with innovation\n\n📞 Connect with our team: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.technologies)) {
    return "⚙️ *Our Tech Stack*\n\n🐍 *Languages:*\nPython, JavaScript, TypeScript, Java\n\n🤖 *AI/ML:*\nTensorFlow, PyTorch, OpenAI, Hugging Face\n\n💻 *Web:*\nReact, Node.js, Flask, Django\n\n📱 *Mobile:*\nFlutter, React Native\n\n🗄️ *Database:*\nMySQL, MongoDB, PostgreSQL\n\n☁️ *Cloud:*\nAWS, Azure, Google Cloud\n\n📞 Tech consultation: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.process)) {
    return "🔄 *Our Work Process*\n\n1️⃣ *Discovery*\nUnderstand your requirements\n\n2️⃣ *Planning*\nStrategy & roadmap creation\n\n3️⃣ *Design*\nUI/UX & architecture design\n\n4️⃣ *Development*\nAgile development sprints\n\n5️⃣ *Testing*\nQuality assurance & testing\n\n6️⃣ *Deployment*\nLaunch & go-live\n\n7️⃣ *Support*\nMaintenance & updates\n\n📞 Start your journey: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.pricing)) {
    return "💰 *Pricing & Quotes*\n\n💡 We offer:\n✅ Competitive Pricing\n✅ Custom Packages\n✅ Flexible Payment Plans\n✅ Value for Money\n\n📋 Pricing depends on:\n• Project Scope\n• Technology Stack\n• Timeline\n• Features Required\n\n📞 Get FREE Quote:\nCall: " + INFO.phone + "\nEmail: " + INFO.email + "\n\n💬 Let's discuss your budget!";
  }
  
  if (matchKeywords(msg, KB.timeline)) {
    return "⏱️ *Project Timeline*\n\n📅 Typical Durations:\n• Simple Website: 1-2 weeks\n• Web Application: 4-8 weeks\n• Mobile App: 6-12 weeks\n• AI Solution: 4-10 weeks\n• Enterprise Software: 12+ weeks\n\n⚡ We also offer:\n• Rush Delivery\n• Agile Sprints\n• Milestone-based Delivery\n\n📞 Discuss timeline: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.support)) {
    return "🛠️ *Support & Maintenance*\n\n✅ Post-Delivery Support:\n• Bug Fixes\n• Updates & Upgrades\n• Performance Optimization\n• Security Patches\n• Technical Support\n• Training & Documentation\n\n⏰ Support Plans:\n• 24/7 Emergency Support\n• Monthly Maintenance\n• Annual Contracts\n\n📞 Support inquiry: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.contact)) {
    return "📞 *Contact ADSVANCE MEDIA*\n\n☎️ Phone: " + INFO.phone + "\n📧 Email: " + INFO.email + "\n📍 Location: " + INFO.location + "\n\n🌐 Website: Check our portfolio & services\n\n💬 Available:\nMon-Sat: 9 AM - 6 PM (UK Time)\n\n✨ We're here to help! Reach out anytime! 🚀";
  }
  
  if (matchKeywords(msg, KB.registration)) {
    return "✅ *Get Started with ADSVANCE MEDIA*\n\n📝 3 Easy Steps:\n\n1️⃣ *Contact Us*\nCall: " + INFO.phone + "\nEmail: " + INFO.email + "\n\n2️⃣ *Free Consultation*\nDiscuss your project requirements\n\n3️⃣ *Proposal & Agreement*\nReceive custom proposal & start!\n\n🎯 Or fill the contact form on our website!\n\n🚀 Let's build something amazing together!";
  }
  
  if (matchKeywords(msg, KB.experience)) {
    return "🏆 *Our Experience*\n\n📊 Track Record:\n• Founded: 2015\n• Active Years: 2+\n• Projects Completed: 100+\n• Happy Clients: 100+\n• AI Tools Mastered: 65+\n• Success Rate: 98%\n\n🌟 Industries Served:\n• Healthcare\n• E-commerce\n• Education\n• Finance\n• Real Estate\n\n📞 Leverage our expertise: " + INFO.phone;
  }
  
  if (matchKeywords(msg, KB.thanks)) {
    return "🙏 You're welcome!\n\nHappy to help! If you have any more questions about our services, feel free to ask.\n\n📞 Ready to start? Contact: " + INFO.phone + "\n\n✨ Have a great day! 🚀";
  }
  
  return "👋 Thanks for reaching out!\n\n💡 I can help you with:\n• Services & Solutions\n• Pricing & Quotes\n• Portfolio & Projects\n• Team & Partners\n• Contact Information\n\n❓ Ask me anything or contact directly:\n📞 " + INFO.phone + "\n📧 " + INFO.email + "\n\n🚀 Our team is ready to help!";
}

if (typeof module !== 'undefined') module.exports = { getResponse };
