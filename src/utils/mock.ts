import Comment from "../../public/user/commenter.svg";
import review1 from "../../public/reviews/review1.png";
import review2 from "../../public/reviews/review2.png";
import review3 from "../../public/reviews/review3.png";
import review4 from "../../public/reviews/review4.png";
import rank1 from "../components/users/d1.png"
import rank2 from "../components/users/d2.png"
import rank3 from "../components/users/d3.png"
import rank4 from "../components/users/d4.png"
import rank5 from "../components/users/d5.png"
import rank6 from "../components/users/d6.png"
import rank7 from "../components/users/d7.png"
import rank8 from "../components/users/d8.png"
import qilich1 from "../components/users/q1.png"
import qilich2 from "../components/users/q2.png"
import qilich3 from "../components/users/q3.png"
import dubulga1 from "../components/users/dub1.png"
import dubulga2 from "../components/users/dub2.png"
import dubulga3 from "../components/users/dub3.png"
import nayza1 from "../components/users/n1.png"
import nayza2 from "../components/users/n2.png"
import nayza3 from "../components/users/n3.png"
import etik1 from "../components/users/e1.png"
import etik2 from "../components/users/e2.png"
import etik3 from "../components/users/e3.png"
import qalqon1 from "../components/users/qal1.png"
import qalqon2 from "../components/users/qal2.png"
import qalqon3 from "../components/users/qal3.png"
import zirh1 from "../components/users/z1.png"
import zirh2 from "../components/users/z2.png"
import zirh3 from "../components/users/z3.png"
import tayoq1 from "../components/users/t1.png"
import tayoq2 from "../components/users/t2.png"
import tayoq3 from "../components/users/t3.png"
import uzuk1 from "../components/users/k1.png"
import uzuk2 from "../components/users/k2.png"
import uzuk3 from "../components/users/k3.png"
import warrior from "../components/users/warrior.png"
import knight from "../components/users/knight.png"
import lknight from "../components/users/lknight.png"
import ranger from "../components/users/ranger.png"
import sorceress from "../components/users/sorceress.png"







export const mockComments = [
  {
    id: 1,
    image: Comment,
    name: "Guillermo Rauch",
    social: "@rauchg",
    text: "This project is awesome, beautiful, and more reaction don't get tired!",
    createdAt: "5:48 PM · Sep 15, 2021",
    likes: 0,
    refresh: 36,
  },
  {
    id: 2,
    image: Comment,
    name: "Dan Abramov",
    social: "@dan_abramov",
    text: "Absolutely loved the design and the overall experience. Great job!",
    createdAt: "9:15 AM · Oct 3, 2021",
    likes: 3,
    refresh: 42,
  },
  {
    id: 3,
    image: Comment,
    name: "Lee Robinson",
    social: "@leeerob",
    text: "Such an intuitive and smooth user interface, well done everyone!",
    createdAt: "2:30 PM · Nov 22, 2021",
    likes: 5,
    refresh: 28,
  },
  {
    id: 4,
    image: Comment,
    name: "Sarah Drasner",
    social: "@sarah_edo",
    text: "Wonderful work! I'm really impressed with the functionality and the UX!",
    createdAt: "11:05 AM · Dec 10, 2021",
    likes: 2,
    refresh: 19,
  },
];

export const mockReviews = [
  {
    id: 1,
    image: review1,
    title: "🎯 Bizning maqsadimiz",
    subtitle: "Platformamiz orqali siz:",
    texts: [
      "C# dasturlash tilini 0 dan professional darajagacha o‘rganasiz",
      "Real vaqt reyting orqali o‘z natijalaringizni kuzatasiz",
      "Duel rejimida boshqa foydalanuvchilar bilan bilim sinashasiz",
      "Ekipirovka, kvestlar, topshiriqlar orqali kuchayib borasiz",
    ],
  },
  {
    id: 2,
    image: review2,
    title: "🧩 Platforma qanday ishlaydi?",
    subtitle: "",
    texts: [
      "🔐 Ro‘yxatdan o‘tish: Talaba o‘z ma’lumotlarini kiritadi (ism, guruh, email, kurs)",
      "🧠 Kirish savollari: Dastlabki test orqali sizning darajangiz aniqlanadi — Rekrut, Titan yoki Ritser",
      "🛡️ Personaj yaratish: 4 xil ko‘rinishdagi personajdan birini tanlang va unga nom bering",
      "🎓 Main Quest: 30 ta C# bo‘yicha mavzularni bosqichma-bosqich egallang",
      "🧪 Side Quest: Aralash, mustahkamlovchi topshiriqlar",
      "🏆 Reyting tizimi: Har bir muvaffaqiyatli topshiriq sizga ball, unvon va yangi qurollar olib keladi",
      "⚔️ Duel: Boshqa talabalar bilan bilim bo‘yicha bellashuv",
    ],
  },
  {
    id: 3,
    image: review3,
    title: "🔥 Nega aynan Coders War?",
    subtitle: "",
    texts: [
      "🎮 Dars + O‘yin — bu sizni charchatmaydi, o‘rgatadi",
      "📈 Reyting tizimi sizni harakatga undaydi",
      "👥 Jamiyat va duel orqali raqobat muhitida o‘rganasiz",
      "🧠 Adaptive Learning — sizga kerakli darajadagi topshiriq beriladi",
      "🛡️ Har bir topshiriq sizni kuchaytiradi — bilimda ham, platformada ham!"
    ],
  },
  {
    id: 4,
    image: review4,
    title: "🛠️ Nimalarni o‘rganasiz?",
    subtitle: "",
    texts: [
      "Algoritmlar va mantiqiy muammolarni yechish Ob’ektga yo‘naltirilgan dasturlash (OOP) Fayllar, interfeys, bazaviy AI Loyihalar tuzish va real kod yozish malakalari",
    ],
  },
];

