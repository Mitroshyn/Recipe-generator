export const fruitDrinksType = "fruitDrinks";

export const fruitDrinks = [
  {
    title: "Яблочно-клюквенный компот с имбирем",
    image: `${process.env.PUBLIC_URL}/images/fruit_drinks/apple_cranberry_compote_with_ginger.jpg`,
    ingridients: [
      "яблоки&nbsp;—  3-4 шт.",
      " клюква (замороженную можно не&nbsp;размораживать)&nbsp;—  250&nbsp;г",
      " мелко нарубленный имбирь&nbsp;—  2&nbsp;ст.л.",
      " сахар (или по&nbsp;вкусу)&nbsp;—  100-150 г",
      " вода&nbsp;—  2&nbsp;л",
    ],
    cooking: [
      {
        description:
          "У яблок вырезаем сердцевинки, мякоть нарезаем на&nbsp;небольшие кусочки. Кладем в&nbsp;кастрюлю вместе с&nbsp;клюквой и&nbsp;мелко нарубленным имбирем. Вливаем воду и&nbsp;доводим до&nbsp;кипения.",
        image: `${process.env.PUBLIC_URL}/images/other_images/boil_apples_with_cranberries_and_ginger.jpg`,
      },
      {
        description:
          "Варим 3-5 минут. Добавляем по&nbsp;вкусу сахар. Выключаем огонь, накрываем крышкой и&nbsp;даем постоять 10&nbsp;минут.",
      },
    ],
    type: fruitDrinksType,
  },
  {
    title: "Компот из сухофруктов",
    image: `${process.env.PUBLIC_URL}/images/fruit_drinks/dried_fruit_compote.jpg`,
    ingridients: [
      "сухофрукты (яблоки, курага, изюм, груши)&nbsp;—  600&nbsp;г",
      "сахар&nbsp;—  150&nbsp;г",
      "вода&nbsp;—  1,5&nbsp;л",
      "лимонная кислота&nbsp;—  на&nbsp;кончике ножа",
    ],
    cooking: [
      {
        description:
          "Сперва в&nbsp;кастрюлю налить 1,5&nbsp;л&nbsp;воды и&nbsp;довести до&nbsp;кипения. Затем сахар всыпать в&nbsp;воду, растворить его, помешивая, и&nbsp;довести сироп до&nbsp;кипения. Сухофрукты (при необходимости их&nbsp;нужно вымыть) всыпать в&nbsp;кипящий сироп и&nbsp;варить при&nbsp;небольшом кипении в&nbsp;течение 10-15 минут.",
      },
      {
        description:
          "В конце варки для&nbsp;улучшения вкуса добавить лимонную кислоту на&nbsp;кончике ножа. Готовому компоту дать настояться как&nbsp;минимум 20&nbsp;минут. Компот разлить в&nbsp;стаканы или&nbsp;в вазочки, равномерно распределяя сухофрукты. Напиток подавать можно как&nbsp;теплым, так&nbsp;и охлажденным.",
      },
    ],
    type: fruitDrinksType,
  },
  {
    title: "Виноградный компот с мятой",
    image: `${process.env.PUBLIC_URL}/images/fruit_drinks/grape_compote_with_mint.jpg`,
    ingridients: [
      "вода&nbsp;—  3&nbsp;л",
      " виноград&nbsp;—  400&nbsp;г (чистый вес&nbsp;ягод)",
      " сахар&nbsp;—  150&nbsp;г (или больше/меньше по&nbsp;вкусу)",
      " небольшой лимон&nbsp;—  1&nbsp;шт.",
      " небольшой пучок мяты",
    ],
    cooking: [
      {
        description: "Виноград обрываем с кистей и кладем в холодную воду.",
      },
      {
        description:
          "Ставим на&nbsp;огонь и&nbsp;доводим до&nbsp;кипения. Кипятим 1&nbsp;минуту. Добавляем сахар и&nbsp;лимонный сок&nbsp;по вкусу. Туда же&nbsp;отправляем мяту.",
      },
      {
        description:
          "Варим 1 минуту, затем выключаем и даем постоять под крышкой 10 минут. Подаем.",
      },
    ],
    type: fruitDrinksType,
  },
  {
    title: "Компот из клубники и клюквы",
    image: `${process.env.PUBLIC_URL}/images/fruit_drinks/strawberry_cranberry_compote.jpg`,
    ingridients: [
      "клубника&nbsp;—  250&nbsp;г",
      " клюква (замороженные ягоды можно не&nbsp;размораживать)&nbsp;—  250&nbsp;г",
      " сахар&nbsp;—  300&nbsp;г (или по&nbsp;вкусу)",
    ],
    cooking: [
      {
        description:
          "В большой кастрюле доводим до&nbsp;кипения 4,5&nbsp;литра воды. Добавляем ягоды и&nbsp;снова доводим до&nbsp;кипения. Выключаем.",
      },
      {
        description:
          "Добавляем по&nbsp;вкусу сахар. Клюкву давим половником или&nbsp;ложкой. Даем компоту постоять под&nbsp;крышкой около получаса. ",
      },
    ],
    type: fruitDrinksType,
  },
  {
    title: "Компот из черной смородины",
    image: `${process.env.PUBLIC_URL}/images/fruit_drinks/blackcurrant_compote.jpg`,
    ingridients: [
      "смородина&nbsp;—  600&nbsp;г",
      "вода&nbsp;—  1,5&nbsp;л",
      "сахар&nbsp;—  1&nbsp;стакан",
    ],
    cooking: [
      {
        description:
          "Поместите смородину в&nbsp;кастрюлю, залейте водой и&nbsp;доведите до&nbsp;кипения. Проварите еще&nbsp;5&nbsp;минут, отставьте в&nbsp;сторону и&nbsp;дайте остыть до&nbsp;теплого состояния. Процедите жидкость черед дуршлаг, избегая давления на&nbsp;ягоды.",
      },
      {
        description:
          "Вылейте сок&nbsp;обратно в&nbsp;кастрюлю, добавьте сахар. Доведите вновь до&nbsp;кипения и&nbsp;варите на&nbsp;медленном огне еще&nbsp;в течении 3&nbsp;минут.",
      },
      {
        description:
          "Дайте остыть до&nbsp;комнатной температуры и&nbsp;уберите сок&nbsp;в холодильник.",
      },
      {
        description:
          "Вы можете варьировать как&nbsp;и количество сахара, так&nbsp;и добавки в&nbsp;него, это&nbsp;может быть имбирь или&nbsp;лимон, корица или&nbsp;гвоздика, лаванда, ваниль или&nbsp;мята.",
      },
    ],
    type: fruitDrinksType,
  },
  {
    title: "Морс из ягод",
    image: `${process.env.PUBLIC_URL}/images/fruit_drinks/berry_morsels.jpg`,
    ingridients: [
      "ягоды (любые, больше разных ягод&nbsp;—  вкуснее)&nbsp;—  1&nbsp;стакан",
      "вода&nbsp;—  1&nbsp;л (примерно)",
      "сахар&nbsp;—  1/2&nbsp;стакана или&nbsp;мед",
    ],
    cooking: [
      {
        description:
          "Ягоды помыть, размять деревянным пестиком (или деревянной ложкой), отжать сок, слить его&nbsp;в стеклянную банку, накрыть крышкой и&nbsp;поставить в&nbsp;холодильник.",
      },
      {
        description:
          "Выжимки залить горячей водой, варить 10-15 мин, затем процедить. В&nbsp;полученный отвар влить охлажденный сок, добавить сахар или&nbsp;мед и&nbsp;хорошо размешать. Подавать охлажденным.",
      },
    ],
    type: fruitDrinksType,
  },
  {
    title: "Морс из красной смородины",
    image: `${process.env.PUBLIC_URL}/images/fruit_drinks/red_currant_morsel.jpg`,
    ingridients: [
      "—  красная смородина&nbsp;—  500&nbsp;г ",
      "—  вода кипяченая&nbsp;—  2&nbsp;л ",
      "—  сахар&nbsp;—  200&nbsp;г ",
    ],
    cooking: [
      {
        description:
          "1. Смородину размять ложкой и&nbsp;протереть через сито. ",
      },
      {
        description:
          "2. Жмых положить в&nbsp;кастрюлю, добавить 200&nbsp;мл воды и&nbsp;довести до&nbsp;кипения. Кипятить примерно 5&nbsp;минут. Накрыть крышкой и&nbsp;дать настояться 20-25 минут. Затем процедить и&nbsp;смешать с&nbsp;соком. Добавить сахар и&nbsp;мешать до&nbsp;растворения. Влить оставшуюся воду и&nbsp;поставить в&nbsp;холодильник. ",
      },
      "Морс готов. ",
    ],
    type: fruitDrinksType,
  },
  {
    title: "Клюквенный морс с медом",
    image: `${process.env.PUBLIC_URL}/images/fruit_drinks/cranberry_morsel_with_honey.jpg`,
    ingridients: [" Клюква 700&nbsp;г", "Мёд 300&nbsp;г"],
    cooking: [
      {
        description:
          "Ягоды нужно перебрать и&nbsp;промыть, а&nbsp;если вы&nbsp;используете замороженные, то&nbsp;разморозить. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cranberry.jpg`,
      },
      {
        description:
          "Небольшими порциями откладываем ягоды в&nbsp;неокисляемую посуду и&nbsp;тщательно разминаем деревянной толкушкой. Не&nbsp;используйте на&nbsp;этом этапе металлическую посуду, иначе в&nbsp;готовом продукте будет чувствоваться металлический привкус. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mashing_cranberries.jpg`,
      },
      {
        description:
          "Размятые ягоды отжимаем через двойной слой марли в&nbsp;отдельную емкость. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/squeeze_the_cranberries.jpg`,
      },
      {
        description:
          "Отжимки заливаем кипятком (на 700&nbsp;г клюквы нужно около 3&nbsp;литров воды) и&nbsp;варим 3-5 минут, после чего процеживаем. Отвар оставляем, а&nbsp;то, что&nbsp;осталось, на&nbsp;этот раз&nbsp;выбрасываем.&nbsp; ",
        image: `${process.env.PUBLIC_URL}/images/other_images/boil_cranberries.jpg`,
      },
      {
        description:
          "В охлажденный отвар наливаем клюквенный сок&nbsp;и добавляем мед. Перемешиваем до&nbsp;растворения последнего, и&nbsp;чудодейственный напиток готов!",
        image: `${process.env.PUBLIC_URL}/images/other_images/pour_cranberry_juice.jpg`,
      },
    ],
    type: fruitDrinksType,
  },
  {
    title: "Компот из слив",
    image: `${process.env.PUBLIC_URL}/images/fruit_drinks/plum_compote.jpg`,
    ingridients: ["Сливы красные 1000&nbsp;г&nbsp;", "Сахар-песок 250&nbsp;г"],
    cooking: [
      {
        description: "Сливы нужно перебрать и&nbsp;хорошо вымыть. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/plums.jpg`,
      },
      {
        description:
          "Разрезать сливы пополам и&nbsp;вынуть косточки. Этот этап могут пропустить те, кто&nbsp;хочет приготовить компот из&nbsp;слив максимально быстро и&nbsp;не трудозатратно.&nbsp; ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_the_plums_in_half.jpg`,
      },
      {
        description:
          "В горячей воде (я брал около 650&nbsp;мл на&nbsp;500&nbsp;г&nbsp;слив) растворить сахар и&nbsp;опустить туда сливы. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/plums_in_hot_water.jpg`,
      },
      {
        description:
          "Довести компот до&nbsp;кипения и&nbsp;выключить. Употреблять сливовый компот вкуснее всего в&nbsp;охлажденном виде. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/bring_to_a_boil.jpg`,
      },
    ],
    type: fruitDrinksType,
  },
  {
    title: "Ягодный компот с медом",
    image: `${process.env.PUBLIC_URL}/images/fruit_drinks/berry_compote_with_honey.jpg`,
    ingridients: [
      "Клубника 								300&nbsp;г&nbsp;															",
      "Вишня 								300&nbsp;г&nbsp;															",
      "Смородина черная 								200&nbsp;г&nbsp;															",
      "Мёд 								200&nbsp;г&nbsp;							",
    ],
    cooking: [
      {
        description:
          "Замороженные ягоды очень подходят для&nbsp;компотов и&nbsp;позволяют даже зимой  радоваться вкусу летних ягод. В&nbsp;этом компоте вишня доминирует по&nbsp;вкусу, клубника придает непередаваемый аромат, а&nbsp;смородина добавляет насыщенности цвету. Мед&nbsp;заменяет сахар и&nbsp;завершает картину.  В&nbsp;общем, это&nbsp;очень вкусно, полезно, и&nbsp;настроение поднимает!&nbsp;  					 						 				 								 					",
      },
      {
        description:
          "2-2,5&nbsp;литра воды доводим до&nbsp;кипения и&nbsp;в кипящую воду кладем замороженные ягоды.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/strawberries_currants_and_cherries.jpg`,
      },
      {
        description:
          "			 				 													 													 						Когда вода вновь начнет закипать, сразу выключаем огонь и&nbsp;охлаждаем до&nbsp;комнатной температуры.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/berries_in_hot_water.jpg`,
      },
      {
        description:
          "Так как&nbsp;мед не&nbsp;стоит нагревать, чтобы не&nbsp;потерять его&nbsp;полезных качеств, мы&nbsp;добавляем его&nbsp;в остывший компот и&nbsp;перемешиваем до&nbsp;полного растворения.  Пить вкуснее всего охлажденным.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_honey_to_compote.jpg`,
      },
    ],
    type: fruitDrinksType,
  },
];

export const fruitDrinksTitle = "Компоты,морсы";
