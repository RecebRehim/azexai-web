# -*- coding: utf-8 -*-
import json
from pathlib import Path

en = {
  "meta": {
    "siteName": "AzexAI Systems",
    "title": "AzexAI Systems — Verifiable analytical results",
    "description": "AzexAI Systems created and operates AzexAI VSM, a platform that turns complex data about an assessed object into structured, verifiable and reproducible analytical results.",
    "ogTitle": "AzexAI Systems",
    "ogDescription": "From evidence to result. From result to understanding."
  },
  "nav": {
    "home": "Home",
    "vsm": "AzexAI VSM",
    "products": "Products",
    "technology": "Technology",
    "iit3d": "IIT 3D",
    "trust": "Trust",
    "research": "Research",
    "company": "Company",
    "leadership": "Leadership",
    "partnerships": "Partnerships",
    "insights": "Insights",
    "support": "Support",
    "contact": "Contact",
    "index": "AzexAI Index",
    "institutional": "Institutional Index",
    "plus": "AzexAI Plus",
    "access": "Access AzexAI VSM",
    "menu": "Menu",
    "close": "Close",
    "language": "Language"
  },
  "common": {
    "exploreVsm": "Explore AzexAI VSM",
    "accessPlatform": "Access Platform",
    "exploreIndex": "Explore AzexAI Index",
    "exploreInstitutional": "Explore Institutional Index",
    "explorePlus": "Explore AzexAI Plus",
    "aboutCompany": "About AzexAI Systems",
    "readMore": "Continue",
    "primaryAction": "Access AzexAI VSM",
    "requestAccess": "Request platform access",
    "humanSupport": "Request human assistance",
    "partnershipInquiry": "Partnership inquiry",
    "generalContact": "General contact",
    "contactSupport": "Contact support",
    "protectedNote": "Public-safe information. Formulas, weights and internal methodology are not disclosed.",
    "platformSeparate": "AzexAI VSM operates on a separate platform domain and is not merged into the corporate website."
  },
  "chain": {
    "uncertainty": "Uncertainty",
    "evidence": "Evidence",
    "structure": "Structure",
    "result": "Result",
    "understanding": "Understanding"
  },
  "footer": {
    "tagline": "From evidence to result. From result to understanding.",
    "platform": "Platform",
    "products": "Products",
    "company": "Company",
    "contact": "Contact",
    "partnership": "Partnerships",
    "human": "Human support",
    "rights": "AzexAI Systems. All rights reserved.",
    "methodology": "The website explains purpose and principles. It does not expose formulas, weights, internal variables or reconstructable calculation rules."
  },
  "home": {
    "kicker": "AzexAI Systems",
    "headline": "AzexAI VSM — a platform for verifiable analytical results.",
    "lede": "AzexAI Systems created the technology and operates AzexAI VSM, a platform designed to transform complex data about an assessed object into structured, verifiable and reproducible analytical results.",
    "statementA": "From evidence to result. From result to understanding.",
    "statementB": "Not just data. An analytical state.",
    "body": "AzexAI VSM does not treat an assessed object as a collection of documents and claims. It structures only what can be supported and turns it into a verifiable analytical state within the framework of the relevant product.",
    "principlesTitle": "How a result is formed",
    "principles": [
      "Evidence-based input",
      "Structured analytical model",
      "Fixed result",
      "Controlled explanation",
      "Protected methodology"
    ],
    "boundaryKicker": "The boundary of AI",
    "boundaryTitle": "AI may help explain the result, but it has no authority to invent it.",
    "boundaryBody": "What is not verified does not become a fact simply because AI can fill the gap. AzexAI shows not everything AI can infer, but only what the system has grounds to assert.",
    "productsTitle": "Products within AzexAI VSM",
    "trustTitle": "Why the result can be trusted",
    "trustItems": [
      "Verifiable input basis",
      "Controlled calculation logic",
      "Reproducibility",
      "Traceability",
      "Separation of result and explanation"
    ],
    "iitTitle": "IIT 3D",
    "iitLede": "IIT 3D is an explorable analytical space of the verified structure of the result.",
    "iitBody": "For Institutional Index, IIT 3D moves the result from a sequence of pages into a digital environment where structure, dimensions, constraints and supported relationships can be explored.",
    "scienceTitle": "Scientific and technical foundation",
    "scienceBody": "AzexAI VSM is built on a proprietary scientific and technical methodology centered on structure, verifiability, reproducibility, fixed results and controlled interpretation.",
    "companyTitle": "AzexAI Systems",
    "companyBody": "AzexAI Systems is the creator of the technology and operator of the AzexAI VSM platform. The company develops the product, methodology, research, trust framework and institutional applications within one strategic system."
  },
  "vsm": {
    "kicker": "AzexAI VSM",
    "title": "Verifiable Structured Model",
    "headline": "From complex information to a verifiable analytical result.",
    "lede": "AzexAI VSM is not a free-form answer generator. It is an analytical platform that separates evidence, data structure, calculation, result and subsequent explanation.",
    "statement": "AzexAI turns data about an object not into an AI opinion, but into a verifiable analytical state.",
    "doesTitle": "What AzexAI VSM does",
    "does": [
      "Structures data and evidence",
      "Does not turn unsupported information into fact",
      "Applies the calculation logic of the relevant product",
      "Forms a fixed and reproducible result",
      "Presents the result through reports, analytical models and controlled explanation"
    ],
    "aiTitle": "AI does not own the result",
    "aiLede": "What is not verified does not become true simply because AI can fill the gap.",
    "aiBody": "AI may support information processing and explanation of an already formed result, but it must not create unsupported facts or a new calculated result.",
    "modelTitle": "Analytical model of the assessed object",
    "modelBody": "The assessed object moves from a collection of fragmented documents into a structured analytical model of supported characteristics, constraints, dimensions and admissible relationships.",
    "orderTitle": "Result first. Explanation second.",
    "orderBody": "Interpretation, visualization and presentation are not used to recalculate or arbitrarily alter the result.",
    "accessTitle": "Platform access",
    "accessBody": "AzexAI VSM operates on a separate platform domain and is not merged into the corporate website."
  },
  "products": {
    "kicker": "Products",
    "headline": "One methodological discipline. Independent analytical products.",
    "lede": "AzexAI products are not different names for the same result. Each product has its own purpose, analytical logic and form of result.",
    "indexName": "AzexAI Index",
    "indexLede": "Structured index assessment and clear analytical presentation of the result.",
    "indexPoints": [
      "Index Standard — a complete high-quality baseline result",
      "Index Premium — deeper analytical presentation within the same result family",
      "Greater depth of presentation does not create new mathematics or a new result"
    ],
    "instName": "Institutional Index",
    "instLede": "An independent product for professional and institutional assessment scenarios. It is not a Premium version of the ordinary Index.",
    "instPoints": [
      "Independent institutional result",
      "Four analytical dimensions",
      "Institutional Report",
      "Digital Analytical Model",
      "IIT 3D — where included by package",
      "Enhanced evidence and traceability discipline"
    ],
    "instNote": "Specific sector coverage is published only after separate confirmation.",
    "plusName": "AzexAI Plus",
    "plusLede": "Seven independent specialized analytical services."
  },
  "index": {
    "kicker": "AzexAI Index",
    "headline": "Structured index assessment and a verifiable result.",
    "lede": "AzexAI Index provides structured index assessment and a clear analytical presentation of the result.",
    "standardTitle": "Index Standard",
    "standardBody": "A complete high-quality baseline result.",
    "premiumTitle": "Index Premium",
    "premiumBody": "Deeper analytical presentation within the same result family.",
    "note": "Greater depth of presentation does not create new mathematics or a new result."
  },
  "institutional": {
    "kicker": "Institutional Index",
    "label": "Institutional analytics",
    "headline": "Beyond the report: an explorable analytical model of the result.",
    "lede": "Institutional Index is an independent AzexAI VSM product for professional and institutional assessment scenarios.",
    "flow": "Result → 4 dimensions → Digital Analytical Model → IIT 3D → Report / Evidence / Traceability",
    "damTitle": "Digital Analytical Model",
    "damLede": "A report records the conclusion. A Digital Analytical Model lets you explore its structure.",
    "damBody": "The Digital Analytical Model preserves the result, analytical dimensions, supported characteristics, constraints and relationships in one digital analytical environment.",
    "iitTitle": "IIT 3D",
    "iitLede": "IIT 3D is the space of the verified structure of the result.",
    "iitBody": "IIT 3D moves the result from a sequence of pages into an explorable analytical space. The model does not complete the object or create decorative relationships; it shows only the structure AzexAI has grounds to assert.",
    "iitNote": "IIT 3D is positioned as a flagship Institutional Index capability. Client delivery depends on package level and is not an automatic part of Standard.",
    "whiteTitle": "WhiteBox",
    "whiteLede": "Explain the result. Protect the method.",
    "whiteBody": "WhiteBox is a controlled explainability mechanism that helps users understand the permitted basis of a result without exposing protected methodology.",
    "whiteNote": "WhiteBox is not presented as an automatically available feature for every client. Availability and depth depend on the authorized disclosure level.",
    "boundaryTitle": "Public boundary",
    "boundaryBody": "Specific sector and object coverage of Institutional Index is published only after separate confirmation."
  },
  "plus": {
    "kicker": "AzexAI Plus",
    "headline": "Seven specialized services. Seven independent analytical results.",
    "lede": "AzexAI Plus consists of independent specialized services for analyzing specific aspects of a company, project or organization.",
    "each": "Each service has its own domain, calculation logic and standalone result.",
    "independenceTitle": "Independence",
    "independenceBody": "Plus services do not replace or mix Index or Institutional Index results and do not create one combined seven-service result.",
    "presentationTitle": "Result presentation",
    "presentationBody": "Each service forms its own result, which is explained only within the approved subject and analytical boundaries of that service.",
    "asProduct": "Each service is presented as an independent product."
  },
  "trust": {
    "kicker": "Trust",
    "headline": "Verifiable result. Controlled explanation. Protected method.",
    "lede": "Trust in AzexAI VSM is built not on interface transparency alone, but on the discipline by which the result is formed.",
    "items": [
      "Evidence-based input",
      "Structured data",
      "Controlled calculation logic",
      "Reproducible result",
      "Separation of result and explanation",
      "Traceability",
      "Protected methodology"
    ],
    "order": "The result is formed and fixed first. It may then be explained, explored and visualized.",
    "explainTitle": "Controlled explainability",
    "explainBody": "WhiteBox explains the permitted basis of a result without exposing internal formulas, parameters or protected methodology.",
    "validationTitle": "Public validation",
    "validationBody": "A public validation section may state that control series demonstrated reproducibility across independent executions. Company names, logos and specific scores are not published without a separate legal decision."
  },
  "technology": {
    "kicker": "Technology & methodology",
    "headline": "AzexAI VSM is built on a proprietary scientific and technical methodology.",
    "lede": "The methodology is designed for structured analytical assessment of complex objects under uncertainty and information asymmetry.",
    "items": [
      "Structured analytical input",
      "Verifiability",
      "Reproducibility",
      "Fixed result",
      "Controlled interpretation",
      "Product-specific calculation logic",
      "Protection of intellectual property"
    ],
    "purpose": "AzexAI is not designed to generate more text. It is designed to form a justified analytical result.",
    "protectedTitle": "Protected methodology",
    "protectedBody": "The website explains the purpose and principles of the methodology, but does not expose formulas, weights, internal variables, calculation rules or technical details that could enable reconstruction of protected logic."
  },
  "iit3d": {
    "kicker": "IIT 3D",
    "headline": "The space of the verified structure of the result.",
    "lede": "IIT 3D is an explorable analytical space of the verified structure of the result. It moves the result from a sequence of pages into a digital environment where structure, dimensions, constraints and supported relationships can be explored.",
    "body": "The model does not complete the object or create decorative relationships; it shows only the structure AzexAI has grounds to assert.",
    "note": "IIT 3D is positioned as a flagship Institutional Index capability. Client delivery depends on package level and is not an automatic part of Standard.",
    "visualCaption": "A spatial reading of verified structure — not a generated scene, and not a substitute for the result."
  },
  "research": {
    "kicker": "Research",
    "headline": "Research in verifiable analytical intelligence.",
    "lede": "AzexAI Systems advances research in assessment methodology, analytical systems, trust, institutional applications and verifiable artificial intelligence.",
    "empty": "Research notes, papers and public briefings will appear here when they are cleared for publication."
  },
  "company": {
    "kicker": "Company",
    "headline": "AzexAI Systems",
    "lede": "AzexAI Systems is the company that created the technology and operates the AzexAI VSM platform.",
    "aboutTitle": "About",
    "aboutBody": "The company develops technologies for verifiable analytical AI, structured assessment and institutional trust.",
    "systemTitle": "One strategic system",
    "systemBody": "The company develops the product, methodology, research, trust framework and institutional applications within one strategic system."
  },
  "leadership": {
    "kicker": "Leadership & team",
    "headline": "Founders, leadership and key specialists.",
    "lede": "This section presents the founders, leadership and key specialists of the company. Biographies are published only from confirmed public information.",
    "empty": "Leadership biographies will be published here only after public confirmation."
  },
  "partnerships": {
    "kicker": "Partnerships",
    "headline": "Open to institutional collaboration.",
    "lede": "AzexAI Systems is open to government, institutional, corporate, financial, innovation, scientific and technology partnerships.",
    "types": [
      "Government",
      "Institutional",
      "Corporate",
      "Financial",
      "Innovation",
      "Scientific",
      "Technology"
    ]
  },
  "insights": {
    "kicker": "Insights",
    "headline": "Research, updates and analytical position.",
    "lede": "Research, company updates, talks, events and the analytical perspective of AzexAI Systems.",
    "empty": "Insights appear here when they are cleared for public release. Company names, logos and scores are not published without a separate legal decision."
  },
  "support": {
    "kicker": "Support",
    "headline": "Support and contact with AzexAI Systems.",
    "lede": "Contact channels for product questions, platform access, partnerships, corporate inquiries and general support.",
    "assistantTitle": "Support Assistant",
    "assistantBody": "The Support Assistant may answer questions about the company, products, access, orders, navigation and general rules.",
    "assistantLimit": "The Support Assistant does not perform assessments, create new analytical results or disclose protected methodology.",
    "humanTitle": "Human support",
    "humanBody": "Users must have a direct path to human support.",
    "openAssistant": "Ask the Support Assistant"
  },
  "contact": {
    "kicker": "Contact",
    "headline": "Write to AzexAI Systems.",
    "lede": "Product questions, platform access, partnerships, corporate inquiries and general support.",
    "name": "Name",
    "email": "Email",
    "organization": "Organization",
    "intent": "Subject",
    "message": "Message",
    "send": "Send message",
    "sending": "Sending…",
    "success": "Your message has been received. A member of the team will respond.",
    "error": "The message could not be sent. Please write directly to the contact address.",
    "required": "Please complete the required fields.",
    "intents": {
      "general": "General contact",
      "product": "Product question",
      "platform": "Platform access",
      "partnership": "Partnership inquiry",
      "corporate": "Corporate inquiry",
      "human": "Request human assistance",
      "support": "Contact support"
    }
  },
  "assistant": {
    "title": "Support Assistant",
    "subtitle": "Company, products, access and navigation. No assessments. No protected methodology.",
    "placeholder": "Ask a question…",
    "send": "Send",
    "human": "Talk to a person",
    "disclaimer": "Answers are limited to public website information.",
    "fallback": "I can help with the company, products, platform access, orders, navigation and general rules. I cannot perform assessments, create a new analytical result, or discuss protected methodology. Would you like to reach human support?",
    "greeting": "I can answer questions about AzexAI Systems, AzexAI VSM, products, access and navigation — using only public information."
  },
  "notFound": {
    "kicker": "404",
    "headline": "This page is not part of the public site.",
    "body": "Return to AzexAI Systems or continue to AzexAI VSM.",
    "home": "Return home"
  }
}

