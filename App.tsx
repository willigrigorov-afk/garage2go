
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, SprayCan, Sparkles, PaintBucket, Car, Phone, Layout, Hammer, MessageCircle, Send, Volume2, PlusSquare } from "lucide-react";

/**
 * Главная страница Garage2Go
 * — Темный фон, яркая картинка авто
 * — Заголовок: Garage2Go, подзаголовок: Автосервис на выезд
 * — Дополнительный текст: предоставляем услуги и специалистов для автосервисов и клиентов
 * — Карточки с эффектом «shine» при ховере
 * — На десктопе: подпункты раскрываются при наведении
 * — На мобильных: подпункты раскрываются по клику
 */

const BG_IMAGE =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2060&auto=format&fit=crop";

const CATEGORIES = [
  {
    id: "armature",
    name: "Арматурные работы",
    description: "Разборка и сборка автомобилей для разных задач",
    icon: Wrench,
    services: [
      "Разбор под покраску",
      "Разбор под перешив",
      "Разбор под оклейку",
    ],
  },
  {
    id: "detailing",
    name: "Химчистка",
    description: "Чистка и уход за салоном автомобиля",
    icon: SprayCan,
    services: ["Базовая химчистка", "Полная химчистка", "Премиум-пакет"],
  },
  {
    id: "polishing",
    name: "Полировка",
    description: "Восстановление блеска кузова",
    icon: Sparkles,
    services: ["Полировка 1 слой", "Полировка с защитой", "Абразивная"],
  },
  {
    id: "leather",
    name: "Реставрация кожи",
    description: "Восстановление салона и кожаных элементов",
    icon: PaintBucket,
    services: [
      "Устранение царапин кожи",
      "Окрашивание кожи",
      "Полная реставрация сидений",
    ],
  },
  {
    id: "wrapping",
    name: "Оклейка автомобиля",
    description: "Профессиональная оклейка и защита кузова",
    icon: Layout,
    services: [
      "Частичная оклейка автомобиля",
      "Антихром",
      "Оклейка зон риска",
      "Полная оклейка автомобиля",
      "Оклейка интерьера автомобиля",
    ],
  },
  {
    id: "pdr",
    name: "PDR (Удаление вмятин)",
    description: "Удаление вмятин без покраски и устранение последствий града",
    icon: Hammer,
    services: [
      "Удаление вмятин без покраски",
      "Устранение последствий града",
    ],
  },
  {
    id: "soundproofing",
    name: "Шумоизоляция автомобиля",
    description: "Комплексная и частичная шумоизоляция",
    icon: Volume2,
    services: [
      "Полная шумоизоляция авто",
      "Частичная шумоизоляция авто",
      "Аудиоподготовка",
      "Шумоизоляция колесных арок",
    ],
  },
  {
    id: "upgrade",
    name: "Дооснащение автомобиля",
    description: "Установка дополнительных систем и опций",
    icon: PlusSquare,
    services: [
      "Установка доводчиков дверей",
      "Установка привода багажника",
      "Подбор и установка акустических систем",
    ],
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* Фоновое изображение авто */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="car background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Лёгкое затемнение для читаемости текста */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Контент */}
      <div className="relative z-10">
        {/* Хедер/герой */}
        <header className="container mx-auto px-4 pt-10 pb-16 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wider uppercase drop-shadow-md">
            Garage2Go
          </h1>
          <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-gray-200">
            Автосервис на выезд
          </h2>
          <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
            Мы предоставляем не только услуги для владельцев автомобилей, но и специалистов для автосервисов, детейлинг-студий и покрасочных центров. Обращайтесь к нам, если нужен мастер на время.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <a
              href="https://wa.me/79776888162"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-[160px] flex items-center justify-center gap-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md transition"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
            <a
              href="https://t.me/+79776888162"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-[160px] flex items-center justify-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md transition"
            >
              <Send className="h-5 w-5" /> Telegram
            </a>
          </div>
        </header>

        {/* Секция категорий */}
        <main className="container mx-auto px-4 pb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </main>

        {/* О компании */}
        <section className="container mx-auto px-4 py-12 text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">О компании</h2>
          <p className="text-gray-300">
            Мы предоставляем профессиональные услуги по уходу и обслуживанию
            автомобилей с выездом к клиенту. Наши мастера работают быстро,
            аккуратно и с использованием проверенных материалов. Экономьте свое
            время — мы приедем туда, где удобно вам.
          </p>
        </section>

        {/* Контакты */}
        <section className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Связаться с нами</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-3 text-lg">
              <Phone className="h-6 w-6 text-green-400" />
              <span>+7 (977) 688-81-62</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Car className="h-6 w-6 text-blue-400" />
              <span>Мы работаем по Москве и области</span>
            </div>
            {/* Дополнительные ссылки на мессенджеры */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://wa.me/79776888162"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md transition"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
              <a
                href="https://t.me/+79776888162"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md transition"
              >
                <Send className="h-5 w-5" /> Telegram
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function CategoryCard({
  cat,
}: {
  cat: {
    id: string;
    name: string;
    description: string;
    icon: any;
    services: string[];
  };
}) {
  const Icon = cat.icon;
  const [open, setOpen] = useState(false);

  // Проверка: мобильное устройство или нет
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.div
      onClick={() => {
        if (isMobile) setOpen((prev) => !prev);
      }}
      className="relative group cursor-pointer rounded-2xl bg-white/10 backdrop-blur-md p-6 shadow-xl ring-1 ring-white/10 overflow-hidden"
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      {/* Shine/блик */}
      <div className="pointer-events-none absolute -inset-[1px] overflow-hidden rounded-2xl">
        <div className="absolute top-0 left-[-120%] h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition duration-700 group-hover:opacity-100 group-hover:left-[120%]" />
      </div>

      {/* Контент карточки */}
      <div className="relative z-10">
        <div className="flex items-start gap-3">
          <span className="shrink-0 rounded-xl bg-white/20 p-3">
            <Icon className="h-6 w-6 text-white" />
          </span>
          <div>
            <h2 className="text-xl font-semibold">{cat.name}</h2>
            <p className="text-sm text-gray-200 mt-1">{cat.description}</p>
          </div>
        </div>

        <AnimatePresence>
          {(open || !isMobile) && (
            <motion.ul
              key="list"
              initial={{ opacity: 0, y: -6, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -6, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`mt-4 space-y-2 ${!isMobile ? "hidden group-hover:block" : ""}`}
            >
              {cat.services.map((srv) => (
                <li
                  key={srv}
                  className="rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition text-white"
                >
                  {srv}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Градиентная кайма при ховере */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/30 transition" />
    </motion.div>
  );
}
