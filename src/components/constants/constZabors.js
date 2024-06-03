import prof1 from "../../img/prof1.jpeg";
// import prof2 from "../../img/prof2.jpeg";
// import prof4 from "../../img/vidzabor5.jpeg";
import prof3 from "../../img/prof3.jpeg";
import prof5 from "../../img/kalitka.jpeg";
import prof6 from "../../img/vorotaRas.jpeg";
import prof7 from "../../img/vorotaRaz.jpeg";
import montageProf from "../../img/shemaProf.png";
import main from "../../img/profMain.jpg";
import prof9 from "../../img/prof9.jpeg";
import plus from "../../img/plus.png";
import main2 from "../../img/main2.jpg";
import main3 from "../../img/main3.jpg";
import main4 from "../../img/main4.jpg";
import main5 from "../../img/main5.jpg";
import main6 from "../../img/main6.jpg";
import main7 from "../../img/main7.jpg";
import main8 from "../../img/main8.jpg";
import montageRabitca from "../../img/shemaRabica.jpeg";
import im1 from "../../img/prof4.jpeg";
import im2 from "../../img/prof5.jpeg";
import im3 from "../../img/prof6.jpeg";
import im4 from "../../img/prof7.jpeg";
import im5 from "../../img/prof8.jpeg";
import im6 from "../../img/prof9.jpeg";
import rb1 from "../../img/rabica1.jpeg";
import rb2 from "../../img/rabica2.jpeg";
import rb3 from "../../img/rabica3.jpeg";
import rb4 from "../../img/rabica4.jpeg";


const zaborImages = [
  {
    alt: "Забор из профлиста под ключ",
    text: "Забор из профлиста под ключ",
    way: "/proflist",
  },
  {
    alt: "Забор из сетки рабицы под ключ",
    text: "Забор из сетки рабицы под ключ",
    way: "/grid",
  },
  {
    alt: "Забор из 3D сетки под ключ",
    text: "Забор из 3D сетки под ключ",
    way: "/3d",
  },
  {
    alt: "Забор из деревянного штакетника под ключ",
    text: "Забор из деревянного штакетника под ключ",
    way: "/wood",
  },
  {
    alt: "Забор из евроштакетника металлического под ключ",
    text: "Забор из евроштакетника металлического под ключ",
    way: "/evroiron",
  },
  {
    alt: "Забор ранчо и жалюзи под ключ",
    text: "Забор ранчо и жалюзи под ключ",
    way: "/rancho",
  },
  {
    alt: "Каркас забора под ключ",
    text: "Каркас забора под ключ",
    way: "/base",
  },
  {
    alt: "Ворота откатные",
    text: "Ворота откатные под ключ",
    way: "/vorota",
  },
];