az = {
  "meta": {
    "siteName": "AzexAI Systems",
    "title": "AzexAI Systems — Yoxlanıla bilən analitik nəticələr",
    "description": "AzexAI Systems mürəkkəb obyektləri strukturlaşdırılmış, yoxlanıla bilən və təkrarlana bilən analitik nəticələrə çevirən AzexAI VSM texnologiyasını yaradıb və platformanın operatorudur.",
    "ogTitle": "AzexAI Systems",
    "ogDescription": "Sübutdan nəticəyə. Nəticədən anlayışa."
  },
  "nav": {
    "home": "Ana səhifə",
    "vsm": "AzexAI VSM",
    "products": "Məhsullar",
    "technology": "Texnologiya",
    "iit3d": "IIT 3D",
    "trust": "Etimad",
    "research": "Tədqiqat",
    "company": "Şirkət",
    "leadership": "Rəhbərlik",
    "partnerships": "Tərəfdaşlıq",
    "insights": "Analitika",
    "support": "Dəstək",
    "contact": "Əlaqə",
    "index": "AzexAI Index",
    "institutional": "Institutional Index",
    "plus": "AzexAI Plus",
    "access": "Access AzexAI VSM",
    "menu": "Menyu",
    "close": "Bağla",
    "language": "Dil"
  },
  "common": {
    "exploreVsm": "Explore AzexAI VSM",
    "accessPlatform": "Access Platform",
    "exploreIndex": "Explore AzexAI Index",
    "exploreInstitutional": "Explore Institutional Index",
    "explorePlus": "Explore AzexAI Plus",
    "aboutCompany": "About AzexAI Systems",
    "readMore": "Davam et",
    "primaryAction": "Access AzexAI VSM",
    "requestAccess": "Platformaya giriş sorğusu",
    "humanSupport": "İnsan dəstəyi",
    "partnershipInquiry": "Tərəfdaşlıq sorğusu",
    "generalContact": "Ümumi əlaqə",
    "contactSupport": "Dəstək ilə əlaqə",
    "protectedNote": "İctimai-təhlükəsiz məlumat. Formlalar, çəkilər və daxili metodologiya açıqlanmır.",
    "platformSeparate": "AzexAI VSM platforması korporativ saytdan ayrı iş mühitidir."
  },
  "chain": {
    "uncertainty": "Qeyri-müəyyənlik",
    "evidence": "Sübut",
    "structure": "Struktur",
    "result": "Nəticə",
    "understanding": "Anlama"
  },
  "footer": {
    "tagline": "Sübutdan nəticəyə. Nəticədən anlayışa.",
    "platform": "Platforma",
    "products": "Məhsullar",
    "company": "Şirkət",
    "contact": "Əlaqə",
    "partnership": "Tərəfdaşlıq",
    "human": "İnsan dəstəyi",
    "rights": "AzexAI Systems. Bütün hüquqlar qorunur.",
    "methodology": "Sayt məqsədi və prinsipləri izah edir. Formlaları, çəkiləri, daxili dəyişənləri və yenidən qurulabilən hesablama qaydalarını açıqlamır."
  },
  "home": {
    "kicker": "AzexAI Systems",
    "headline": "AzexAI VSM — yoxlanıla bilən analitik nəticələr üçün yaradılmış platforma.",
    "lede": "AzexAI Systems mürəkkəb obyektləri qeyri-müəyyənlik və məlumat asimmetriyası şəraitində strukturlaşdırılmış, yoxlanıla bilən və təkrarlana bilən analitik nəticələrə çevirən AzexAI VSM texnologiyasını yaradıb və platformanın operatorudur.",
    "statementA": "Sübutdan nəticəyə. Nəticədən anlayışa.",
    "statementB": "Məlumat deyil. Analitik vəziyyət.",
    "body": "AzexAI VSM obyekti sənədlər və iddialar toplusu kimi qəbul etmir. Sistem yalnız əsaslandırıla bilən məlumatları strukturlaşdırır və onları müvafiq məhsulun analitik çərçivəsində yoxlanıla bilən vəziyyətə çevirir.",
    "principlesTitle": "Nəticə necə formalaşır",
    "principles": [
      "Sübut əsaslı giriş",
      "Strukturlaşdırılmış analitik model",
      "Sabit nəticə",
      "Nəzarət olunan izah",
      "Metodologiyanın qorunması"
    ],
    "boundaryKicker": "Sİ-nin sərhədi",
    "boundaryTitle": "Sİ nəticəni izah etməyə kömək edə bilər, amma onu uydurmaq hüququna malik deyil.",
    "boundaryBody": "Təsdiqlənməyən məlumat yalnız Sİ boşluğu doldura bildiyi üçün fakt olmur. AzexAI Sİ-nin ehtimal edə bildiyi hər şeyi deyil, sistemin əsaslandırmağa hüququ olanı göstərir.",
    "productsTitle": "AzexAI VSM daxilində məhsullar",
    "trustTitle": "Niyə AzexAI-yə etibar etmək olar",
    "trustItems": [
      "Yoxlanıla bilən giriş əsası",
      "Nəzarət olunan hesablamalar",
      "Təkrarlana bilmə",
      "İzlənə bilmə",
      "Nəticə və izahın ayrılması"
    ],
    "iitTitle": "IIT 3D",
    "iitLede": "IIT 3D — nəticənin təsdiqlənmiş strukturunun araşdırıla bilən analitik məkanıdır.",
    "iitBody": "Institutional Index üçün IIT 3D nəticəni səhifələr ardıcıllığından strukturun, ölçülərin, məhdudiyyətlərin və təsdiqlənmiş əlaqələrin araşdırıla bildiyi rəqəmsal mühitə keçirir.",
    "scienceTitle": "Elmi-texniki əsas",
    "scienceBody": "AzexAI VSM mürəkkəb obyektlərin analitik qiymətləndirilməsi üçün xüsusi elmi-texniki metodologiya üzərində qurulub: strukturlaşdırma, yoxlanıla bilmə, təkrarlana bilmə, sabit nəticə və nəzarət olunan interpretasiya.",
    "companyTitle": "AzexAI Systems",
    "companyBody": "AzexAI Systems texnologiyanı yaradan şirkət və AzexAI VSM platformasının operatorudur. Şirkət məhsul, metodologiya, tədqiqat, etimad və institusional tətbiq istiqamətlərini vahid strateji çərçivədə inkişaf etdirir."
  },
  "vsm": {
    "kicker": "AzexAI VSM",
    "title": "Verifiable Structured Model",
    "headline": "Mürəkkəb məlumatdan yoxlanıla bilən analitik nəticəyə.",
    "lede": "AzexAI VSM generativ cavab sistemi deyil. O, məlumatların əsasını, strukturunu, hesablamanı, nəticəni və izahı bir-birindən ayıran analitik platformadır.",
    "statement": "AzexAI məlumatları Sİ rəyi deyil, yoxlanıla bilən analitik vəziyyətə çevirir.",
    "doesTitle": "AzexAI VSM nə edir",
    "does": [
      "Məlumat və sübutları strukturlaşdırır",
      "Təsdiq olunmayanı fakt kimi qəbul etmir",
      "Məhsula uyğun hesablamanı icra edir",
      "Nəticəni sabit və təkrarlana bilən formada formalaşdırır",
      "Nəticəni hesabat, analitik model və nəzarət olunan izahla təqdim edir"
    ],
    "aiTitle": "Sİ nəticənin sahibi deyil",
    "aiLede": "Təsdiqlənməyən məlumat yalnız Sİ onu tamamlaya bildiyi üçün həqiqətə çevrilmir.",
    "aiBody": "AzexAI VSM-də Sİ məlumatla işləməyə və nəticəni izah etməyə kömək edə bilər, lakin əsaslandırılmamış fakt və ya yeni hesablanmış nəticə yarada bilməz.",
    "modelTitle": "Obyektin analitik modeli",
    "modelBody": "Qiymətləndirilən obyekt sənədlərin sadə toplusundan çıxaraq təsdiqlənmiş xüsusiyyətlər, məhdudiyyətlər, ölçülər və münasibətlər daxilində strukturlaşdırılmış analitik modelə çevrilir.",
    "orderTitle": "Nəticə əvvəlcə formalaşır. Sonra izah olunur.",
    "orderBody": "Nəticənin izahı, vizuallaşdırılması və təqdimatı onu yenidən hesablamaq və ya dəyişdirmək üçün istifadə edilmir.",
    "accessTitle": "Platformaya keçid",
    "accessBody": "AzexAI VSM platforması korporativ saytdan ayrı iş mühitidir."
  },
  "products": {
    "kicker": "Məhsullar",
    "headline": "Vahid metodoloji intizam. Müstəqil analitik məhsullar.",
    "lede": "AzexAI məhsulları eyni nəticənin müxtəlif adları deyil. Hər məhsul öz məqsədi, analitik məntiqi və nəticə forması ilə ayrıca qiymətləndirmə sistemidir.",
    "indexName": "AzexAI Index",
    "indexLede": "Strukturlaşdırılmış indeks qiymətləndirilməsi və nəticənin aydın analitik təqdimatı.",
    "indexPoints": [
      "Index Standard — tam keyfiyyətli əsas nəticə",
      "Index Premium — eyni nəticə ailəsində daha dərin analitik təqdimat",
      "Daha dərin təqdimat yeni hesablanmış nəticə yaratmır"
    ],
    "instName": "Institutional Index",
    "instLede": "Peşəkar və institusional qiymətləndirmə ssenariləri üçün müstəqil məhsul. Adi Index-in Premium versiyası deyil.",
    "instPoints": [
      "Müstəqil institusional nəticə",
      "Dörd analitik ölçü",
      "Institutional Report",
      "Digital Analytical Model",
      "IIT 3D — uyğun paketlərdə",
      "Yüksək izlənə bilmə və sübut intizamı"
    ],
    "instNote": "Konkret sektor əhatəsi yalnız ayrıca təsdiqləndikdən sonra təqdim olunur.",
    "plusName": "AzexAI Plus",
    "plusLede": "Yeddi müstəqil ixtisaslaşmış analitik xidmət."
  },
  "index": {
    "kicker": "AzexAI Index",
    "headline": "Strukturlaşdırılmış indeks qiymətləndirilməsi və yoxlanıla bilən nəticə.",
    "lede": "AzexAI Index strukturlaşdırılmış indeks qiymətləndirilməsi və nəticənin aydın analitik təqdimatını təmin edir.",
    "standardTitle": "Index Standard",
    "standardBody": "Tam keyfiyyətli əsas nəticə.",
    "premiumTitle": "Index Premium",
    "premiumBody": "Eyni nəticə ailəsində daha dərin analitik təqdimat.",
    "note": "Daha dərin təqdimat yeni hesablanmış nəticə yaratmır."
  },
  "institutional": {
    "kicker": "Institutional Index",
    "label": "Institutional analytics",
    "headline": "Hesabatdan daha dərin: nəticənin araşdırıla bilən analitik modeli.",
    "lede": "Institutional Index peşəkar və institusional qiymətləndirmə ssenariləri üçün müstəqil AzexAI VSM məhsuludur.",
    "flow": "Nəticə → 4 ölçü → Digital Analytical Model → IIT 3D → Hesabat / Sübut / İzlənə bilmə",
    "damTitle": "Digital Analytical Model",
    "damLede": "Hesabat nəticəni qeyd edir. Rəqəmsal analitik model onun strukturunu araşdırmağa imkan verir.",
    "damBody": "Digital Analytical Model nəticəni, analitik ölçüləri, təsdiqlənmiş xüsusiyyətləri, məhdudiyyətləri və əlaqələri vahid rəqəmsal analitik mühitdə saxlayır.",
    "iitTitle": "IIT 3D",
    "iitLede": "IIT 3D — nəticənin təsdiqlənmiş strukturunun məkanıdır.",
    "iitBody": "IIT 3D nəticəni səhifələr ardıcıllığından araşdırıla bilən analitik məkana keçirir. Model obyekti tamamlamır və əlaqələri uydurmur; yalnız əsaslandırılmış strukturu göstərir.",
    "iitNote": "IIT 3D Institutional Index-in flagship imkanlarından biridir. Müştəriyə təqdimat paket səviyyəsindən asılıdır və Standard üçün avtomatik deyil.",
    "whiteTitle": "WhiteBox",
    "whiteLede": "Explain the result. Protect the method.",
    "whiteBody": "WhiteBox nəticənin icazə verilən əsaslarını anlamağa imkan verən nəzarət olunan izaholunma mexanizmidir və qorunan metodologiyanı açıqlamır.",
    "whiteNote": "WhiteBox hər müştəri üçün avtomatik açıq funksiya deyil. Əlçatanlıq və dərinlik icazə verilmiş açıqlama səviyyəsindən asılıdır.",
    "boundaryTitle": "İctimai sərhəd",
    "boundaryBody": "Institutional Index üçün konkret sektor və obyekt əhatəsi yalnız ayrıca təsdiqləndikdən sonra ictimai şəkildə göstərilir."
  },
  "plus": {
    "kicker": "AzexAI Plus",
    "headline": "Yeddi ixtisaslaşmış xidmət. Yeddi müstəqil analitik nəticə.",
    "lede": "AzexAI Plus şirkət, layihə və təşkilatların ayrı-ayrı analitik sahələrini qiymətləndirən müstəqil ixtisaslaşmış xidmətlərdən ibarətdir.",
    "each": "Hər xidmətin öz predmet sahəsi, öz hesablanma məntiqi və müstəqil nəticəsi var.",
    "independenceTitle": "Müstəqillik",
    "independenceBody": "Plus xidmətləri Index və Institutional Index nəticələrini əvəz etmir, qarışdırmır və vahid yeddi-xidmət nəticəsi yaratmır.",
    "presentationTitle": "Nəticənin təqdimatı",
    "presentationBody": "Hər xidmət öz nəticəsini formalaşdırır və həmin nəticə yalnız müvafiq xidmətin təsdiqlənmiş analitik sərhədləri daxilində izah edilir.",
    "asProduct": "Hər xidmət ayrıca məhsul kimi təqdim olunur."
  },
  "trust": {
    "kicker": "Etimad",
    "headline": "Yoxlanıla bilən nəticə. Nəzarət olunan izah. Qorunan metod.",
    "lede": "AzexAI VSM-də etimad yalnız vizual şəffaflıqdan deyil, nəticənin necə formalaşdırıldığına dair intizamdan yaranır.",
    "items": [
      "Sübut əsaslı giriş",
      "Strukturlaşdırılmış məlumat",
      "Nəzarət olunan hesablamalar",
      "Təkrarlana bilən nəticə",
      "Nəticə və izahın ayrılması",
      "İzlənə bilmə",
      "Qorunan metodologiya"
    ],
    "order": "Nəticə əvvəlcə formalaşır və sabitlənir. Sonra izah olunur, araşdırılır və vizuallaşdırılır.",
    "explainTitle": "Controlled Explainability",
    "explainBody": "WhiteBox nəticənin icazə verilən əsaslarını izah edir, lakin daxili formulaları, parametrləri və qorunan metodologiyanı açıqlamır.",
    "validationTitle": "Public Validation",
    "validationBody": "İctimai nəzarət seriyaları nəticələrin müstəqil icralarda təkrarlana bilməsini göstərmək üçün təqdim oluna bilər. Şirkət adları, loqolar və konkret ballar ayrıca hüquqi qərar olmadan istifadə edilmir."
  },
  "technology": {
    "kicker": "Texnologiya və metodologiya",
    "headline": "AzexAI VSM xüsusi elmi-texniki metodologiya üzərində qurulub.",
    "lede": "Metodologiya qeyri-müəyyənlik və məlumat asimmetriyası şəraitində mürəkkəb obyektlərin strukturlaşdırılmış analitik qiymətləndirilməsi üçün yaradılıb.",
    "items": [
      "Strukturlaşdırılmış analitik giriş",
      "Yoxlanıla bilmə",
      "Təkrarlana bilmə",
      "Sabit nəticə",
      "Nəzarət olunan interpretasiya",
      "Məhsula uyğun hesablama məntiqi",
      "Əqli mülkiyyətin qorunması"
    ],
    "purpose": "AzexAI-nin məqsədi daha çox mətn yaratmaq deyil; əsaslandırılmış analitik nəticə formalaşdırmaqdır.",
    "protectedTitle": "Qorunan metodologiya",
    "protectedBody": "Sayt metodologiyanın məqsədini və prinsiplərini izah edir, lakin formulaları, çəkiləri, daxili dəyişənləri, hesablanma qaydalarını və metodologiyanın yenidən qurulmasına imkan verən texniki detalları açıqlamır."
  },
  "iit3d": {
    "kicker": "IIT 3D",
    "headline": "Nəticənin təsdiqlənmiş strukturunun məkanı.",
    "lede": "IIT 3D nəticənin təsdiqlənmiş strukturunun araşdırıla bilən analitik məkanıdır. O, nəticəni səhifələr ardıcıllığından strukturun, ölçülərin, məhdudiyyətlərin və təsdiqlənmiş əlaqələrin araşdırıla bildiyi rəqəmsal mühitə keçirir.",
    "body": "Model obyekti tamamlamır və əlaqələri uydurmur; yalnız əsaslandırılmış strukturu göstərir.",
    "note": "IIT 3D Institutional Index-in flagship imkanlarından biridir. Müştəriyə təqdimat paket səviyyəsindən asılıdır və Standard üçün avtomatik deyil.",
    "visualCaption": "Təsdiqlənmiş strukturun məkan oxunuşu — generasiya olunmuş səhnə deyil və nəticənin əvəzi deyil."
  },
  "research": {
    "kicker": "Tədqiqat",
    "headline": "Yoxlanıla bilən analitik intellekt üzrə tədqiqat.",
    "lede": "AzexAI Systems metodologiya, analitik qiymətləndirmə, etimad, institusional tətbiq və yoxlanıla bilən Sİ sahələrində tədqiqat və inkişaf işlərini davam etdirir.",
    "empty": "Tədqiqat qeydləri, məqalələr və ictimai brifinqlər dərc üçün təsdiqləndikdən sonra burada yer alacaq."
  },
  "company": {
    "kicker": "Şirkət",
    "headline": "AzexAI Systems",
    "lede": "AzexAI Systems texnologiyanı yaratmış şirkət və AzexAI VSM platformasının operatorudur.",
    "aboutTitle": "Haqqında",
    "aboutBody": "Şirkət yoxlanıla bilən analitik Sİ sistemləri, strukturlaşdırılmış qiymətləndirmə və institusional səviyyədə etimad üçün texnologiyalar yaradır.",
    "systemTitle": "Vahid strateji çərçivə",
    "systemBody": "Şirkət məhsul, metodologiya, tədqiqat, etimad və institusional tətbiq istiqamətlərini vahid strateji çərçivədə inkişaf etdirir."
  },
  "leadership": {
    "kicker": "Rəhbərlik və komanda",
    "headline": "Təsisçilər, rəhbərlik və əsas mütəxəssislər.",
    "lede": "Bu bölmədə şirkətin təsisçiləri, rəhbərliyi və əsas mütəxəssisləri təqdim olunur. Bio məlumatları yalnız təsdiqlənmiş ictimai məlumatlarla dərc edilir.",
    "empty": "Rəhbərlik bioqrafiyaları yalnız ictimai təsdiqdən sonra burada dərc olunacaq."
  },
  "partnerships": {
    "kicker": "Tərəfdaşlıq",
    "headline": "İnstitusional əməkdaşlığa açıq.",
    "lede": "AzexAI Systems dövlət, institusional, korporativ, maliyyə, innovasiya, elmi və texnoloji tərəfdaşlıqlara açıqdır.",
    "types": [
      "Dövlət",
      "İnstitusional",
      "Korporativ",
      "Maliyyə",
      "İnnovasiya",
      "Elmi",
      "Texnoloji"
    ]
  },
  "insights": {
    "kicker": "Analitika",
    "headline": "Tədqiqatlar, yeniliklər və analitik mövqe.",
    "lede": "Tədqiqatlar, şirkət yenilikləri, çıxışlar, tədbirlər və AzexAI Systems-in analitik mövqeyi.",
    "empty": "Materiallar ictimai buraxılış üçün təsdiqləndikdən sonra burada yer alır. Şirkət adları, loqolar və ballar ayrıca hüquqi qərar olmadan dərc edilmir."
  },
  "support": {
    "kicker": "Dəstək",
    "headline": "AzexAI Systems ilə əlaqə və dəstək.",
    "lede": "Məhsullar, platformaya giriş, tərəfdaşlıq, korporativ sorğular və ümumi dəstək üçün əlaqə kanalları.",
    "assistantTitle": "Support Assistant",
    "assistantBody": "Support Assistant şirkət, məhsullar, giriş, sifariş, naviqasiya və ümumi qaydalar barədə cavab verə bilər.",
    "assistantLimit": "Support Assistant qiymətləndirmə aparmır, yeni analitik nəticə yaratmır və qorunan metodologiyanı açıqlamır.",
    "humanTitle": "İnsan dəstəyi",
    "humanBody": "İstifadəçi istənilən vaxt insan dəstəyinə keçə bilməlidir.",
    "openAssistant": "Support Assistant-ə soruş"
  },
  "contact": {
    "kicker": "Əlaqə",
    "headline": "AzexAI Systems-ə yazın.",
    "lede": "Məhsul sualları, platformaya giriş, tərəfdaşlıq, korporativ sorğular və ümumi dəstək.",
    "name": "Ad",
    "email": "E-poçt",
    "organization": "Təşkilat",
    "intent": "Mövzu",
    "message": "Mesaj",
    "send": "Göndər",
    "sending": "Göndərilir…",
    "success": "Mesajınız qəbul olundu. Komanda üzvü cavab verəcək.",
    "error": "Mesaj göndərilmədi. Zəhmət olmasa birbaşa əlaqə ünvanına yazın.",
    "required": "Zəhmət olmasa tələb olunan sahələri doldurun.",
    "intents": {
      "general": "Ümumi əlaqə",
      "product": "Məhsul sualı",
      "platform": "Platformaya giriş",
      "partnership": "Tərəfdaşlıq sorğusu",
      "corporate": "Korporativ sorğu",
      "human": "İnsan dəstəyi",
      "support": "Dəstək"
    }
  },
  "assistant": {
    "title": "Support Assistant",
    "subtitle": "Şirkət, məhsullar, giriş və naviqasiya. Qiymətləndirmə yoxdur. Qorunan metodologiya yoxdur.",
    "placeholder": "Sual yazın…",
    "send": "Göndər",
    "human": "İnsan ilə danış",
    "disclaimer": "Cavablar yalnız ictimai sayt məlumatı ilə məhdudlaşır.",
    "fallback": "Şirkət, məhsullar, platformaya giriş, sifariş, naviqasiya və ümumi qaydalar barədə kömək edə bilərəm. Qiymətləndirmə apara, yeni analitik nəticə yarada və ya qorunan metodologiyanı müzakirə edə bilmərəm. İnsan dəstəyinə keçmək istəyirsiniz?",
    "greeting": "AzexAI Systems, AzexAI VSM, məhsullar, giriş və naviqasiya barədə — yalnız ictimai məlumat əsasında — cavab verə bilərəm."
  },
  "notFound": {
    "kicker": "404",
    "headline": "Bu səhifə ictimai saytda yoxdur.",
    "body": "AzexAI Systems-ə qayıdın və ya AzexAI VSM-ə davam edin.",
    "home": "Ana səhifə"
  }
}

