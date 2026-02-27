// Advanced WhatsApp AI Agent - Trained on Website + PDF Content
const KB = {
  greetings: ["hi", "hello", "hey", "salam", "assalam", "good morning", "good afternoon", "good evening"],
  about: ["about", "company", "adsvance", "advance media", "who are you", "kya hai", "history"],
  services: ["service", "what do", "offerings", "solutions", "provide", "deliver", "kya karte"],
  ai: ["ai", "artificial intelligence", "machine learning", "ml", "deep learning", "nlp", "generative", "chatbot", "conversational"],
  automation: ["automation", "automate", "workflow", "make", "zapier", "crm"],
  web: ["web", "website", "development", "full stack", "frontend", "backend", "react", "node", "flask"],
  mobile: ["mobile", "app", "android", "ios", "application", "cross platform"],
  saas: ["saas", "platform", "dashboard", "software as a service"],
  voice: ["voice", "tts", "text to speech", "voice cloning", "voice ai"],
  nlp: ["nlp", "natural language", "text processing", "language processing"],
  vision: ["computer vision", "image", "visual", "cv"],
  analytics: ["analytics", "data analysis", "predictive", "insights"],
  tech: ["technology", "tech stack", "tools", "framework", "python", "javascript"],
  portfolio: ["portfolio", "projects", "work", "examples", "case study"],
  contact: ["contact", "phone", "email", "reach", "number", "address"],
  pricing: ["price", "cost", "quote", "budget", "kitna", "charges"],
  team: ["team", "who", "founder", "ceo", "director"],
  partners: ["partner", "collaboration", "fecto", "britsync"],
  registration: ["register", "sign up", "join", "start", "begin"]
};

const INFO = {
  phone: "+44 7491 116650",
  email: "contact@adsvancemedia.com",
  location: "12 Windsor View, Dewsbury WF127SS, UK",
  founded: "2015",
  clients: "100+",
  projects: "100+"
};

function match(msg, keywords) {
  return keywords.some(k => msg.includes(k));
}