export const mockQuestions = [
    {
      id: 1,
      title: "Kod sehrgarining birinchi qadamlari",
      question: "(C# ga kirish: Sintaksis va asosiy tushunchalar)",
      lesson: "1-mavzu",
      lessonBall: "(+200 ball)",
      text: [
        "Sehrli dunyo",
        "Sehrgarlar asosi",
        "Qudratli sehr",
        "Sehrli belgilarning qudrati",
        "Sehrgarlar tilini o‘rganish",
        "Birinchi amaliy sehr",
        "Sirli belgilar",
        "Sehrli mantralar",
        "Qudratli sehrlar",
        "Sehrli qalam"
      ],
      describe: [
        "C# dasturlash tili haqida umumiy tushuncha",
        "C# dasturining tuzilishi",
        "\"Hello, World!\" dasturini yaratish",
        "C# sintaksisining asosiy qoidalari",
        "C# dasturlash muhiti va IDE-lar",
        "O‘zgaruvchilar va ularning ahamiyati",
        "C# dagi identifikatorlar va rezerv so‘zlar",
        "Kod yozish bo‘yicha eng yaxshi tajribalar",
        "Sintaksis xatolarini aniqlash va tuzatish",
        "C# dasturlash tilida dasturiy ta’minot yaratish jarayoni"
      ]
    },
    {
      id: 2,
      title: "Obyektga yo‘naltirilgan sehr",
      question: "(OOP prinsiplari: sinflar, ob’ektlar, inkapsulyatsiya)",
      lesson: "2-mavzu",
      lessonBall: "(+200 ball)",
      text: [
        "Sinflar va ob’ektlar",
        "Xususiyatlar va metodlar",
        "Inkapsulyatsiya sirlari",
        "Merosi sehrgari",
        "Polimorfizm qudrati",
        "Abstraksiya sirlarini ochish",
        "Konstruktor sehrlari",
        "Statik va dinamik ob’ektlar",
        "Interface sehrgarligi",
        "OOP amaliyotdagi sehr"
      ],
      describe: [
        "Sinflar va ob’ektlar tushunchasi",
        "Xususiyatlar (properties) va usullar (methods)",
        "Ma’lumotni himoyalash: private/protected/public",
        "Merosi (inheritance) tamoyili",
        "Polimorfizm turlari va misollar",
        "Abstraksiya va uning foydasi",
        "Konstruktor va destruktor ishlash tartibi",
        "Static a’zolar xususiyatlari",
        "Interface’lar va ularning roli",
        "OOP prinsiplari real loyihada"
      ]
    },
    {
      id: 3,
      title: "To‘plamlar sehrati",
      question: "(Collections va Generics: List, Dictionary, Stack, Queue)",
      lesson: "3-mavzu",
      lessonBall: "(+200 ball)",
      text: [
        "ArrayList dan voz kechish",
        "Generic List sehrlari",
        "Dictionary: kalit-qiymat to‘plami",
        "Stack: LIFO sehrgarligi",
        "Queue: FIFO sehrgarligi",
        "LinkedList bilan ishlash",
        "HashSet va uning afzalliklari",
        "ObservableCollection sirli yangilanishi",
        "Generic metodlar qudrati",
        "Custom collection yaratish"
      ],
      describe: [
        "Non-generic vs generic to‘plamlar",
        "List<T> asosiy operatsiyalari",
        "Dictionary<TKey, TValue> tuzilishi",
        "Stack<T> push/pop amallari",
        "Queue<T> enQueue/deQueue amallari",
        "Double-linked ro‘yxatlar",
        "Takrorlanuvchi elementlardan qochish",
        "Data-binding uchun ObservableCollection",
        "Generic metod va sinf yozish",
        "O‘z to‘plamingizni yaratish bo‘yicha qo‘llanma"
      ]
    },
    {
      id: 4,
      title: "LINQ sehrli mexanizmi",
      question: "(Language Integrated Query: Select, Where, GroupBy)",
      lesson: "4-mavzu",
      lessonBall: "(+200 ball)",
      text: [
        "LINQ sintaksisi",
        "Query vs Method tarz",
        "Where filtri",
        "Select transformatsiyasi",
        "OrderBy va ThenBy",
        "GroupBy bilan guruhlash",
        "Aggregate sehrlari",
        "Join: to‘plamlarni bog‘lash",
        "Deferred vs Immediate Execution",
        "LINQ to XML/SQL"
      ],
      describe: [
        "LINQ so‘rovlarining asosiy tuzilishi",
        "Method chain usuli",
        "Shartli tanlash misollari",
        "Ob’ektni yangi shaklga o‘zgartirish",
        "Saralash funksiyalari",
        "Elementlarni guruhlash tamoyili",
        "Sum, Count, Min, Max va boshqalar",
        "Ichki va tashqi join misollari",
        "So‘rov bajarilish vaqti",
        "Ma’lumot manbalariga bog‘liq LINQ"
      ]
    },
    {
      id: 5,
      title: "Fayl sehrgarligi",
      question: "(File I/O: StreamReader, StreamWriter, FileStream)",
      lesson: "5-mavzu",
      lessonBall: "(+200 ball)",
      text: [
        "Fayl ochish va yopish",
        "StreamReader bilan o‘qish",
        "StreamWriter bilan yozish",
        "FileStream asoslari",
        "Binary vs Text rejimi",
        "FileInfo va DirectoryInfo",
        "Async I/O amaliyoti",
        "Path sinfi funksiyalari",
        "File permission sozlamalari",
        "Serialize/Deserialize faylga"
      ],
      describe: [
        "Fayl oqimini yaratish",
        "Matnni qatorma-qatorma o‘qish",
        "Matnni faylga yozish usullari",
        "Byt ko‘rinishida ma’lumot oqimi",
        "Matn va binar ajratish",
        "Fayl va papka haqida meta-ma’lumot",
        "Asinxron o‘qish/yozish misollari",
        "Yo‘l (path) manipulyatsiyasi",
        "Fayl huquqlarini boshqarish",
        "JSON/XML saqlash va yuklash"
      ]
    },
    {
      id: 6,
      title: "Istisnolar sehrlari",
      question: "(Exception Handling: try/catch/finally, custom exceptions)",
      lesson: "6-mavzu",
      lessonBall: "(+200 ball)",
      text: [
        "try…catch tuzilishi",
        "finally bloki",
        "Multiple catch bloklari",
        "throw operatori",
        "Custom Exception sinfi",
        "InnerException sirri",
        "Exception chaining",
        "Using bilan resource boshqarish",
        "Debug vs Release xatolar",
        "Log yozish amaliyoti"
      ],
      describe: [
        "Xatolarni tutish tamoyili",
        "Tozalash kodi uchun finally",
        "Turli exception turlari",
        "Xatoni qayta uzatish",
        "O‘z istisno sinfini yaratish",
        "Ichki xatolarni kuzatish",
        "Xatolar zanjiri yaratish",
        "IDisposable va using bloki",
        "Debug rejimida xato analiz",
        "Log framework bilan integratsiya"
      ]
    },
    {
      id: 7,
      title: "Delegatlar va hodisalar sehrgarligi",
      question: "(Delegates, Events, Lambda expressions)",
      lesson: "7-mavzu",
      lessonBall: "(+200 ball)",
      text: [
        "Delegate deklaratsiyasi",
        "Multicast delegate",
        "Anonymous methods",
        "Lambda expressions",
        "Event pattern",
        "EventHandler delegate",
        "Custom events",
        "Unsubscribe veryasi",
        "Action, Func, Predicate",
        "Callback mexanizmi"
      ],
      describe: [
        "Metod manzilini saqlash",
        "Bir nechta subscriber",
        "Nomlanmagan metod yozish",
        "Qisqa lambda sintaksisi",
        "Hodisalar tuzilishi",
        "Standard event delegate",
        "O‘z hodisingizni yaratish",
        "Xotira tozalash uchun unsubscribe",
        "Generic delegate turlari",
        "Asinxron callback amallari"
      ]
    },
    {
      id: 8,
      title: "Asinxron sehr",
      question: "(Async/Await, Task, Threading)",
      lesson: "8-mavzu",
      lessonBall: "(+200 ball)",
      text: [
        "Thread sinfi",
        "Task Parallel Library",
        "async/await sintaksisi",
        "Task<TResult> qudrati",
        "CancellationToken",
        "ConfigureAwait sirri",
        "Parallel.ForEach",
        "Deadlock dan saqlanish",
        "SynchronizationContext",
        "Data race va lock"
      ],
      describe: [
        "Yangi ip (thread) yaratish",
        "Task bilan parallel ishlash",
        "Asinxron metod yozish",
        "Natijali task yaratish",
        "Ishni bekor qilish mexanizmi",
        "Context almashish nazorati",
        "Parallel kolleksiyalar",
        "Deadlock misollari va yechim",
        "UI vs background context",
        "O‘zgaruvchilarni himoya qilish"
      ]
    },
    {
      id: 9,
      title: "GUI sehrgarligi",
      question: "(WinForms & WPF: Button, DataBinding, MVVM)",
      lesson: "9-mavzu",
      lessonBall: "(+200 ball)",
      text: [
        "WinForms asoslari",
        "WPF kirish",
        "XAML sintaksisi",
        "Control placement",
        "DataBinding tamoyili",
        "MVVM arxitekturasi",
        "ResourceDictionary",
        "Styles va Templates",
        "UserControl yaratish",
        "Animation in WPF"
      ],
      describe: [
        "Form va Control tuzilishi",
        "WPF ning afzalliklari",
        "XAML elementlari",
        "Grid, StackPanel ishlatish",
        "Binding Path va Mode",
        "ViewModel sinfi yozish",
        "Global uslublar saqlash",
        "Theme yaratish usullari",
        "Qayta foydalaniladigan komponent",
        "Oddiy animatsiya misollari"
      ]
    },
    {
      id: 10,
      title: "Web sehrgarligi",
      question: "(ASP.NET Core: MVC, Razor Pages, API)",
      lesson: "10-mavzu",
      lessonBall: "(+200 ball)",
      text: [
        "ASP.NET Core kirish",
        "MVC arxitekturasi",
        "Controller va Action",
        "Razor sintaksisi",
        "Model Binding",
        "Dependency Injection",
        "Web API yaratish",
        "Middleware sehrlari",
        "Authentication & Authorization",
        "Entity Framework Core"
      ],
      describe: [
        "ASP.NET Core loyihasi tuzilishi",
        "Model-View-Controller tamoyili",
        "URL routing mexanizmi",
        "Razor sahifa yozish",
        "Form ma’lumotlarini qabul qilish",
        "Service lifecycles",
        "RESTful API endpoint’lari",
        "So‘rov/yo‘riq zanjiri",
        "Token-asosli xavfsizlik",
        "Ma’lumotlar bazasi integratsiyasi"
      ]
    }
  ]
