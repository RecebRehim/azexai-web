import { getTranslations } from "next-intl/server";

type Entry = { keys: string[]; answerKey: string };

const knowledge: Entry[] = [
  { keys: ["vsm", "platform", "structured model", "модель", "платформ", "vsm nə", "что такое"], answerKey: "vsm" },
  { keys: ["index", "индекс", "indeks"], answerKey: "index" },
  { keys: ["institutional", "институц", "iit", "whitebox", "digital analytical"], answerKey: "institutional" },
  { keys: ["plus", "pb", "esg", "gov", "сервис", "xidmət"], answerKey: "plus" },
  { keys: ["trust", "whitebox", "validat", "довер", "etimad", "explain"], answerKey: "trust" },
  { keys: ["method", "technology", "formula", "weight", "формул", "metodologi"], answerKey: "method" },
  { keys: ["access", "platform", "вход", "giriş", "order", "sifariş", "заказ"], answerKey: "access" },
  { keys: ["company", "about", "компания", "şirkət", "systems"], answerKey: "company" },
  { keys: ["partner", "партнёр", "tərəfdaş"], answerKey: "partner" },
  { keys: ["contact", "support", "human", "человек", "insan", "dəstək", "поддерж"], answerKey: "contact" },
  { keys: ["ai", "ии", "sİ", "si ", "invent", "uydur", "придума"], answerKey: "ai" },
];