function getResponse(userMessage) {
  const msg = userMessage.toLowerCase().trim();
  
  if (match(msg, KB.greetings)) {
    return "👋 Hello! Welcome to *ADVANCE MEDIA*\n\n🚀 Technology-driven company specializing in:\n• AI & Machine Learning\n• Custom Software Development\n• Automation Systems\n• Digital Transformation\n\nHow can I help you today?";
  }
  
  if (match(msg, KB.about)) {
    return "🏢 *About ADVANCE MEDIA*\n\nWe are a technology-driven company specializing in Artificial Intelligence, custom software development, automation systems, and digital transformation solutions.\n\n✨ Since 2015, we help businesses:\n• Streamline operations\n• Improve customer engagement\n• Scale efficiently through innovation\n\n📊 Our Track Record:\n• 100+ Projects Delivered\n• 100+ Happy Clients\n• 65+ AI Tools Expertise\n\n📞 Learn more: " + INFO.phone;
  }
  
  if (match(msg, KB.services)) {
    return "🚀 *Our Core Services*\n\n1️⃣ *AI Custom Solutions*\nTailored AI systems for automation, analytics & decision-making\n\n2️⃣ *AI Chatbots & Conversational Systems*\nWhatsApp, Website & Voice AI Assistants\n\n3️⃣ *Automation & Workflow Systems*\nCRM automation, lead management, marketing automation\n\n4️⃣ *Web Development*\nCorporate sites, SaaS platforms, dashboards, e-commerce\n\n5️⃣ *Mobile App Development*\nAndroid & cross-platform solutions\n\n6️⃣ *Frontend & Backend Development*\nClean UI/UX, secure architecture, API integrations\n\n📞 Discuss your needs: " + INFO.phone;
  }
  
  if (match(msg, KB.ai)) {
    return "🤖 *AI & Machine Learning Services*\n\n✅ *AI Custom Solutions*\n• Predictive Analytics\n• Recommendation Systems\n• AI Dashboards\n• ML Model Development & Deployment\n\n✅ *AI Chatbots*\n• WhatsApp Business Chatbots\n• Website AI Chatbots\n• Voice AI Assistants\n• Customer Support Automation\n• AI-powered FAQ Integration\n\n✅ *Advanced AI Services*\n• Machine Learning Model Training\n• Natural Language Processing (NLP)\n• AI-based Data Analytics\n• Voice Cloning & TTS Solutions\n• Computer Vision Solutions\n• Custom AI SaaS Development\n\n📞 Build your AI solution: " + INFO.phone;
  }
  
  if (match(msg, KB.automation)) {
    return "⚙️ *Automation & Workflow Systems*\n\nWe create automation systems using Make and custom APIs to eliminate manual work.\n\n✅ Services Include:\n• CRM Automation\n• Lead Management Systems\n• Marketing Automation\n• Internal Workflow Optimization\n• Multi-platform Integration\n• Process Automation\n\n🔧 Tools We Use:\n• Make (formerly Integromat)\n• Custom REST APIs\n• Third-party Integrations\n\n💡 Automate repetitive tasks and boost productivity!\n\n📞 Automate your business: " + INFO.phone;
  }
  
  if (match(msg, KB.web)) {
    return "💻 *Web Development Services*\n\nWe design and develop responsive, secure, and scalable websites.\n\n✅ What We Build:\n• Corporate Websites\n• SaaS Platforms\n• Dashboards & Admin Panels\n• E-commerce Systems\n• Custom Web Applications\n\n🔧 Technologies:\n• Frontend: React, HTML5, CSS3, JavaScript\n• Backend: Flask, Node.js, Python\n• Database: SQL & NoSQL\n• REST APIs & Integrations\n• Cloud Deployment\n\n🎯 Clean UI/UX, fast performance, responsive design!\n\n📞 Start your project: " + INFO.phone;
  }
  
  if (match(msg, KB.mobile)) {
    return "📱 *Mobile Application Development*\n\nWe develop high-performance mobile applications with AI features and real-time data processing.\n\n✅ Our Expertise:\n• Android Development\n• Cross-platform Solutions\n• AI-integrated Mobile Apps\n• Real-time Data Processing\n• Backend System Integration\n• Seamless User Experience\n\n🎯 From concept to deployment!\n\n📞 Build your app: " + INFO.phone;
  }
  
  if (match(msg, KB.voice)) {
    return "🎙️ *Voice AI & TTS Solutions*\n\n✅ Services:\n• Voice Cloning\n• Text-to-Speech (TTS) Solutions\n• Voice AI Assistants\n• Custom Voice Models\n• Multi-language Support\n\n🎯 High-quality, natural-sounding voice generation!\n\n📞 Explore voice AI: " + INFO.phone;
  }
  
  if (match(msg, KB.nlp)) {
    return "📝 *Natural Language Processing (NLP)*\n\n✅ NLP Services:\n• Text Analysis & Processing\n• Sentiment Analysis\n• Language Understanding\n• Chatbot Intelligence\n• Document Processing\n• AI-powered Content Generation\n\n🎯 Make your systems understand human language!\n\n📞 NLP solutions: " + INFO.phone;
  }
  
  if (match(msg, KB.vision)) {
    return "👁️ *Computer Vision Solutions*\n\n✅ Services:\n• Image Recognition\n• Object Detection\n• Visual Analytics\n• AI-powered Image Processing\n• Custom CV Models\n\n🎯 Enable your systems to see and understand!\n\n📞 Vision AI inquiry: " + INFO.phone;
  }
  
  if (match(msg, KB.tech)) {
    return "⚙️ *Our Technology Stack*\n\n🐍 *Programming Languages:*\n• Python (AI, Backend, Automation)\n• JavaScript/Node.js (Scalable servers)\n• React (Modern frontend)\n\n🔧 *Frameworks & Tools:*\n• Flask (Lightweight APIs & AI integrations)\n• Node.js (Server-side applications)\n• React (Frontend development)\n• REST APIs & Third-party integrations\n\n🗄️ *Database:*\n• SQL & NoSQL Management\n\n☁️ *Deployment:*\n• Scalable Cloud Solutions\n\n📞 Tech consultation: " + INFO.phone;
  }
  
  if (match(msg, KB.portfolio)) {
    return "💼 *Our Portfolio*\n\n🏆 100+ Projects Delivered:\n\n🤖 *AI Projects:*\n• AI Medical Assistant\n• Learn Wise AI Model\n• Context-based QA Chatbot\n• CV & Cover Letter Generator\n• TTS Voice Generator\n\n💻 *Web Applications:*\n• Real-time Shop Manager App\n• Quiz Management System\n• Course Management System\n\n📱 *Mobile Apps:*\n• WhatsApp Bulk Sender\n• Car Price Estimator\n• Parking Receipt Generator\n\n🔗 View full portfolio on our website!\n📞 Discuss your project: " + INFO.phone;
  }
  
  if (match(msg, KB.partners)) {
    return "🤝 *Our Strategic Partners*\n\n1️⃣ *Fecto Digital* (Dubai)\n🔹 Research-Driven Innovation\n🔹 Powering AI Research for Modern Businesses\n🔹 Where Strategy Meets Intelligent Technology\n\n2️⃣ *BritSync AI* (UK)\n🔹 Brand of Ascentra Global Ltd\n🔹 Advanced AI Research & ML Solutions\n🔹 Collaboration on Cutting-edge Innovation\n\n✨ We collaborate with industry leaders!\n\n📞 Partner with us: " + INFO.phone;
  }
  
  if (match(msg, KB.team)) {
    return "👥 *Our Leadership Team*\n\n🎯 *Khwaja Sajjad Ahmad Sultan*\nDirector\nLeading innovation with vision and expertise, driving sustainable growth and excellence.\n\n💻 *Muhammad Suleman*\nCEO & Full Stack Developer\nVisionary leader, expert in AI, full stack, and database development.\n\n🚀 *Aqsa Rani*\nBusiness Developer | AI & Python Developer\nCombines business strategy with AI and Python development to drive innovation.\n\n📞 Connect with our team: " + INFO.phone;
  }
  
  if (match(msg, KB.pricing)) {
    return "💰 *Pricing & Custom Quotes*\n\n💡 We offer:\n✅ Competitive Pricing\n✅ Custom Packages\n✅ Flexible Payment Plans\n✅ Value for Money\n\n📋 Pricing depends on:\n• Project Scope & Complexity\n• Technology Stack\n• Timeline & Urgency\n• Features Required\n\n📞 Get FREE Quote:\nCall: " + INFO.phone + "\nEmail: " + INFO.email + "\n\n💬 Let's discuss your budget!";
  }
  
  if (match(msg, KB.contact)) {
    return "📞 *Contact ADVANCE MEDIA*\n\n☎️ Phone: " + INFO.phone + "\n📧 Email: " + INFO.email + "\n📍 Location: " + INFO.location + "\n\n🌐 Website: Check our portfolio & services\n\n💬 Available:\nMon-Sat: 9 AM - 6 PM (UK Time)\n\n✨ We're here to help! Reach out anytime! 🚀";
  }
  
  if (match(msg, KB.registration)) {
    return "✅ *Get Started with ADVANCE MEDIA*\n\n📝 3 Easy Steps:\n\n1️⃣ *Contact Us*\nCall: " + INFO.phone + "\nEmail: " + INFO.email + "\n\n2️⃣ *Free Consultation*\nDiscuss your project requirements\n\n3️⃣ *Proposal & Start*\nReceive custom proposal & begin!\n\n🎯 Or fill the contact form on our website!\n\n🚀 Let's build something amazing together!";
  }
  
  return "👋 Thanks for reaching out!\n\n💡 I can help you with:\n• AI & ML Solutions\n• Chatbots & Automation\n• Web & Mobile Development\n• Pricing & Consultation\n• Portfolio & Projects\n\n❓ Ask me anything or contact directly:\n📞 " + INFO.phone + "\n📧 " + INFO.email + "\n\n🚀 Our team is ready to help!";
}

if (typeof module !== 'undefined') module.exports = { getResponse };
