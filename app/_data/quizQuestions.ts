import { QuizQuestion } from "../types/quiz";

// Define all quiz questions
export const quizQuestions: QuizQuestion[] = [
  {
    id: "name",
    type: "text",
    category: "personal",
    question: "¿Cómo te llamas?",
    description: "O tu alter ego empresarial, si prefieres",
    isRequired: true,
    placeholder: "Tu nombre aquí..."
  },
  {
    id: "age",
    type: "choice",
    category: "personal",
    question: "¿En qué década de la vida te encuentras?",
    choices: [
      { id: "18-24", label: "18-24 años" },
      { id: "25-34", label: "25-34 años" },
      { id: "35-44", label: "35-44 años" },
      { id: "45-54", label: "45-54 años" },
      { id: "55+", label: "55+ años" }
    ],
    isRequired: true
  },
  {
    id: "gender",
    type: "choice",
    category: "personal",
    question: "¿Te identificas más con un género?",
    description: "Sin presión, ¡sabemos que los negocios no tienen género!",
    choices: [
      { id: "masculino", label: "Masculino" },
      { id: "femenino", label: "Femenino" },
      { id: "no-binario", label: "No-Binario" }
    ],
    isRequired: false
  },
  {
    id: "location",
    type: "text",
    category: "personal",
    question: "¿Desde dónde nos escribes?",
    description: "Ciudad, país, o incluso tu café favorito para trabajar",
    isRequired: false,
    placeholder: "Tu ubicación aquí..."
  },
  {
    id: "education",
    type: "choice",
    category: "personal",
    question: "¿Qué nivel educativo tienes?",
    description: "Desde autodidacta hasta doctorado, ¡todo cuenta!",
    choices: [
      { id: "basica", label: "Educación Básica" },
      { id: "media", label: "Educación Media" },
      { id: "superior", label: "Educación Superior" },
      { id: "post-grado", label: "Post-Grado" }
    ],
    isRequired: false
  },
  {
    id: "profession",
    type: "text",
    category: "personal",
    question: "¿Cuál es tu profesión actual?",
    description: "Ejemplo: Agente de viajes boutique, guía de expediciones, líder de retiros... o algo completamente diferente.",
    isRequired: true,
    placeholder: "Tu profesión aquí..."
  },
  {
    id: "personal_life",
    type: "choice",
    category: "personal",
    question: "¿Cómo describirías tu vida personal?",
    choices: [
      { id: "single", label: "Soltero/a y enfocado/a en crecer" },
      { id: "couple", label: "Casado/a o en pareja" },
      { id: "small_kids", label: "Padre/madre de hijos pequeños" },
      { id: "teens", label: "Padre/madre de adolescentes" }
    ],
    isRequired: true
  },
  {
    id: "business_income",
    type: "choice",
    category: "business",
    question: "¿Cuánto ingresa mensualmente a tu negocio?",
    choices: [
      { id: "less_10k", label: "Menos de $10,000" },
      { id: "10k_20k", label: "$10,000 - $20,000" },
      { id: "20k_30k", label: "$20,000 - $30,000" },
      { id: "more_30k", label: "Más de $30,000" }
    ],
    isRequired: true
  },
  {
    id: "business_pain",
    type: "other-choice",
    category: "business",
    question: "¿Qué te quita el sueño como emprendedor?",
    choices: [
      { id: "balance", label: "No logro equilibrar trabajo y vida personal" },
      { id: "operations", label: "Me siento atrapado/a en operaciones repetitivas" },
      { id: "scaling", label: "No escalo aunque tengo demanda" }
    ],
    isRequired: true
  },
  {
    id: "help_motivation",
    type: "other-choice",
    category: "business",
    question: "¿Qué te motiva a buscar ayuda?",
    choices: [
      { id: "freedom", label: "Quiero más libertad" },
      { id: "systems", label: "Necesito sistemas que funcionen" },
      { id: "recognition", label: "Busco reconocimiento en mi industria" }
    ],
    isRequired: true
  },
  {
    id: "top_frustration",
    type: "other-choice",
    category: "business",
    question: "¿Qué problema te frustra más?",
    choices: [
      { id: "cancellations", label: "Clientes que cancelan de última hora" },
      { id: "tools", label: "Herramientas que no se integran" },
      { id: "delegation", label: "Dificultad para delegar" }
    ],
    isRequired: true
  },
  {
    id: "failed_solution",
    type: "other-choice",
    category: "business",
    question: "¿Qué solución fracasó antes?",
    choices: [
      { id: "productivity", label: "Cursos de productividad" },
      { id: "crm", label: "CRMs genéricos" },
      { id: "mentors", label: "Mentores tradicionales" }
    ],
    isRequired: true
  },
  {
    id: "problem_reaction",
    type: "choice",
    category: "change",
    question: "Cuando surge un problema inesperado, ¿cómo reaccionas?",
    choices: [
      { id: "reinvent", label: "A. Busco reinventar algo ✨" },
      { id: "plan", label: "B. Creo un plan estructurado 📊" },
      { id: "diy", label: "C. Lo arreglo yo mismo/a 🔧" }
    ],
    isRequired: true
  },
  {
    id: "action_blocker",
    type: "other-choice",
    category: "change",
    question: "¿Qué te detiene más a la hora de actuar?",
    choices: [
      { id: "control", label: "Miedo a perder control" },
      { id: "time", label: "Falta de tiempo" },
      { id: "cost", label: "Costos iniciales" }
    ],
    isRequired: true
  },
  {
    id: "online_time",
    type: "choice",
    category: "digital",
    question: "¿Dónde pasas más tiempo online?",
    choices: [
      { id: "social", label: "Redes sociales" },
      { id: "streaming", label: "Plataformas de streaming (YouTube, TikTok)" },
      { id: "blogs", label: "Blogs o podcasts" },
      { id: "management", label: "Aplicaciones de gestión" }
    ],
    isRequired: true
  },
  {
    id: "social_network",
    type: "other-choice",
    category: "digital",
    question: "¿Qué red social te roba horas?",
    choices: [
      { id: "instagram", label: "Instagram" },
      { id: "linkedin", label: "LinkedIn" },
      { id: "whatsapp", label: "WhatsApp" },
      { id: "tiktok", label: "TikTok" }
    ],
    isRequired: true
  },
  {
    id: "content_preference",
    type: "choice",
    category: "digital",
    question: "¿Qué contenido te atrapa?",
    choices: [
      { id: "success", label: "Casos de éxito" },
      { id: "tutorials", label: "Tutoriales prácticos" },
      { id: "stories", label: "Historias inspiradoras" },
      { id: "data", label: "Datos y gráficos" }
    ],
    isRequired: true
  },
  {
    id: "service_value",
    type: "choice",
    category: "values",
    question: "¿Qué valoras más en un servicio?",
    choices: [
      { id: "authenticity", label: "Autenticidad" },
      { id: "results", label: "Resultados medibles" },
      { id: "flexibility", label: "Flexibilidad" },
      { id: "innovation", label: "Innovación" }
    ],
    isRequired: true
  },
  {
    id: "decision_influencer",
    type: "choice",
    category: "values",
    question: "¿Quién influye en tus decisiones?",
    choices: [
      { id: "mentors", label: "Mentores" },
      { id: "family", label: "Familia" },
      { id: "clients", label: "Clientes" },
      { id: "community", label: "Comunidad profesional" }
    ],
    isRequired: true
  },
  {
    id: "trust_factor",
    type: "choice",
    category: "values",
    question: "¿Qué haría que confíes en nosotros?",
    choices: [
      { id: "testimonials", label: "Testimonios de otros emprendedores" },
      { id: "trial", label: "Prueba gratuita de 7 días" },
      { id: "guarantee", label: "Garantía de devolución" },
      { id: "dm", label: "Un DM honesto y directo" }
    ],
    isRequired: true
  },
  {
    id: "recent_achievement",
    type: "other-choice",
    category: "achievements",
    question: "¿Qué lograste recientemente?",
    choices: [
      { id: "new_service", label: "Lanzar un nuevo servicio" },
      { id: "sales", label: "Aumentar ventas" },
      { id: "balance", label: "Equilibrar tu vida personal" }
    ],
    isRequired: true
  },
  {
    id: "ideal_business",
    type: "other-choice",
    category: "achievements",
    question: "¿Cómo quieres que opere tu negocio ideal?",
    choices: [
      { id: "automated", label: "Automatizado pero con alma" },
      { id: "control", label: "Totalmente bajo tu control" },
      { id: "collaborative", label: "En colaboración con otros expertos" }
    ],
    isRequired: true
  },
  {
    id: "management_services",
    type: "choice",
    category: "achievements",
    question: "¿Has usado servicios gerenciales antes?",
    choices: [
      { id: "regular", label: "Sí, regularmente" },
      { id: "inconsistent", label: "Sí, pero sin constancia" },
      { id: "never_interested", label: "No, pero quiero" },
      { id: "never_uninterested", label: "No, y no me interesa" }
    ],
    isRequired: true
  },
  {
    id: "availability",
    type: "choice",
    category: "practical",
    question: "¿Cuándo podrías dedicar 3 días completos a tu negocio?",
    choices: [
      { id: "weekdays", label: "Lunes a Viernes" },
      { id: "weekends", label: "Fines de semana" },
      { id: "low_season", label: "Solo en temporadas bajas" },
      { id: "never", label: "¡Nunca! (y queremos cambiar eso)" }
    ],
    isRequired: true
  },
  {
    id: "payment_preference",
    type: "other-choice",
    category: "practical",
    question: "Al contratar un servicio para tu negocio, ¿Cómo te gusta pagar?",
    choices: [
      { id: "subscription", label: "Suscripción mensual" },
      { id: "results", label: "Pago por resultados" },
      { id: "package", label: "Paquete único" }
    ],
    isRequired: true
  },
  {
    id: "extra_benefit",
    type: "other-choice",
    category: "practical",
    question: "¿Qué beneficio extra te haría decir 'wow'?",
    choices: [
      { id: "community", label: "Acceso a una comunidad VIP" },
      { id: "templates", label: "Plantillas listas para usar" },
      { id: "support", label: "Soporte 24/7" }
    ],
    isRequired: true
  },
  {
    id: "magic_wand",
    type: "text",
    category: "final",
    question: "Si tuvieras una varita mágica para tu negocio, ¿qué cambiarías primero?",
    description: "Respuesta abierta: ¡sorpréndenos!",
    isRequired: true,
    placeholder: "Tu respuesta mágica aquí..."
  }
];