export const assistantAnswers: Record<string, { en: string; az: string; ru: string }> = {
  vsm: {
    en: "AzexAI VSM is not a free-form answer generator. It is an analytical platform that separates evidence, data structure, calculation, result and subsequent explanation. It turns data about an object into a verifiable analytical state — not an AI opinion.",
    az: "AzexAI VSM generativ cavab sistemi deyil. O, məlumatların əsasını, strukturunu, hesablamanı, nəticəni və izahı bir-birindən ayıran analitik platformadır. AzexAI məlumatları Sİ rəyi deyil, yoxlanıla bilən analitik vəziyyətə çevirir.",
    ru: "AzexAI VSM — не система генерации свободных ответов. Это аналитическая платформа, которая разделяет доказательную основу, структуру данных, расчёт, результат и его последующее объяснение. Данные об объекте становятся проверяемым аналитическим состоянием, а не мнением ИИ.",
  },
  index: {
    en: "AzexAI Index is structured index assessment with a clear analytical presentation of the result. Index Standard is a complete high-quality baseline result. Index Premium is a deeper presentation within the same result family — greater depth does not create a new result.",
    az: "AzexAI Index strukturlaşdırılmış indeks qiymətləndirilməsi və nəticənin aydın analitik təqdimatıdır. Index Standard tam keyfiyyətli əsas nəticədir. Index Premium eyni nəticə ailəsində daha dərin təqdimatdır — dərinlik yeni nəticə yaratmır.",
    ru: "AzexAI Index — структурированная индексная оценка и ясное аналитическое представление результата. Index Standard — полный базовый результат. Index Premium — более глубокое представление той же семьи результата; глубина не создаёт новый результат.",
  },
  institutional: {
    en: "Institutional Index is an independent product for professional and institutional assessment — not a Premium version of Index. It includes an institutional result, four analytical dimensions, an Institutional Report, a Digital Analytical Model, and IIT 3D where included by package. WhiteBox explains the permitted basis of a result without exposing protected methodology. Specific sector coverage is published only after separate confirmation.",
    az: "Institutional Index peşəkar və institusional ssenarilər üçün müstəqil məhsuldur — adi Index-in Premium versiyası deyil. Buraya institusional nəticə, dörd analitik ölçü, Institutional Report, Digital Analytical Model və uyğun paketlərdə IIT 3D daxildir. WhiteBox icazə verilən əsasları izah edir, qorunan metodologiyanı açıqlamır. Konkret sektor əhatəsi yalnız ayrıca təsdiqdən sonra dərc olunur.",
    ru: "Institutional Index — самостоятельный продукт для профессиональных и институциональных сценариев, а не Premium-версия Index. В него входят институциональный результат, четыре измерения, Institutional Report, Digital Analytical Model и IIT 3D в применимых пакетах. WhiteBox объясняет допустимые основания результата, не раскрывая методологию. Отраслевое покрытие публикуется только после отдельного подтверждения.",
  },
  plus: {
    en: "AzexAI Plus consists of seven independent specialized services: PB, EI, CF, CR, GOV+, IP+ and ESG+. Each has its own domain, calculation logic and standalone result. Plus services do not replace or mix Index or Institutional Index results and do not create one combined seven-service result.",
    az: "AzexAI Plus yeddi müstəqil ixtisaslaşmış xidmətdən ibarətdir: PB, EI, CF, CR, GOV+, IP+ və ESG+. Hər birinin öz predmet sahəsi, hesablanma məntiqi və müstəqil nəticəsi var. Plus xidmətləri Index və Institutional Index nəticələrini əvəz etmir, qarışdırmır və vahid yeddi-xidmət nəticəsi yaratmır.",
    ru: "AzexAI Plus объединяет семь самостоятельных сервисов: PB, EI, CF, CR, GOV+, IP+ и ESG+. У каждого своя предметная область, расчётная логика и самостоятельный результат. Сервисы Plus не заменяют и не смешивают результаты Index или Institutional Index и не формируют единый результат семи сервисов.",
  },
  trust: {
    en: "Trust is built on the discipline by which the result is formed: evidence-based input, structured data, controlled calculation, reproducibility, separation of result and explanation, traceability and protected methodology. The result is formed and fixed first, then explained.",
    az: "Etimad nəticənin necə formalaşdırıldığına dair intizamdan yaranır: sübut əsaslı giriş, strukturlaşdırılmış məlumat, nəzarət olunan hesablama, təkrarlana bilmə, nəticə və izahın ayrılması, izlənə bilmə və qorunan metodologiya. Nəticə əvvəlcə formalaşır və sabitlənir, sonra izah olunur.",
    ru: "Доверие строится на дисциплине формирования результата: доказательный вход, структурированные данные, контролируемый расчёт, воспроизводимость, разделение результата и объяснения, прослеживаемость и защита методологии. Результат сначала фиксируется, затем объясняется.",
  },
  method: {
    en: "The website explains the purpose and principles of the methodology. It does not expose formulas, weights, internal variables, calculation rules or technical details that could enable reconstruction of protected logic.",
    az: "Sayt metodologiyanın məqsədini və prinsiplərini izah edir, lakin formulaları, çəkiləri, daxili dəyişənləri, hesablanma qaydalarını və yenidən qurulmasına imkan verən texniki detalları açıqlamır.",
    ru: "Сайт объясняет назначение и принципы методологии, но не раскрывает формулы, веса, внутренние переменные, расчётные правила и технические детали, позволяющие реконструировать защищённую логику.",
  },
  access: {
    en: "AzexAI VSM operates on a separate platform domain and is not merged into this corporate website. You can request platform access through Contact. The Support Assistant does not create orders as assessments; for access and orders, use the contact form or human support.",
    az: "AzexAI VSM platforması korporativ saytdan ayrı iş mühitidir. Platformaya giriş üçün Əlaqə formasından istifadə edin. Support Assistant qiymətləndirmə kimi sifariş yaratmır; giriş və sifariş üçün forma və ya insan dəstəyi istifadə olunur.",
    ru: "AzexAI VSM работает на отдельном платформенном домене и не смешана с корпоративным сайтом. Доступ к платформе можно запросить через Контакты. Support Assistant не оформляет оценку; для доступа и заказов используйте форму или человеческую поддержку.",
  },
  company: {
    en: "AzexAI Systems is the company that created the technology and operates the AzexAI VSM platform. It develops technologies for verifiable analytical AI, structured assessment and institutional trust.",
    az: "AzexAI Systems texnologiyanı yaratmış şirkət və AzexAI VSM platformasının operatorudur. Şirkət yoxlanıla bilən analitik Sİ, strukturlaşdırılmış qiymətləndirmə və institusional etimad üçün texnologiyalar yaradır.",
    ru: "AzexAI Systems — компания, создавшая технологию и являющаяся оператором платформы AzexAI VSM. Компания создаёт технологии проверяемого аналитического ИИ, структурированной оценки и институционального доверия.",
  },
  partner: {
    en: "AzexAI Systems is open to government, institutional, corporate, financial, innovation, scientific and technology partnerships. Use Contact with the partnership subject.",
    az: "AzexAI Systems dövlət, institusional, korporativ, maliyyə, innovasiya, elmi və texnoloji tərəfdaşlıqlara açıqdır. Tərəfdaşlıq mövzusu ilə Əlaqə formasından istifadə edin.",
    ru: "AzexAI Systems открыта к государственным, институциональным, корпоративным, финансовым, инновационным, научным и технологическим партнёрствам. Используйте форму контакта с темой партнёрства.",
  },
  contact: {
    en: "You can reach human support at any time through Contact — including product questions, platform access, partnerships, corporate inquiries and a direct request for human assistance.",
    az: "İstənilən vaxt Əlaqə səhifəsi vasitəsilə insan dəstəyinə keçə bilərsiniz — məhsul sualları, platformaya giriş, tərəfdaşlıq, korporativ sorğular və birbaşa insan dəstəyi.",
    ru: "В любой момент можно перейти к человеческой поддержке через Контакты — вопросы о продуктах, доступе, партнёрствах, корпоративные запросы и прямое обращение к человеку.",
  },
  ai: {
    en: "AI may help explain a result, but it has no authority to invent it. What is not verified does not become a fact simply because AI can fill the gap. AzexAI shows only what the system has grounds to assert.",
    az: "Sİ nəticəni izah etməyə kömək edə bilər, amma onu uydurmaq hüququna malik deyil. Təsdiqlənməyən məlumat yalnız Sİ boşluğu doldura bildiyi üçün fakt olmur. AzexAI sistemin əsaslandırmağa hüququ olanı göstərir.",
    ru: "ИИ может помогать понять результат, но не имеет права его придумать. Неподтверждённое не становится фактом лишь потому, что ИИ способен заполнить пробел. AzexAI показывает только то, что система имеет основание утверждать.",
  },
};

export function matchAssistant(query: string): keyof typeof assistantAnswers | null {
  const q = query.toLowerCase();
  if (!q.trim()) return null;
  for (const entry of knowledge) {
    if (entry.keys.some((k) => q.includes(k.toLowerCase()))) {
      return entry.answerKey as keyof typeof assistantAnswers;
    }
  }
  return null;
}

export async function getAssistantCopy() {
  return getTranslations("assistant");
}