const proflist = {
  title: "Забор из профлиста под ключ",
  image: main,
  alt: "Забор из профлиста под ключ",
  subtitle: "В стоимость включен: весь материал, монтаж.",
  text: "Профнастил является самым популярным материалом для создания ограждений. Покупателей привлекает не только стильное исполнение конструкции, но и высокое качество, долговечность, простой уход, доступная стоимость и другие преимущества. Для создания забора используют листы профнастила с цветным полимерным покрытием. Оно защищает материал от коррозии и позволяет подобрать листы, соответствующие общей концепции дизайна территории. Мы используем в работе Профнастил С8/С20 (0,4 мм)",
  titlePlus: "Преимущества",
  montageTitle: "Монтаж забора из профнастила",
  montageText:
    "Чтобы правильно установить забор нужно действовать по отработанной схеме. Все элементы полностью готовы к установке и поставляются в соответствующем размере. Мастера нашей компании выполняют монтажные работы по установке забора из профнастила за 1 день в Барнауле и на территории Алтайского края.",
  montageImg: montageProf,
  altShema: "схема установки забора",

  advan: [
    {
      image: plus,
      text: "Плюсы: Большой ассортимент расцветок, толщины, текстуры",
    },
    {
      image: plus,
      text: "Быстрый монтаж и возможность проводить технический ремонт",
    },
    {
      image: plus,
      text: "Доступная цена и срок эксплуатации более 25 лет",
    },
    {
      image: plus,
      text: "Эстетичность, высокие эксплуатационные свойства",
    },
  ],
  //данные для таблицы забора

  fenceData: {
    title: "ЗАБОР ПРОФНАСТИЛ - СТАНДАРТ",
    rows: [
      {
        components: [
          "Столбы (полимерные) 60*60*2400 мм (толщина металла 2 мм;)",
          "Заглушка 60*60 ПВХ черная;",
          "Прожилины (полимерные) 40*20 мм (толщина металла 1,5 мм) – 2 шт.;",
          "Профнастил С8/С20 (0,4 мм) с саморезами;",
        ],
        height: "1,5 м.",
        frame: "ПОЛИМЕР",
        price: "от 3500р./м.п.",
      },
      {
        components: [
          "Столбы (полимерные) 60*60*3000 мм.;",
          "Заглушка 60*60 ПВХ черная;",
          "Прожилины (полимерные) 40*20 мм (толщина металла 1,5 мм) – 2 шт.;",
          "Профнастил С8/С20 (0,4 мм) с саморезами;",
        ],
        height: "2,0 м.",
        frame: "ПОЛИМЕР",
        price: "от 3800 р./м.п.",
      },
    ],
    additionalOptions: [
      "J-рейка 20*40*2000 мм (закрывает верхний торец) 300 р /м.п",
      "Бордюрный фундамент от 1700 р/м.п. (высота 20 см, ширина 8 см)",
      "Ленточный фундамент от 2500 р/м.п.  (высота 10 см, ширина 20 см)",
      "Демонтаж старого забора 200 р/м.п.",
      "Двусторонний окрас профлиста +350 р/м.п.",
    ],
  },
  //варианты заборов во вкладке профлист

  variants: {
    title: "Виды забора из профнастила",
    cards: [
      {
        image: prof1,
        alt: "Забор с кирпичными столбами",
      },
      {
        image: prof3,
        alt: "Забор на ленточном фундаменте",
      },
      {
        image: prof9,
        alt: "Облегченный забор",
      },
      {
        image: prof5,
        alt: "калитка",
      },
      {
        image: prof6,
        alt: "Ворота распашные",
      },
      {
        image: prof7,
        alt: "Ворота откатные",
      },
    ],
  },

  //данные для таблицы калитка

  kalitkaData: {
    title: "Входная группа КАЛИТКА распашная ширина 1,0 м",
    rows: [
      {
        components: [
          "В комплект входит:",
          "столбы 60*60",
          "каркас из профильной трубы 40*20",
          "заглушки ПВХ. Накладные петли - 2 шт.",
          "Замок с ручкой -1 шт.",
          "профлист С8 - 1 лист.",
        ],
        height: "1,5 м.",
        frame: "ПОЛИМЕР",
        price: "от 8000 р./м.п.",
      },
      {
        components: [
          "В комплект входит:",
          "столбы 60*60",
          "каркас из профильной трубы 40*20",
          "заглушки ПВХ. Накладные петли - 2 шт.",
          "Замок с ручкой -1 шт.",
          "профлист С8 - 1 лист.",
        ],
        height: "2,0 м.",
        frame: "ПОЛИМЕР",
        price: "от 8000 р./м.п.",
      },
    ],
  },

  //данные для таблицы ворота

  vorotaData: {
    title: "Входная группа ВОРОТА распашные",
    rows: [
      {
        components: [
          " В комплект входит:",
          "столбы 60*60",
          "каркас из профильной трубы 40*20",
          "заглушки ПВХ",
          "Нижний фиксатор ворот - 2 шт.",
          "Горизонтальная задвижка - 1 шт.",
          "Шарниры гаражные - 4 шт.",
          "Проушины под навесной замок.",
          "Прфнастил С8 (3,0 м. - 3 листа; 3,5 м. - 3 листа; 4,0 м. - 4 листа)",
        ],
        height: "1,5 м.",
        frame: "ПОЛИМЕР",
        price: "от 12000 р./м.п.",
      },
      {
        components: [
          " В комплект входит:",
          "столбы 60*60",
          "каркас из профильной трубы 40*20",
          "заглушки ПВХ",
          "Нижний фиксатор ворот - 2 шт.",
          "Горизонтальная задвижка - 1 шт.",
          "Шарниры гаражные - 4 шт.",
          "Проушины под навесной замок.",
          "Прфнастил С8 (3,0 м. - 3 листа; 3,5 м. - 3 листа; 4,0 м. - 4 листа)",
        ],
        height: "2,0 м.",
        frame: "ПОЛИМЕР",
        price: "от 12000 р./м.п.",
      },
    ],
  },
// фото во вкладках виды заборов
slideImages : [
  {
    image: im1,
   alt: "изображение наших работ забора из профлиста"
  },
  {
    image: im2,
    alt: "изображение наших работ забора из профлиста"

  },
  {
    image: im3,
    alt: "изображение наших работ забора из профлиста"

  },
  {
    image: im4,
    alt: "изображение наших работ забора из профлиста"

  },
  {
    image: im5,
    alt: "изображение наших работ забора из профлиста"

  },
  {
    image: im6,
    alt: "изображение наших работ забора из профлиста"

  },
],

};