ru = {
  "meta": {
    "siteName": "AzexAI Systems",
    "title": "AzexAI Systems — Проверяемые аналитические результаты",
    "description": "AzexAI Systems создала технологию и является оператором платформы AzexAI VSM, которая превращает сложные данные об объекте в структурированные, проверяемые и воспроизводимые аналитические результаты.",
    "ogTitle": "AzexAI Systems",
    "ogDescription": "От доказательств — к результату. От результата — к пониманию."
  },
  "nav": {
    "home": "Главная",
    "vsm": "AzexAI VSM",
    "products": "Продукты",
    "technology": "Технология",
    "iit3d": "IIT 3D",
    "trust": "Доверие",
    "research": "Исследования",
    "company": "Компания",
    "leadership": "Руководство",
    "partnerships": "Партнёрства",
    "insights": "Аналитика",
    "support": "Поддержка",
    "contact": "Контакты",
    "index": "AzexAI Index",
    "institutional": "Institutional Index",
    "plus": "AzexAI Plus",
    "access": "Access AzexAI VSM",
    "menu": "Меню",
    "close": "Закрыть",
    "language": "Язык"
  },
  "common": {
    "exploreVsm": "Explore AzexAI VSM",
    "accessPlatform": "Access Platform",
    "exploreIndex": "Explore AzexAI Index",
    "exploreInstitutional": "Explore Institutional Index",
    "explorePlus": "Explore AzexAI Plus",
    "aboutCompany": "About AzexAI Systems",
    "readMore": "Продолжить",
    "primaryAction": "Access AzexAI VSM",
    "requestAccess": "Запросить доступ к платформе",
    "humanSupport": "Связаться с человеком",
    "partnershipInquiry": "Партнёрский запрос",
    "generalContact": "Общий контакт",
    "contactSupport": "Связаться с поддержкой",
    "protectedNote": "Публично безопасная информация. Формулы, веса и внутренняя методология не раскрываются.",
    "platformSeparate": "AzexAI VSM работает на отдельном платформенном домене и не смешивается с корпоративным сайтом."
  },
  "chain": {
    "uncertainty": "Неопределённость",
    "evidence": "Доказательства",
    "structure": "Структура",
    "result": "Результат",
    "understanding": "Понимание"
  },
  "footer": {
    "tagline": "От доказательств — к результату. От результата — к пониманию.",
    "platform": "Платформа",
    "products": "Продукты",
    "company": "Компания",
    "contact": "Контакты",
    "partnership": "Партнёрства",
    "human": "Человеческая поддержка",
    "rights": "AzexAI Systems. Все права защищены.",
    "methodology": "Сайт объясняет назначение и принципы. Он не раскрывает формулы, веса, внутренние переменные и правила расчёта, допускающие реконструкцию."
  },
  "home": {
    "kicker": "AzexAI Systems",
    "headline": "AzexAI VSM — платформа для проверяемых аналитических результатов.",
    "lede": "AzexAI Systems создала технологию и является оператором платформы AzexAI VSM, которая превращает сложные данные об объекте в структурированные, проверяемые и воспроизводимые аналитические результаты.",
    "statementA": "От доказательств — к результату. От результата — к пониманию.",
    "statementB": "Не просто данные. Аналитическое состояние.",
    "body": "AzexAI VSM не рассматривает объект как набор документов и утверждений. Система структурирует только то, что может быть обосновано, и переводит это в проверяемое аналитическое состояние внутри рамки соответствующего продукта.",
    "principlesTitle": "Как формируется результат",
    "principles": [
      "Доказательная основа",
      "Структурированная аналитическая модель",
      "Фиксированный результат",
      "Контролируемое объяснение",
      "Защита методологии"
    ],
    "boundaryKicker": "Граница ИИ",
    "boundaryTitle": "ИИ может помогать понять результат, но не имеет права его придумать.",
    "boundaryBody": "То, что не подтверждено, не становится фактом только потому, что ИИ способен заполнить пробел. AzexAI показывает не всё, что ИИ способен предположить, а только то, что система имеет основание утверждать.",
    "productsTitle": "Продукты внутри AzexAI VSM",
    "trustTitle": "Почему результату можно доверять",
    "trustItems": [
      "Проверяемая входная основа",
      "Контролируемая расчётная логика",
      "Воспроизводимость",
      "Прослеживаемость",
      "Разделение результата и объяснения"
    ],
    "iitTitle": "IIT 3D",
    "iitLede": "IIT 3D — исследуемое аналитическое пространство подтверждённой структуры результата.",
    "iitBody": "Для Institutional Index IIT 3D переводит результат из последовательности страниц в цифровую среду, где можно исследовать структуру, измерения, ограничения и подтверждённые связи.",
    "scienceTitle": "Научно-техническая основа",
    "scienceBody": "AzexAI VSM построена на собственной научно-технической методологии: структурированность, проверяемость, воспроизводимость, фиксированный результат и контролируемая интерпретация.",
    "companyTitle": "AzexAI Systems",
    "companyBody": "AzexAI Systems — создатель технологии и оператор платформы AzexAI VSM. Компания развивает продукт, методологию, исследования, доверие и институциональное применение в едином стратегическом контуре."
  },
  "vsm": {
    "kicker": "AzexAI VSM",
    "title": "Verifiable Structured Model",
    "headline": "От сложной информации — к проверяемому аналитическому результату.",
    "lede": "AzexAI VSM — не система генерации свободных ответов. Это аналитическая платформа, которая разделяет доказательную основу, структуру данных, расчёт, результат и его последующее объяснение.",
    "statement": "AzexAI превращает данные об объекте не в мнение ИИ, а в проверяемое аналитическое состояние.",
    "doesTitle": "Что делает AzexAI VSM",
    "does": [
      "Структурирует данные и доказательства",
      "Не превращает неподтверждённое в факт",
      "Применяет расчётную логику соответствующего продукта",
      "Формирует фиксированный и воспроизводимый результат",
      "Представляет результат через отчёт, аналитическую модель и контролируемое объяснение"
    ],
    "aiTitle": "ИИ не является владельцем результата",
    "aiLede": "То, что не подтверждено, не становится истиной только потому, что ИИ способен заполнить пробел.",
    "aiBody": "ИИ может помогать работать с информацией и объяснять уже сформированный результат, но не должен создавать неподтверждённые факты или новый расчётный результат.",
    "modelTitle": "Аналитическая модель объекта",
    "modelBody": "Оцениваемый объект перестаёт быть набором разрозненных документов и становится структурированной аналитической моделью подтверждённых характеристик, ограничений, измерений и допустимых связей.",
    "orderTitle": "Сначала результат. Затем объяснение.",
    "orderBody": "Интерпретация, визуализация и представление результата не используются для его повторного расчёта или произвольного изменения.",
    "accessTitle": "Доступ к платформе",
    "accessBody": "AzexAI VSM работает на отдельном платформенном домене и не смешивается с корпоративным сайтом."
  },
  "products": {
    "kicker": "Продукты",
    "headline": "Единая методологическая дисциплина. Самостоятельные аналитические продукты.",
    "lede": "Продукты AzexAI — не разные названия одного и того же результата. Каждый продукт имеет собственную задачу, аналитическую логику и форму результата.",
    "indexName": "AzexAI Index",
    "indexLede": "Структурированная индексная оценка и ясное аналитическое представление результата.",
    "indexPoints": [
      "Index Standard — полный базовый результат высокого качества",
      "Index Premium — более глубокое аналитическое представление той же семьи результата",
      "Глубина представления не создаёт новую математику или новый результат"
    ],
    "instName": "Institutional Index",
    "instLede": "Самостоятельный продукт для профессиональных и институциональных сценариев оценки. Не является Premium-версией обычного Index.",
    "instPoints": [
      "Самостоятельный институциональный результат",
      "Четыре аналитических измерения",
      "Institutional Report",
      "Digital Analytical Model",
      "IIT 3D — в применимых пакетах",
      "Повышенная доказательная и прослеживаемая аналитика"
    ],
    "instNote": "Конкретное отраслевое покрытие публикуется только после отдельного подтверждения.",
    "plusName": "AzexAI Plus",
    "plusLede": "Семь самостоятельных специализированных аналитических сервисов."
  },
  "index": {
    "kicker": "AzexAI Index",
    "headline": "Структурированная индексная оценка и проверяемый результат.",
    "lede": "AzexAI Index обеспечивает структурированную индексную оценку и ясное аналитическое представление результата.",
    "standardTitle": "Index Standard",
    "standardBody": "Полный базовый результат высокого качества.",
    "premiumTitle": "Index Premium",
    "premiumBody": "Более глубокое аналитическое представление той же семьи результата.",
    "note": "Глубина представления не создаёт новую математику или новый результат."
  },
  "institutional": {
    "kicker": "Institutional Index",
    "label": "Institutional analytics",
    "headline": "Глубже отчёта: исследуемая аналитическая модель результата.",
    "lede": "Institutional Index — самостоятельный продукт AzexAI VSM для профессиональных и институциональных сценариев оценки.",
    "flow": "Результат → 4 измерения → Digital Analytical Model → IIT 3D → Отчёт / Доказательства / Прослеживаемость",
    "damTitle": "Digital Analytical Model",
    "damLede": "Отчёт фиксирует вывод. Цифровая аналитическая модель позволяет исследовать его структуру.",
    "damBody": "Digital Analytical Model сохраняет результат, аналитические измерения, подтверждённые характеристики, ограничения и связи в единой цифровой аналитической среде.",
    "iitTitle": "IIT 3D",
    "iitLede": "IIT 3D — пространство подтверждённой структуры результата.",
    "iitBody": "IIT 3D переводит результат из последовательности страниц в исследуемое аналитическое пространство. Модель не дорисовывает объект и не создаёт декоративные связи — она показывает только структуру, которую AzexAI имеет основание утверждать.",
    "iitNote": "IIT 3D позиционируется как флагманская возможность Institutional Index. Клиентская выдача зависит от уровня пакета и не является автоматической частью Standard.",
    "whiteTitle": "WhiteBox",
    "whiteLede": "Explain the result. Protect the method.",
    "whiteBody": "WhiteBox — контролируемый механизм объяснимости, позволяющий понимать допустимые основания результата без раскрытия защищённой методологии.",
    "whiteNote": "WhiteBox не является автоматически доступной функцией каждому клиенту. Доступность и глубина зависят от разрешённого уровня раскрытия.",
    "boundaryTitle": "Публичная граница",
    "boundaryBody": "Конкретное секторное и объектное покрытие Institutional Index публикуется только после отдельного подтверждения."
  },
  "plus": {
    "kicker": "AzexAI Plus",
    "headline": "Семь специализированных сервисов. Семь самостоятельных аналитических результатов.",
    "lede": "AzexAI Plus объединяет самостоятельные специализированные сервисы для анализа отдельных сторон компании, проекта или организации.",
    "each": "Каждый сервис имеет собственную предметную область, собственную расчётную логику и самостоятельный результат.",
    "independenceTitle": "Самостоятельность",
    "independenceBody": "Сервисы Plus не заменяют и не смешивают результаты Index или Institutional Index и не формируют единый совмещённый результат семи сервисов.",
    "presentationTitle": "Представление результата",
    "presentationBody": "Каждый сервис формирует собственный результат, который объясняется только в пределах утверждённой предметной и аналитической области этого сервиса.",
    "asProduct": "Каждый сервис представлен как самостоятельный продукт."
  },
  "trust": {
    "kicker": "Доверие",
    "headline": "Проверяемый результат. Контролируемое объяснение. Защищённый метод.",
    "lede": "Доверие к AzexAI VSM строится не на визуальной прозрачности интерфейса, а на дисциплине формирования результата.",
    "items": [
      "Доказательная входная основа",
      "Структурированные данные",
      "Контролируемая расчётная логика",
      "Воспроизводимый результат",
      "Разделение результата и объяснения",
      "Прослеживаемость",
      "Защита методологии"
    ],
    "order": "Результат сначала формируется и фиксируется. Затем он может быть объяснён, исследован и визуализирован.",
    "explainTitle": "Controlled Explainability",
    "explainBody": "WhiteBox объясняет допустимые основания результата, не раскрывая внутренние формулы, параметры и защищённую методологию.",
    "validationTitle": "Public Validation",
    "validationBody": "Публичный раздел валидации может показывать, что контрольные серии продемонстрировали воспроизводимость результатов в независимых исполнениях. Названия компаний, логотипы и конкретные баллы не публикуются без отдельного юридического решения."
  },
  "technology": {
    "kicker": "Технология и методология",
    "headline": "AzexAI VSM построена на собственной научно-технической методологии.",
    "lede": "Методология создана для структурированной аналитической оценки сложных объектов в условиях неопределённости и асимметрии данных.",
    "items": [
      "Структурированный аналитический вход",
      "Проверяемость",
      "Воспроизводимость",
      "Фиксированный результат",
      "Контролируемая интерпретация",
      "Продуктовая расчётная логика",
      "Защита интеллектуальной собственности"
    ],
    "purpose": "Цель AzexAI — не генерировать больше текста, а формировать обоснованный аналитический результат.",
    "protectedTitle": "Защищённая методология",
    "protectedBody": "Сайт объясняет назначение и принципы методологии, но не раскрывает формулы, веса, внутренние переменные, расчётные правила и технические детали, позволяющие реконструировать защищённую логику."
  },
  "iit3d": {
    "kicker": "IIT 3D",
    "headline": "Пространство подтверждённой структуры результата.",
    "lede": "IIT 3D — исследуемое аналитическое пространство подтверждённой структуры результата. Оно переводит результат из последовательности страниц в цифровую среду, где можно исследовать структуру, измерения, ограничения и подтверждённые связи.",
    "body": "Модель не дорисовывает объект и не создаёт декоративные связи — она показывает только структуру, которую AzexAI имеет основание утверждать.",
    "note": "IIT 3D позиционируется как флагманская возможность Institutional Index. Клиентская выдача зависит от уровня пакета и не является автоматической частью Standard.",
    "visualCaption": "Пространственное чтение подтверждённой структуры — не сгенерированная сцена и не замена результата."
  },
  "research": {
    "kicker": "Исследования",
    "headline": "Исследования в области проверяемого аналитического интеллекта.",
    "lede": "AzexAI Systems развивает исследования в области методологии оценки, аналитических систем, доверия, институционального применения и проверяемого искусственного интеллекта.",
    "empty": "Исследовательские заметки, статьи и публичные брифинги появятся здесь после разрешения на публикацию."
  },
  "company": {
    "kicker": "Компания",
    "headline": "AzexAI Systems",
    "lede": "AzexAI Systems — компания, создавшая технологию и являющаяся оператором платформы AzexAI VSM.",
    "aboutTitle": "О компании",
    "aboutBody": "Компания создаёт технологии проверяемого аналитического ИИ, структурированной оценки и институционального доверия.",
    "systemTitle": "Единый стратегический контур",
    "systemBody": "Компания развивает продукт, методологию, исследования, доверие и институциональное применение в едином стратегическом контуре."
  },
  "leadership": {
    "kicker": "Руководство и команда",
    "headline": "Основатели, руководство и ключевые специалисты.",
    "lede": "Раздел представляет основателей, руководство и ключевых специалистов компании. Биографии публикуются только на основе подтверждённых публичных данных.",
    "empty": "Биографии руководства будут опубликованы здесь только после публичного подтверждения."
  },
  "partnerships": {
    "kicker": "Партнёрства",
    "headline": "Открыты к институциональному сотрудничеству.",
    "lede": "AzexAI Systems открыта к государственным, институциональным, корпоративным, финансовым, инновационным, научным и технологическим партнёрствам.",
    "types": [
      "Государственные",
      "Институциональные",
      "Корпоративные",
      "Финансовые",
      "Инновационные",
      "Научные",
      "Технологические"
    ]
  },
  "insights": {
    "kicker": "Аналитика",
    "headline": "Исследования, новости и аналитическая позиция.",
    "lede": "Исследования, новости компании, выступления, события и аналитическая позиция AzexAI Systems.",
    "empty": "Материалы появляются здесь после разрешения на публичный выпуск. Названия компаний, логотипы и баллы не публикуются без отдельного юридического решения."
  },
  "support": {
    "kicker": "Поддержка",
    "headline": "Поддержка и связь с AzexAI Systems.",
    "lede": "Каналы для вопросов о продуктах, доступе к платформе, партнёрствах, корпоративных запросах и общей поддержке.",
    "assistantTitle": "Support Assistant",
    "assistantBody": "Support Assistant может отвечать на вопросы о компании, продуктах, доступе, заказах, навигации и общих правилах.",
    "assistantLimit": "Support Assistant не проводит оценку, не создаёт новый аналитический результат и не раскрывает защищённую методологию.",
    "humanTitle": "Человеческая поддержка",
    "humanBody": "Пользователь должен иметь прямой маршрут перехода к человеку.",
    "openAssistant": "Спросить Support Assistant"
  },
  "contact": {
    "kicker": "Контакты",
    "headline": "Напишите в AzexAI Systems.",
    "lede": "Вопросы о продуктах, доступе к платформе, партнёрствах, корпоративные запросы и общая поддержка.",
    "name": "Имя",
    "email": "Эл. почта",
    "organization": "Организация",
    "intent": "Тема",
    "message": "Сообщение",
    "send": "Отправить",
    "sending": "Отправка…",
    "success": "Сообщение получено. Сотрудник команды ответит вам.",
    "error": "Сообщение не удалось отправить. Напишите напрямую на контактный адрес.",
    "required": "Пожалуйста, заполните обязательные поля.",
    "intents": {
      "general": "Общий контакт",
      "product": "Вопрос о продукте",
      "platform": "Доступ к платформе",
      "partnership": "Партнёрский запрос",
      "corporate": "Корпоративный запрос",
      "human": "Связаться с человеком",
      "support": "Поддержка"
    }
  },
  "assistant": {
    "title": "Support Assistant",
    "subtitle": "Компания, продукты, доступ и навигация. Без оценок. Без защищённой методологии.",
    "placeholder": "Задайте вопрос…",
    "send": "Отправить",
    "human": "Связаться с человеком",
    "disclaimer": "Ответы ограничены публичной информацией сайта.",
    "fallback": "Я могу помочь по компании, продуктам, доступу к платформе, заказам, навигации и общим правилам. Я не провожу оценку, не создаю новый аналитический результат и не обсуждаю защищённую методологию. Перейти к человеческой поддержке?",
    "greeting": "Я могу отвечать на вопросы об AzexAI Systems, AzexAI VSM, продуктах, доступе и навигации — только на основе публичной информации."
  },
  "notFound": {
    "kicker": "404",
    "headline": "Этой страницы нет на публичном сайте.",
    "body": "Вернитесь в AzexAI Systems или перейдите к AzexAI VSM.",
    "home": "На главную"
  }
}

out = Path(__file__).resolve().parents[1] / "messages"
out.mkdir(exist_ok=True)
for loc, data in (("en", en), ("az", az), ("ru", ru)):
    (out / f"{loc}.json").write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(loc, "ok")