export const mockTopshiriq = [
    {
      id: 1,
      title: "Kod sehrgarining birinchi qadamlari",
      question: "(C# ga kirish: Sintaksis va asosiy tushunchalar)",
      lesson: "1-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Sehrli dunyo",
        "Sehrgarlar asosi",
        "Qudratli sehr",
        "Sehrli belgilarning qudrati",
        "Sehrgarlar tilini o‘rganish",
        "Birinchi amaliy sehr",
        "Sirli belgilar",
        "Sehrli mantralar",
        "Qudratli sehrlar",
        "Sehrli qalam"
      ],
      describe: [
        "C# dasturlash tili haqida umumiy tushuncha",
        "C# dasturining tuzilishi",
        "\"Hello, World!\" dasturini yaratish",
        "C# sintaksisining asosiy qoidalari",
        "C# dasturlash muhiti va IDE-lar",
        "O‘zgaruvchilar va ularning ahamiyati",
        "C# dagi identifikatorlar va rezerv so‘zlar",
        "Kod yozish bo‘yicha eng yaxshi tajribalar",
        "Sintaksis xatolarini aniqlash va tuzatish",
        "C# dasturlash tilida dasturiy ta’minot yaratish jarayoni"
      ]
    },
    {
      id: 2,
      title: "Obyektga yo‘naltirilgan sehr",
      question: "(OOP prinsiplari: sinflar, ob’ektlar, inkapsulyatsiya)",
      lesson: "2-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Sinflar va ob’ektlar",
        "Xususiyatlar va metodlar",
        "Inkapsulyatsiya sirlari",
        "Merosi sehrgari",
        "Polimorfizm qudrati",
        "Abstraksiya sirlarini ochish",
        "Konstruktor sehrlari",
        "Statik va dinamik ob’ektlar",
        "Interface sehrgarligi",
        "OOP amaliyotdagi sehr"
      ],
      describe: [
        "Sinflar va ob’ektlar tushunchasi",
        "Xususiyatlar (properties) va usullar (methods)",
        "Ma’lumotni himoyalash: private/protected/public",
        "Merosi (inheritance) tamoyili",
        "Polimorfizm turlari va misollar",
        "Abstraksiya va uning foydasi",
        "Konstruktor va destruktor ishlash tartibi",
        "Static a’zolar xususiyatlari",
        "Interface’lar va ularning roli",
        "OOP prinsiplari real loyihada"
      ]
    },
    {
      id: 3,
      title: "To‘plamlar sehrati",
      question: "(Collections va Generics: List, Dictionary, Stack, Queue)",
      lesson: "3-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "ArrayList dan voz kechish",
        "Generic List sehrlari",
        "Dictionary: kalit-qiymat to‘plami",
        "Stack: LIFO sehrgarligi",
        "Queue: FIFO sehrgarligi",
        "LinkedList bilan ishlash",
        "HashSet va uning afzalliklari",
        "ObservableCollection sirli yangilanishi",
        "Generic metodlar qudrati",
        "Custom collection yaratish"
      ],
      describe: [
        "Non-generic vs generic to‘plamlar",
        "List<T> asosiy operatsiyalari",
        "Dictionary<TKey, TValue> tuzilishi",
        "Stack<T> push/pop amallari",
        "Queue<T> enQueue/deQueue amallari",
        "Double-linked ro‘yxatlar",
        "Takrorlanuvchi elementlardan qochish",
        "Data-binding uchun ObservableCollection",
        "Generic metod va sinf yozish",
        "O‘z to‘plamingizni yaratish bo‘yicha qo‘llanma"
      ]
    },
    {
      id: 4,
      title: "LINQ sehrli mexanizmi",
      question: "(Language Integrated Query: Select, Where, GroupBy)",
      lesson: "4-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "LINQ sintaksisi",
        "Query vs Method tarz",
        "Where filtri",
        "Select transformatsiyasi",
        "OrderBy va ThenBy",
        "GroupBy bilan guruhlash",
        "Aggregate sehrlari",
        "Join: to‘plamlarni bog‘lash",
        "Deferred vs Immediate Execution",
        "LINQ to XML/SQL"
      ],
      describe: [
        "LINQ so‘rovlarining asosiy tuzilishi",
        "Method chain usuli",
        "Shartli tanlash misollari",
        "Ob’ektni yangi shaklga o‘zgartirish",
        "Saralash funksiyalari",
        "Elementlarni guruhlash tamoyili",
        "Sum, Count, Min, Max va boshqalar",
        "Ichki va tashqi join misollari",
        "So‘rov bajarilish vaqti",
        "Ma’lumot manbalariga bog‘liq LINQ"
      ]
    },
    {
      id: 5,
      title: "Fayl sehrgarligi",
      question: "(File I/O: StreamReader, StreamWriter, FileStream)",
      lesson: "5-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Fayl ochish va yopish",
        "StreamReader bilan o‘qish",
        "StreamWriter bilan yozish",
        "FileStream asoslari",
        "Binary vs Text rejimi",
        "FileInfo va DirectoryInfo",
        "Async I/O amaliyoti",
        "Path sinfi funksiyalari",
        "File permission sozlamalari",
        "Serialize/Deserialize faylga"
      ],
      describe: [
        "Fayl oqimini yaratish",
        "Matnni qatorma-qatorma o‘qish",
        "Matnni faylga yozish usullari",
        "Byt ko‘rinishida ma’lumot oqimi",
        "Matn va binar ajratish",
        "Fayl va papka haqida meta-ma’lumot",
        "Asinxron o‘qish/yozish misollari",
        "Yo‘l (path) manipulyatsiyasi",
        "Fayl huquqlarini boshqarish",
        "JSON/XML saqlash va yuklash"
      ]
    },
    {
      id: 6,
      title: "Istisnolar sehrlari",
      question: "(Exception Handling: try/catch/finally, custom exceptions)",
      lesson: "6-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "try…catch tuzilishi",
        "finally bloki",
        "Multiple catch bloklari",
        "throw operatori",
        "Custom Exception sinfi",
        "InnerException sirri",
        "Exception chaining",
        "Using bilan resource boshqarish",
        "Debug vs Release xatolar",
        "Log yozish amaliyoti"
      ],
      describe: [
        "Xatolarni tutish tamoyili",
        "Tozalash kodi uchun finally",
        "Turli exception turlari",
        "Xatoni qayta uzatish",
        "O‘z istisno sinfini yaratish",
        "Ichki xatolarni kuzatish",
        "Xatolar zanjiri yaratish",
        "IDisposable va using bloki",
        "Debug rejimida xato analiz",
        "Log framework bilan integratsiya"
      ]
    },
    {
      id: 7,
      title: "Delegatlar va hodisalar sehrgarligi",
      question: "(Delegates, Events, Lambda expressions)",
      lesson: "7-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Delegate deklaratsiyasi",
        "Multicast delegate",
        "Anonymous methods",
        "Lambda expressions",
        "Event pattern",
        "EventHandler delegate",
        "Custom events",
        "Unsubscribe veryasi",
        "Action, Func, Predicate",
        "Callback mexanizmi"
      ],
      describe: [
        "Metod manzilini saqlash",
        "Bir nechta subscriber",
        "Nomlanmagan metod yozish",
        "Qisqa lambda sintaksisi",
        "Hodisalar tuzilishi",
        "Standard event delegate",
        "O‘z hodisingizni yaratish",
        "Xotira tozalash uchun unsubscribe",
        "Generic delegate turlari",
        "Asinxron callback amallari"
      ]
    },
    {
      id: 8,
      title: "Asinxron sehr",
      question: "(Async/Await, Task, Threading)",
      lesson: "8-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Thread sinfi",
        "Task Parallel Library",
        "async/await sintaksisi",
        "Task<TResult> qudrati",
        "CancellationToken",
        "ConfigureAwait sirri",
        "Parallel.ForEach",
        "Deadlock dan saqlanish",
        "SynchronizationContext",
        "Data race va lock"
      ],
      describe: [
        "Yangi ip (thread) yaratish",
        "Task bilan parallel ishlash",
        "Asinxron metod yozish",
        "Natijali task yaratish",
        "Ishni bekor qilish mexanizmi",
        "Context almashish nazorati",
        "Parallel kolleksiyalar",
        "Deadlock misollari va yechim",
        "UI vs background context",
        "O‘zgaruvchilarni himoya qilish"
      ]
    },
    {
      id: 9,
      title: "GUI sehrgarligi",
      question: "(WinForms & WPF: Button, DataBinding, MVVM)",
      lesson: "9-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "WinForms asoslari",
        "WPF kirish",
        "XAML sintaksisi",
        "Control placement",
        "DataBinding tamoyili",
        "MVVM arxitekturasi",
        "ResourceDictionary",
        "Styles va Templates",
        "UserControl yaratish",
        "Animation in WPF"
      ],
      describe: [
        "Form va Control tuzilishi",
        "WPF ning afzalliklari",
        "XAML elementlari",
        "Grid, StackPanel ishlatish",
        "Binding Path va Mode",
        "ViewModel sinfi yozish",
        "Global uslublar saqlash",
        "Theme yaratish usullari",
        "Qayta foydalaniladigan komponent",
        "Oddiy animatsiya misollari"
      ]
    },
    {
      id: 10,
      title: "Web sehrgarligi",
      question: "(ASP.NET Core: MVC, Razor Pages, API)",
      lesson: "10-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "ASP.NET Core kirish",
        "MVC arxitekturasi",
        "Controller va Action",
        "Razor sintaksisi",
        "Model Binding",
        "Dependency Injection",
        "Web API yaratish",
        "Middleware sehrlari",
        "Authentication & Authorization",
        "Entity Framework Core"
      ],
      describe: [
        "ASP.NET Core loyihasi tuzilishi",
        "Model-View-Controller tamoyili",
        "URL routing mexanizmi",
        "Razor sahifa yozish",
        "Form ma’lumotlarini qabul qilish",
        "Service lifecycles",
        "RESTful API endpoint’lari",
        "So‘rov/yo‘riq zanjiri",
        "Token-asosli xavfsizlik",
        "Ma’lumotlar bazasi integratsiyasi"
      ]
    },
    {
      id: 11,
      title: "Kod sehrgarining birinchi qadamlari",
      question: "(C# ga kirish: Sintaksis va asosiy tushunchalar)",
      lesson: "11-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Sehrli dunyo",
        "Sehrgarlar asosi",
        "Qudratli sehr",
        "Sehrli belgilarning qudrati",
        "Sehrgarlar tilini o‘rganish",
        "Birinchi amaliy sehr",
        "Sirli belgilar",
        "Sehrli mantralar",
        "Qudratli sehrlar",
        "Sehrli qalam"
      ],
      describe: [
        "C# dasturlash tili haqida umumiy tushuncha",
        "C# dasturining tuzilishi",
        "\"Hello, World!\" dasturini yaratish",
        "C# sintaksisining asosiy qoidalari",
        "C# dasturlash muhiti va IDE-lar",
        "O‘zgaruvchilar va ularning ahamiyati",
        "C# dagi identifikatorlar va rezerv so‘zlar",
        "Kod yozish bo‘yicha eng yaxshi tajribalar",
        "Sintaksis xatolarini aniqlash va tuzatish",
        "C# dasturlash tilida dasturiy ta’minot yaratish jarayoni"
      ]
    },
    {
      id: 12,
      title: "Obyektga yo‘naltirilgan sehr",
      question: "(OOP prinsiplari: sinflar, ob’ektlar, inkapsulyatsiya)",
      lesson: "12-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Sinflar va ob’ektlar",
        "Xususiyatlar va metodlar",
        "Inkapsulyatsiya sirlari",
        "Merosi sehrgari",
        "Polimorfizm qudrati",
        "Abstraksiya sirlarini ochish",
        "Konstruktor sehrlari",
        "Statik va dinamik ob’ektlar",
        "Interface sehrgarligi",
        "OOP amaliyotdagi sehr"
      ],
      describe: [
        "Sinflar va ob’ektlar tushunchasi",
        "Xususiyatlar (properties) va usullar (methods)",
        "Ma’lumotni himoyalash: private/protected/public",
        "Merosi (inheritance) tamoyili",
        "Polimorfizm turlari va misollar",
        "Abstraksiya va uning foydasi",
        "Konstruktor va destruktor ishlash tartibi",
        "Static a’zolar xususiyatlari",
        "Interface’lar va ularning roli",
        "OOP prinsiplari real loyihada"
      ]
    },
    {
      id: 13,
      title: "To‘plamlar sehrati",
      question: "(Collections va Generics: List, Dictionary, Stack, Queue)",
      lesson: "13-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "ArrayList dan voz kechish",
        "Generic List sehrlari",
        "Dictionary: kalit-qiymat to‘plami",
        "Stack: LIFO sehrgarligi",
        "Queue: FIFO sehrgarligi",
        "LinkedList bilan ishlash",
        "HashSet va uning afzalliklari",
        "ObservableCollection sirli yangilanishi",
        "Generic metodlar qudrati",
        "Custom collection yaratish"
      ],
      describe: [
        "Non-generic vs generic to‘plamlar",
        "List<T> asosiy operatsiyalari",
        "Dictionary<TKey, TValue> tuzilishi",
        "Stack<T> push/pop amallari",
        "Queue<T> enQueue/deQueue amallari",
        "Double-linked ro‘yxatlar",
        "Takrorlanuvchi elementlardan qochish",
        "Data-binding uchun ObservableCollection",
        "Generic metod va sinf yozish",
        "O‘z to‘plamingizni yaratish bo‘yicha qo‘llanma"
      ]
    },
    {
      id: 14,
      title: "LINQ sehrli mexanizmi",
      question: "(Language Integrated Query: Select, Where, GroupBy)",
      lesson: "14-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "LINQ sintaksisi",
        "Query vs Method tarz",
        "Where filtri",
        "Select transformatsiyasi",
        "OrderBy va ThenBy",
        "GroupBy bilan guruhlash",
        "Aggregate sehrlari",
        "Join: to‘plamlarni bog‘lash",
        "Deferred vs Immediate Execution",
        "LINQ to XML/SQL"
      ],
      describe: [
        "LINQ so‘rovlarining asosiy tuzilishi",
        "Method chain usuli",
        "Shartli tanlash misollari",
        "Ob’ektni yangi shaklga o‘zgartirish",
        "Saralash funksiyalari",
        "Elementlarni guruhlash tamoyili",
        "Sum, Count, Min, Max va boshqalar",
        "Ichki va tashqi join misollari",
        "So‘rov bajarilish vaqti",
        "Ma’lumot manbalariga bog‘liq LINQ"
      ]
    },
    {
      id: 15,
      title: "Fayl sehrgarligi",
      question: "(File I/O: StreamReader, StreamWriter, FileStream)",
      lesson: "15-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Fayl ochish va yopish",
        "StreamReader bilan o‘qish",
        "StreamWriter bilan yozish",
        "FileStream asoslari",
        "Binary vs Text rejimi",
        "FileInfo va DirectoryInfo",
        "Async I/O amaliyoti",
        "Path sinfi funksiyalari",
        "File permission sozlamalari",
        "Serialize/Deserialize faylga"
      ],
      describe: [
        "Fayl oqimini yaratish",
        "Matnni qatorma-qatorma o‘qish",
        "Matnni faylga yozish usullari",
        "Byt ko‘rinishida ma’lumot oqimi",
        "Matn va binar ajratish",
        "Fayl va papka haqida meta-ma’lumot",
        "Asinxron o‘qish/yozish misollari",
        "Yo‘l (path) manipulyatsiyasi",
        "Fayl huquqlarini boshqarish",
        "JSON/XML saqlash va yuklash"
      ]
    },
    {
      id: 16,
      title: "Istisnolar sehrlari",
      question: "(Exception Handling: try/catch/finally, custom exceptions)",
      lesson: "16-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "try…catch tuzilishi",
        "finally bloki",
        "Multiple catch bloklari",
        "throw operatori",
        "Custom Exception sinfi",
        "InnerException sirri",
        "Exception chaining",
        "Using bilan resource boshqarish",
        "Debug vs Release xatolar",
        "Log yozish amaliyoti"
      ],
      describe: [
        "Xatolarni tutish tamoyili",
        "Tozalash kodi uchun finally",
        "Turli exception turlari",
        "Xatoni qayta uzatish",
        "O‘z istisno sinfini yaratish",
        "Ichki xatolarni kuzatish",
        "Xatolar zanjiri yaratish",
        "IDisposable va using bloki",
        "Debug rejimida xato analiz",
        "Log framework bilan integratsiya"
      ]
    },
    {
      id: 17,
      title: "Delegatlar va hodisalar sehrgarligi",
      question: "(Delegates, Events, Lambda expressions)",
      lesson: "17-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Delegate deklaratsiyasi",
        "Multicast delegate",
        "Anonymous methods",
        "Lambda expressions",
        "Event pattern",
        "EventHandler delegate",
        "Custom events",
        "Unsubscribe veryasi",
        "Action, Func, Predicate",
        "Callback mexanizmi"
      ],
      describe: [
        "Metod manzilini saqlash",
        "Bir nechta subscriber",
        "Nomlanmagan metod yozish",
        "Qisqa lambda sintaksisi",
        "Hodisalar tuzilishi",
        "Standard event delegate",
        "O‘z hodisingizni yaratish",
        "Xotira tozalash uchun unsubscribe",
        "Generic delegate turlari",
        "Asinxron callback amallari"
      ]
    },
    {
      id: 18,
      title: "Asinxron sehr",
      question: "(Async/Await, Task, Threading)",
      lesson: "18-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Thread sinfi",
        "Task Parallel Library",
        "async/await sintaksisi",
        "Task<TResult> qudrati",
        "CancellationToken",
        "ConfigureAwait sirri",
        "Parallel.ForEach",
        "Deadlock dan saqlanish",
        "SynchronizationContext",
        "Data race va lock"
      ],
      describe: [
        "Yangi ip (thread) yaratish",
        "Task bilan parallel ishlash",
        "Asinxron metod yozish",
        "Natijali task yaratish",
        "Ishni bekor qilish mexanizmi",
        "Context almashish nazorati",
        "Parallel kolleksiyalar",
        "Deadlock misollari va yechim",
        "UI vs background context",
        "O‘zgaruvchilarni himoya qilish"
      ]
    },
    {
      id: 19,
      title: "GUI sehrgarligi",
      question: "(WinForms & WPF: Button, DataBinding, MVVM)",
      lesson: "19-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "WinForms asoslari",
        "WPF kirish",
        "XAML sintaksisi",
        "Control placement",
        "DataBinding tamoyili",
        "MVVM arxitekturasi",
        "ResourceDictionary",
        "Styles va Templates",
        "UserControl yaratish",
        "Animation in WPF"
      ],
      describe: [
        "Form va Control tuzilishi",
        "WPF ning afzalliklari",
        "XAML elementlari",
        "Grid, StackPanel ishlatish",
        "Binding Path va Mode",
        "ViewModel sinfi yozish",
        "Global uslublar saqlash",
        "Theme yaratish usullari",
        "Qayta foydalaniladigan komponent",
        "Oddiy animatsiya misollari"
      ]
    },
    {
      id: 20,
      title: "Web sehrgarligi",
      question: "(ASP.NET Core: MVC, Razor Pages, API)",
      lesson: "20-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "ASP.NET Core kirish",
        "MVC arxitekturasi",
        "Controller va Action",
        "Razor sintaksisi",
        "Model Binding",
        "Dependency Injection",
        "Web API yaratish",
        "Middleware sehrlari",
        "Authentication & Authorization",
        "Entity Framework Core"
      ],
      describe: [
        "ASP.NET Core loyihasi tuzilishi",
        "Model-View-Controller tamoyili",
        "URL routing mexanizmi",
        "Razor sahifa yozish",
        "Form ma’lumotlarini qabul qilish",
        "Service lifecycles",
        "RESTful API endpoint’lari",
        "So‘rov/yo‘riq zanjiri",
        "Token-asosli xavfsizlik",
        "Ma’lumotlar bazasi integratsiyasi"
      ]
    },
    {
      id: 21,
      title: "Kod sehrgarining birinchi qadamlari",
      question: "(C# ga kirish: Sintaksis va asosiy tushunchalar)",
      lesson: "21-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Sehrli dunyo",
        "Sehrgarlar asosi",
        "Qudratli sehr",
        "Sehrli belgilarning qudrati",
        "Sehrgarlar tilini o‘rganish",
        "Birinchi amaliy sehr",
        "Sirli belgilar",
        "Sehrli mantralar",
        "Qudratli sehrlar",
        "Sehrli qalam"
      ],
      describe: [
        "C# dasturlash tili haqida umumiy tushuncha",
        "C# dasturining tuzilishi",
        "\"Hello, World!\" dasturini yaratish",
        "C# sintaksisining asosiy qoidalari",
        "C# dasturlash muhiti va IDE-lar",
        "O‘zgaruvchilar va ularning ahamiyati",
        "C# dagi identifikatorlar va rezerv so‘zlar",
        "Kod yozish bo‘yicha eng yaxshi tajribalar",
        "Sintaksis xatolarini aniqlash va tuzatish",
        "C# dasturlash tilida dasturiy ta’minot yaratish jarayoni"
      ]
    },
    {
      id: 22,
      title: "Obyektga yo‘naltirilgan sehr",
      question: "(OOP prinsiplari: sinflar, ob’ektlar, inkapsulyatsiya)",
      lesson: "22-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Sinflar va ob’ektlar",
        "Xususiyatlar va metodlar",
        "Inkapsulyatsiya sirlari",
        "Merosi sehrgari",
        "Polimorfizm qudrati",
        "Abstraksiya sirlarini ochish",
        "Konstruktor sehrlari",
        "Statik va dinamik ob’ektlar",
        "Interface sehrgarligi",
        "OOP amaliyotdagi sehr"
      ],
      describe: [
        "Sinflar va ob’ektlar tushunchasi",
        "Xususiyatlar (properties) va usullar (methods)",
        "Ma’lumotni himoyalash: private/protected/public",
        "Merosi (inheritance) tamoyili",
        "Polimorfizm turlari va misollar",
        "Abstraksiya va uning foydasi",
        "Konstruktor va destruktor ishlash tartibi",
        "Static a’zolar xususiyatlari",
        "Interface’lar va ularning roli",
        "OOP prinsiplari real loyihada"
      ]
    },
    {
      id: 23,
      title: "To‘plamlar sehrati",
      question: "(Collections va Generics: List, Dictionary, Stack, Queue)",
      lesson: "23-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "ArrayList dan voz kechish",
        "Generic List sehrlari",
        "Dictionary: kalit-qiymat to‘plami",
        "Stack: LIFO sehrgarligi",
        "Queue: FIFO sehrgarligi",
        "LinkedList bilan ishlash",
        "HashSet va uning afzalliklari",
        "ObservableCollection sirli yangilanishi",
        "Generic metodlar qudrati",
        "Custom collection yaratish"
      ],
      describe: [
        "Non-generic vs generic to‘plamlar",
        "List<T> asosiy operatsiyalari",
        "Dictionary<TKey, TValue> tuzilishi",
        "Stack<T> push/pop amallari",
        "Queue<T> enQueue/deQueue amallari",
        "Double-linked ro‘yxatlar",
        "Takrorlanuvchi elementlardan qochish",
        "Data-binding uchun ObservableCollection",
        "Generic metod va sinf yozish",
        "O‘z to‘plamingizni yaratish bo‘yicha qo‘llanma"
      ]
    },
    {
      id: 24,
      title: "LINQ sehrli mexanizmi",
      question: "(Language Integrated Query: Select, Where, GroupBy)",
      lesson: "24-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "LINQ sintaksisi",
        "Query vs Method tarz",
        "Where filtri",
        "Select transformatsiyasi",
        "OrderBy va ThenBy",
        "GroupBy bilan guruhlash",
        "Aggregate sehrlari",
        "Join: to‘plamlarni bog‘lash",
        "Deferred vs Immediate Execution",
        "LINQ to XML/SQL"
      ],
      describe: [
        "LINQ so‘rovlarining asosiy tuzilishi",
        "Method chain usuli",
        "Shartli tanlash misollari",
        "Ob’ektni yangi shaklga o‘zgartirish",
        "Saralash funksiyalari",
        "Elementlarni guruhlash tamoyili",
        "Sum, Count, Min, Max va boshqalar",
        "Ichki va tashqi join misollari",
        "So‘rov bajarilish vaqti",
        "Ma’lumot manbalariga bog‘liq LINQ"
      ]
    },
    {
      id: 25,
      title: "Fayl sehrgarligi",
      question: "(File I/O: StreamReader, StreamWriter, FileStream)",
      lesson: "25-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Fayl ochish va yopish",
        "StreamReader bilan o‘qish",
        "StreamWriter bilan yozish",
        "FileStream asoslari",
        "Binary vs Text rejimi",
        "FileInfo va DirectoryInfo",
        "Async I/O amaliyoti",
        "Path sinfi funksiyalari",
        "File permission sozlamalari",
        "Serialize/Deserialize faylga"
      ],
      describe: [
        "Fayl oqimini yaratish",
        "Matnni qatorma-qatorma o‘qish",
        "Matnni faylga yozish usullari",
        "Byt ko‘rinishida ma’lumot oqimi",
        "Matn va binar ajratish",
        "Fayl va papka haqida meta-ma’lumot",
        "Asinxron o‘qish/yozish misollari",
        "Yo‘l (path) manipulyatsiyasi",
        "Fayl huquqlarini boshqarish",
        "JSON/XML saqlash va yuklash"
      ]
    },
    {
      id: 26,
      title: "Istisnolar sehrlari",
      question: "(Exception Handling: try/catch/finally, custom exceptions)",
      lesson: "26-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "try…catch tuzilishi",
        "finally bloki",
        "Multiple catch bloklari",
        "throw operatori",
        "Custom Exception sinfi",
        "InnerException sirri",
        "Exception chaining",
        "Using bilan resource boshqarish",
        "Debug vs Release xatolar",
        "Log yozish amaliyoti"
      ],
      describe: [
        "Xatolarni tutish tamoyili",
        "Tozalash kodi uchun finally",
        "Turli exception turlari",
        "Xatoni qayta uzatish",
        "O‘z istisno sinfini yaratish",
        "Ichki xatolarni kuzatish",
        "Xatolar zanjiri yaratish",
        "IDisposable va using bloki",
        "Debug rejimida xato analiz",
        "Log framework bilan integratsiya"
      ]
    },
    {
      id: 27,
      title: "Delegatlar va hodisalar sehrgarligi",
      question: "(Delegates, Events, Lambda expressions)",
      lesson: "27-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Delegate deklaratsiyasi",
        "Multicast delegate",
        "Anonymous methods",
        "Lambda expressions",
        "Event pattern",
        "EventHandler delegate",
        "Custom events",
        "Unsubscribe veryasi",
        "Action, Func, Predicate",
        "Callback mexanizmi"
      ],
      describe: [
        "Metod manzilini saqlash",
        "Bir nechta subscriber",
        "Nomlanmagan metod yozish",
        "Qisqa lambda sintaksisi",
        "Hodisalar tuzilishi",
        "Standard event delegate",
        "O‘z hodisingizni yaratish",
        "Xotira tozalash uchun unsubscribe",
        "Generic delegate turlari",
        "Asinxron callback amallari"
      ]
    },
    {
      id: 28,
      title: "Asinxron sehr",
      question: "(Async/Await, Task, Threading)",
      lesson: "28-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Thread sinfi",
        "Task Parallel Library",
        "async/await sintaksisi",
        "Task<TResult> qudrati",
        "CancellationToken",
        "ConfigureAwait sirri",
        "Parallel.ForEach",
        "Deadlock dan saqlanish",
        "SynchronizationContext",
        "Data race va lock"
      ],
      describe: [
        "Yangi ip (thread) yaratish",
        "Task bilan parallel ishlash",
        "Asinxron metod yozish",
        "Natijali task yaratish",
        "Ishni bekor qilish mexanizmi",
        "Context almashish nazorati",
        "Parallel kolleksiyalar",
        "Deadlock misollari va yechim",
        "UI vs background context",
        "O‘zgaruvchilarni himoya qilish"
      ]
    },
    {
      id: 29,
      title: "GUI sehrgarligi",
      question: "(WinForms & WPF: Button, DataBinding, MVVM)",
      lesson: "29-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "WinForms asoslari",
        "WPF kirish",
        "XAML sintaksisi",
        "Control placement",
        "DataBinding tamoyili",
        "MVVM arxitekturasi",
        "ResourceDictionary",
        "Styles va Templates",
        "UserControl yaratish",
        "Animation in WPF"
      ],
      describe: [
        "Form va Control tuzilishi",
        "WPF ning afzalliklari",
        "XAML elementlari",
        "Grid, StackPanel ishlatish",
        "Binding Path va Mode",
        "ViewModel sinfi yozish",
        "Global uslublar saqlash",
        "Theme yaratish usullari",
        "Qayta foydalaniladigan komponent",
        "Oddiy animatsiya misollari"
      ]
    },
    {
      id: 30,
      title: "Web sehrgarligi",
      question: "(ASP.NET Core: MVC, Razor Pages, API)",
      lesson: "30-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "ASP.NET Core kirish",
        "MVC arxitekturasi",
        "Controller va Action",
        "Razor sintaksisi",
        "Model Binding",
        "Dependency Injection",
        "Web API yaratish",
        "Middleware sehrlari",
        "Authentication & Authorization",
        "Entity Framework Core"
      ],
      describe: [
        "ASP.NET Core loyihasi tuzilishi",
        "Model-View-Controller tamoyili",
        "URL routing mexanizmi",
        "Razor sahifa yozish",
        "Form ma’lumotlarini qabul qilish",
        "Service lifecycles",
        "RESTful API endpoint’lari",
        "So‘rov/yo‘riq zanjiri",
        "Token-asosli xavfsizlik",
        "Ma’lumotlar bazasi integratsiyasi"
      ]
    },
    {
      id: 31,
      title: "Kod sehrgarining birinchi qadamlari",
      question: "(C# ga kirish: Sintaksis va asosiy tushunchalar)",
      lesson: "31-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Sehrli dunyo",
        "Sehrgarlar asosi",
        "Qudratli sehr",
        "Sehrli belgilarning qudrati",
        "Sehrgarlar tilini o‘rganish",
        "Birinchi amaliy sehr",
        "Sirli belgilar",
        "Sehrli mantralar",
        "Qudratli sehrlar",
        "Sehrli qalam"
      ],
      describe: [
        "C# dasturlash tili haqida umumiy tushuncha",
        "C# dasturining tuzilishi",
        "\"Hello, World!\" dasturini yaratish",
        "C# sintaksisining asosiy qoidalari",
        "C# dasturlash muhiti va IDE-lar",
        "O‘zgaruvchilar va ularning ahamiyati",
        "C# dagi identifikatorlar va rezerv so‘zlar",
        "Kod yozish bo‘yicha eng yaxshi tajribalar",
        "Sintaksis xatolarini aniqlash va tuzatish",
        "C# dasturlash tilida dasturiy ta’minot yaratish jarayoni"
      ]
    },
    {
      id: 32,
      title: "Obyektga yo‘naltirilgan sehr",
      question: "(OOP prinsiplari: sinflar, ob’ektlar, inkapsulyatsiya)",
      lesson: "32-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Sinflar va ob’ektlar",
        "Xususiyatlar va metodlar",
        "Inkapsulyatsiya sirlari",
        "Merosi sehrgari",
        "Polimorfizm qudrati",
        "Abstraksiya sirlarini ochish",
        "Konstruktor sehrlari",
        "Statik va dinamik ob’ektlar",
        "Interface sehrgarligi",
        "OOP amaliyotdagi sehr"
      ],
      describe: [
        "Sinflar va ob’ektlar tushunchasi",
        "Xususiyatlar (properties) va usullar (methods)",
        "Ma’lumotni himoyalash: private/protected/public",
        "Merosi (inheritance) tamoyili",
        "Polimorfizm turlari va misollar",
        "Abstraksiya va uning foydasi",
        "Konstruktor va destruktor ishlash tartibi",
        "Static a’zolar xususiyatlari",
        "Interface’lar va ularning roli",
        "OOP prinsiplari real loyihada"
      ]
    },
    {
      id: 33,
      title: "To‘plamlar sehrati",
      question: "(Collections va Generics: List, Dictionary, Stack, Queue)",
      lesson: "33-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "ArrayList dan voz kechish",
        "Generic List sehrlari",
        "Dictionary: kalit-qiymat to‘plami",
        "Stack: LIFO sehrgarligi",
        "Queue: FIFO sehrgarligi",
        "LinkedList bilan ishlash",
        "HashSet va uning afzalliklari",
        "ObservableCollection sirli yangilanishi",
        "Generic metodlar qudrati",
        "Custom collection yaratish"
      ],
      describe: [
        "Non-generic vs generic to‘plamlar",
        "List<T> asosiy operatsiyalari",
        "Dictionary<TKey, TValue> tuzilishi",
        "Stack<T> push/pop amallari",
        "Queue<T> enQueue/deQueue amallari",
        "Double-linked ro‘yxatlar",
        "Takrorlanuvchi elementlardan qochish",
        "Data-binding uchun ObservableCollection",
        "Generic metod va sinf yozish",
        "O‘z to‘plamingizni yaratish bo‘yicha qo‘llanma"
      ]
    },
    {
      id: 34,
      title: "LINQ sehrli mexanizmi",
      question: "(Language Integrated Query: Select, Where, GroupBy)",
      lesson: "34-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "LINQ sintaksisi",
        "Query vs Method tarz",
        "Where filtri",
        "Select transformatsiyasi",
        "OrderBy va ThenBy",
        "GroupBy bilan guruhlash",
        "Aggregate sehrlari",
        "Join: to‘plamlarni bog‘lash",
        "Deferred vs Immediate Execution",
        "LINQ to XML/SQL"
      ],
      describe: [
        "LINQ so‘rovlarining asosiy tuzilishi",
        "Method chain usuli",
        "Shartli tanlash misollari",
        "Ob’ektni yangi shaklga o‘zgartirish",
        "Saralash funksiyalari",
        "Elementlarni guruhlash tamoyili",
        "Sum, Count, Min, Max va boshqalar",
        "Ichki va tashqi join misollari",
        "So‘rov bajarilish vaqti",
        "Ma’lumot manbalariga bog‘liq LINQ"
      ]
    },
    {
      id: 35,
      title: "Fayl sehrgarligi",
      question: "(File I/O: StreamReader, StreamWriter, FileStream)",
      lesson: "35-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Fayl ochish va yopish",
        "StreamReader bilan o‘qish",
        "StreamWriter bilan yozish",
        "FileStream asoslari",
        "Binary vs Text rejimi",
        "FileInfo va DirectoryInfo",
        "Async I/O amaliyoti",
        "Path sinfi funksiyalari",
        "File permission sozlamalari",
        "Serialize/Deserialize faylga"
      ],
      describe: [
        "Fayl oqimini yaratish",
        "Matnni qatorma-qatorma o‘qish",
        "Matnni faylga yozish usullari",
        "Byt ko‘rinishida ma’lumot oqimi",
        "Matn va binar ajratish",
        "Fayl va papka haqida meta-ma’lumot",
        "Asinxron o‘qish/yozish misollari",
        "Yo‘l (path) manipulyatsiyasi",
        "Fayl huquqlarini boshqarish",
        "JSON/XML saqlash va yuklash"
      ]
    },
    {
      id: 36,
      title: "Istisnolar sehrlari",
      question: "(Exception Handling: try/catch/finally, custom exceptions)",
      lesson: "36-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "try…catch tuzilishi",
        "finally bloki",
        "Multiple catch bloklari",
        "throw operatori",
        "Custom Exception sinfi",
        "InnerException sirri",
        "Exception chaining",
        "Using bilan resource boshqarish",
        "Debug vs Release xatolar",
        "Log yozish amaliyoti"
      ],
      describe: [
        "Xatolarni tutish tamoyili",
        "Tozalash kodi uchun finally",
        "Turli exception turlari",
        "Xatoni qayta uzatish",
        "O‘z istisno sinfini yaratish",
        "Ichki xatolarni kuzatish",
        "Xatolar zanjiri yaratish",
        "IDisposable va using bloki",
        "Debug rejimida xato analiz",
        "Log framework bilan integratsiya"
      ]
    },
    {
      id: 37,
      title: "Delegatlar va hodisalar sehrgarligi",
      question: "(Delegates, Events, Lambda expressions)",
      lesson: "37-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Delegate deklaratsiyasi",
        "Multicast delegate",
        "Anonymous methods",
        "Lambda expressions",
        "Event pattern",
        "EventHandler delegate",
        "Custom events",
        "Unsubscribe veryasi",
        "Action, Func, Predicate",
        "Callback mexanizmi"
      ],
      describe: [
        "Metod manzilini saqlash",
        "Bir nechta subscriber",
        "Nomlanmagan metod yozish",
        "Qisqa lambda sintaksisi",
        "Hodisalar tuzilishi",
        "Standard event delegate",
        "O‘z hodisingizni yaratish",
        "Xotira tozalash uchun unsubscribe",
        "Generic delegate turlari",
        "Asinxron callback amallari"
      ]
    },
    {
      id: 38,
      title: "Asinxron sehr",
      question: "(Async/Await, Task, Threading)",
      lesson: "38-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "Thread sinfi",
        "Task Parallel Library",
        "async/await sintaksisi",
        "Task<TResult> qudrati",
        "CancellationToken",
        "ConfigureAwait sirri",
        "Parallel.ForEach",
        "Deadlock dan saqlanish",
        "SynchronizationContext",
        "Data race va lock"
      ],
      describe: [
        "Yangi ip (thread) yaratish",
        "Task bilan parallel ishlash",
        "Asinxron metod yozish",
        "Natijali task yaratish",
        "Ishni bekor qilish mexanizmi",
        "Context almashish nazorati",
        "Parallel kolleksiyalar",
        "Deadlock misollari va yechim",
        "UI vs background context",
        "O‘zgaruvchilarni himoya qilish"
      ]
    },
    {
      id: 39,
      title: "GUI sehrgarligi",
      question: "(WinForms & WPF: Button, DataBinding, MVVM)",
      lesson: "39-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "WinForms asoslari",
        "WPF kirish",
        "XAML sintaksisi",
        "Control placement",
        "DataBinding tamoyili",
        "MVVM arxitekturasi",
        "ResourceDictionary",
        "Styles va Templates",
        "UserControl yaratish",
        "Animation in WPF"
      ],
      describe: [
        "Form va Control tuzilishi",
        "WPF ning afzalliklari",
        "XAML elementlari",
        "Grid, StackPanel ishlatish",
        "Binding Path va Mode",
        "ViewModel sinfi yozish",
        "Global uslublar saqlash",
        "Theme yaratish usullari",
        "Qayta foydalaniladigan komponent",
        "Oddiy animatsiya misollari"
      ]
    },
    {
      id: 40,
      title: "Web sehrgarligi",
      question: "(ASP.NET Core: MVC, Razor Pages, API)",
      lesson: "40-topshiriq",
      lessonBall: "(+oddiy etik, 18%)",
      text: [
        "ASP.NET Core kirish",
        "MVC arxitekturasi",
        "Controller va Action",
        "Razor sintaksisi",
        "Model Binding",
        "Dependency Injection",
        "Web API yaratish",
        "Middleware sehrlari",
        "Authentication & Authorization",
        "Entity Framework Core"
      ],
      describe: [
        "ASP.NET Core loyihasi tuzilishi",
        "Model-View-Controller tamoyili",
        "URL routing mexanizmi",
        "Razor sahifa yozish",
        "Form ma’lumotlarini qabul qilish",
        "Service lifecycles",
        "RESTful API endpoint’lari",
        "So‘rov/yo‘riq zanjiri",
        "Token-asosli xavfsizlik",
        "Ma’lumotlar bazasi integratsiyasi"
      ]
    },
  ]


  export const ratings=[
    {
      id: 1,
      photo:rank1,
      title:"Rekrut",
      rank:"0 - 1,500 ball",
    },
    {
      id: 2,
      photo:rank2,
      title:"Straj (Qo‘riqchi)",
      rank:"1,500 - 3,000 ball",
    },
    {
      id: 3,
      photo:rank3,
      title:"Kiborg (Kiber jangchi)",
      rank:"3,000 - 4,500 ball",
    },
    {
      id: 4,
      photo:rank4,
      title:"Snayper",
      rank:"4,500 - 6,000 ball",
    },
    {
      id: 5,
      photo:rank5,
      title:"Kapitan",
      rank:"6,000 - 7,500 ball",
    },
    {
      id: 6,
      photo:rank6,
      title:"Komandor",
      rank:"7,500 - 8,500 ball",
    },
    {
      id: 7,
      photo:rank7,
      title:"Elita",
      rank:"8,500 - 9,500 ball",
    },
    {
      id: 8,
      photo:rank8,
      title:"Titan",
      rank:"9,500 - 10,000 ball",
    },

  ]
 
  
  export const aslaxar1=[
    {
      id:1,
      photo: qilich1,
      name:"Odiy qilich",
      title:"Duelda yutganda reyting ball +10% Yengil va tezkor zarba",
    },
    {
      id:2,
      photo: qilich2,
      name:"Po’lat qilich",
      title:"Duelda yutganda reyting ball +10% Yengil va kuchli hujum",
    },
    {
      id:3,
      photo: qilich3,
      name:"Afsonaviy qilich",
      title:"Duelda yutganda reyting ball +15% Cheksiz jasorat va kuch",
    },
    {
      id:4,
      photo: dubulga1,
      name:"Oddiy dubulg‘a",
      title:"Himoya kuchi +5% Minimal himoya",
    },
    {
      id: 5,
      photo: dubulga2,
      name:"Ritsar dubulg‘asi",
      title:"Himoya kuchi +10% Hujum va himoyani muvozanatlaydi",
    },
    {
      id:6,
      photo: dubulga3,
      name:"Titan dubulg‘asi",
      title:"Himoya kuchi +15% Maksimal jangovar tayyorgarlik",
    },
    {
      id:7,
      photo: nayza1,
      name:"Yengil nayza",
      title:"Reyting oshirish +10% Uzoqdan hujum qilish imkoniyati",
    },
    {
      id:8,
      photo: nayza2,
      name:"Og‘ir nayza",
      title:"Reyting oshirish +15% Qattiq zarba bilan hujum",
    },
    {
      id:9,
      photo: nayza3,
      name:"Imperial nayza",
      title:"Reyting oshirish +20% O‘ta kuchli va aniq hujum",
    },
    {
      id:10,
      photo: etik1,
      name:"Oddiy etik",
      title:"Reyting oshish tezligi +4% Tez harakatlanish",
    },
    {
      id:11,
      photo: etik2,
      name:"Jangovar etik",
      title:"Reyting oshish tezligi +7% Bardavom va chaqqonlik",
    },
    {
      id:12,
      photo: etik3,
      name:"Qirol etigi",
      title:"Reyting oshish tezligi +10% Tezlik va chidamlilik mukammalligi",
    },
  ]
  export const aslaxar2=[
    {
      id:1,
      photo: qalqon1,
      name:"Yog‘och qalqon",
      title:"Duelda yutqazganda yo‘qotish -5% Yengil himoya",
    },
    {
      id:2,
      photo: qalqon2,
      name:"Temir qalqon",
      title:"Duelda yutqazganda yo‘qotish -10% Mustahkam himoya",
    },
    {
      id:3,
      photo: qalqon3,
      name:"Qahramon qalqon",
      title:"Duelda yutqazganda yo‘qotish -15% Yengilmas himoya",
    },
    {
      id:4,
      photo: zirh1,
      name:"Oddiy zirh",
      title:"Duelda zarar olish -10% Engil himoya",
    },
    {
      id: 5,
      photo: zirh2,
      name:"Ritsar zirh",
      title:"Duelda zarar olish -15% Kuchli himoya",
    },
    {
      id:6,
      photo: zirh3,
      name:"Titan zirhi",
      title:"Duelda zarar olish -20% Devor singari himoyak",
    },
    {
      id:7,
      photo: tayoq1,
      name:"Oddiy tayoqcha",
      title:"Maxsus bonuslar olish 5% Oddiy sehr kuchi",
    },
    {
      id:8,
      photo: tayoq2,
      name:"Sehrli tayoq",
      title:"Kvestlarda 10% maxsus bonuslar Kuchli sehr imkoniyatlari",
    },
    {
      id:9,
      photo: tayoq3,
      name:"Afsungar asosi",
      title:"Kvestlarda 15% maxsus bonuslar + sirli kuchlar Sehrning cho‘qqisi",
    },
    {
      id:10,
      photo: uzuk1,
      name:"Kumush uzuk",
      title:"Yangi imkoniyatlar ochish Oddiy kuch",
    },
    {
      id:11,
      photo: uzuk2,
      name:"Sehrli uzuk",
      title:"Maxsus kvestlarga kirish +5% qo‘shimcha imkoniyat Sehrlangan imkoniyatlar",
    },
    {
      id:12,
      photo: uzuk3,
      name:"Afsonaviy kuch uzugi",
      title:"Eksklyuziv artefaktlarga kirish +10% imkoniyat Ultra kuch va maxsus imkoniyatlar",
    },
  ]


  export const characters=[
    {
      id:1,
      photo: warrior,
      name:"🛡️ 1.Jangchi (Warrior)",
      title:'"Temirdan yasalgan irodasi bilan jang maydonining yuragi."  Qalbi jasorat bilan to‘lgan. Boltasining bir urushi bilan dushman safini yorib o‘tadi. Kuch – uning tili, g‘azab – uning yuragi.',
    },
    {
      id:2,
      photo: knight,
      name:"⚔️  Ritsar (Knight) ",
      title:'"Adolat yo‘lida qasam ichgan, qalqon va qilich bilan ezgulikni himoya qiluvchi." U yuragida haqiqatni, qo‘lida qilichni olib yuradi. Qorong‘ilik ustidan nurni olib keluvchi najotkordir.',
    },
    {
      id:3,
      photo: lknight,
      name:"⚔️  Ayol ritsar (Lady Knight)",
      title:'"Temir zirh ortida mehribon yurak, ammo mardlarcha jang maydonida." U kamtar, ammo qat’iy. Har bir harakati yuksak vazifaga xizmat qiladi — himoya qilish, adolatni tiklash, g‘alabani egallash.',
    },
    {
      id:4,
      photo: ranger,
      name:"🏹  Sarguzashtchi (Ranger)",
      title:'"Tog‘lar sukunatidan kuch olgan, soyada yurib o‘q uzuvchi o‘tkir nigoh egasi." U tezkor, chaqqon va hushyor. Har bir o‘qi — taqdir hukmi, har bir harakati — noaniqlikdan quvvat olgan donolik.',
    },
    {
      id:5,
      photo: sorceress,
      name:"🔮  Sehrgar ayol (Sorceress)", 
      title:'"Qadimiy bilimlar egalasi, yulduzlar kuchini barmoqlarida mujassamlashtirgan ayol." So‘zlari bilan olovni uyg‘otadi, ishorasi bilan kuchlarni bo‘ysundiradi. Sehr — uning quroli, aql — uning qalqoni.',
    },
  ]