const rabitsa = {
  title: "Забор из сетки рабицы под ключ",
  image: main2,
  alt: "Забор из сетки рабицы под ключ",
  subtitle: "В стоимость включен: весь материал, монтаж.",
  text: "Забор из сетки-рабицы на сегодняшний день один из самых экономичных видов ограждения. Данный вид забора приобрел свою популярность в основном для ограждения участков в садовых товариществах. Также забор из сетки-рабицы обозначает границы участка и препятствует проникновению посторонних - Сетка-рабица - это материал представляет собой полотно, которое состоит из спиралей, проволочного типа. Они крепко сплетены между собой. Материал характеризуется большим ассортиментом размера ячеек от 20 до 100 мм. По высоте рулон бывает от 1 до 2 м.",
  titlePlus: "Преимущества",
  montageTitle: "Монтаж забора из сетки рабицы",
  montageText:
    "Чтобы правильно установить забор нужно действовать по отработанной схеме. Все элементы полностью готовы к установке и поставляются в соответствующем размере. Мастера нашей компании выполняют монтажные работы по установке забора из сетки рабицы за 1 день в Барнауле и на территории Алтайского края.",
  montageImg: montageRabitca,
  altShema: "схема установки забора",
  advan: [
    {
      image: plus,
      text: "Плюсы: Высокая прочность, а также устойчивость к внешнему воздействию и механическим повреждениям",
    },
    {
      image: plus,
      text: "Свободно пропускает свет, не затеняет участок",
    },
    {
      image: plus,
      text: "Выдерживает повышенную нагрузку",
    },
    {
      image: plus,
      text: "Неприхотливость в уходе",
    },
    {
      image: plus,
      text: "Длительный срок эксплуатации",
    },
    {
      image: plus,
      text: "Возможность декоративного оформления",
    },
  ],
  fenceData: {
    title: "ЗАБОР СЕТКА РАБИЦА - СТАНДАРТ",
    rows: [
      {
        components: [
          "столбы (стальные) 40*40*2400мм;",
          "заглушка 40*40 ПВХ черная;",
          "сетка Рабица (сталь) ячейка 50*50, 45*45 d прутка 1,6-1,8 мм;",
          "расстояние между столбами 3 м;",
        ],
        height: "1,5 м.",
        frame: "СТАЛЬ",
        price: "от 2000р./м.п.",
      },

      {
        components: [
          "столбы (стальные) 40*40*2400мм;",
          "заглушка 40*40 ПВХ черная;",
          "сетка Рабица (сталь) ячейка 50*50, 45*45 d прутка 1,6-1,8 мм;",
          "расстояние между столбами 3 м;",
        ],
        height: "2,0 м.",
        frame: "СТАЛЬ",
        price: "от 2400  р./м.п.",
      },
    ],
  },
  //данные для таблицы калитка

  kalitkaData: {
    title: "Калитка распашная сетка рабица",
    rows: [
      {
        components: [
          "В комплект входит:",
          "столбы 60*60",
          "каркас из профильной трубы 40*20",
          "заглушки ПВХ. Накладные петли - 2 шт.",
          "Замок с ручкой -1 шт.",
        ],
        height: "1,5 м.",
        frame: "Сталь",
        price: "от 8000 р./м.п.",
      },
      {
        components: [
          "В комплект входит:",
          "столбы 60*60",
          "каркас из профильной трубы 40*20",
          "заглушки ПВХ. Накладные петли - 2 шт.",
          "Замок с ручкой -1 шт.",
          "профлист С8 - 1 лист.",
        ],
        height: "2,0 м.",
        frame: "Сталь",
        price: "от 8000 р./м.п.",
      },
    ],
  },

  //данные для таблицы ворота

  vorotaData: {
    title: "Ворота распашные сетка рабица",
    rows: [
      {
        components: [
          " В комплект входит:",
          "столбы 60*60",
          "каркас из профильной трубы 40*20",
          "заглушки ПВХ",
          "Нижний фиксатор ворот - 2 шт.",
          "Горизонтальная задвижка - 1 шт.",
          "Шарниры гаражные - 4 шт.",
          "Проушины под навесной замок.",
        ],
        height: "1,5 м.",
        frame: "Сталь рабица",
        price: "от 12000 р./м.п.",
      },
      {
        components: [
          " В комплект входит:",
          "столбы 60*60",
          "каркас из профильной трубы 40*20",
          "заглушки ПВХ",
          "Нижний фиксатор ворот - 2 шт.",
          "Горизонтальная задвижка - 1 шт.",
          "Шарниры гаражные - 4 шт.",
          "Проушины под навесной замок.",
        ],
        height: "2,0 м.",
        frame: "Сталь рабица",
        price: "от 12000 р./м.п.",
      },
    ],
  },
  slideImages : [
    {
      image: rb1,
     alt: "изображение наших работ забора из сетки рабица"
    },
    {
      image: rb2,
      alt: "изображение наших работ забора из сетки рабица"
  
    },
    {
      image: rb3,
      alt: "изображение наших работ забора из сетки рабица"
  
    },
    {
      image: rb4,
      alt: "изображение наших работ забора из сетки рабица"
  
    },

  ],
};

export { zaborImages, proflist, rabitsa };
