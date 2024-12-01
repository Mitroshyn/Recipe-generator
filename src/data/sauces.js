export const saucesType = "sauces";

export const sauces = [
  {
    title: "Домашний майонез",
    image: `${process.env.PUBLIC_URL}/images/sauces/homemade_mayonnaise.jpg`,
    ingridients: [
      "яйца куриные (1 целое и 1 желток) —  2 шт.",
      "горчица —  1 ст.л.",
      "масло подсолнечное (рафинированное) —  350-400 г",
      "лимон (сок) —  0,5 шт.",
      "соль",
    ],
    cooking: [
      {
        description:
          "Приготовить майонез в&nbsp;домашних условиях очень просто, а&nbsp;главное очень быстро. Время приготовления вкусного домашнего майонеза не&nbsp;больше пяти минут.",
      },
      {
        description:
          "В стакан для&nbsp;блендера выпустить полтора яйца (целое и&nbsp;желток), туда же&nbsp;добавить горчицу, лимонный сок, крепко посолить, влить 300-400 г&nbsp;масла.",
      },
      { description: "Взбить погружным блендером." },
      { description: "Домашний майонез готов!" },
      {
        description:
          "Для домашнего майонеза можно в&nbsp;принципе использовать любую горчицу, но&nbsp;вкуснее всего получается с&nbsp;дижонской.",
      },
      {
        description:
          "Чтобы майонез не&nbsp;расслаивался и&nbsp;без проблем хранился в&nbsp;холодильнике, во&nbsp;время взбивания можно добавить две&nbsp;столовые ложки воды.",
      },
      {
        description:
          "Готовый майонез переложите в&nbsp;чистую пластиковую или&nbsp;стеклянную емкость, тогда его&nbsp;можно будет хранить в&nbsp;холодильнике в&nbsp;течение недели.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Домашний майонез в индийском стиле",
    image: `${process.env.PUBLIC_URL}/images/sauces/homemade_indian_style_mayonnaise.jpg`,
    ingridients: [
      "порошок карри&nbsp;—  1&nbsp;ст.л.",
      " небольшая луковица&nbsp;—  1&nbsp;шт.",
      " желтки&nbsp;—  2&nbsp;шт.",
      " горчица&nbsp;—  2&nbsp;ч.л.",
      " лимонный сок&nbsp;или белый винный уксус&nbsp;—  1&nbsp;ст.л.",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
      " растительное масло&nbsp;—  250&nbsp;мл",
      "кинза —  5-6 веточек",
    ],
    cooking: [
      {
        description:
          "Такой соус хорошо подходит к&nbsp;мясу, к&nbsp;птице, а&nbsp;также ко&nbsp;всяким-разным бургерам. Ну&nbsp;и с&nbsp;шашлыком тоже будет неплохо, хоть и&nbsp;слегка непривычно.",
      },
      {
        description:
          "В сковороде на&nbsp;среднем огне разогреваем 1&nbsp;ст.л. растительного масла. Кладем мелко нарубленный лук&nbsp;и жарим, помешивая, до&nbsp;мягкости, около 5&nbsp;минут.",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_onions.jpg`,
      },
      {
        description: "Добавляем карри и жарим еще 1 минуту, помешивая.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_curry_to_onion.jpg`,
      },
      {
        description:
          "Снимаем с&nbsp;огня и&nbsp;полностью остужаем.Кладем в&nbsp;миску желтки, горчицу и&nbsp;лимонный сок. Смешиваем венчиком до&nbsp;однородного состояния.",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_mustard_yolks_and_lemon_juice.jpg`,
      },
      {
        description:
          "Берем миксер и&nbsp;начинаем взбивать массу на&nbsp;средней скорости. Начинаем  вливать масло&nbsp;—  первую четверть вливаем по&nbsp;каплям, медленно, затем можно  вливать очень тонкой струйкой. Взбиваем, пока не&nbsp;получится густой соус.",
        image: `${process.env.PUBLIC_URL}/images/other_images/thick_white_sauce.jpg`,
      },
      {
        description:
          "Добавляем мелко нарубленные листья кинзы, а&nbsp;также карри с&nbsp;луком и&nbsp;еще раз&nbsp;взбиваем до&nbsp;однородного состояния.",
        image: `${process.env.PUBLIC_URL}/images/other_images/ready_made_mayonnaise_in_Indian_style.jpg`,
      },
      { description: "Соус готов к подаче." },
      { description: "Хранить в холодильнике, как домашний майонез." },
    ],
    type: saucesType,
  },
  {
    title: "Сырный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/cheese_sauce.jpg`,
    ingridients: [
      "жирные сливки (от 30% и&nbsp;выше)&nbsp;—  200&nbsp;мл",
      " сливочный сыр&nbsp;—  125&nbsp;г",
      " сэндвичный сыр&nbsp;чеддер (плавленные пластинки)&nbsp;—  80&nbsp;г",
      " джугас или&nbsp;другой пармезаноподобный сыр&nbsp;—  30&nbsp;г",
      " соль&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Вливаем сливки в ковшик и ставим на плиту на средний огонь. Доводим до кипения.",
        image: `${process.env.PUBLIC_URL}/images/other_images/heat_the_cream.jpg`,
      },
      {
        description: "Твердый сыр трем на мелкой терке.",
        image: `${process.env.PUBLIC_URL}/images/other_images/grated_cheese_on_a_plate.jpg`,
      },
      {
        description:
          "В закипевшие сливки добавляем сливочный сыр&nbsp;и размешиваем до&nbsp;однородной консистенции.",
        image: `${process.env.PUBLIC_URL}/images/other_images/beat_egg_whites.jpg`,
      },
      {
        description: "Добавляем чеддер.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_cheddar.jpg`,
      },
      {
        description:
          "Размешиваем до его растворения. И кладем тертый твердый сыр.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_grated_cheese.jpg`,
      },
      {
        description:
          "Варим до&nbsp;однородной консистенции, постоянно мешая венчиком, буквально пару минут. Снимаем с&nbsp;плиты, добавляем по&nbsp;вкусу соль. Подаем соус теплым или&nbsp;полностью охлажденным.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Сливочно-чесночный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/creamy_garlic_sauce.jpg`,
    ingridients: [
      "сливочное масло&nbsp;—  35&nbsp;г",
      "оливковое масло&nbsp;—  20&nbsp;мл",
      "мука&nbsp;—  60&nbsp;г",
      "измельченный чеснок&nbsp;—  2&nbsp;ст. л.",
      "сливки жирные или&nbsp;для взбивания&nbsp;—  500&nbsp;мл",
      "овощной, говяжий или&nbsp;куриный бульон&nbsp;—  1&nbsp;ч. л.",
      "натертый пармезан&nbsp;—  60&nbsp;г",
      "соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Разогрейте 1&nbsp;столовую ложку сливочного масла и&nbsp;1&nbsp;столовую ложку оливкового масла в&nbsp;сковороде для&nbsp;тушения на&nbsp;среднем огне.",
      },
      {
        description:
          "Почистите зубчики чеснока. Затем измельчите его, чтобы у&nbsp;вас получилось 2&nbsp;столовые ложки (1/8&nbsp;стакана) продукта.",
      },
      {
        description:
          "Добавьте чеснок в&nbsp;смесь масел на&nbsp;сковороде. Как&nbsp;только сливочное масло растает и&nbsp;смешается с&nbsp;оливковым, осторожно добавьте туда измельченный чеснок и&nbsp;перемешайте. Чеснок должен стать мягким и&nbsp;источать сильный аромат. Не&nbsp;жарьте чеснок до&nbsp;коричневой корочки.",
      },
      {
        description:
          "Приготовьте ру&nbsp;(пшеничную муку, поджаренную в&nbsp;жире). Добавьте муку прямо к&nbsp;смеси масел и&nbsp;чеснока, хорошо перемешайте. Убедитесь, что&nbsp;мука полностью перемешалась с&nbsp;маслом. Продолжайте обжаривать муку, постоянно помешивая, примерно минуту. Вы&nbsp;должны увидеть, что&nbsp;ру начинает густеть и&nbsp;слегка темнеть.",
      },
      {
        description:
          "Разогрейте сливки и&nbsp;бульон в&nbsp;микроволновой печи или&nbsp;на плите. Не&nbsp;доводите жидкости до&nbsp;кипения.",
      },
      {
        description:
          "Добавьте 2&nbsp;стакана (50&nbsp;мл) жирных сливок и&nbsp;бульона. Осторожно вливайте теплые сливки с&nbsp;бульоном в&nbsp;обжаренную муку, при&nbsp;этом помешивая смесь другой рукой. Продолжайте помешивать венчиком и&nbsp;готовить на&nbsp;среднем огне до&nbsp;тех пор, пока смесь не&nbsp;начнет слабо кипеть или&nbsp;на поверхности не&nbsp;появятся первые пузырьки.",
      },
      {
        description:
          "Регулярно помешивайте соус и&nbsp;добавьте специи, соль и&nbsp;перец по&nbsp;своему вкусу. Через несколько минут соус должен начать густеть. Поверхность соуса должна слегка пузыриться. Ни&nbsp;в коем случае не&nbsp;кипятите соус.",
      },
      {
        description:
          "Добавьте пармезан и&nbsp;снимите с&nbsp;огня. Хорошо помешайте, чтобы сыр&nbsp;расплавился. Если хотите, чтобы соус получился более густым, продолжайте готовить. Если нет, снимите с&nbsp;плиты и&nbsp;подавайте.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Инвертный сахарный сироп",
    image: `${process.env.PUBLIC_URL}/images/sauces/invert_sugar_syrup.jpg`,
    ingridients: [
      "сахар&nbsp;—  700&nbsp;г",
      " кипяток&nbsp;—  260&nbsp;мл",
      " лимонная кислота&nbsp;—  4&nbsp;г",
      " пищевая сода&nbsp;—  3&nbsp;г",
    ],
    cooking: [
      {
        description: "Кладем в ковшик сахар, вливаем воду.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_sugar_to_water.jpg`,
      },
      {
        description:
          "Размешиваем так, чтобы сахар по&nbsp;максимуму растворился. Добавляем лимонную кислоту и&nbsp;ставим ковш на&nbsp;огонь. Доводим до&nbsp;кипения и&nbsp;уменьшаем огонь практически до&nbsp;минимума. Кипение должно быть едва заметным&nbsp;—  в&nbsp;виде редких пузырьков.",
      },
      {
        description:
          "Варим сироп без&nbsp;крышки примерно 45&nbsp;минут. Затем снимаем с&nbsp;плиты и&nbsp;добавляем соду. Размешиваем. Пойдет довольно бурная реакция с&nbsp;пеной&nbsp;—  учитывайте это&nbsp;при выборе посуды, в&nbsp;которой варите сироп.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cook_the_syrup.jpg`,
      },
      {
        description:
          "Пена сама опадет по мере остывания, сироп станет прозрачным.",
      },
      {
        description:
          "Полностью остужаем сироп и&nbsp;используем по&nbsp;назначению. Хранить в&nbsp;закрытой таре при&nbsp;комнатной температуре.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Майонез постный (гороховый)",
    image: `${process.env.PUBLIC_URL}/images/sauces/pea_mayonnaise.jpg`,
    ingridients: [
      "гороховые хлопья&nbsp;—  1&nbsp;ст. л.",
      "или горох колотый&nbsp;—  1&nbsp;ст. л.",
      "вода&nbsp;—  6&nbsp;ст. л.",
      "растительное масло без&nbsp;запаха&nbsp;—  180-220 г",
      "соль&nbsp;—  1&nbsp;ч. л.",
      "перец черный молотый&nbsp;—  0,5&nbsp;ч. л.",
      "сахар&nbsp;—  1&nbsp;ч. л.",
      "уксус&nbsp;—  1-2 ст. л.",
      "горчица&nbsp;—  2-3 ч. л.",
    ],
    cooking: [
      {
        description:
          "Гороховые хлопья залить водой и&nbsp;варить до&nbsp;полного разваривания. В&nbsp;зависимости от&nbsp;вида хлопьев это&nbsp;займет от&nbsp;10&nbsp;до&nbsp;30&nbsp;минут.",
      },
      {
        description:
          "Можно готовить гороховое пюре и&nbsp;из обычного колотого гороха, и&nbsp;из гороховой муки. Время приготовления в&nbsp;этом случае изменится.",
      },
      {
        description:
          "Тщательно измельчить смесь блендером, добиваясь полной однородности. При&nbsp;необходимости, можно добавить воды&nbsp;—  масса по&nbsp;консистенции должна напоминать жидкий кисель. Обязательно остудить!",
      },
      {
        description:
          "В емкость для&nbsp;взбивания влить растительное масло и&nbsp;добавить НЕМНОГО горохового 'киселя'.",
      },
      {
        description:
          "На 1&nbsp;часть гороховой массы нужно взять 2&nbsp;части оливкового масла. Взбивать 30-60 секунд.",
      },
      {
        description:
          "В посветлевший, но&nbsp;пока жидковатый соус добавить соль, сахар, перец, горчицу и&nbsp;уксус (уксус добавляйте постепенно, чтобы не&nbsp;перекислить).",
      },
      { description: "Взбивать еще&nbsp;1-1,5&nbsp;минуты. " },
      {
        description:
          "Теперь нужно проверить постный 'майонез' на&nbsp;вкус и, при&nbsp;необходимости, добавить специи. Домашний 'майонез' постный готов!",
      },
    ],
    type: saucesType,
  },
  {
    title: "Луковый мармелад",
    image: `${process.env.PUBLIC_URL}/images/sauces/onion_marmalade.jpg`,
    ingridients: [
      "красный лук&nbsp;—  1&nbsp;кг",
      " оливковое масло&nbsp;—  50&nbsp;мл",
      " сахар&nbsp;—  100&nbsp;г",
      " мед&nbsp;—  50&nbsp;г",
      "белый или&nbsp;красный винный уксус&nbsp;—  50&nbsp;мл",
      " молотый кориандр&nbsp;—  1/2&nbsp;ч.л.",
      " сухой тимьян&nbsp;—  1/2&nbsp;ч.л. или&nbsp;2&nbsp;веточки свежего",
      " красное сухое вино&nbsp;—  250&nbsp;мл",
    ],
    cooking: [
      {
        description: "Лук нарезаем тонкими кольцами или полукольцами.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_red_onion.jpg`,
      },
      {
        description:
          "В посуде с&nbsp;толстым дном разогреваем на&nbsp;среднем огне оливковое масло. Кладем лук.",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_red_onion.jpg`,
      },
      {
        description:
          "Томим в масле, помешивая, около 5 минут, пока лук не станет вот таким:",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_the_onion_until_soft.jpg`,
      },
      {
        description:
          "Он должен не жариться, а именно томиться. Никаких золотистых кусочков.",
      },
      {
        description: "Добавляем сахар, мед, кориандр, тимьян, вино и уксус.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_honey_and_sugar_to_red_onion.jpg`,
      },
      {
        description:
          "Перемешиваем и&nbsp;тушим с&nbsp;открытой крышкой на&nbsp;самом минимальном огне, периодически помешивая, около 1,5&nbsp;часов.",
        image: `${process.env.PUBLIC_URL}/images/other_images/ready_made_onion_marmalade.jpg`,
      },
      {
        description:
          "Лук должен стать мягким, а масса приобрести консистенцию варенья.",
      },
      {
        description:
          "Остужаем мармелад и&nbsp;используем по&nbsp;желанию и&nbsp;назначению. Его&nbsp;можно закатать в&nbsp;стерилизованные банки и&nbsp;поставить на&nbsp;хранение.",
      },
      {
        description:
          "К сырной тарелке он&nbsp;придется очень в&nbsp;тему. В&nbsp;аннотации к&nbsp;рецепту есть еще&nbsp;пара рекомендаций по&nbsp;применению.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Соус для салата Цезарь без майонеза",
    image: `${process.env.PUBLIC_URL}/images/sauces/caesar_salad_dressing_without_mayonnaise.jpg`,
    ingridients: [
      "чеснок&nbsp;—  2&nbsp;зубчика",
      "яичный желток&nbsp;—  1&nbsp;шт.",
      "оливковое масло&nbsp;—  150&nbsp;мл",
      "дижонская горчица&nbsp;—  1&nbsp;ч.л.",
      "анчоусы&nbsp;—  4&nbsp;шт.",
      "соус вустерширский&nbsp;—  1&nbsp;ч.л.",
      "лимонный сок&nbsp;—  1&nbsp;ст.л.",
      "тертый пармезан&nbsp;—  50&nbsp;г",
      "соль",
      "черный молотый перец",
    ],
    cooking: [
      {
        description:
          "Взбить горчицу с&nbsp;яичным желтком, добавить соль, еще&nbsp;раз взбить. Затем мешать, по&nbsp;капле добавляя оливковое масло&nbsp;—  смесь должна быть похожа на&nbsp;майонез.",
      },
      {
        description:
          "Добавить лимонный сок, вустерширский соус и&nbsp;филе анчоусов, которое предварительно надо потолочь. Добавить еще&nbsp;давленый чеснок и&nbsp;пармезан. Все&nbsp;хорошо взбить и&nbsp;полить соусом салат.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Соус к дерунам",
    image: `${process.env.PUBLIC_URL}/images/sauces/sauce_for_derunes.jpg`,
    ingridients: [
      "    сметана &nbsp;—  0,5&nbsp;стакана",
      "    лук&nbsp;зеленый&nbsp;—  1&nbsp;пучок",
      "    соль&nbsp;—  по&nbsp;вкусу",
      "    смесь перцев&nbsp;—  5-6 шт.",
      "соль",
    ],
    cooking: [
      {
        description:
          "Промойте зеленый лук&nbsp;под проточной водой, промокните бумажным полотенцем, убрав лишнюю влагу, и&nbsp;мелко нарежьте острым ножом.",
      },
      {
        description:
          "Возьмите 5-6 горошин смеси перцев, покрошите их&nbsp;в ступке, с&nbsp;помощью ложки или&nbsp;широким лезвием ножа.",
      },
      {
        description:
          "Лук смешайте вместе с&nbsp;солью и&nbsp;смесью перцев. Постарайтесь надавливать ложкой при&nbsp;размешивании&nbsp;—  так&nbsp;лук перетрется со&nbsp;специями и&nbsp;пустит немного сока.",
      },
      {
        description:
          "Влейте сметану в&nbsp;лук со&nbsp;специями, старательно размешайте и&nbsp;поставьте в&nbsp;холодильник на&nbsp;20&nbsp;минут. Соус готов!",
      },
    ],
    type: saucesType,
  },
  {
    title: "Соус Песто с кедровыми орешками",
    image: `${process.env.PUBLIC_URL}/images/sauces/pesto_sauce_with_pine_nuts.jpg`,
    ingridients: [
      "зеленый базилик&nbsp;—  50&nbsp;г",
      "сыр пармезан&nbsp;—  50&nbsp;г",
      "орехи кедровые&nbsp;—  3&nbsp;ст. л.",
      "масло оливковое&nbsp;—  100&nbsp;мл",
      "чеснок&nbsp;—  2&nbsp;зубчика",
      "соль&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Базилик вымыть и&nbsp;снять лишнюю воду (можно подождать, пока подсохнет, а&nbsp;можно промокнуть бумажным полотенцем).",
      },
      {
        description:
          "Зубчики чеснока разрезать на&nbsp;довольно крупные части.",
      },
      { description: "Натереть пармезан." },
      {
        description:
          "Все ингредиенты смешать в&nbsp;блендере до&nbsp;однородности массы.",
      },
      {
        description:
          "Для придания соусу большей воздушности (или, если просто нет&nbsp;под рукой блендера) можно все&nbsp;смешивать до&nbsp;однородного состояния пестиком в&nbsp;ступке. Так&nbsp;этот соус делали изначально. Можно хранить в&nbsp;холодильнике день-два. Количество оливкового масла можно варьировать в&nbsp;зависимости от&nbsp;предпочтений и&nbsp;целей использования соуса.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Мятный соус к мясу",
    image: `${process.env.PUBLIC_URL}/images/sauces/mint_sauce_for_meat.jpg`,
    ingridients: [
      "мята&nbsp;—  40&nbsp;г",
      " кинза&nbsp;—  40&nbsp;г",
      " белый винный уксус&nbsp;—  1&nbsp;ч.л.",
      " сахар&nbsp;—  1&nbsp;ч.л.",
      " сок&nbsp;половины лимона",
      " соль&nbsp;—  по&nbsp;вкусу",
      " растительное масло&nbsp;—  100&nbsp;мл",
      " холодная вода&nbsp;—  25&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "Листья мяты и&nbsp;кинзы кладем в&nbsp;стакан для&nbsp;блендера. Добавляем остальные ингредиенты.",
        image: `${process.env.PUBLIC_URL}/images/other_images/mint_and_cilantro.jpg`,
      },
      {
        description: "Перемалываем блендером до однородного состояния.",
        image: `${process.env.PUBLIC_URL}/images/other_images/grind_mint_and_cilantro.jpg`,
      },
      { description: "Подаем." },
    ],
    type: saucesType,
  },
  {
    title: "Соус Ремулад",
    image: `${process.env.PUBLIC_URL}/images/sauces/remoulade_sauce.jpg`,
    ingridients: [
      "желтки&nbsp;—  2&nbsp;шт.",
      " горчица&nbsp;—  2&nbsp;ч.л.",
      " лимонный сок&nbsp;или белый винный уксус&nbsp;—  1&nbsp;ст.л.",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
      " растительное масло&nbsp;—  250&nbsp;мл",
      " филе анчоусов&nbsp;—  5-6 шт.",
      " каперсы&nbsp;—  1&nbsp;ст.л.",
      " чеснок&nbsp;—  1&nbsp;зубчик",
      " мелко нарубленные огурчики-корнишоны&nbsp;—  1&nbsp;ст.л.",
      " петрушка&nbsp;—  3-4 веточки",
    ],
    cooking: [
      {
        description:
          "Кладем в&nbsp;миску желтки, горчицу и&nbsp;лимонный сок. Смешиваем венчиком до&nbsp;однородного состояния.",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_yolks_mustard_and_lemon_juice.jpg`,
      },
      {
        description:
          "Берем миксер и&nbsp;начинаем взбивать массу на&nbsp;средней скорости. Начинаем вливать масло&nbsp;—  первую четверть вливаем по&nbsp;каплям, медленно, затем можно вливать очень тонкой струйкой. Взбиваем, пока не&nbsp;получится густой соус.",
        image: `${process.env.PUBLIC_URL}/images/other_images/thick_white_sauce1.jpg`,
      },
      {
        description:
          "Добавляем в&nbsp;соус соль и&nbsp;перец по&nbsp;вкусу, а&nbsp;также мелко нарубленные анчоусы, каперсы, корнишоны, петрушку, а&nbsp;также натертый чеснок.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_anchovies_and_parsley.jpg`,
      },
      { description: "Перемешиваем и подаем." },
      {
        description:
          "Такой соус отлично подходит к&nbsp;рыбе и&nbsp;птице, неплохо и&nbsp;к мясу, а&nbsp;еще&nbsp;—  к&nbsp;печеному картофелю.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Клюквенно-апельсиновый соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/cranberry_orange_sauce.jpg`,
    ingridients: [
      "апельсины&nbsp;—  2&nbsp;шт.",
      "сахар&nbsp;—  220&nbsp;г",
      "лимонный сок&nbsp;—  2&nbsp;ст. л.",
      "имбирь (кусок, очищенный и&nbsp;порезанный на&nbsp;тонкие полоски)&nbsp;—  2,5&nbsp;см",
      "клюква (свежая или&nbsp;замороженная)&nbsp;—  350&nbsp;г",
      "белый перец&nbsp;—  1/2&nbsp;ст. л.",
    ],
    cooking: [
      {
        description:
          "Тонко срезать цедру с&nbsp;апельсина и&nbsp;нарезать на&nbsp;тонкие полоски. Выдавить сок&nbsp;из обоих апельсинов.",
      },
      {
        description:
          "Смешать сахар и&nbsp;лимонный сок&nbsp;в маленькой кастрюльке. Медленно довести до&nbsp;кипения, готовить около 6&nbsp;мин, пока не&nbsp;начнет сгущаться сироп. Сразу снять с&nbsp;огня и&nbsp;добавить остальные ингредиенты.",
      },
      {
        description:
          "Снова поставить на&nbsp;средний огонь, готовить около 5&nbsp;минут, помешивая или&nbsp;пока клюква не&nbsp;начнет лопаться, но&nbsp;не развалится совсем (замороженная клюква займет около 7&nbsp;мин). Подавать холодным.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Крем 'Шантильи'",
    image: `${process.env.PUBLIC_URL}/images/sauces/cream_chantilly.jpg`,
    ingridients: [
      "    сливки для&nbsp;взбивания (жирностью 30-36%)&nbsp;—  500&nbsp;мл",
      "    сахарная пудра&nbsp;—  4&nbsp;ст.л.",
      "    стручок ванили&nbsp;—  1&nbsp;шт.",
      "    лед",
    ],
    cooking: [
      {
        description:
          "Разрежьте стручок ванили вдоль пополам, кончиком ножа выскребите семена и&nbsp;разотрите их&nbsp;с сахарной пудрой.",
      },
      {
        description:
          "Очень холодные сливки положите в&nbsp;пустую миску, которая простояла в&nbsp;холодильнике минимум 1&nbsp;ч (венчик или&nbsp;насадки миксера тоже лучше охладить). Поставьте миску со&nbsp;сливками в&nbsp;большую миску, заполненную льдом, и&nbsp;взбейте сливки в&nbsp;пышную массу.",
      },
      {
        description:
          "Не прекращая взбивать, добавьте сахарную пудру с&nbsp;ванилью. Как&nbsp;только сливки будут держаться на&nbsp;венчике, взбивание прекратите, иначе вместо крема может получиться масло&nbsp;—  начало этого процесса можно определить по&nbsp;цвету: из&nbsp;однородного белого сливки делаются белыми в&nbsp;желтую крапинку (это и&nbsp;есть кусочки масла).",
      },
    ],
    type: saucesType,
  },
  {
    title: "Соус Бер Руж",
    image: `${process.env.PUBLIC_URL}/images/sauces/beurre_rouge_sauce.jpg`,
    ingridients: [
      "красное сухое вино&nbsp;—  150&nbsp;мл",
      " куриный бульон&nbsp;—  50&nbsp;мл",
      " сухой тимьян&nbsp;—  1/2&nbsp;ч.л.",
      " небольшие шампиньоны&nbsp;—  3-4 шт.",
      " маленькая луковица&nbsp;—  1&nbsp;шт.",
      " холодное сливочное масло&nbsp;—  130&nbsp;г",
      " соль и&nbsp;сахар&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Вливаем в&nbsp;сотейник вино и&nbsp;бульон, кладем тимьяна, нарезанный крупными кубиками лук&nbsp;и разрезанные на&nbsp;4-6 частей шампиньоны.",
        image: `${process.env.PUBLIC_URL}/images/other_images/champignons_in_wine.jpg`,
      },
      {
        description:
          "Ставим на&nbsp;огонь и&nbsp;увариваем смесь в&nbsp;4&nbsp;раза. Процеживаем, возвращаем жидкость в&nbsp;сотейник и&nbsp;снова ставим на&nbsp;огонь. На&nbsp;небольшом нагреве при&nbsp;постоянном энергичном размешивании венчиком по&nbsp;одному кубику вводим холодное масло.",
        image: `${process.env.PUBLIC_URL}/images/other_images/ready_made_beurre_rouge_sauce.jpg`,
      },
      { description: "Приправляем по вкусу солью и сахаром." },
    ],
    type: saucesType,
  },
  {
    title: "Домашняя арахисовая паста",
    image: `${process.env.PUBLIC_URL}/images/sauces/homemade_peanut_butter.jpg`,
    ingridients: [
      "сырой арахис&nbsp;—  500&nbsp;г",
      " соль и&nbsp;сахар&nbsp;—  по&nbsp;вкусу",
      " растительное масло&nbsp;—  1&nbsp;ч.л.",
    ],
    cooking: [
      {
        description: "Арахис кладем на противень.",
        image: `${process.env.PUBLIC_URL}/images/other_images/peanuts_in_blender.jpg`,
      },
      {
        description:
          "Отправляем в&nbsp;предварительно разогретую до&nbsp;180&nbsp;градусов духовку и&nbsp;жарим, периодически перемешивая, 15-20 минут.",
      },
      {
        description:
          "С готового арахиса убираем шелуху и&nbsp;кладем в&nbsp;чашу блендера. Блендер нужен именно такого типа, как&nbsp;на картинке&nbsp;—  чаша не&nbsp;подойдет&nbsp;—  будет постоянно забиваться.",
      },
      {
        description: "Мелем арахис в мелкую крошку.",
        image: `${process.env.PUBLIC_URL}/images/other_images/grinding_peanuts.jpg`,
      },
      {
        description:
          "Добавляем щепотку-другую соли и&nbsp;столько же&nbsp;сахара. Вливаем растительное масло. Продолжаем измельчать до&nbsp;состояния пасты.",
        image: `${process.env.PUBLIC_URL}/images/other_images/peanut_butter_in_blender.jpg`,
      },
      { description: "При необходимости добавляем еще соли и сахара." },
    ],
    type: saucesType,
  },
  {
    title: "Заправка из авокадо для салата 'Цезарь'",
    image: `${process.env.PUBLIC_URL}/images/sauces/avocado_dressing_for_caesar_salad.jpg`,
    ingridients: [
      "    авокадо (спелое)&nbsp;—  1&nbsp;шт.",
      "    лимон&nbsp;—  1&nbsp;шт.",
      "    майонез&nbsp;—  1/4&nbsp;стакана",
      "    оливковое масло (опционально)",
      "    соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
      "    чеснок&nbsp;—  1&nbsp;зубчик",
    ],
    cooking: [
      {
        description:
          "В оригинале заправку для&nbsp;салата 'Цезарь' готовят из&nbsp;яиц с&nbsp;оливковым маслом, чесноком и&nbsp;лимонным соком, но&nbsp;мы для&nbsp;простоты используем уже&nbsp;готовый майонез. А&nbsp;вот вариантзаправки для&nbsp;салата 'Цезарь' с&nbsp;добавлением авокадо. Авокадо не&nbsp;очень влияет на&nbsp;вкус заправки, но&nbsp;придает приятный салатовый цвет и&nbsp;маслянистую текстуру. ",
      },
      {
        description:
          "    Разрежьте авокадо пополам вдоль, извлеките косточку и&nbsp;выскоблите мякоть.",
      },
      {
        description:
          "    Поместите мякоть авокадо в&nbsp;чашу блендера вместе с&nbsp;майонезом.",
      },
      { description: "    Туда же&nbsp;выдавите сок&nbsp;одного лимона." },
      { description: "    Добавьте измельченный чеснок." },
      { description: "    Соль и&nbsp;перец по&nbsp;вкусу." },
      {
        description:
          "    Взбивайте блендером до&nbsp;образования однородной смеси. Если консистенция получается слишком густой, добавьте воды или&nbsp;оливкового масла.",
      },
      {
        description:
          "    Но&nbsp;не забывайте, что&nbsp;заправка должна быть достаточно густой.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Соус Ромеско",
    image: `${process.env.PUBLIC_URL}/images/sauces/romesco_sauce.jpg`,
    ingridients: [
      "    вишневый уксус&nbsp;—  1&nbsp;ст. л.",
      "    миндаль маркона&nbsp;—  150&nbsp;г",
      "    морская соль&nbsp;—  по&nbsp;вкусу",
      "    оливковое масло&nbsp;—  3/4&nbsp;стакана",
      "    перец каскабель или&nbsp;норас или&nbsp;лю&nbsp;—  2-4 шт.",
      "    черствый твердый хлеб&nbsp;—  2&nbsp;ломтика",
      "    чеснок&nbsp;—  4&nbsp;зубчика",
    ],
    cooking: [
      {
        description:
          "Соус Ромеско подают, как&nbsp;правило, к&nbsp;морепродуктам, реже&nbsp;—  к&nbsp;мясу, овощам. Это гордость каталонской кухни, и&nbsp;заметьте&nbsp;—  покупной соус Ромеско не&nbsp;даст вам&nbsp;того же&nbsp;оригинального вкуса, как&nbsp;приготовленный собственными руками. Этот соус можно делать сразу в&nbsp;больших количествах&nbsp;—  он&nbsp;долго и&nbsp;хорошо хранится.",
      },
      {
        description:
          "    Замочите перцы в&nbsp;холодной воде. Пусть они&nbsp;потеряют лишнюю горечь и&nbsp;раскроют аромат. Через 2&nbsp;часа можно доставать.",
      },
      { description: "    Теперь удалите семена." },
      { description: "    В&nbsp;комбайне смешайте сухарики." },
      { description: "    Добавьте слегка обжаренный миндаль." },
      { description: "    Туда же&nbsp;чеснок и&nbsp;нарезанный перец." },
      { description: "    Теперь немного оливкового масла." },
      {
        description:
          "    И&nbsp;капельку вишневого уксуса. Соль&nbsp;—  по&nbsp;вкусу.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Белый соус для пиццы",
    image: `${process.env.PUBLIC_URL}/images/sauces/white_pizza_sauce.jpg`,
    ingridients: [
      "    сливочное масло&nbsp;—  50&nbsp;г",
      "    чеснок&nbsp;—  3&nbsp;зубчика",
      "    мука&nbsp;—  3&nbsp;ст. л.",
      "    молоко&nbsp;—  200&nbsp;мл",
      "    свежий базилик&nbsp;—  по&nbsp;вкусу",
      "    соль&nbsp;—  по&nbsp;вкусу",
      "    перец&nbsp;—  по&nbsp;вкусу",
      "    пармезан&nbsp;—  100&nbsp;г",
    ],
    cooking: [
      {
        description:
          "Первым делом в&nbsp;небольшом сотейнике растопите сливочное масло.",
      },
      {
        description:
          "Параллельно очистите и&nbsp;измельчите чеснок. При&nbsp;желании можете также использовать молотый сушеный чеснок.",
      },
      {
        description:
          "Добавьте чеснок в&nbsp;сотейник, перемешайте массу и&nbsp;прогрейте около 1&nbsp;минуты.",
      },
      { description: "Следом всыпьте муку." },
      {
        description:
          "И начните активно перемешивать, пока масса не&nbsp;станет однородной и&nbsp;без комочков.",
      },
      { description: "Тонкой струйкой влейте молоко, продолжая перемешивать." },
      {
        description:
          "Самое время посолить и&nbsp;поперчить по&nbsp;вкусу. Можно в&nbsp;этот простой рецепт белого соуса для&nbsp;пиццы добавить щепотку мускатного ореха.",
      },
      {
        description:
          "Продолжайте перемешивать, чтобы соус не&nbsp;подгорел и&nbsp;загустевал равномерно.",
      },
      {
        description:
          "Вымойте, обсушите как&nbsp;следует и&nbsp;измельчите базилик.",
      },
      {
        description:
          "Выложите зелень в&nbsp;сотейник. Если под&nbsp;рукой нет&nbsp;свежего, возьмите сушеный базилик.",
      },
      {
        description:
          "Последний штрих, без&nbsp;которого сложно представить белый соус для&nbsp;пиццы в&nbsp;домашних условиях,&nbsp;—  это&nbsp;пармезан.",
      },
      {
        description:
          "Выложите сыр&nbsp;в сотейник. Как&nbsp;следует перемешайте соус, можно снимать с&nbsp;огня. Вот&nbsp;и все: немного остудите&nbsp;—  и&nbsp;можете использовать.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Соус 'Ткемали'",
    image: `${process.env.PUBLIC_URL}/images/sauces/sauce_tkemali.jpeg`,
    ingridients: [
      "    кориандр&nbsp;—  3&nbsp;ч.л.",
      "    красный молотый перец&nbsp;—  1,5&nbsp;ч.л.",
      "    сухой укроп&nbsp;—  2&nbsp;ст.л.",
      "    свежие сливы ткемали&nbsp;—  1&nbsp;кг",
      "    рубленая свежая кинза&nbsp;—  3&nbsp;ч.л.",
      "    вода&nbsp;—  0,25&nbsp;стакана",
      "    чеснок&nbsp;—  1&nbsp;головка",
      "    сухая мята&nbsp;—  2&nbsp;ч.л.",
    ],
    cooking: [
      {
        description:
          "Сливы вымыть, разрезать пополам. Сложить в&nbsp;кастрюлю, влить воду и&nbsp;варить на&nbsp;слабом огне, пока сливы полностью не&nbsp;разварятся. Сливовый отвар слить в&nbsp;отдельную посуду. Сливы откинуть на&nbsp;сито и&nbsp;протереть. Поставить протертую мякоть на&nbsp;маленький огонь и&nbsp;варить 40-45 мин., время от&nbsp;времени подливая отвар, до&nbsp;густоты сметаны. Кинзу вымыть, обсушить и&nbsp;мелко нарезать. Добавить в&nbsp;сотейник все&nbsp;пряности и&nbsp;кинзу. Варить 5&nbsp;мин. Разлить по&nbsp;бутылкам, сверху влить по&nbsp;1&nbsp;ч. л. растительного масла.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Вареная сгущенка в микроволновке",
    image: `${process.env.PUBLIC_URL}/images/sauces/boiled_condensed_milk_in_the_microwave.jpg`,
    ingridients: ["сгущенка&nbsp;—  400&nbsp;г"],
    cooking: [
      {
        description:
          "Для начала ищем стеклянную или&nbsp;керамическую миску, куда мы&nbsp;будем выливать нашу сгущенку. Это&nbsp;первый секрет, т.к. сгущенка почему-то плохо себя ведет в&nbsp;контакте с&nbsp;пластиком.",
      },
      {
        description:
          "Далее ставим микроволновку на&nbsp;2&nbsp;минуты при&nbsp;мощности 700&nbsp;Вт",
      },
      {
        description:
          "Теперь достаем, перемешиваем, и&nbsp;снова на&nbsp;2&nbsp;минуты при&nbsp;той же&nbsp;мощности. Это&nbsp;еще одна хитрость, как&nbsp;сделать вареную сгущенку в&nbsp;микроволновке правильно, а&nbsp;то в&nbsp;микроволновке она&nbsp;обычно очень любит 'сбегать' ;)",
      },
      {
        description:
          "Варим, перемешивая каждые две&nbsp;минуты, примерно 8&nbsp;минут в&nbsp;общей сложности. То&nbsp;есть, в&nbsp;четыре захода по&nbsp;2&nbsp;минуты. В&nbsp;общем, доводите ее&nbsp;до своей любимой консистенции и&nbsp;цвета, ведь у&nbsp;каждого из&nbsp;нас есть самое вкусное состояние вареной сгущенки, а&nbsp;микроволновка позволяет не&nbsp;упустить этот момент.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Дип из красной фасоли",
    image: `${process.env.PUBLIC_URL}/images/sauces/red_bean_dip.jpg`,
    ingridients: [
      "отварная или&nbsp;консервированная красная фасоль&nbsp;—  300&nbsp;г (вес нетто, без&nbsp;жидкости)",
      " сметана&nbsp;—  2&nbsp;ст.л.",
      " чеснок&nbsp;—  2-3 зубчика",
      " нарубленный маринованный перец чили халапеньо&nbsp;—  1&nbsp;ст.л. (можно обойтись порошком чили по&nbsp;вкусу и&nbsp;любви к&nbsp;острому)",
      " сок&nbsp;половины лимона",
      " соль по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Кладем все ингредиенты, кроме соли и лимонного сока, в миску.",
        image: `${process.env.PUBLIC_URL}/images/other_images/beans_garlic_and_sour_cream.jpg`,
      },
      {
        description: "Перемалываем блендером до состояния пасты.",
        image: `${process.env.PUBLIC_URL}/images/other_images/make_bean_and_garlic_paste.jpg`,
      },
      {
        description:
          "Приправляем по&nbsp;вкусу солью и&nbsp;лимонным соком. Подаем с&nbsp;хлебцами, лавашем, свежими овощами.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Шоколадно-масляный крем для тортов",
    image: `${process.env.PUBLIC_URL}/images/sauces/chocolate_butter_cream_for_cakes.jpg`,
    ingridients: [
      "сливочное масло&nbsp;—  120&nbsp;г",
      "яйцо&nbsp;—  1&nbsp;шт.",
      "сахарная пудра&nbsp;—  150&nbsp;г",
      "какао-порошок&nbsp;—  15&nbsp;г",
      "ледяная вода&nbsp;—  15&nbsp;мл",
      "ванильный экстракт&nbsp;—  5&nbsp;г",
    ],
    cooking: [
      {
        description:
          "Шоколадно-масляный крем для&nbsp;тортов&nbsp;—  один из&nbsp;тех кремов, которые можно использовать и&nbsp;для начинки тортов, и&nbsp;для их&nbsp;украшения. Также его&nbsp;можно добавлять в&nbsp;кексы, пирожные и&nbsp;многие другие десерты&nbsp;—  насколько фантазия позволяет.",
      },
      {
        description:
          "Сливочное масло взбиваем до&nbsp;воздушности. Добавляем туда яйца и&nbsp;взбиваем еще&nbsp;раз. Вмешиваем в&nbsp;образовавшуюся массу сахарную пудру. Перемешиваем.",
      },
      {
        description:
          "Смешиваем какао-порошок, воду и&nbsp;экстракт. Хорошенько перемешиваем и&nbsp;добавляем в&nbsp;масляную смесь. Перемешиваем.",
      },
      { description: "Шоколадно-масляный крем для&nbsp;тортов готов!" },
    ],
    type: saucesType,
  },
  {
    title: "Медовый соус барбекю",
    image: `${process.env.PUBLIC_URL}/images/sauces/honey_bbq_sauce.jpg`,
    ingridients: [
      "крупная луковица&nbsp;—  1&nbsp;шт.",
      " чеснок&nbsp;—  3&nbsp;зубчика",
      " коричневый сахар&nbsp;—  3&nbsp;ст.л.",
      " мед&nbsp;—  2&nbsp;ст.л.",
      " вустерширский соус&nbsp;—  2&nbsp;ст.л.",
      " яблочный уксус&nbsp;—  100&nbsp;мл",
      " табаско&nbsp;—  1-2 ч.л. (даже с&nbsp;1&nbsp;ч.л. он&nbsp;уже прижигает, 2&nbsp;ч.л.&nbsp;—  для&nbsp;больших любителей острого)",
      " кетчуп без&nbsp;добавок (не шашлычный, не&nbsp;чесночный&nbsp;—  нейтральный томатный)&nbsp;—  400&nbsp;г",
    ],
    cooking: [
      { description: "Мелко рубим лук и чеснок." },
      {
        description:
          "В сотейнике на&nbsp;среднем огне разогреваем 2&nbsp;ст.л. растительного масла. Кладем лук&nbsp;и жарим, периодически помешивая, до&nbsp;мягкости, 4-5 минут.",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_onions2.jpg`,
      },
      {
        description:
          "Добавляем чеснок и&nbsp;жарим, помешивая, еще&nbsp;30&nbsp;секунд. Добавляем все&nbsp;остальные ингредиенты.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_ketchup.jpg`,
      },
      {
        description:
          "Перемешиваем и&nbsp;доводим до&nbsp;кипения. Варим на&nbsp;небольшом огне 2-3 минуты и&nbsp;выключаем.",
      },
      {
        description: "Перебиваем соус блендером до однородного состояния.",
        image: `${process.env.PUBLIC_URL}/images/other_images/blend_the_barbecue_sauce.jpg`,
      },
      { description: "Остужаем, разливаем в банки. Хранится неделю точно." },
    ],
    type: saucesType,
  },
  {
    title: "Соус 'Тартар'",
    image: `${process.env.PUBLIC_URL}/images/sauces/tartar_sauce.jpg`,
    ingridients: [
      "майонез&nbsp;—  120&nbsp;г",
      " нарубленные корнишоны&nbsp;—  1&nbsp;ст.л.",
      " нарубленные каперсы&nbsp;—  1&nbsp;ст.л.",
      " нарубленный репчатый лук&nbsp;—  1&nbsp;ст.л.",
      " свежевыжатый лимонный сок&nbsp;—  2&nbsp;ст.л.",
      " соль и&nbsp;черный молотый перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description: "Смешиваем корнишоны, лук и каперсы.",
      },
      {
        description:
          "Добавляем в&nbsp;миску к&nbsp;майонезу, вливаем лимонный сок, приправляем солью и&nbsp;перцем. Перемешиваем.",
      },
      {
        description:
          "P.S. Помимо указанных в&nbsp;рецепте наполнителей вы&nbsp;можете добавить в&nbsp;соус укроп, петрушку или&nbsp;чеснок.",
      },
    ],
  },
  {
    title: "Сливочно-ореховый соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/creamy_nut_sauce.jpg`,
    ingridients: [
      "сметана&nbsp;—  100&nbsp;г",
      "соевый соус&nbsp;—  2&nbsp;ч. л.",
      "ядра грецких орехов&nbsp;—  3-4 шт.",
    ],
    cooking: [
      {
        description:
          "Орехи измельчаем в&nbsp;ступке так, чтобы оставались мелкие кусочки.",
      },
      {
        description: "Добавляем сметану и&nbsp;соевый соус.",
      },
      {
        description: "Всё перемешиваем.",
      },
      {
        description:
          "Подаем с&nbsp;овощами, например, кабачками, обжаренными кружочкам.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Дип из авокадо с мятой",
    image: `${process.env.PUBLIC_URL}/images/sauces/avocado_mint_dip.jpg`,
    ingridients: [
      "крупное спелое авокадо&nbsp;—  1&nbsp;шт.",
      " сок&nbsp;половины лайма",
      " мята (нужны только листья)&nbsp;—  3-4 веточки",
      " сливочный сыр&nbsp;-100 г",
      " соль&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Авокадо очищаем от&nbsp;кожуры, удаляем косточку. Нарезаем на&nbsp;куски и&nbsp;кладем в&nbsp;чашу блендера. Добавляем сок&nbsp;лайма, мяту и&nbsp;соль.",
        image: `${process.env.PUBLIC_URL}/images/other_images/avocado_with_mint_in_blender.jpg`,
      },
      {
        description:
          "Перемалываем до однородного состояния. Добавляем сливочный сыр.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_cream_cheese_to_avocado.jpg`,
      },
      {
        description: "Снова перемалываем.",
        image: `${process.env.PUBLIC_URL}/images/other_images/green_sauce.jpg`,
      },
      { description: "При необходимости добавляем соль и лаймовый сок." },
      { description: "Подаем с чипсами, сухариками или гренками." },
    ],
    type: saucesType,
  },
  {
    title: "Постный овощной соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/lenten_vegetable_sauce.jpg`,
    ingridients: [
      "авокадо&nbsp;—  1&nbsp;часть",
      "свежий огурец&nbsp;—  1&nbsp;часть ",
      "соль и&nbsp;специи&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Авокадо и&nbsp;огурец очистить, нарезать произвольно некрупными кусочками и&nbsp;перемолоть до&nbsp;кашицеобразной консистенции при&nbsp;помощи блендера, подсолить и&nbsp;приправить специями по&nbsp;вкусу. Чем&nbsp;больше огурца будет добавлено, тем&nbsp;более жидким будет соус.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Голландский соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/hollandaise_sauce.jpg`,
    ingridients: [
      "маленькая луковица&nbsp;—  1/2&nbsp;шт.",
      " петрушка&nbsp;—  2-3 веточки",
      " лавровый лист&nbsp;—  1&nbsp;шт.",
      " белое сухое вино&nbsp;—  150&nbsp;мл",
      " белый винный уксус&nbsp;—  2&nbsp;ст.л.",
      " желтки&nbsp;—  3&nbsp;шт.",
      " топленое сливочное масло&nbsp;—  150&nbsp;г",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Мелко рубим лук. Кладем в&nbsp;сотейник, добавляем петрушку, лавровый лист, вливаем вино и&nbsp;уксус. Ставим на&nbsp;средний огонь и&nbsp;увариваем до&nbsp;четверти объема (должно остаться около 30&nbsp;мл жидкости).",
      },
      {
        description: "Желтки соединяем с винной смесью.",
      },
      {
        description:
          "Ставим миску на&nbsp;водяную баню (вода должна еле&nbsp;кипеть) и&nbsp;постоянно взбиваем венчиком до&nbsp;тех пор, пока на&nbsp;соусе на&nbsp;будут оставаться следы от&nbsp;венчика.",
      },
      {
        description:
          "Снимаем с&nbsp;огня. Продолжая взбивать, вливаем растопленное сливочное масло, остуженное до&nbsp;комнатной температуры&nbsp;—  сначала по&nbsp;каплям, потом тонкой струйкой.",
      },
      {
        description:
          "Лучше подавать его&nbsp;свежим, но&nbsp;если соус остался, вы&nbsp;можете хранить его&nbsp;сутки в&nbsp;холодильнике с&nbsp;пленкой на&nbsp;поверхности и&nbsp;разогреть на&nbsp;все той&nbsp;же водяной бане.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Чесночная заправка винегрет",
    image: `${process.env.PUBLIC_URL}/images/sauces/garlic_vinaigrette_dressing.jpg`,
    ingridients: [
      "чеснок&nbsp;—  2&nbsp;зубчика",
      " красный винный уксус&nbsp;—  3&nbsp;ст.л.",
      " оливковое масло&nbsp;—  4-5 ст.л.",
      " соль и&nbsp;молотый черный перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Кладем чеснок в&nbsp;ступку вместе с&nbsp;2&nbsp;большими щепотками соли. Растираем пестиком в&nbsp;пюре.",
      },
      {
        description: "Вливаем уксус, размешиваем и даем постоять 3 минуты.",
      },
      {
        description:
          "Тонкой струйкой вливаем масло, непрерывно взбивая вилкой, пока не&nbsp;образуется эмульсия (масло должно равномерно смешаться с&nbsp;остальными ингредиентами).",
      },
      { description: "При необходимости добавляем еще соли и перца." },
      { description: "Заправка готова!" },
    ],
    type: saucesType,
  },
  {
    title: "Хумус с вялеными томатами",
    image: `${process.env.PUBLIC_URL}/images/sauces/hummus_with_sun_dried_tomatoes.jpg`,
    ingridients: [
      "отварной нут&nbsp;—  350&nbsp;г",
      " вяленые помидоры&nbsp;—  5-6 половинок",
      " масло от&nbsp;помидоров&nbsp;—  3&nbsp;ст.л.",
      " сок&nbsp;четверти лимона",
      " чеснок&nbsp;—  1-2 зубчика",
      " тахина&nbsp;—  3&nbsp;ст.л.",
      " паприка&nbsp;—  1/3&nbsp;ч.л.",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description: "Каждую горошину нута очищаем от оболочки.",
        image: `${process.env.PUBLIC_URL}/images/other_images/peeled_chickpeas.jpg`,
      },
      {
        description:
          "Добавляем все&nbsp;остальные ингредиенты и&nbsp;перемалываем блендером до&nbsp;однородного состояния. Если смесь густовата, добавляем немного жидкости от&nbsp;варки нута.",
        image: `${process.env.PUBLIC_URL}/images/other_images/grind_chickpeas_with_spices_in_a_blender.jpg`,
      },
      {
        description:
          "Подаем с лавашом и свежими овощами. По желанию поливаем оливковым маслом.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Айоли с базиликом",
    image: `${process.env.PUBLIC_URL}/images/sauces/aioli_with_basil.jpg`,
    ingridients: [
      "белый хлеб без&nbsp;корки&nbsp;—  2&nbsp;куска",
      " молоко&nbsp;—  100&nbsp;мл",
      " чеснок&nbsp;—  5&nbsp;зубчиков",
      " соль&nbsp;—  1/2&nbsp;ч.л.",
      " желток&nbsp;—  1&nbsp;шт.",
      " листья зеленого базилика&nbsp;—  6-8 шт.",
      " растительное масло&nbsp;—  250&nbsp;мл",
      " лимонный сок&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description: "Хлеб размачиваем в молоке.",
        image: `${process.env.PUBLIC_URL}/images/other_images/bread_in_milk.jpg`,
      },
      {
        description: "Чеснок с солью кладем в ступку и растираем.",
        image: `${process.env.PUBLIC_URL}/images/other_images/garlic_in_a_mortar.jpg`,
      },
      {
        description: "В итоге должна получиться практически однородная паста.",
        image: `${process.env.PUBLIC_URL}/images/other_images/minced_garlic.jpg`,
      },
      {
        description:
          "Кладем в блендер размоченный хлеб, базилик, растертый чеснок и желток.",
      },
      {
        description:
          "Перебиваем до&nbsp;однородного состояния. Не&nbsp;выключая блендер, начинаем вливать масло&nbsp;—  сначала по&nbsp;каплям, затем&nbsp;—  тонкой струйкой. Взбиваем, пока не&nbsp;вольем все&nbsp;масло.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_basil.jpg`,
      },
      { description: "Готовый соус приправляем по вкусу лимонным соком." },
    ],
    type: saucesType,
  },
  {
    title: "Имбирный сироп",
    image: `${process.env.PUBLIC_URL}/images/sauces/ginger_syrup.jpg`,
    ingridients: [
      "свежий имбирь&nbsp;—  250&nbsp;г",
      " сахар&nbsp;—  400&nbsp;г",
      " вода&nbsp;—  500&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "Имбирь чистим и&nbsp;нарезаем ломтиками. Добавляем сахар, вливаем воду и&nbsp;ставим на&nbsp;огонь.",
        image: `${process.env.PUBLIC_URL}/images/other_images/peeled_ginger_in_water.jpg`,
      },
      {
        description:
          "Доводим до&nbsp;кипения, уменьшаем огонь и&nbsp;варим примерно 1&nbsp;час. Накрываем крышкой и&nbsp;даем постоять около часа.",
      },
      {
        description: "Затем процеживаем и охлаждаем.",
        image: `${process.env.PUBLIC_URL}/images/other_images/drain_the_water_from_the_ginger.jpg`,
      },
      {
        description: "Кусочки имбиря кладем на фольгу и подсушиваем.",
        image: `${process.env.PUBLIC_URL}/images/other_images/ginger_on_foil.jpg`,
      },
      {
        description:
          "Сироп можно хранить до&nbsp;недели в&nbsp;холодильнике или&nbsp;разлить в&nbsp;стерилизованные банки и&nbsp;закатать.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Клюквенно-имбирный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/cranberry_ginger_sauce.jpg`,
    ingridients: [
      "свежий имбирь&nbsp;—  250&nbsp;г",
      " сахар&nbsp;—  400&nbsp;г",
      " вода&nbsp;—  500&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "В ковшике смешиваем клюкву, сахар, имбирь и 2 ст.л. воды.",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_cranberries_ginger_sugar_and_water.jpg`,
      },

      {
        description:
          "Ставим на плиту, доводим до кипения и варим на умеренном огне примерно 10-15 минут. Сироп должен загустеть.",
        image: `${process.env.PUBLIC_URL}/images/other_images/thick_cranberry_syrup.jpg`,
      },
      {
        description:
          "Снимаем соус с огня, добавляем уксус и перемешиваем. Остужаем до комнатной температуры и подаем.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Карамельный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/caramel_sauce.jpg`,
    ingridients: [
      "сахар&nbsp;—  200&nbsp;г",
      " сливочное масло&nbsp;—  150&nbsp;г",
      " жирные сливки (22-35%)&nbsp;—  125&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "Кладем сахар в&nbsp;ковшик с&nbsp;толстым дном. Ставим на&nbsp;средний огонь. Постоянно помешивая, доводим до&nbsp;кипения. Варим до&nbsp;тех пор, пока сахар не&nbsp;растворится и&nbsp;масса не&nbsp;станет янтарного цвета.",
      },
      {
        description:
          "Не снимая ковш с&nbsp;огня, добавляем нарезанное на&nbsp;небольшие кусочки масло и&nbsp;перемешиваем до&nbsp;растворения последнего.",
      },
      {
        description:
          "Снимаем с&nbsp;огня и&nbsp;тонкой струйкой, непрерывно помешивая, вливаем сливки. Размешиваем до&nbsp;однородности и&nbsp;гладкости массы.",
      },
      {
        description:
          "Даем соусу остыть до&nbsp;комнатной температуры, затем перекладываем/переливаем в&nbsp;банку, накрываем и&nbsp;ставим в&nbsp;холодильник.",
      },
      {
        description:
          "P.S. Если вы&nbsp;ходите получить соус погуще&nbsp;—  добавьте больше масла. В&nbsp;таком случае он&nbsp;будет хорошо мазаться после охлаждения. ",
      },
    ],
    type: saucesType,
  },
  {
    title: "Огуречно-ананасовая сальса",
    image: `${process.env.PUBLIC_URL}/images/sauces/cucumber_pineapple_salsa.jpg`,
    ingridients: [
      "сок 1&nbsp;лайма (2&nbsp;ст.л)",
      " мед&nbsp;—  1&nbsp;ст.л.",
      " растительное масло&nbsp;—  1&nbsp;ст.л.",
      " огурцы&nbsp;—  2-3 шт.",
      " ананас&nbsp;—  1&nbsp;шт. (понадобится 1&nbsp;стакан нарезанной мякоти)",
      " зеленый лук&nbsp;—  2-3 пера",
      " маленький перчик чили&nbsp;—  1&nbsp;шт.",
      " нарубленный базилик&nbsp;—  2&nbsp;ст.л.",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Эта очень свежая и&nbsp;нетривиальная фруктово-овощная приправа&nbsp;—  прекрасное дополнение к&nbsp;блюдам из&nbsp;птицы и&nbsp;рыбы. Казалось бы&nbsp;практически безвкусный огурец придает этой сальсе такую свежесть, что&nbsp;остановиться просто невозможно. ",
      },
      {
        description:
          "В небольшой миске смешиваем мед, растительное масло и&nbsp;лаймовый сок. Отставляем в&nbsp;сторону.",
      },
      {
        description: "Ананас нарезаем на маленькие кусочки.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_pineapple.jpg`,
      },
      {
        description: "Огурец нарезаем так же.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_cucumber.jpg`,
      },
      {
        description: "Мелко режем зелень и перчик.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_greens_and_hot_peppers.jpg`,
      },
      {
        description:
          "Смешиваем все в миске вместе с заправкой. Солим и перчим по вкусу.",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_pineapple_with_cucumber_and_herbs.jpg`,
      },
      { description: "Подаем в охлажденном виде." },
    ],
    type: saucesType,
  },
  {
    title: "Огуречно-йогуртовый дип",
    image: `${process.env.PUBLIC_URL}/images/sauces/cucumber_yogurt_dip.jpg`,
    ingridients: [
      "натуральный йогурт (предпочтителен густой греческий)&nbsp;—  300&nbsp;г",
      " небольшие огурцы&nbsp;—  2&nbsp;шт.",
      " нарубленная петрушка&nbsp;—  3&nbsp;ст.л.",
      " сок&nbsp;половины лайма",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description: "Огурцы очищаем от кожицы, убираем семена, мелко рубим.",
        image: `${process.env.PUBLIC_URL}/images/other_images/peeled_chopped_cucumbers_with_parsley.jpg`,
      },
      {
        description:
          "Смешиваем с йогуртом, петрушкой, соком лайма. Солим и перчим по вкусу.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Соус батард",
    image: `${process.env.PUBLIC_URL}/images/sauces/batard_sauce.jpg`,
    ingridients: [
      "сливочное масло&nbsp;—  250&nbsp;г",
      " мука&nbsp;—  3&nbsp;ст.л.",
      " бульон&nbsp;—  500&nbsp;мл",
      " желток&nbsp;—  1&nbsp;шт.",
      " жирные сливки&nbsp;—  500&nbsp;мл",
      " лимонный сок&nbsp;—  1&nbsp;ст.л.",
    ],
    cooking: [
      {
        description:
          "Растапливаем в&nbsp;кастрюле 50&nbsp;г сливочного масла и&nbsp;выключаем огонь. Добавляем муку и&nbsp;тщательно перемешиваем.",
      },
      {
        description:
          "В отдельной посуде доводим до&nbsp;кипения бульон. Вливаем его&nbsp;в кастрюлю и&nbsp;энергично перемешиваем венчиком до&nbsp;однородности.",
      },
      {
        description:
          "В миске смешиваем сливки и&nbsp;желток. Тонкой струйкой, постоянно взбивая венчиком, вливаем около 100&nbsp;мл соуса из&nbsp;кастрюли. Затем тонкой струйкой вливаем весь остальной соус, хорошо перемешиваем и&nbsp;возвращаем смесь в&nbsp;кастрюлю. Ставим на&nbsp;плиту, доводим на&nbsp;среднем огне до&nbsp;кипения, кипятим 5&nbsp;секунд и&nbsp;выключаем. Снимаем с&nbsp;плиты и&nbsp;по паре кубиков за&nbsp;раз добавляем 150-200 г&nbsp;сливочного масла. Заправляем лимонным соком, солим и&nbsp;перчим. Снова перемешиваем.",
      },
      { description: "Подаем теплым." },
    ],
    type: saucesType,
  },
  {
    title: "Сливочно-огуречный соус с чесноком",
    image: `${process.env.PUBLIC_URL}/images/sauces/creamy_cucumber_sauce_with_garlic.jpg`,
    ingridients: [
      "средний грунтовой огурец&nbsp;—  1&nbsp;шт.",
      " сливочный сыр&nbsp;типа филадельфии&nbsp;—  120&nbsp;г",
      " сметана (25-30%)&nbsp;—  3&nbsp;ст.л.",
      " майонез&nbsp;—  2&nbsp;ст.л.",
      " чеснок&nbsp;—  1-2 зубчика",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description: "Огурец трем на крупную терку и немного отжимаем сок.",
        image: `${process.env.PUBLIC_URL}/images/other_images/grated_cucumber.jpg`,
      },
      {
        description:
          "Смешиваем с&nbsp;размягченным сливочным сыром, сметаной, майонезом и&nbsp;тертым чесноком. Солим и&nbsp;перчим по&nbsp;вкусу.",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_cucumber_with_sour_cream_and_mayonnaise.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Мятно-йогуртовая заправка",
    image: `${process.env.PUBLIC_URL}/images/sauces/mint_yogurt_dressing.jpg`,
    ingridients: [
      "натуральный йогурт&nbsp;—  120&nbsp;г",
      " небольшая горсть листьев мяты",
      " соль и&nbsp;молотый черный перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Кладем йогурт и мяту в чашу блендера и перемалываем. Солим и перчим по вкусу.",
      },
      {
        description:
          "Эта заправка отлично подойдет как&nbsp;для легких салатов на&nbsp;основе салатной зелени, так&nbsp;и для&nbsp;более сытных и&nbsp;'весомых' салатов с&nbsp;картофелем. Кроме того, ее&nbsp;можно использовать в&nbsp;качестве макательного соуса или&nbsp;как поливку для&nbsp;печеного картофеля. ",
      },
      {
        description:
          "Мяту при&nbsp;желании можно заменить на&nbsp;укроп&nbsp;—  но&nbsp;тогда это&nbsp;будет уже&nbsp;совсем другая история.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Сальса фреска",
    image: `${process.env.PUBLIC_URL}/images/sauces/salsa_fresco.jpg`,
    ingridients: [
      "спелые помидоры&nbsp;—  2&nbsp;шт.",
      " небольшая салатная луковица&nbsp;—  1&nbsp;шт.",
      " небольшой перчик чили&nbsp;—  1&nbsp;шт.",
      " чеснок&nbsp;—  1&nbsp;зубчик",
      " сок&nbsp;лайма&nbsp;—  1&nbsp;ст.л.",
      " небольшая горстка листьев кинзы (петрушки)",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description: "Мелко рубим лук.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_onion.jpg`,
      },
      {
        description: "Помидоры нарезаем кубиками со стороной 0,5-0,7 см.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_tomatoes.jpg`,
      },
      {
        description: "Мелко рубим перчик, чеснок и кинзу.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_hot_peppers_garlic_and_cilantro.jpg`,
      },
      {
        description: "Смешиваем все в миске вместе с соком лайма.",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_with_tomato_and_lime_juice.jpg`,
      },
      {
        description:
          "Накрываем и даем постоять при комнатной температуре около 30 минут.",
      },
      { description: "Подаем с мясом или птицей." },
    ],
    type: saucesType,
  },
  {
    title: "Соус песто",
    image: `${process.env.PUBLIC_URL}/images/sauces/pesto_sauce.jpg`,
    ingridients: [
      "зеленый (!) базилик&nbsp;—  1&nbsp;пучок (50&nbsp;г)",
      " тертый пармезан&nbsp;—  50&nbsp;г",
      " кедровые орешки&nbsp;—  3&nbsp;ст.л.",
      " чеснок&nbsp;—  2-3 зубчика",
      " оливковое масло&nbsp;—  100&nbsp;мл",
      " соль",
    ],
    cooking: [
      {
        description:
          "Крупно нарезаем чеснок, режем базилик. Складываем все&nbsp;ингредиенты в&nbsp;блендер и&nbsp;измельчаем до&nbsp;состояния однородной массы.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Дип из авокадо и голубого сыра",
    image: `${process.env.PUBLIC_URL}/images/sauces/avocado_and_blue_cheese_dip.jpg`,
    ingridients: [
      "авокадо&nbsp;—  1&nbsp;шт.",
      " маленькая луковица&nbsp;—  1/2&nbsp;шт. (1&nbsp;ст.л. в&nbsp;мелко нарубленном виде)",
      " голубой сыр&nbsp;—  50&nbsp;г",
      " сметана&nbsp;—  60&nbsp;г",
      " лимонный сок&nbsp;—  1&nbsp;ст.л.",
      " соль и&nbsp;молотый черный перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Кладем все ингредиенты, кроме соли, перца и лимонного сока в чашу.",
        image: `${process.env.PUBLIC_URL}/images/other_images/red_onion_and_blue_cheese.jpg`,
      },
      { description: "Измельчаем при помощи погружного блендера." },
      {
        description:
          "Добавляем лимонный сок, соли и&nbsp;перец по&nbsp;вкусу. Перемешиваем и&nbsp;перекладываем в&nbsp;пиалу.",
        image: `${process.env.PUBLIC_URL}/images/other_images/ready_made_dip_sauce.jpg`,
      },
      { description: "Подаем с крекерами, гренками или чипсами." },
    ],
    type: saucesType,
  },
  {
    title: "Дип из печеных перцев и грецких орехов",
    image: `${process.env.PUBLIC_URL}/images/sauces/roasted_peppers_and_walnuts_dip.jpg`,
    ingridients: [
      "средние красные сладкие перцы&nbsp;—  3&nbsp;шт.",
      " панировочные сухари хорошего качества&nbsp;—  4&nbsp;ст.л.",
      " чеснок&nbsp;—  1&nbsp;зубчик",
      " грецкие орехи&nbsp;—  120&nbsp;г",
      " молотая зира&nbsp;—  3/4&nbsp;ч.л.",
      " молотая сладкая паприка&nbsp;—  1,5&nbsp;ч.л.",
      " бальзамический уксус&nbsp;—  1&nbsp;ст.л.",
      " лимонный сок&nbsp;—  2&nbsp;ст.л.",
      " оливковое масло&nbsp;—  2&nbsp;ч.л.",
      " соль и&nbsp;молотый черный перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Разогреваем духовку до&nbsp;200&nbsp;градусов. Перец кладем на&nbsp;решетку, снизу помещаем форму для&nbsp;запекания. Ставим перцы в&nbsp;духовку и&nbsp;запекаем до&nbsp;черных подпалин, около 25-30 минут.",
      },
      {
        description:
          "Вынимаем перец из&nbsp;духовки и&nbsp;кладем в&nbsp;плотный полиэтиленовый пакет или&nbsp;в плотно закрывающийся контейнер. Закрываем и&nbsp;оставляем на&nbsp;10&nbsp;минут. Вынимаем, снимаем шкурку, убираем семена. Нарезаем на&nbsp;небольшие куски.",
      },
      {
        description:
          "Часть орехов откладываем для&nbsp;подачи. Остальные кладем в&nbsp;чашу блендера и&nbsp;перемалываем.",
      },
      {
        description:
          "Добавляем  печеный перец, панировочные сухари, чеснок, специи, уксус, лимонный сок&nbsp;и оливковое масло. Измельчаем до&nbsp;однородности. Солим и&nbsp;перчим по&nbsp;вкусу.",
      },
      {
        description:
          "Перекладываем дип&nbsp;в миску, накрываем пищевой пленкой и&nbsp;ставим в&nbsp;холодильник как&nbsp;минимум на&nbsp;час. Перед подачей посыпаем отложенными кусочками грецких орехов.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Баба-гануш",
    image: `${process.env.PUBLIC_URL}/images/sauces/baba_ganoush.jpg`,
    ingridients: [
      "крупные баклажаны&nbsp;—  2&nbsp;шт.",
      " чеснок&nbsp;—  4&nbsp;зубчика",
      " цедра и&nbsp;сок 1&nbsp;лимона",
      " оливковое масло&nbsp;—  80&nbsp;мл",
      " кедровые орешки или&nbsp;семечки подсолнуха по&nbsp;желанию",
      " соль и&nbsp;молотый черный перец по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Кладем баклажаны на&nbsp;решетку и&nbsp;жарим над&nbsp;углями, часто переворачивая, около 30-40 минут. Кожура баклажанов должна вздуться и&nbsp;почернеть.",
      },
      {
        description:
          "Дайте баклажанам слегка остыть, снимите кожуру. Мякоть нарежьте на&nbsp;небольшие куски и&nbsp;положите в&nbsp;чашу блендера.",
      },
      {
        description:
          "Добавляем к&nbsp;баклажанам чеснок, натертую цедру и&nbsp;сок лимона, половину оливкового масла. Перемалываем.",
      },
      {
        description:
          "Пробуем баклажанную массу, солим и&nbsp;перчим по&nbsp;вкусу, при&nbsp;необходимости добавляем оливковое масло. По&nbsp;желания посыпаем кедровыми орешками или&nbsp;тыквенными семечками и&nbsp;подаем.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Хумус с печеным сладким перцем",
    image: `${process.env.PUBLIC_URL}/images/sauces/hummus_with_roasted_bell_peppers.jpg`,
    ingridients: [
      "отваренный нут&nbsp;—  300&nbsp;г",
      " чеснок&nbsp;—  2&nbsp;зубчика",
      " тахина&nbsp;—  2&nbsp;ст.л.",
      " средний сладкий перец&nbsp;—  1&nbsp;шт.",
      " оливковое масло&nbsp;—  50&nbsp;мл + дополнительно для&nbsp;верха",
      " молотая зира (кумин)&nbsp;—  1/2&nbsp;ч.л. + дополнительно для&nbsp;посыпки",
      " молотый кардамон&nbsp;—  1/2&nbsp;ч.л.",
      " молотый чили (по желанию)&nbsp;—  1/8-1/4&nbsp;ч.л.",
      " сок&nbsp;лимона&nbsp;—  по&nbsp;вкусу",
      " соль&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Перец кладем в&nbsp;форму для&nbsp;запекания и&nbsp;ставим в&nbsp;разогретую до&nbsp;200&nbsp;градусов духовку. Запекаем до&nbsp;мягкости и&nbsp;черных подпалин, около 30&nbsp;минут. Вынимаем, кладем в&nbsp;пакет или&nbsp;в плотно закрывающийся контейнер и&nbsp;заворачиваем/закрываем. Оставляем на&nbsp;10&nbsp;минут.",
      },
      {
        description:
          "Затем вынимаем, снимаем шкурку и&nbsp;вычищаем семена. Кладем в&nbsp;миску, туда же&nbsp;отправляем нут, чеснок, тахину, оливковое масло и&nbsp;специи.",
      },
      {
        description: "Перемалываем блендером.",
      },
      {
        description:
          "Приправляем по&nbsp;вкусу солью и&nbsp;лимонным соком. Если смесь получилась слишком густой, можно добавить немного бульона от&nbsp;варки нута и&nbsp;еще раз&nbsp;перемолоть.",
      },
      {
        description:
          "Перед подачей поливаем дополнительным оливковым маслом и&nbsp;посыпаем зирой. Подаем со&nbsp;свежими овощами (огурцом, сладким перцем, морковью), лавашем или&nbsp;другим хлебом.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Базиликовый соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/basil_sauce.jpg`,
    ingridients: [
      "майонез&nbsp;—  225&nbsp;г",
      " белый винный уксус&nbsp;—  2&nbsp;ч.л.",
      " сахар&nbsp;—  1/2&nbsp;ч.л.",
      " соль&nbsp;—  1/2&nbsp;ч.л.",
      " зеленый базилик&nbsp;—  15&nbsp;г",
    ],
    cooking: [
      {
        description:
          "Базилик мелко рубим и&nbsp;смешиваем с&nbsp;остальными ингредиентами до&nbsp;однородности. Охлаждаем.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Томатный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/tomato_sauce.jpg`,
    ingridients: [
      "пальчиковые помидоры&nbsp;—  1,6&nbsp;кг",
      " томатная паста хорошего качества&nbsp;—  200&nbsp;г",
      " небольшие луковицы&nbsp;—  2&nbsp;шт.",
      " чеснок&nbsp;—  4&nbsp;зубчика",
      " горсть листьев базилика",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
      " + по&nbsp;желанию другие ароматные травы (орегано, майоран, тимьян)",
    ],
    cooking: [
      {
        description:
          "Этот соус можно подавать к&nbsp;мясу и&nbsp;птице, заправлять им&nbsp;пасту, добавлять в&nbsp;пиццу и&nbsp;много куда еще. ",
      },
      {
        description:
          "Сначала нужно подготовить помидоры. Надрезаем каждую помидорку крест-накрест, кладем в&nbsp;кастрюлю. Заливаем помидоры кипятком, даем постоять пару минут, затем перекладываем в&nbsp;холодную воду. Снимаем с&nbsp;помидор кожицу и&nbsp;удаляем плодоножки.",
      },
      {
        description: "Слегка мнем помидоры руками, затем мелко нарезаем.",
      },
      {
        description:
          "Лук режем кубиками. Жарим на растительном масле до слегка золотистого цвета.",
      },
      {
        description: "Добавляем мелко нарубленный чеснок и жарим 30-40 секунд.",
      },
      {
        description:
          "Кладем в&nbsp;сотейник помидоры и&nbsp;томатную пасту, перемешиваем и&nbsp;варим на&nbsp;среднем огне минут 40&nbsp;до хорошей консистенции.",
      },
      {
        description:
          "Корректируем содержание соли и&nbsp;перца, добавляем мелко нарубленный базилик (и другие травы, если используете) и&nbsp;варим на&nbsp;маленьком огне еще&nbsp;пару минут, чтобы соус пропитался ароматом трав.",
      },
      { description: "Охлаждаем и подаем." },
    ],
    type: saucesType,
  },
  {
    title: "Дип из феты с редисом",
    image: `${process.env.PUBLIC_URL}/images/sauces/feta_dip_with_radish.jpg`,
    ingridients: [
      "фета&nbsp;—  250&nbsp;г",
      " натуральный йогурт&nbsp;—  60&nbsp;г",
      " лимонный сок&nbsp;—  2&nbsp;ст.л.",
      " петрушка&nbsp;—  маленький пучок",
      " редиска&nbsp;—  4-5 шт.",
      " подсушенные в&nbsp;духовке ломтики питы для&nbsp;подачи",
    ],
    cooking: [
      {
        description:
          "Сегодня даем вам&nbsp;рецепт макательного соуса, который очень вкусно есть с&nbsp;картофельными чипсами или&nbsp;подсушенной в&nbsp;духовке питой. ",
      },
      {
        description:
          " Если вы&nbsp;боитесь, что&nbsp;соус получится слишком соленым, можете заменить часть феты зернистым творогом или&nbsp;адыгейским сыром.",
      },
      {
        description:
          "Что делать с питой. Нарежьте на&nbsp;небольшие кусочки, как&nbsp;чипсы. Сбрызните или&nbsp;смажьте при&nbsp;помощи кисточки оливковым маслом. Немного поперчите и&nbsp;посолите (с солью осторожно, т.к. дип&nbsp;сам по&nbsp;себе соленый за&nbsp;счет феты). Разложите в&nbsp;один слой на&nbsp;противне и&nbsp;отправьте в&nbsp;разогретую до&nbsp;200&nbsp;градусов духовку минут на&nbsp;5-7 или&nbsp;пока пита не&nbsp;станет золотистой и&nbsp;хрустящей.",
      },
      {
        description: "Редис и листья петрушки мелко рубим ножом.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_radishes_and_parsley.jpg`,
      },
      {
        description: "Фету, йогурт, лимонный сок кладем в чашу блендера.",
        image: `${process.env.PUBLIC_URL}/images/other_images/feta_and_yogurt_in_a_bowl.jpg`,
      },
      {
        description: "Перемалываем.",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_feta_and_yogurt_in_a_bowl.jpg`,
      },
      {
        description: "Добавляем к сырной массе редис и зелень, перемешиваем.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_radishes_and_herbs.jpg`,
      },
      { description: "Перекладываем в сервировочную посуду и подаем." },
    ],
    type: saucesType,
  },
  {
    title: "Дип из сметаны с хреном",
    image: `${process.env.PUBLIC_URL}/images/sauces/horseradish_sour_cream_dip.jpg`,
    ingridients: [
      "густая сметана&nbsp;—  350-400 г",
      " готовый белый хрен&nbsp;—  3&nbsp;ст.л.",
      " небольшой пучок укроп&nbsp;—  небольшой пучок",
      " соль&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description: "Кладем в плошку сметану, хрен, нарубленный укроп и соль.",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_sour_cream_horseradish_and_dill.jpg`,
      },
      {
        description:
          "Перемешиваем и пробуем, при необходимости добавляем еще соли.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Луковый дип",
    image: `${process.env.PUBLIC_URL}/images/sauces/onion_dip.jpg`,
    ingridients: [
      "лук&nbsp;—  2&nbsp;шт.",
      " оливковое масло&nbsp;—  2&nbsp;ст.л.",
      " сухой тимьян&nbsp;—  1&nbsp;ч.л.",
      " бальзамический уксус&nbsp;—  2&nbsp;ст.л.",
      " вустерский соус&nbsp;—  2&nbsp;ст.л.",
      " соль&nbsp;—  1/2&nbsp;ч.л.",
      " черный молотый перец&nbsp;—  1/4&nbsp;ч.л.",
      " сливочный сыр&nbsp;—  250&nbsp;г",
      " сметана (жирность 20-30%)&nbsp;—  130&nbsp;г",
      " майонез&nbsp;—  2&nbsp;ст.л.",
      "подсушенные в&nbsp;духовке ломтики багета и/или нарезанные свежие овощи для&nbsp;макания (морковь, огурцы, стеблевой сельдерей, сладкий перец и&nbsp;т.д.)",
    ],
    cooking: [
      {
        description: "Лук мелко рубим.",
      },
      {
        description:
          "В сковороде на&nbsp;умеренном огне разогреваем оливковое масло. Кладем лук&nbsp;и тимьян, жарим, периодически помешивая, до&nbsp;карамельного цвета, около 30-40 минут.",
      },
      {
        description:
          "Добавляем вустерский соус и&nbsp;бальзимический уксус, держим на&nbsp;огне, периодически помешивая, пока жидкость практически полностью не&nbsp;испарится, около 10-12 минут. Снимаем лук&nbsp;с огня и&nbsp;даем остыть.",
      },
      {
        description:
          "Пока остывает лук, смешиваем в&nbsp;блендере сметану, сливочный сыр, майонез, соль и&nbsp;перец до&nbsp;однородной массы.",
      },
      {
        description: "Добавляем лук и перемешиваем.",
      },
      {
        description:
          "P.S. Этот соус можно хранить в холодильнике в закрытом контейнере до 1 недели.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Сырный соус 'Морнэ'",
    image: `${process.env.PUBLIC_URL}/images/sauces/cheese_sauce_mornay.jpg`,
    ingridients: [
      "сливочное масло&nbsp;—  50&nbsp;г",
      " мука&nbsp;—  2&nbsp;ст.л.",
      " горячее молоко&nbsp;—  700&nbsp;мл",
      " соль и&nbsp;перец по&nbsp;вкусу",
      " полутвердый сыр&nbsp;типа гауды&nbsp;—  100&nbsp;г",
      " сливочное масло комнатной температуры&nbsp;—  1-2 ст.л.",
    ],
    cooking: [
      {
        description:
          "В сотейнике на&nbsp;среднем огне растапливаем сливочное масло. Кладем муку и&nbsp;жарим, помешивая, до&nbsp;слегка коричневатого оттенка.",
        image: `${process.env.PUBLIC_URL}/images/other_images/heat_butter_flour.jpg`,
      },
      {
        description:
          "Постепенно вливаем в&nbsp;муку молоко, постоянно и&nbsp;тщательно размешивая венчиком, чтобы не&nbsp;образовалось комков. Варим не&nbsp;небольшом огне, постоянно помешивая, пока соус не&nbsp;закипит и&nbsp;не загустеет. Кладем натертый на&nbsp;крупную терку сыр&nbsp;и размешиваем, пока сыр&nbsp;не растворится.",
      },
      {
        description: "Солим по вкусу, снимаем с огня.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_milk_and_mix.jpg`,
      },
      { description: "Добавляем мягкое сливочное масло и перемешиваем." },
    ],
    type: saucesType,
  },
  {
    title: "Гуакамоле",
    image: `${process.env.PUBLIC_URL}/images/sauces/guacamole.jpg`,
    ingridients: [
      "спелое авокадо&nbsp;—  1&nbsp;шт.",
      " лайм&nbsp;—  1&nbsp;шт.",
      " соль и&nbsp;черный молотый перец по&nbsp;вкусу",
      " средний мясистый помидор&nbsp;—  1&nbsp;шт.",
      " кукурузные или&nbsp;картофельные чипсы, соленые крекеры или&nbsp;гренки для&nbsp;подачи",
    ],
    cooking: [
      {
        description:
          "Гуакамоле&nbsp;—  традиционный мексиканский соус. В&nbsp;основе рецепта&nbsp;—  авокадо, сок&nbsp;лайма и&nbsp;соль. По&nbsp;желанию в&nbsp;гуакамоле могут добавляться дополнительные ингредиенты&nbsp;—  томаты, острый перец, лук&nbsp;и другие.",
      },
      {
        description:
          "Авокадо разрезаем пополам, вынимаем косточку, счищаем кожуру. Мякоть кладем в&nbsp;глубокую миску и&nbsp;хорошо разминаем вилкой. Если вам&nbsp;нравится более гладкая консистенция&nbsp;—  размелите авокадо в&nbsp;пасту в&nbsp;блендере.",
      },
      {
        description:
          "Из лайма выдавливаем сок, добавляем к авокадо и перемешиваем.",
      },
      {
        description:
          "Помидор разрезаем, очищаем от&nbsp;семечек. Мякоть нарезаем на&nbsp;мелкие кубики. Кладем в&nbsp;соус, перемешиваем. Солим и&nbsp;перчим по&nbsp;вкусу.",
      },
      { description: "Подаем немедленно." },
    ],
    type: saucesType,
  },
  {
    title: "Горчичное масло",
    image: `${process.env.PUBLIC_URL}/images/sauces/mustard_oil.jpg`,
    ingridients: [
      "сливочное масло комнатной температуры&nbsp;—  180&nbsp;г",
      " дижонская или&nbsp;другая острая горчица&nbsp;—  2&nbsp;ч.л.",
      " зернистая горчица&nbsp;—  2&nbsp;ч.л.",
      " чеснок&nbsp;—  1&nbsp;зубчик",
      " пара веточек петрушки",
      " соль по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Горчичное масло очень вкусно с&nbsp;печеным картофелем, стейками, ростбифом, шашлыком и&nbsp;другим мясом. ",
      },
      {
        description:
          "Масло, нарубленную петрушку, натертый чеснок, горчицу и соль кладем в миску.",
        image: `${process.env.PUBLIC_URL}/images/other_images/butter_parsley_and_mustard.jpg`,
      },
      {
        description:
          "Разминаем и перемешиваем до более-менее однородного состояния.",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_butter_parsley_and_mustard.jpg`,
      },
      {
        description:
          "Подаем к тостам, мясу, картофелю и другим блюдам по своему усмотрению.",
      },
      {
        description:
          "P.S. Такое масло отлично хранится в морозилке до 2 месяцев.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Бальзамико-розмариновая заправка винегрет",
    image: `${process.env.PUBLIC_URL}/images/sauces/balsamic_rosemary_vinaigrette.jpg`,
    ingridients: [
      "бальзамический уксус&nbsp;—  60&nbsp;мл",
      " дижонская горчица&nbsp;—  1&nbsp;ст.л.",
      " чеснок&nbsp;—  1&nbsp;зубчик",
      " свежие иголочки розмарина&nbsp;—  1&nbsp;ст.л. (или 1&nbsp;ч.л. сухого)",
      " вода&nbsp;—  2&nbsp;ст.л.",
      " соль&nbsp;—  1/2&nbsp;ч.л.",
      " черный молотый перец&nbsp;—  1/4&nbsp;ч.л.",
      " оливковое масло&nbsp;—  120&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "Эта замечательная заправка с&nbsp;насыщенным пряным вкусом отлично подойдет к&nbsp;блюдам на&nbsp;основе зеленого листового салата или&nbsp;свежих овощей. Благодаря использованию блендера этот соус готовится чуть ли&nbsp;не в&nbsp;мгновение ока. ",
      },
      {
        description:
          "Кладем все&nbsp;ингредиенты в&nbsp;чашу блендера и&nbsp;перемалываем до&nbsp;получения однородной эмульсии. Готово!",
      },
      {
        description:
          "Заправка может храниться в холодильнике в закрытой банке до 2 недель.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Соус ранч",
    image: `${process.env.PUBLIC_URL}/images/sauces/ranch_sauce.jpg`,
    ingridients: [
      "натуральный йогурт&nbsp;—  125&nbsp;г",
      " майонез&nbsp;—  4&nbsp;ст.л.",
      " сметана (20-30% жирности)&nbsp;—  2&nbsp;ст.л.",
      " чеснок&nbsp;—  1&nbsp;зубчик",
      " зеленый лук&nbsp;—  4&nbsp;пера",
      " соль и&nbsp;черный молотый перец по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Этот соус универсален: он&nbsp;может одинаково успешно использоваться в&nbsp;качестве заправки для&nbsp;салатов, подаваться в&nbsp;качестве макательного соуса ко&nbsp;всяким картошкам-крылышкам-гренкам или&nbsp;добавляться в&nbsp;разные сэндвичи, бутерброды и&nbsp;рулеты из&nbsp;лаваша. Как&nbsp;вам захочется&nbsp;—  так&nbsp;и используйте. Готовится предельно просто.",
      },
      {
        description:
          "Йогурт, кстати, при желании можно заменить тем же объемом сметаны.",
      },
      {
        description: "Мелко рубим зеленый лук.",
      },
      {
        description:
          "Чеснок трем на мелкой терке или растираем в ступке в пюре.",
      },
      {
        description:
          "Смешиваем в&nbsp;миске йогурт, майонез и&nbsp;сметану. Добавляем нарубленную зелень и&nbsp;чеснок. Солим и&nbsp;перчим по&nbsp;вкусу.",
      },
      { description: "Перемешиваем и подаем." },
    ],
    type: saucesType,
  },
  {
    title: "Беарнский соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/bearnaise_sauce.jpg`,
    ingridients: [
      "белое сухое вино&nbsp;—  60&nbsp;мл",
      " белый винный уксус&nbsp;—  60&nbsp;мл",
      " маленькая луковичка&nbsp;—  1&nbsp;шт. (1&nbsp;ст.л. в&nbsp;нарубленном состоянии)",
      " нарубленный свежий эстрагон&nbsp;—  1&nbsp;ст.л. или&nbsp;1/2&nbsp;ч.л. сухого",
      " желтки&nbsp;—  3&nbsp;шт.",
      " сливочное масло&nbsp;—  120&nbsp;г + еще&nbsp;2&nbsp;ст.л. (2*25&nbsp;г, по&nbsp;отдельности)",
      "соль и&nbsp;перец по&nbsp;вкусу",
      " нарубленный свежий эстрагон или&nbsp;петрушка&nbsp;—  1&nbsp;ст.л.",
    ],
    cooking: [
      {
        description:
          "Он же&nbsp;соус 'Беарнез'. Это&nbsp;представитель семейства голландских соусов. ",
      },
      {
        description:
          "Готовится чуть сложнее домашнего майонеза. Прекрасно подходит к&nbsp;рыбе, мясу и&nbsp;птице. А&nbsp;также к&nbsp;блюдам из&nbsp;яиц и&nbsp;даже в&nbsp;качестве добавки в&nbsp;сэндвичи. Ко&nbsp;всему прочему, это&nbsp;отличный вариант для&nbsp;утилизации желтков при&nbsp;выпекании все&nbsp;тех же&nbsp;пирожных макарон.",
      },
      {
        description:
          "120 г сливочного масла растапливаем и отставляем в сторону.",
      },
      {
        description:
          "Мелко нарубленный лук&nbsp;и эстрагон (1&nbsp;ст.л.) кладем в&nbsp;ковшик. Вливаем вино и&nbsp;уксус.",
      },
      {
        description:
          "Ставим на&nbsp;средний огонь и&nbsp;увариваем, чтобы в&nbsp;итоге осталось 2&nbsp;ст.л. жидкости. Отставляем в&nbsp;сторону и&nbsp;даем остыть.",
      },
      {
        description:
          "Желтки кладем в миску. Взбиваем их венчиком в густую однородную массу.",
      },
      {
        description:
          "Процеживаем в&nbsp;желтковую массу уваренную винную смесь (лук и&nbsp;эстрагон выбрасываем) и&nbsp;снова взбиваем до&nbsp;однородности.",
      },
      {
        description:
          "Добавляем в миску 1 ст.л. холодного масла и ставим на водяную баню.",
      },
      {
        description:
          "Постоянно мешаем венчиком, пока желтки не&nbsp;загустеют. Снимаем с&nbsp;огня, кладем еще&nbsp;1&nbsp;ст.л. холодного масла. Очень тонкой струйкой, постоянно взбивая, начинаем вливать растопленное масло. Взбиваем, пока все&nbsp;масло не&nbsp;будет влито. Здесь важно не&nbsp;спешить, поскольку при&nbsp;слишком быстром добавлении масла соус может получиться слишком жидким.",
      },
      {
        description:
          "Готовый соус солим и перчим по вкусу, добавляем зелень, перемешиваем и подаем.",
      },
      {
        description:
          "P.S. Соус лучше всего есть свежим. Но&nbsp;остатки можно хранить в&nbsp;холодильнике до&nbsp;2&nbsp;дней. Перед подачей соус разогревается на&nbsp;водяной бане.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Печеный чеснок",
    image: `${process.env.PUBLIC_URL}/images/sauces/baked_garlic.jpg`,
    ingridients: [
      "головки чеснока&nbsp;—  250&nbsp;г ",
      " свежие листья тимьяна&nbsp;—  1&nbsp;ч.л. (можно взять 0,5&nbsp;ч.л. сушеного)",
      " оливковое масло&nbsp;—  3&nbsp;ст.л.",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Сегодня мы&nbsp;будем запекать чеснок. В&nbsp;запеченном виде он&nbsp;может использоваться для&nbsp;приготовления птицы, входить в&nbsp;состав салатных заправок и&nbsp;супов-пюре, намазываться на&nbsp;багет для&nbsp;дальнейшего запекания. Словом, штука довольно универсальная, при&nbsp;том, что&nbsp;готовится не&nbsp;сложно.",
      },
      {
        description:
          "У чеснока снимаем самый верхний слой шелухи и&nbsp;срезаем макушки так, чтобы с&nbsp;зубчиков были как&nbsp;бы сняты крышечки. Кладем в&nbsp;форму для&nbsp;запекания.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_off_the_top_of_the_garlic.jpg`,
      },
      {
        description: "Солим и перчим по вкусу, посыпаем тимьяном.",
        image: `${process.env.PUBLIC_URL}/images/other_images/salt_and_pepper_the_garlic.jpg`,
      },
      {
        description:
          "Поливаем оливковым маслом так, чтобы оно затекало и между зубчиками.",
        image: `${process.env.PUBLIC_URL}/images/other_images/pour_olive_oil_over_garlic.jpg`,
      },
      {
        description:
          "Накрываем форму фольгой и&nbsp;ставим в&nbsp;разогретую до&nbsp;200&nbsp;градусов духовку примерно на&nbsp;час, до&nbsp;золотистого цвета.",
      },
      {
        description:
          "Даем чесноку остыть до&nbsp;такой степени, чтобы его&nbsp;можно было брать руками, и&nbsp;вынимаем запеченные зубчики из&nbsp;шелухи. Далее в&nbsp;большинстве случаев чеснок разминается в&nbsp;пюре и&nbsp;используется по&nbsp;назначению.",
        image: `${process.env.PUBLIC_URL}/images/other_images/baked_garlic.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Грибной соус с каперсами",
    image: `${process.env.PUBLIC_URL}/images/sauces/mushroom_sauce_with_capers.jpg`,
    ingridients: [
      "шампиньоны&nbsp;—  500&nbsp;г",
      " луковица&nbsp;—  1&nbsp;шт.",
      " сливочное масло&nbsp;—  3&nbsp;ст.л.",
      " мука&nbsp;—  2&nbsp;ст.л.",
      " куриный бульон&nbsp;—  225&nbsp;мл",
      " сухое белое вино&nbsp;—  200&nbsp;мл",
      " каперсы&nbsp;—  2&nbsp;ст.л.",
    ],
    cooking: [
      {
        description:
          "Если шампиньоны мелкие&nbsp;—  оставляем их&nbsp;как есть, если крупные&nbsp;—  режем пополам или&nbsp;на четвертинки (в зависимости от&nbsp;размера).&nbsp; Лук&nbsp;нарезаем полукольцами. Обжариваем вместе на&nbsp;сливочном масле в&nbsp;течение 15&nbsp;минут.",
      },
      {
        description:
          "Добавляем муку, хорошенько размешиваем и&nbsp;жарим еще&nbsp;пару минут. Затем добавляем вино, доводим до&nbsp;кипения.",
      },
      {
        description:
          "Через 2&nbsp;минуты вводим бульон и&nbsp;каперсы. Постоянно помешивая, тушим еще&nbsp;5&nbsp;минут и&nbsp;снимаем с&nbsp;огня.",
      },
      { description: "Готовым соус поливаем жареное мясо, рыбу или птицу." },
    ],
    type: saucesType,
  },
  {
    title: "Сливочный соус к рыбе",
    image: `${process.env.PUBLIC_URL}/images/sauces/creamy_sauce_for_fish.jpg`,
    ingridients: [
      "Сливки 20-22% 	200&nbsp;мл&nbsp;	",
      "Горчица дижонская 	4&nbsp;ч.л.",
      "Лаймы 	¼ шт. ",
      "	Мёд 	10&nbsp;г",
      "Горчица белая (английская) 	1&nbsp;ч.л. 	",
      "Семена кориандра 	½ ч.л.",
      "Петрушка 	5&nbsp;г",
      "Семга 	600&nbsp;г",
      "Соль 	½ ч.л. 	",
      "Перец черный молотый 	½ ч.л.",
    ],
    cooking: [
      {
        description:
          " 						Этот соус на&nbsp;основе сливок и&nbsp;горчицы со&nbsp;сбалансированным вкусом несложно сделать, пока готовится еда&nbsp;или заранее. Пробуйте соус на&nbsp;сбалансированность вкуса в&nbsp;процессе приготовления.    Соус можно хранить в&nbsp;холодильнике несколько дней и&nbsp;подойдет он, на&nbsp;самом деле, не&nbsp;только к&nbsp;рыбе, но&nbsp;и к&nbsp;курице (особенно к&nbsp;куриным грудкам) и&nbsp;даже к&nbsp;салатам. Чем&nbsp;больше он&nbsp;остывает, тем&nbsp;сильнее загустевает. 				",
      },
      {
        description:
          "Сливки налейте в&nbsp;сотейник и&nbsp;поставьте на&nbsp;небольшой огонь. Добавьте столовую ложку горчицы, мед, выжмите сок&nbsp;лайма и&nbsp;размешайте.  Семена горчицы и&nbsp;кориандра прогрейте на&nbsp;сухой сковороде до&nbsp;потрескивания и&nbsp;тоже добавьте в&nbsp;соус.	",
      },
      {
        description:
          "Когда соус начнет загустевать, добавьте измельченную зелень (можно использовать укроп, петрушку, шалфей, эстрагон).  Снимите с&nbsp;огня и&nbsp;отставьте в&nbsp;сторону.	",
      },
      {
        description:
          "Рыбу разрежьте на&nbsp;стейки, посолите, поперчите и&nbsp;жарьте на&nbsp;сухой сковороде.						 										  					 				  						 ",
      },
      {
        description:
          "				 					 																					 																 							Поджарьте до&nbsp;румяной корочки. Не&nbsp;пересушивайте, хотя в&nbsp;данном случае соус поможет спасти даже чуть пересушенную рыбу или&nbsp;мясо.						 										  					 				  						 ",
      },
      {
        description:
          "				 					 																					 																 							Соус можно подавать теплым или&nbsp;охлажденным. К&nbsp;рыбе  лучше всего подать зеленый салат.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Сырный соус на молоке",
    image: `${process.env.PUBLIC_URL}/images/sauces/сheese_sauce.jpg`,
    ingridients: [
      "сыр чеддер или&nbsp;пармезан (можно другой)&nbsp;—  120-130 г",
      "молоко&nbsp;—  600&nbsp;мл",
      "сливочное масло&nbsp;—  40&nbsp;г",
      "мука&nbsp;—  40-50 г",
      "тертый мускатный орех&nbsp;—  1/2&nbsp;ч.л.",
      "перец и&nbsp;соль&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Сырный&nbsp;—  простой соус с&nbsp;насыщенным вкусом, который становится великолепным компаньоном для&nbsp;блюд из&nbsp;овощей, пасты, картофеля фри, запеканок. ",
      },
      {
        description:
          "Налив молоко, ставим кастрюлю на&nbsp;средний огонь, кладем масло. Когда нагреется, быстро помешивая венчиком, чтобы избежать комков, засыпаем муку. Работаем венчиком, пока смесь не&nbsp;закипит.",
      },
      {
        description:
          "Сразу уводим огонь на&nbsp;минимальный и&nbsp;продолжаем движения венчика, пока жидкость не&nbsp;станет действительно однородной&nbsp;—  еще&nbsp;4-5 минут.",
      },
      {
        description:
          "Засыпаем заранее натертый (очень мелко!) сыр, приправляем перцем и&nbsp;солью, мускатным орехом и&nbsp;продолжаем смешивать до&nbsp;тех пор, пока расплавится сыр&nbsp;и соус станет полностью однородным, что&nbsp;займет еще&nbsp;примерно 5&nbsp;минут.",
      },
      {
        description:
          "Сырный соус обычно подается горячим. Остывая, он&nbsp;густеет.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Мясная подлива",
    image: `${process.env.PUBLIC_URL}/images/sauces/meat_gravy.jpeg`,
    ingridients: [
      "мясо (говядина)&nbsp;—  200&nbsp;г",
      "    лук&nbsp;—  1&nbsp;шт.",
      "    зелень петрушки&nbsp;—  1&nbsp;пучок",
      "    томатная паста&nbsp;—  1&nbsp;ст.л.",
      "    кипяченая вода&nbsp;—  250&nbsp;г",
      "    растительное масло (для обжаривания)",
      "    соль, специи&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Мясо нарезаем небольшими, но&nbsp;одинаковыми по&nbsp;размеру кусочками. Одинаковые кусочки будут равномерно прожариваться, сырых или&nbsp;пережаренных кусочков в&nbsp;такой подливе не&nbsp;будет, а&nbsp;значит и&nbsp;качество блюда не&nbsp;пострадает.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_beef.jpg`,
      },
      {
        description:
          "Лук очищаем от&nbsp;кожицы и&nbsp;мелко шинкуем (режем кубиками). В&nbsp;принципе, лук&nbsp;можно нарезать и&nbsp;полукольцами, но&nbsp;тогда подлива будет смотреться не&nbsp;совсем эстетично: маленькие кусочки мяса будут казаться слишком мелкими по&nbsp;сравнению с&nbsp;длинными полосками лука. Поэтому кубики&nbsp;—  оптимальный вид&nbsp;нарезки лука для&nbsp;этого блюда.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_the_onion2.jpg`,
      },
      {
        description:
          "Зелень моем в&nbsp;проточной воде, чтобы на&nbsp;ней не&nbsp;осталось песка, обсушиваем на&nbsp;бумажном полотенце и&nbsp;также мело шинкуем.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_greens.jpeg`,
      },
      {
        description:
          "На хорошо разогретую сковородку вливаем пару ложек растительного масла, как&nbsp;только оно&nbsp;нагреется кладем в&nbsp;сковородку мясо и&nbsp;немного припускаем его. Затем добавляем лук, соль и&nbsp;специи и&nbsp;жарим мясо на&nbsp;медленном огне под&nbsp;крышкой минут 5-7.",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_ beef_with_onions.jpeg`,
      },
      {
        description:
          "Смешиваем томатную пасту с&nbsp;кипяченой водой, взбивем вилкой для&nbsp;образования однородной консистенции и&nbsp;выливаем томатную смесь в&nbsp;сковородку. Даем подливе закипеть, накрываем крышкой и&nbsp;продолжаем тушить, помешивая, еще&nbsp;20&nbsp;минут. За&nbsp;несколько минут до&nbsp;готовности бросаем в&nbsp;сковородку нашинкованную зелень.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_tomato_paste_and_herbs.jpeg`,
      },
      {
        description:
          "Подаем мясную подливу к&nbsp;гарнирам из&nbsp;овощей, круп или&nbsp;макаронных изделий.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Чесночный дрессинг",
    image: `${process.env.PUBLIC_URL}/images/sauces/garlic_dressing.jpg`,
    ingridients: [
      "    сырые орехи кешью&nbsp;—  1/2&nbsp;стакана",
      "    вода&nbsp;—  1/2 + 1/4&nbsp;стакана отдельно",
      "    морковка&nbsp;—  1&nbsp;шт.",
      "    свежий шпинат&nbsp;—  1&nbsp;стакан",
      "    сок&nbsp;половины лимона",
      "    чеснок&nbsp;—  2&nbsp;небольших зубчика",
      "    соль&nbsp;—  1/4&nbsp;ч.л.",
    ],
    cooking: [
      {
        description:
          "Дрессинг&nbsp;—  волшебное слово в&nbsp;кулинарии. Он&nbsp;может изменить вкус любого салата, даже такого, который вам&nbsp;уже порядком надоел. Можете попробовать отказаться от&nbsp;привычного масла и&nbsp;заменить его&nbsp;на чесночный дрессинг. Это&nbsp;не только вкусно, но&nbsp;и полезно.",
      },
      {
        description:
          "    Измельчите орехи кешью с&nbsp;половиной стакана воды в&nbsp;блендере. Орехи должны полностью превратиться в&nbsp;жидкую массу. По&nbsp;времени процесс занимает около минуты. Добавьте оставшиеся ингредиенты. Если масса получается густой и&nbsp;не перемешивается, добавьте еще&nbsp;немного воды, 1/4&nbsp;стакана должно быть достаточно.",
      },
      {
        description:
          "    Кстати, чеснок надо добавлять по&nbsp;одному зубчику. Сначала измельчите один зубок, затем попробуйте дрессинг. Если чеснок не&nbsp;сильно дает вкус, тогда добавьте еще&nbsp;один зубок. Если вам&nbsp;попался совсем слабый чеснок, то&nbsp;и третий зубок не&nbsp;помешает.",
      },
      { description: "    Готовым дрессингом можете заправлять ваши салаты." },
    ],
    type: saucesType,
  },
  {
    title: "Паста из авокадо и яиц",
    image: `${process.env.PUBLIC_URL}/images/sauces/avocado_and_egg_pasta.jpg`,
    ingridients: [
      "вареные яйца&nbsp;—  6&nbsp;шт.",
      "авокадо&nbsp;—  1&nbsp;шт.",
      "майонез&nbsp;—  3-4 ст. л. (можно йогурт)",
      "чеснок&nbsp;—  1&nbsp;зубчик",
      "лимонный сок&nbsp;—  2&nbsp;ч. л.",
      "соль, черный молотый перец",
    ],
    cooking: [
      {
        description:
          "Желтки разминаем с&nbsp;авокадо. К&nbsp;ним добавляем майонез. Затем солим и&nbsp;перчим по&nbsp;вкусу. Чеснок выдавливаем через чесночницу, добавляем и&nbsp;перемешиваем.",
      },
      {
        description:
          "Белки нарезаем небольшими квадратиками и&nbsp;отправляем в&nbsp;нашу готовую смесь. Аккуратно перемешиваем.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Арахисовая паста",
    image: `${process.env.PUBLIC_URL}/images/sauces/peanut_butter.png`,
    ingridients: [
      "    арахис жареный&nbsp;—  1,5&nbsp;стакана",
      "    масло растительное, рафинированное&nbsp;—  2&nbsp;ст. л.",
      "    мед&nbsp;—  2&nbsp;ч. л.",
      "    соль&nbsp;—  на&nbsp;кончике ножа ",
    ],
    cooking: [
      {
        description:
          "    В&nbsp;блендере или&nbsp;комбайне измельчаем арахис, добавляем масло,  мед, соль и&nbsp;продолжаем взбивать до&nbsp;готовности.",
      },
      { description: "    Взбиваем примерно минут 10." },
      {
        description:
          "    После этого охлаждаем  и&nbsp;арахисовая паста готова к&nbsp;употреблению.",
      },
      {
        description:
          "    Намазываем на&nbsp;ломтики батона или&nbsp;хлеба и&nbsp;подаем на&nbsp;стол к&nbsp;чаю.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Домашнее сгущенное молоко",
    image: `${process.env.PUBLIC_URL}/images/sauces/homemade_condensed_milk.jpg`,
    ingridients: [
      "молоко&nbsp;—  250&nbsp;мл",
      "сухое молоко&nbsp;—  150&nbsp;г",
      "сахар&nbsp;—  300&nbsp;г",
    ],
    cooking: [
      {
        description:
          "Все, наверное, помнят из&nbsp;детства вкус сгущенного молока. Но&nbsp;сейчас, к&nbsp;сожалению, это&nbsp;далеко не&nbsp;тот продукт, которым мы&nbsp;объедались в&nbsp;детстве. Но&nbsp;теперь его&nbsp;можно приготовить дома. Это&nbsp;не займет у&nbsp;вас много времени, зато вкус приятно удивит.",
      },
      { description: "Смешать молоко, сахар и&nbsp;сухое молоко." },
      { description: "Поставить на&nbsp;водяную баню." },
      { description: "Варить, при&nbsp;помешивании, 1&nbsp;час." },
      { description: "Когда остынет, становится густой." },
      {
        description:
          "Очень важно использовать именно сухое молоко, а&nbsp;не 'заменитель сухого молока' китайского производства.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Дзадзики",
    image: `${process.env.PUBLIC_URL}/images/sauces/tzatziki.jpg`,
    ingridients: [
      "натуральный йогурт (густой)&nbsp;—  2&nbsp;стакана",
      "огурец&nbsp;—  1&nbsp;шт.",
      "листья мяты&nbsp;—  1&nbsp;столовая ложка",
      "чеснок&nbsp;—  1&nbsp;зубчик",
      "мед&nbsp;—  1&nbsp;столовая ложка",
      "тмин&nbsp;—  1/2&nbsp;чайной ложки",
      "морская соль и&nbsp;белый перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Дзадзики (дзадзыки, цацики)&nbsp;—  едва ли&nbsp;не самый популярный греческий соус, который делают на&nbsp;густом несладком йогурте.",
      },
      {
        description:
          "Огурец натрите, засыпьте приправой и&nbsp;мелко нарубленной мятой.",
      },
      { description: "Нарубите чеснок." },
      {
        description:
          "Смешайте все&nbsp;ингредиенты до&nbsp;однородной массы. Посолите и&nbsp;поперчите.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Соус-варенье из острого перца к мясу",
    image: `${process.env.PUBLIC_URL}/images/sauces/hot_pepper_jam_sauce_for_meat.jpg`,
    ingridients: [
      "Перец сладкий красный (паприка) 	5&nbsp;шт. 	",
      "Яблоки (160&nbsp;г) 	6&nbsp;шт.",
      "Перец чили 	9&nbsp;шт. 	",
      "Сахар-песок 	600&nbsp;г",
      "Бадьян (звездчатый анис) 	1&nbsp;шт.",
      "Перец душистый 	4&nbsp;шт.",
      "Семена кориандра 	8&nbsp;шт. 	",
      "Белый винный уксус 	25&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "                     Довольно необычный рецепт соуса, который готовится в&nbsp;большом количестве и&nbsp;который можно долго хранить, используя понемногу. Соус получается остро-сладким, но&nbsp;острота при&nbsp;этом довольно умеренная. Готовится долго, но&nbsp;совсем несложно.             ",
      },
      {
        description:
          "Вымойте перец и&nbsp;яблоки, очистите и&nbsp;нарежьте кусочками.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_and_peeling_apples_and_peppers.jpg`,
      },
      {
        description:
          "Острый перец тоже очистите от&nbsp;семян и&nbsp;нарежьте. Лучше это&nbsp;делать в&nbsp;перчатках, чтобы не&nbsp;обжечь кожу. Сложите все&nbsp;в большую кастрюлю.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_hot_pepper_and_add.jpg`,
      },
      {
        description:
          "Засыпьте сахаром и&nbsp;оставьте на&nbsp;ночь, чтобы появился сок. На&nbsp;следующий день размешайте и&nbsp;доведите до&nbsp;кипения. Варите 40&nbsp;минут на&nbsp;маленьком огне.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_sugar_and_boil.jpg`,
      },
      {
        description:
          "Когда варенье немного остынет, измельчите все&nbsp;блендером, добавьте специи и&nbsp;поварите еще&nbsp;15&nbsp;минут. Затем влейте уксус и&nbsp;поварите еще&nbsp;минут пять.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/grind_in_a_blender_and_add_vinegar.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Оставьте так&nbsp;до следующего утра. Анис можно выловить, но&nbsp;я оставила, поскольку на&nbsp;такое количество варенья он&nbsp;влияет не&nbsp;сильно.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/red_sauce.jpg`,
      },
      {
        description:
          "			 				 																	 													 						На третий день доведите соус до&nbsp;кипения и&nbsp;разлейте по&nbsp;стерильным банкам.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/red_sauce_in_jars.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Стейку перед жаркой дайте полежать на&nbsp;открытом воздухе при&nbsp;комнатной температуре полчаса. Затем положите на&nbsp;сильно разогретую сковороду и&nbsp;жарьте по&nbsp;1,5&nbsp;минуты с&nbsp;каждой стороны.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_steak.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Затем поверните так, чтобы получился рисунок сеточкой и&nbsp;жарьте еще&nbsp;по 1,5&nbsp;минуты. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/ready_steak.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Готовому стейку дайте полежать в&nbsp;теплом месте (например, в&nbsp;духовке при&nbsp;50&nbsp;градусах) 10&nbsp;минут, затем подавайте с&nbsp;соусом из&nbsp;острого перца и&nbsp;красным вином.					 								  				 			  			 									",
        image: `${process.env.PUBLIC_URL}/images/other_images/steak_with_sauce.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Соус песто с черемшой",
    image: `${process.env.PUBLIC_URL}/images/sauces/pesto_sauce_with_wild_garlic.jpg`,
    ingridients: [
      "Черемша 	150&nbsp;г&nbsp;	",
      "Кедровые орешки (пиния) 	50&nbsp;г",
      "Пармезан (Пармиджано Реджано) 	70&nbsp;г&nbsp;	",
      "Оливковое масло 	100&nbsp;мл",
      "Соль 	½ ч.л. 	Лимонный сок&nbsp;	20&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "                     Обычный итальянский соус с&nbsp;необычными составляющими&nbsp;—  базилик заменяется черемшой. Получается вкусно, очень чесночно и&nbsp;остренько.            ",
      },
      {
        description:
          "Нам понадобится пучок черемши, горсть очищенных кедровых орешков, оливковое масло, сыр&nbsp;пекорино или&nbsp;пармезан (у меня был&nbsp;грана падано), соль по&nbsp;вкусу и&nbsp;лимонный сок.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/wild_garlic_pine_nuts_and_olive_oil.jpeg`,
      },
      {
        description:
          "Черемшу моем, обсушиваем и&nbsp;некрупно нарезаем. Кедровые орешки слегка подсушиваем на&nbsp;сковороде. 					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_pine_nuts.jpeg`,
      },
      {
        description: "Сыр натираем на&nbsp;мелкой тёрке.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/grated_cheese.jpeg`,
      },
      {
        description:
          "			 				 																	 													 						Черемшу и&nbsp;орешки отправляем в&nbsp;блендер и&nbsp;измельчаем.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/wild_garlic_and_nuts_in_a_blender.jpeg`,
      },
      {
        description:
          "Затем добавляем масло (его может понадобиться немного больше), ещё&nbsp;раз пробиваем.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_olive_oil.jpeg`,
      },
      {
        description:
          "			 				 																	 													 						И в&nbsp;конце засыпаем сыр, пробиваем, чтобы получилась однородная масса.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_grated_cheese_and_mix.jpeg`,
      },
      {
        description:
          "Теперь пробуем. В&nbsp;принципе, соус готов, но&nbsp;мне после пробы захотелось немного посолить и&nbsp;почему-то добавить немного лимонного сока, и&nbsp;вот после этого получилось самое оно! ",
      },
    ],
    type: saucesType,
  },
  {
    title: "Шоколадная глазурь для кулича",
    image: `${process.env.PUBLIC_URL}/images/sauces/chocolate_icing_for_kuliks.jpg`,
    ingridients: [
      "шоколад темный&nbsp;—  90&nbsp;г",
      "апельсиновый сок&nbsp;—  3&nbsp;ст. л.",
      "сливочное масло&nbsp;—  3&nbsp;ст. л.",
      "сахар&nbsp;—  3&nbsp;ст. л.",
    ],
    cooking: [
      {
        description:
          "В небольшом сотейнике смешать шоколад, апельсиновый сок, сливочное масло и&nbsp;сахар. Поставить на&nbsp;очень маленький огонь и&nbsp;нагревать, перемешивая, пока масса не&nbsp;станет однородной и&nbsp;густой. Охладить в&nbsp;течение 5&nbsp;минут.",
      },
      {
        description:
          "Этой глазурью можно смазывать не&nbsp;только куличи, а&nbsp;и пироги, торты&nbsp;и&nbsp;пр.",
      },
    ],
  },
  {
    title: "Мятно-горчичный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/mint_mustard_sauce.jpg`,
    ingridients: [
      "Горчица дижонская 	10&nbsp;ч.л. 	",
      "Мята свежая 	10&nbsp;г",
      "Мёд 	100&nbsp;г&nbsp;",
      "	Хрен 	50&nbsp;г",
      "Соль 	¼ ч.л. 	",
      "Перец черный молотый 	¼ ч.л.",
    ],
    cooking: [
      {
        description:
          "                     Этот соус совсем несложный, готовится простым смешиванием ингредиентов. Зато у&nbsp;него очень гармоничный вкус&nbsp;—  остро-сладкий с&nbsp;освежающей ноткой мяты.            ",
      },
      {
        description:
          "В большую чашку положите горчицу, примерно треть стандартной баночки (250&nbsp;мл)	",
        image: `${process.env.PUBLIC_URL}/images/other_images/mustard.jpg`,
      },
      {
        description:
          "Отделите листья мяты от&nbsp;стеблей, хорошо промойте, стряхните и&nbsp;порубите помельче. Положите в&nbsp;чашку.  					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mint_with_mustard.jpg`,
      },
      {
        description:
          "Туда же&nbsp;добавляем три&nbsp;столовых ложки меда. В&nbsp;состав этого соуса входит много острых ингредиентов&nbsp;—  горчица, хрен, перец, так&nbsp;что сладкий вкус будет очень кстати. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_honey.jpg`,
      },
      {
        description: "Кладем две&nbsp;столовые ложки тертого хрена.  					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_grated_horseradish.jpg`,
      },
      {
        description: "И приправляем солью и&nbsp;свежемолотым перцем.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_ground_pepper_and_salt.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Хорошенько разотрите погружным блендером или&nbsp;смешайте с&nbsp;помощью венчика или&nbsp;вилки. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_well.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Можно переложить соус в&nbsp;баночку и&nbsp;хранить некоторое время в&nbsp;холодильнике до&nbsp;подачи на&nbsp;стол.  					 								  				 			  			 									",
        image: `${process.env.PUBLIC_URL}/images/other_images/steak_with_mint_mustard_sauce.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Шоколадный соус к стейку из говядины",
    image: `${process.env.PUBLIC_URL}/images/sauces/chocolate_sauce_for_beef_steak.jpg`,
    ingridients: [
      "Лук репчатый (100г) 	½ шт. 	",
      "Розмарин листья 	½ ст.л.",
      "Шоколад темный 70-80% какао 	30&nbsp;г&nbsp;	",
      "Вино белое сухое (столовое) 	125&nbsp;мл",
      "Сахар-песок 	10&nbsp;г&nbsp;	",
      "Уксус винный 	20&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "Ингредиенты лучше приготовить заранее, потому что&nbsp;варить соус мы&nbsp;будем как&nbsp;раз пока стейк будет 'доходить' в&nbsp;теплом месте.  Мелко порубите лук, должна получиться столовая ложка, измельчите розмарин в&nbsp;мельнице или&nbsp;порежьте если свежий. Шоколад поломайте на&nbsp;кусочки или&nbsp;размельчите, отмерьте полстакана вина. Можно взять сладкое вино, тогда сахар добавлять не&nbsp;нужно.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/onion_wine_rosemary_and_chocolate.jpg`,
      },
      {
        description:
          "На жире, оставшемся после обжарки стейка, поджарьте лук&nbsp;в течение 1&nbsp;минуты. Добавьте  вино, сахар и&nbsp;затем винный уксус. Пусть покипит в&nbsp;течение 2-3 минут при&nbsp;непрерывном помешивании. Положите розмарин и&nbsp;продолжайте готовить. Соус должен немного упариться, т.е. уменьшиться в&nbsp;объёме, но&nbsp;не сильно. Когда добавим шоколад он&nbsp;достаточно загустеет.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_vinegar_and_sugar.jpg`,
      },
      {
        description:
          "Всыпьте шоколадные кусочки и&nbsp;дайте им&nbsp;растаять. Готовый соус можно выложить в&nbsp;соусницу и&nbsp;подать к&nbsp;стейку, который как&nbsp;раз успел хорошенько прогреться.					 								  				 			  			 									",
        image: `${process.env.PUBLIC_URL}/images/other_images/heat_up_the_chocolate.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Вишневый соус и стейк ти-бон",
    image: `${process.env.PUBLIC_URL}/images/sauces/cherry_sauce_and_T-bone_steak.jpg`,
    ingridients: [
      "Стейк ти-бон 650г 	2&nbsp;шт. 	",
      "Вишня 	300&nbsp;г",
      "Вино красное сухое (столовое) 	200&nbsp;мл&nbsp;	",
      "Сахар-песок 	15&nbsp;г",
      "Гвоздика 	1&nbsp;шт. 	",
      "Ванильный экстракт 	¼ ч.л.",
      "Мука кукурузная 	25&nbsp;г&nbsp;",
    ],
    cooking: [
      {
        description:
          "                     Летом в&nbsp;сезон вишни соус лучше готовить из&nbsp;свежих ягод, а&nbsp;зимой можно обойтись замороженными. Соус получается кисло-сладким, с&nbsp;ванильным ароматом и&nbsp;приятными кусочками ягод, подчеркивающих вкус мяса.            ",
      },
      {
        description:
          "Мясо достаньте из&nbsp;упаковке и&nbsp;оставьте открытым на&nbsp;полчаса при&nbsp;комнатной температуре. Оно&nbsp;должно восстановить цвет и&nbsp;немного согреться.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/t_bone_steak.jpg`,
      },
      {
        description:
          "Тем временем вымойте вишню и&nbsp;удалите из&nbsp;нее косточки.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/peeled_cherries.jpg`,
      },
      {
        description:
          "В сотейник налейте вино, доведите его&nbsp;до кипения, сразу же&nbsp;уменьшите огонь до&nbsp;минимального и&nbsp;готовьте при&nbsp;слабом кипении 5&nbsp;минут. Добавьте сахар, гвоздику и&nbsp;ванильный экстракт. Можно вместо экстракта положить стручок ванили, разрезанный вдоль, поварить немного, выскрести из&nbsp;него семена и&nbsp;добавить в&nbsp;соус.	",
        image: `${process.env.PUBLIC_URL}/images/other_images/boil_the_wine_and_add_sugar.jpg`,
      },
      {
        description:
          "Вишню положите в&nbsp;сотейник, готовьте 5&nbsp;минут, затем добавьте столовую ложку кукурузной муки, размешайте и&nbsp;продолжайте варить до&nbsp;загустения. 					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/boil_cherries.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Стейк поджарьте на&nbsp;очень горячей сковороде без&nbsp;масла или&nbsp;на гриле с&nbsp;двух сторон по&nbsp;1-2 минуты с&nbsp;каждой стороны, затем переверните и&nbsp;еще раз&nbsp;обжарьте по&nbsp;1-2 минуте так, чтобы получился рисунок в&nbsp;виде сеточки.  За&nbsp;это время мой&nbsp;стейк прожарился до&nbsp;степени medium well. Вы&nbsp;можете регулировать степень прожарки по&nbsp;своему вкусу.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/fried_steak.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Готовый стейк положите на&nbsp;тарелку и&nbsp;дайте постоять в&nbsp;духовке при&nbsp;50&nbsp;градусах 5-7 минут. После этого подавайте, полив вишневым соусом. Хорошо также подать к&nbsp;такому стейку фруктовый или&nbsp;овощной салат и&nbsp;красное вино.&nbsp; 				 				     				         ",
        image: `${process.env.PUBLIC_URL}/images/other_images/steak_with_cherry.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Имбирный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/ginger_sauce.jpg`,
    ingridients: [
      "Сливочное масло 	120&nbsp;г&nbsp;	",
      "Имбирь свежий 	5&nbsp;см",
      "Лук зеленый 	10&nbsp;г&nbsp;	",
      "Горчица дижонская 	4&nbsp;ч.л.",
      "Соль 	¼ ч.л. 	",
      "Перец черный молотый 	¼ ч.л.",
    ],
    cooking: [
      {
        description:
          "                     Этот соус готовится на&nbsp;основе сливочного масла, так&nbsp;что он&nbsp;достаточно жирный и&nbsp;острый.            ",
      },
      {
        description:
          "Маслу дайте полежать минут 20&nbsp;при комнатной температуре (тем временем подготовьте остальные ингредиенты), затем порежьте на&nbsp;кусочки и&nbsp;сложите в&nbsp;чашку.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/chopped_butter.jpg`,
      },
      {
        description:
          "Мелко-мелко порубите свежий имбирь (1&nbsp;столовая ложка). Обязательно очистите его&nbsp;от кожуры.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/grated_ginger_with_butter.jpg`,
      },
      {
        description:
          "Так же&nbsp;мелко порежьте зеленый лук&nbsp;(1&nbsp;столовая ложка).					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/green_onions_with_oil_and_ginger.jpg`,
      },
      {
        description:
          "Добавляем дижонскую горчицу, без&nbsp;зерен (1&nbsp;столовая ложка).					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_mustard.jpg`,
      },
      {
        description: "Солим и&nbsp;перчим.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/salt_and_pepper.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Смешиваем все&nbsp;с помощью погружного блендера (или венчика или&nbsp;простой вилки). Дайте соусу постоять в&nbsp;холодильнике в&nbsp;течение пары часов.					 								  				 			  			 									",
        image: `${process.env.PUBLIC_URL}/images/other_images/ready_made_ginger_sauce.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Аргентинский соус Чимичурри",
    image: `${process.env.PUBLIC_URL}/images/sauces/argentine_chimichurri_sauce.jpg`,
    ingridients: [
      "Петрушка 	50&nbsp;г&nbsp;	",
      "Кинза (кориандр) 	50&nbsp;г",
      "Чеснок дольки 	4&nbsp;шт. 	",
      "Лук красный 	1&nbsp;шт.",
      "Перец чили 	1&nbsp;шт. 	",
      "Оливковое масло 	100&nbsp;мл",
      "Белый винный уксус 	10&nbsp;мл&nbsp;	",
      "Горчица чёрная (французская) 	1&nbsp;ч.л.",
      "Соль 	1&nbsp;ч.л. 	",
      "Стейк рибай (350г) 	1&nbsp;шт.",
      "Цуккини 	200&nbsp;г&nbsp;",
      "	Помидоры Черри 	100&nbsp;г",
    ],
    cooking: [
      {
        description:
          "Чимичурри&nbsp;—  зелёный соус, подаваемый в&nbsp;Аргентине к&nbsp;жареному мясу и&nbsp;колбасам.",
      },
      {
        description: "Подготовить все&nbsp;ингредиенты.					 								  				 			  			 ",
      },
      {
        description: "Мелко порубить зелень.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_greens.jpg`,
      },
      {
        description: "Измельчить чеснок.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_garlic.jpg`,
      },
      {
        description: "Мелко порезать лук.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_red_onion1.jpg`,
      },
      {
        description: "Мелко порезать чили перчик.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/onion_mustard_and_greens.jpg`,
      },
      {
        description:
          "Сложить все&nbsp;в измельчитель, добавить оливковое масло, винный уксус, соль, перец, французскую горчицу.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/onion_mustard_and_herbs_in_a_blender.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Измельчить до&nbsp;мелких кусочков (не доводя до&nbsp;пюре). Соус готов.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/ready_made_argentine_sauce.jpg`,
      },
      {
        description:
          "Это зеленый соус прекрасно сочетается с&nbsp;мясными блюдами(особенно стейками) и&nbsp;овощами гриль. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/steak_with_argentine_sauce.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Греческий соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/greek_sauce.jpg`,
    ingridients: [
      "йогурт без&nbsp;добавок ('греческий'&nbsp;—  густой)&nbsp;—  300&nbsp;г",
      "огурцы&nbsp;—  1-2 шт.",
      "укроп",
      "мята",
      "чеснок&nbsp;—  2&nbsp;зубчика",
      "сок лимонный&nbsp;—  2&nbsp;ч.л.",
      "оливковое масло&nbsp;—  2&nbsp;ч.л.",
    ],
    cooking: [
      {
        description:
          "Этот соус отлично подойдет для&nbsp;горячих блюд из&nbsp;рыбы или&nbsp;птицы, а&nbsp;также к&nbsp;гренкам или&nbsp;хлебу.",
      },
      {
        description:
          "Если нет&nbsp;'греческого йогурта', можно обычный йогурт без&nbsp;добавок выложить в&nbsp;марлю и&nbsp;оставить на&nbsp;ночь, чтобы стекла жидкость. Стоит учитывать, что&nbsp;масса уменьшиться в&nbsp;2&nbsp;раза.",
      },
      {
        description:
          "Огурцы очистить и&nbsp;удалить семечки. Нарезать мелкими кубиками, выложить в&nbsp;дуршлаг на&nbsp;15-20 минут, чтобы стекла лишняя жидкость.",
        image: `${process.env.PUBLIC_URL}/images/other_images/chopped_cucumbers_in_a_colander.jpg`,
      },
      {
        description: "Зелень вымыть, обсушить и&nbsp;мелко порубить.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_greens1.jpg`,
      },
      {
        description:
          "Чеснок пропустить через пресс, выложить в&nbsp;чашку, добавить зелень, йогурт, масло, лимонный сок&nbsp;и огурцы. Слегка посолить.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_yogurt.jpg`,
      },
      {
        description:
          "Хорошо перемешать и&nbsp;поставить в&nbsp;холодильник, примерно на&nbsp;1&nbsp;час.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Помидорно-мятная заправка к шашлыку",
    image: `${process.env.PUBLIC_URL}/images/sauces/tomato_mint_dressing_for_barbecue.jpg`,
    ingridients: [
      "помидоры (крупные)&nbsp;—  4&nbsp;шт.",
      "томатная паста&nbsp;—  1&nbsp;ст.л.",
      "петрушка&nbsp;—  1&nbsp;горсть",
      "мята&nbsp;—  2&nbsp;горсти",
      "соль&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Эта заправка отлично дополнит вкус шашлыка. Готовить ее&nbsp;необходимо непосредственно перед употреблением, иначе помидоры дадут лишний сок, а&nbsp;мята на&nbsp;воздухе быстро почернеет.",
      },
      {
        description:
          "Помидоры нарезать мелкими кубиками, посолить и&nbsp;оставить минут на&nbsp;5.",
      },
      { description: "Зелень вымыть, обсушить и&nbsp;мелко порубить." },
      {
        description:
          "Смешать помидоры с&nbsp;зеленью, добавить томатную пасту и&nbsp;перемешать.",
      },
      { description: "Заправка готова." },
    ],
    type: saucesType,
  },
  {
    title: "Как приготовить майонез",
    image: `${process.env.PUBLIC_URL}/images/sauces/how_to_make_mayonnaise.jpg`,
    ingridients: [
      "2&nbsp;желтка куриных яиц",
      "300&nbsp;милилитров охлажденного&nbsp;(важно!)&nbsp;в холодильнике&nbsp;оливкового масла (в крайнем случае, пойдет и&nbsp;подсолнечное)",
      "1 чайная ложка горчицы",
      "2&nbsp;чайные ложки сахара",
      "примерно треть&nbsp;чайной ложки соли экстра",
      "свежевыжатый лимонный сок",
      "не обязательно&nbsp;—  специи по&nbsp;вкусу (например, что-то из&nbsp;этого: красный или&nbsp;черный перец, мускатный орех, лимонная цедра)",
    ],
    cooking: [
      {
        description:
          "1. Взбиваем яичные желтки с&nbsp;солью, сахаром и&nbsp;горчицей до&nbsp;получения однородной массы. Взбивать во&nbsp;время всего процесса можно как&nbsp;комбайном или&nbsp;миксером, так&nbsp;и полностью вручную&nbsp;—  венчиком, и&nbsp;последнее не&nbsp;так трудно, как&nbsp;может показаться на&nbsp;первый взгляд.",
      },
      {
        description:
          "2. Продолжая взбивать нашу массу,&nbsp;максимально тонкой струйкой или&nbsp;совсем небольшими порциями добавляем растительное масло. Следим за&nbsp;тем, чтобы влитое масло превращалось в&nbsp;характерную массу, если это&nbsp;не происходит, прекращаем добавлять масло продолжая взбивать до&nbsp;получения данной массы.",
      },
      {
        description:
          "3. Добавляем сок&nbsp;примерно половины лимона (по вкусу), и&nbsp;окончательно перемешиваем взбиванием готовый майонез.",
      },
      { description: "Наслаждаемся натуральным продуктом!" },
      { description: "Высший пилотаж" },
      {
        description:
          "При приготовлении эмульгируйте майонез именно круговым перемешиванием, но&nbsp;не взбивайте. Мелкие пузырьки воздуха останутся в&nbsp;майонезе на&nbsp;весь срок допустимого хранения, что&nbsp;существенно сократит срок хранения из-за повышенного окисления. В&nbsp;хорошем майонезе не&nbsp;должно быть никаких пузырьков.",
      },
      { description: "Что делать, если майонез расслоился при приготовлении" },
      {
        description:
          "Нечасто, но&nbsp;случаются 'аварии'&nbsp;—  майонез расслоился в&nbsp;процессе приготовления. Т.е. масса получилась неоднородной. Что&nbsp;же делать?",
      },
      {
        description:
          "Это случается в&nbsp;основном из-за использования неохлажденного растительного масла или&nbsp;слишком интенсивного его&nbsp;добавления при&nbsp;взбивании.",
      },
      {
        description:
          "Не беда. Начинаем процедуру сначала; придется взять новый яичный желток, и&nbsp;начать взбивать с&nbsp;него, добавляя в&nbsp;него по&nbsp;чуть-чуть 'испорченную' массу, затем масло.",
      },
    ],
    type: saucesType,
  },

  {
    title: "Соус из авокадо с зеленью",
    image: `${process.env.PUBLIC_URL}/images/sauces/avocado_sauce_with_herbs.jpg`,
    ingridients: [
      "1&nbsp;авокадо&nbsp;",
      "1&nbsp;луковица&nbsp;",
      "пучок щавеля",
      "2&nbsp;шт.молодого чеснока",
      "зелень петрушки, кинзы, укропа",
      "1/2&nbsp;баночки оливок без&nbsp;косточек",
      "сок 1/2&nbsp;лимона",
      "кайенский перец на&nbsp;кончике ножа",
      "1&nbsp;столовая ложка оливкового масла&nbsp;",
      "соль",
    ],
    cooking: [
      {
        description:
          "Авокадо почистить, удалить косточку и&nbsp;порезать на&nbsp;кусочки.",
      },
      {
        description:
          "Щавель, лук, чеснок и&nbsp;зелень вымыть, обсушить и&nbsp;порезать.",
      },
      {
        description:
          "Все измельчить в&nbsp;блендере с&nbsp;соком лимона и&nbsp;оливковым маслом, посолить по&nbsp;вкусу.",
      },
      {
        description: "Можно подавать как&nbsp;к рыбе, так&nbsp;и к&nbsp;мясу.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Томатный соус с уксусом",
    image: `${process.env.PUBLIC_URL}/images/sauces/tomato__sauce.jpg`,
    ingridients: [
      "1100&nbsp;г. 'мясистых' помидор",
      "30&nbsp;мл. уксуса 9%",
      "70&nbsp;г. сахара",
      "10&nbsp;г. соли",
      "черный молотый перец",
    ],
    cooking: [
      {
        description:
          "Помидоры порезать, сварить, чтобы стали мягкими, перетереть через сито или&nbsp;соковыжималку.",
      },
      { description: "Уварить до&nbsp;уменьшения объема в&nbsp;два раза." },
      {
        description:
          "Добавить сахар, соль, уксус, перец и&nbsp;размешать, довести до&nbsp;кипения и&nbsp;закрыть в&nbsp;стерильные банки.",
      },
      {
        description:
          "По желанию можно добавлять в&nbsp;соус чеснок и&nbsp;&nbsp;пряные травы: базилик, орегано, хмели-сунели и&nbsp;т.д.",
      },
      {
        description:
          "Соус хорошо подойдет к&nbsp;макаронам, для&nbsp;приготовления пиццы, голубцов и.т.д.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Неаполитанский соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/neapolitan_sauce.jpg`,
    ingridients: [
      "2 столовые ложки оливкового масла",
      "1 крупная луковица",
      "3 дольки чеснока",
      "1 столовая ложка сухого орегано",
      "800 г. банка консервированных томатов",
      "2 столовые ложки томатной пасты",
      "1 столовая ложка сахара",
      "4 свежих томата",
    ],
    cooking: [
      {
        description:
          "Лук почистить и&nbsp;мелко нарезать, чеснок натереть на&nbsp;мелкой терке или&nbsp;через чеснодавилку.",
      },
      {
        description:
          "Разогреть масло в&nbsp;большой кастрюле, добавить лук&nbsp;и чеснок и&nbsp;готовить примерно 7-8 мин. пока лук&nbsp;не станет мягким.",
      },
      {
        description:
          "Добавить орегано, консервированные томаты (очищенные от&nbsp;кожи и&nbsp;семян), томатную пасту, сахар и&nbsp;тушить 20&nbsp;мин, помешивая, до&nbsp;тех пор&nbsp;пока соус не&nbsp;выпарится на&nbsp;1/3&nbsp;и&nbsp;немного загустеет.",
      },
      {
        description:
          "На носике у&nbsp;свежих томатов сделать крестообразный надрез, обдать кипятком и&nbsp;снять кожуру. Разрезать, удалить семена и&nbsp;измельчить. Добавить в&nbsp;соус и&nbsp;готовить еще&nbsp;несколько минут. Приправить солью и&nbsp;молотым черным перцем.",
      },
      {
        description:
          "Для настоящего Неаполитанского соуса надо добавить анчоусы и&nbsp;маслины.",
      },
      {
        description:
          "Используется для&nbsp;приготовления пиццы, к&nbsp;макаронам и&nbsp;другим блюдам.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Горчичный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/mustard_sauce.jpg`,
    ingridients: [
      "4&nbsp;столовые ложки дижонской горчицы",
      "1&nbsp;чайная ложка порошка горчицы",
      "2&nbsp;столовые ложки меда",
      "2&nbsp;столовые ложки белого винного уксуса",
      "1/3&nbsp;стакана растительного масла",
      "2&nbsp;—  3&nbsp;столовые ложки измельченной зелень укропа",
    ],
    cooking: [
      {
        description:
          "Смешать горчицы, мед&nbsp;и уксус, постоянно помешивая венчиком.",
      },
      {
        description:
          "Когда масса станет однородной, по&nbsp;чуть-чуть добавлять оливковое масло&nbsp;—  непрерывно взбивая, иначе соус свернется.",
      },
      { description: "Затем вмешать укроп." },
    ],
    type: saucesType,
  },
  {
    title: "Ванильный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/vanilla_sauce.jpg`,
    ingridients: [
      "3&nbsp;яйца",
      "1&nbsp;столовая ложка крахмала",
      "1&nbsp;столовая ложка муки",
      "0,5&nbsp;литра молока",
      "цедра 1&nbsp;лимона (по желанию)",
      "2&nbsp;—  3&nbsp;пакетика ванильного сахара (10&nbsp;г.) или&nbsp;стручок ванили",
      "1&nbsp;стакан сахара",
    ],
    cooking: [
      { description: "Смешать крахмал с&nbsp;мукой, закипятить молоко." },
      { description: "Яйца растереть с&nbsp;сахаром." },
      {
        description:
          "Продолжая растирать, добавить мучную смесь, просеивая сверху через сито.",
      },
      { description: "Не прекращая взбивать, влить струйкой кипящее молоко." },
      { description: "Хорошенько вымешать, чтобы стало гладким." },
      {
        description:
          "В посуде с&nbsp;толстым дном и&nbsp;на маленьком огне, непрерывно помешивая, нагреть до&nbsp;кипения и&nbsp;загустения массы.Добавить серединку стручка ванили или&nbsp;ванильный сахар.",
      },
      {
        description:
          "Остудить соус, поставив кастрюльку в&nbsp;емкость с&nbsp;холодной водой, и&nbsp;периодически перемешивая его.",
      },
      {
        description:
          "По желанию мелко натереть цедру лимона и&nbsp;добавить в&nbsp;остывший соус.",
      },
      {
        description:
          "Соус можно подать к&nbsp;десертам, фруктовым десертам, выпечке, блинчикам и.т.п.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Соус к рыбе",
    image: `${process.env.PUBLIC_URL}/images/sauces/sauce_for_fish.jpg`,
    ingridients: [
      "400&nbsp;г. майонеза Провансаль",
      "100&nbsp;г. маринованных огурцов",
      "50&nbsp;г.&nbsp; каперсов",
      "небольшой пучок петрушки",
      "несколько веточек эстрагона",
      "45&nbsp;мл. белого винного уксуса",
      "щепотку кайенского перца",
      "соус Табаско",
    ],
    cooking: [
      {
        description:
          "Огурцы, каперсы, петрушку и&nbsp;эстрагон мелко порубить. Смешать с&nbsp;майонезом, уксусом, перцем и&nbsp;соусом табаско.",
      },
      { description: "Оставить в&nbsp;холодильнике на&nbsp;1&nbsp;час." },
      {
        description:
          "Соус подойдет к&nbsp;любой рыбе, как&nbsp;к жареной, так&nbsp;и к&nbsp;рыбе приготовленной на&nbsp;гриле.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Майонез без яиц",
    image: `${process.env.PUBLIC_URL}/images/sauces/mayonnaise_without_eggs.jpg`,
    ingridients: [
      "150&nbsp;мл&nbsp;молока (комнатной температуры!!!)",
      "200&nbsp;мл&nbsp;подсолнечного масла",
      "100&nbsp;мл&nbsp;оливкового масла",
      "1&nbsp;столовая ложка горчицы",
      "2&nbsp;—  3&nbsp;столовые ложки лимонного сока (можно заменить уксусом)",
      "1&nbsp;чайная ложка соли",
    ],
    cooking: [
      { description: "В блендере смешать молоко и&nbsp;масло." },
      { description: "Добавить соль и&nbsp;горчицу." },
      {
        description:
          "Взбивать смесь ручным блендером, пока она&nbsp;не начнет превращаться в&nbsp;эмульсую.",
      },
      { description: "Добавить лимонный сок, взбить до&nbsp;загустения." },
      {
        description:
          "Такой майонез хранится в&nbsp;холодильнике до&nbsp;10&nbsp;дней.",
      },
      {
        description:
          "Из него можно делать и&nbsp;другие соусы, добавляя различные добавки: маринованные грибочки, огурчики, маслины, каперсы, укроп и&nbsp;т.д.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Клюквенный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/cranberry_sauce.jpg`,
    ingridients: [
      "1&nbsp;стакан клюквы",
      "1/2&nbsp;стакана виноградного сока (или апельсинового)",
      "1/3&nbsp;стакана сахара",
    ],
    cooking: [
      {
        description:
          "Взять стакан свежей или&nbsp;размороженной клюквы, положить в&nbsp;кастрюлю.Засыпать сахаром, залить соком и&nbsp;поставить на&nbsp;маленький огонь, непрерывно помешивать.После закипания варить примерно 10&nbsp;минут. Если жидкость быстро выкипает&nbsp;—  можно немного подлить сок&nbsp;или воду.",
      },
      {
        description:
          "Частично ягоды полопаются, а&nbsp;некоторые останутся целыми&nbsp;—  это&nbsp;нормально.",
      },
      {
        description:
          "По желанию в&nbsp;соус можно добавить чеснок, мускатный орех и&nbsp;пряные травы, но, на&nbsp;мой взгляд, без&nbsp;приправ лучше.",
      },
      {
        description:
          "Такой соус очень хорошо подходит к&nbsp;птице, мясным блюдам, жареному сыру и&nbsp;даже к&nbsp;рыбе. А&nbsp;так же&nbsp;клюквенный соус можно использовать для&nbsp;приготовления порогов и&nbsp;десертов или&nbsp;просто намазать на&nbsp;кусочек свежего батона.",
      },
      {
        description:
          "В Америке, например, каждый год, четвертый четверг ноября празднуют День благодарения, а&nbsp;символом праздника является фаршированная индейка с&nbsp;клюквенным соусом.",
      },
    ],
    type: saucesType,
  },
  {
    title: "Зеленый соус из авокадо",
    image: `${process.env.PUBLIC_URL}/images/sauces/green_avocado_sauce.jpg`,
    ingridients: [
      "1/2&nbsp;авокадо",
      "6&nbsp;—  8&nbsp;шт оливок",
      "1/2&nbsp;столовой ложки сока лайма",
      "1&nbsp;чайная ложка каперсов (по желанию)",
      "1&nbsp;—  2&nbsp;веточки мяты",
      "2&nbsp;веточки фенхеля или&nbsp;укропа",
      "2&nbsp;—  3&nbsp;столовые ложки майонеза",
    ],
    cooking: [
      { description: "Мяту и&nbsp;фенхель мелко порезать." },
      {
        description:
          "Авокадо разрезать пополам, удалить косточку и&nbsp;одну половину очистить от&nbsp;кожуры, порезать крупно.",
      },
      {
        description:
          "Готовить соус необходимо быстро, т.к. авокадо без&nbsp;кислоты потемнеет. Сложить все&nbsp;компоненты (кроме майонеза) в&nbsp;кухонный процессор или&nbsp;блендер и&nbsp;измельчить до&nbsp;состояния соуса. Добавить майонез, перемешать. Соус готов.Кислота в&nbsp;этом соусе необходима, иначе авокадо потемнеет.",
      },
      {
        description:
          "Каперсы придают соусу пикантный вкус, но&nbsp;и дополнительную кислоту&nbsp;—  это&nbsp;надо учесть (если положить каперсы, то&nbsp;можно меньше сока лайма или&nbsp;оливок).",
      },
    ],
    type: saucesType,
  },
  {
    title: "Соус-майонез с каперсами",
    image: `${process.env.PUBLIC_URL}/images/sauces/mayonnaise_sauce_with_capers.jpg`,
    ingridients: [
      "5&nbsp;столовых ложек майонеза",
      "10&nbsp;шт. каперсов",
      "веточка базилика",
      "веточка укропа",
      "1/2&nbsp;чайной ложки цедры лимона",
    ],
    cooking: [
      { description: "Укроп, базилик и&nbsp;каперсы измельчить ножом." },
      { description: "Кожу лимона потереть на&nbsp;острой терке." },
      { description: "Все смешать с майонезом" },
      { description: "Соус отлично подойдет к&nbsp;рыбе." },
    ],
    type: saucesType,
  },
  {
    title: "Соус бешамель",
    image: `${process.env.PUBLIC_URL}/images/sauces/bechamel_sauce.jpg`,
    ingridients: [
      "Сливочное масло 								50&nbsp;г&nbsp;															",
      "Мука пшеничная 								50&nbsp;г&nbsp;															",
      "Молоко коровье 								500&nbsp;мл&nbsp;															",
      "Соль 								½ ч.л. 															",
      "Перец черный молотый 								½ ч.л. 													 					 																 											 							",
    ],
    cooking: [
      {
        description:
          "Классический французский соус, который используется очень во&nbsp;многих блюдах&nbsp;—  в&nbsp;суфле, лазаньях, запеканках. Отдельно привожу его&nbsp;рецепт с&nbsp;подробными комментариями и&nbsp;фотографиями, чтобы даже начинающим было понятно, как&nbsp;его правильно приготовить. Это&nbsp;базовый соус, поэтому в&nbsp;зависимости от&nbsp;его конкретного предназначения можно класть различные специи и&nbsp;добавки. Соус может быть чуть гуще или&nbsp;жиже, в&nbsp;зависимости от&nbsp;рецепта, в&nbsp;котором используется.&nbsp;  					 						 				 								 					",
      },
      {
        description:
          "Растопите сливочное масло в&nbsp;сотейнике на&nbsp;маленьком огне.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/melt_the_butter.jpg`,
      },
      {
        description: "Всыпьте муку.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_flour_to_melted_butter.jpg`,
      },
      {
        description:
          "Перемешайте до&nbsp;однородности, продолжая нагревать.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_flour_with_butter.jpg`,
      },
      {
        description:
          "Доведите смесь до&nbsp;кипения, помешивая. Получилась основа соуса, называемая ру&nbsp;(roux).",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_flour_with_butter_until_smooth.jpg`,
      },
      {
        description:
          "Добавьте понемногу холодное молоко, продолжая помешивать. Обратите внимание, что&nbsp;ру должно быть горячим, а&nbsp;молоко холодным. Не&nbsp;спешите и&nbsp;хорошо разотрите смесь.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_milk.jpg`,
      },
      {
        description:
          "Добавьте остальное молоко, поставьте на&nbsp;маленький огонь и&nbsp;интенсивно мешайте. Уделите особое внимание уголкам кастрюли.&nbsp;			 				 								 					",
      },
      {
        description:
          "Доведите соус до&nbsp;кипения и&nbsp;проварите не&nbsp;более 5&nbsp;минут, чтобы не&nbsp;появился неприятный 'клейстерный' привкус. Добавьте соль и&nbsp;перец.					 								  				 			  			 ",
      },
      {
        description:
          "Конечная консистенция соуса должна быть гладкой и&nbsp;без комочков. Если вам&nbsp;не удалось получить совсем однородную смесь без&nbsp;комочков, просто протрите соус через сито.",
        image: `${process.env.PUBLIC_URL}/images/other_images/white_sauce_without_lumps.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Быстрый домашний майонез",
    image: `${process.env.PUBLIC_URL}/images/sauces/quick_homemade_mayonnaise.jpg`,
    ingridients: [
      " Масло виноградных косточек 50 мл ",
      "Оливковое масло 50 мл ",
      "Подсолнечное масло рафинированное 100 мл ",
      "Горчица 1 ч.л. ",
      "Соль ½ ч.л. ",
      "Яйцо куриное 1 шт. ",
      "Уксус столовый 20 мл ",
    ],
    cooking: [
      {
        description:
          "Любимый очень многими соус, который можно сделать дома за&nbsp;считанные минуты при&nbsp;помощи блендера. Это&nbsp;мало того, что&nbsp;просто, да&nbsp;еще и&nbsp;выглядит захватывающе, как&nbsp;практические занятия по&nbsp;химии в&nbsp;детстве. Еще&nbsp;один плюс&nbsp;—  соус хорошо хранится в&nbsp;холодильнике около недели.&nbsp; ",
      },
      {
        description:
          "В высокую узкую емкость налейте масло (можно брать любые масла, которые вы&nbsp;любите, но&nbsp;не переборщите с&nbsp;концентрированными вкусами). Добавьте туда соль и&nbsp;горчицу.&nbsp; ",
        image: `${process.env.PUBLIC_URL}/images/other_images/olive_oil_and_egg.jpg`,
      },
      {
        description:
          "Разбейте яйцо (не забудьте его&nbsp;предварительно хорошенько вымыть) в&nbsp;масло. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/beaten_egg.jpg`,
      },
      {
        description:
          "Опустите блендер в смесь так, чтобы яйцо оказалось внутри. ",
      },
      {
        description:
          "Прижимая блендер ко дну, включите его на высокую скорость и взбивайте.",
      },
      {
        description:
          "Медленно поднимайте блендер вверх, чтобы масса стала однородной. На&nbsp;этом этапе добавьте уксус или&nbsp;лимонный сок&nbsp;и еще&nbsp;немного взбейте. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/blend_it_into_a_smooth_paste.jpg`,
      },
      {
        description:
          "Если вы&nbsp;любите очень густой майонез (немного напоминающий желе), то&nbsp;на этом этапе можно остановиться, а&nbsp;если хотите более кремообразную консистенцию, то&nbsp;добавьте пару ложек горячей воды в&nbsp;самом конце. ",
      },
    ],
    type: saucesType,
  },
  {
    title: "Чесночный майонез",
    image: `${process.env.PUBLIC_URL}/images/sauces/garlic_mayonnaise.jpg`,
    ingridients: [
      "Яичный желток 								2&nbsp;шт. 															",
      "Соль 								¼ ч.л. 															",
      "Перец черный молотый 								¼ ч.л. 															",
      "Горчица 								¼ ч.л. 															",
      "Чеснок дольки 								2&nbsp;шт. 															",
      "Горчичное масло 								275&nbsp;мл&nbsp;															",
      "Уксус столовый 								30&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "В небольшую миску положить 2&nbsp;свежих яичных желтка, раздавленный или&nbsp;растертый чеснок, соль, перец и&nbsp;немного горчицы. Соль и&nbsp;горчицу лучше класть совсем чуть-чуть, а&nbsp;если надо, добавить в&nbsp;уже готовый майонез.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/egg_yolks_with_salt_and_pepper.jpg`,
      },
      {
        description:
          "			 				 													 													 						Добавить буквально 1&nbsp;каплю масла и&nbsp;хорошо перемешать.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_yolks_with_mustard.jpg`,
      },
      {
        description:
          "Теперь потребуется некоторое терпение. Яичную смесь нужно взбивать, добавляя масло буквально по&nbsp;каплям. Смесь должна все&nbsp;время оставаться однородной, даже если она&nbsp;будет очень густой. После того, как&nbsp;половина масла будет добавлена, можно действовать смелее.  Когда майонез станет очень густым, нужно добавить 2&nbsp;столовые ложки уксуса (или лимонного сока), продолжая взбивать.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_the_egg_mixture_with_mustard_oil.jpg`,
      },
      {
        description:
          "			 				 													 													 						В конце должен получиться довольно густой однородный соус. Если вы&nbsp;хотите получить более легкую консистенцию, то&nbsp;в конце взбивания добавьте пару столовых ложек горячей кипяченой воды.",
        image: `${process.env.PUBLIC_URL}/images/other_images/thick_yellow_sauce.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Домашний майонез на оливковом масле",
    image: `${process.env.PUBLIC_URL}/images/sauces/homemade__mayonnaise.jpg`,
    ingridients: [
      "Яичный желток 								1&nbsp;шт. 															",
      "Сахар-песок 								5&nbsp;г&nbsp;															",
      "Соль 								0.3&nbsp;ч.л. 															",
      "Лимонный сок&nbsp;								10&nbsp;мл&nbsp;															",
      "Оливковое масло 								100&nbsp;мл&nbsp;							",
    ],
    cooking: [
      {
        description:
          "Вся прелесть приготовления майонеза в&nbsp;домашних условиях состоит в&nbsp;точном соблюдении технологии. Майонез состоит из&nbsp;яичной смеси и&nbsp;оливкового масла, но&nbsp;масло нужно добавлять буквально по&nbsp;капле, тщательно вымешивая соус каждый раз. Такая технология обеспечивает создание эмульсии&nbsp;—  крохотные частички масла оказываются окружёнными яичной смесью. В&nbsp;результате на&nbsp;Ваших глазах две&nbsp;жидких составляющих&nbsp;—  яйца и&nbsp;масло&nbsp;—  превращаются в&nbsp;густой-густой, пластичный соус. Процесс превращения настолько невероятный, что&nbsp;кажется в&nbsp;соусе должны присутствовать какие-то загустители. Крахмал или&nbsp;желатин. Но&nbsp;на самом деле майонез обходится простыми законами физики :)Смешивать майонез можно венчиком или&nbsp;даже просто вилкой, но&nbsp;миксер или&nbsp;блендер сделают процесс проще, а&nbsp;готовый соус более густым и&nbsp;светлым.&nbsp;  					 						 				 								 					",
      },
      {
        description:
          "						 											 				 													 													 						В классическом рецепте майонеза используются только желтки. Один желток куриного яйца можно заменить четырьмя желтками перепелиными. В&nbsp;любом случае важно быть уверенным, что&nbsp;яйцо прошло ветеринарную проверку и&nbsp;не может навредить здоровью.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/three_egg_yolks.jpg`,
      },
      {
        description:
          "Смешиваем желтки с&nbsp;сахаром, солью и&nbsp;лимонным соком. Все&nbsp;приправы на&nbsp;этом этапе очень важны для&nbsp;вкуса будущего соуса. Лимонный сок&nbsp;можно заменить столовым уксусом, но&nbsp;с лимоном вкуснее.Если захочется приготовить не&nbsp;просто майонез, а&nbsp;майонез Провансаль, то&nbsp;в смесь добавляем четверть чайной ложки горчицы или&nbsp;горчичного порошка. С&nbsp;горчицей майонез получается более плотным.&nbsp;			 				 								 					",
      },
      {
        description:
          "Теперь самое интересное. Начинаем подмешивать масло. Сначала добавляем масло по&nbsp;одной капельке, тщательно размешивая каждый раз. После нескольких добавленных ложек, масло можно уже&nbsp;добавлять большими порциями.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_olive_oil.jpg`,
      },
      {
        description:
          "		 				 													 													 						Майонез начнёт заметно загустевать только когда будет добавлена примерно половина всего масла, не&nbsp;раньше.Готовый соус может храниться в&nbsp;холодильнике два-три дня, при&nbsp;этом он&nbsp;никак не&nbsp;меняется, т.е. не&nbsp;происходит отслаивания масла. Подобный казус может произойти только если начать майонез нагревать. Поэтому с&nbsp;домашним майонезом не&nbsp;нужно ничего запекать или&nbsp;жарить, его&nbsp;нужно употреблять только в&nbsp;холодном виде.",
        image: `${process.env.PUBLIC_URL}/images/other_images/ready_mayonnaise.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Зеленый сливочный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/green_cream_sauce.jpg`,
    ingridients: [
      " Сливочное масло 25 г ",
      "Перец сладкий зеленый 1 шт. ",
      "Чеснок дольки 1 шт. ",
      "Сливки 20-22% 250 мл ",
      "Мука кукурузная 5 г ",
      "Соль ½ ч.л. ",
      "Укроп 10 г ",
      "Перец черный молотый ¼ ч.л.",
    ],
    cooking: [
      {
        description:
          "Нежный сливочный соус можно использовать в&nbsp;тех случаях, когда нужен мягкий и&nbsp;деликатный вкус. Пастельно-зеленый цвет соусу придает перец, а&nbsp;так как&nbsp;он бывает разных цветов, то&nbsp;и соус можно красить в&nbsp;разные оттенки.&nbsp; ",
      },
      {
        description:
          "В маленьком сотейнике растопите масло и&nbsp;добавьте перец, очищенный от&nbsp;семян и&nbsp;нарезанный небольшими кусочками.&nbsp; ",
        image: `${process.env.PUBLIC_URL}/images/other_images/chopped_green_pepper.jpg`,
      },
      {
        description:
          "Готовьте на&nbsp;маленьком огне 5-7 минут помешивая, пока перец не&nbsp;станет мягким, затем добавьте измельченный чеснок.&nbsp; ",
        image: `${process.env.PUBLIC_URL}/images/other_images/green_pepper_with_garlic.jpg`,
      },
      {
        description: "Еще через пару минут влейте сливки. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cream_with_green_pepper.jpg`,
      },
      {
        description: "&nbsp;Доведите смесь до&nbsp;кипения. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/boil_cream_and_pepper.jpg`,
      },
      {
        description:
          "Снимите с огня и с помощью блендера доведите соус до однородной консистенции.  ",
        image: `${process.env.PUBLIC_URL}/images/other_images/blend_the_mixture.jpg`,
      },
      {
        description:
          "Вновь верните на огонь, посолите и добавьте чайную ложку кукурузной муки. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_corn_mixture.jpg`,
      },
      {
        description: "Хорошо размешайте и еще раз доведите до кипения.  ",
        image: `${process.env.PUBLIC_URL}/images/other_images/stir_and_boil.jpg`,
      },
      {
        description:
          "Добавьте измельченную зелень укропа, молотый перец и перемешайте. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_dill_and_ground_black_pepper.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Томатный соус с эстрагоном",
    image: `${process.env.PUBLIC_URL}/images/sauces/tomato_sauce_with_tarragon.jpg`,
    ingridients: [
      "Чеснок дольки 								2&nbsp;шт. 															",
      "Оливковое масло 								40&nbsp;мл&nbsp;															",
      "Томатное пюре 								500&nbsp;г&nbsp;															",
      "Эстрагон 								30&nbsp;г&nbsp;															",
      "Соль 								½ ч.л. 													 					 																 											 							",
    ],
    cooking: [
      {
        description:
          "Большинство из&nbsp;нас уже&nbsp;привыкло к&nbsp;тому, что&nbsp;если пицца&nbsp;—  то&nbsp;обязательно соус с&nbsp;базиликом или&nbsp;орегано. Это, безусловно, очень вкусно и&nbsp;органично, но&nbsp;стоит попробовать сделать соус с&nbsp;эстрагоном. Он&nbsp;придает какую-то очень свежую нотку и&nbsp;отлично сочетается с&nbsp;разными видами пиццы.&nbsp;  					 						 				 								 					",
      },
      {
        description:
          "Очищенный чеснок мелко порезать и&nbsp;слегка обжарить, после чего вылить туда томатное пюре.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_garlic_in_olive_oil.jpg`,
      },
      {
        description:
          "Свежий эстрагон вымыть и&nbsp;оборвать листочки. Стебли нам&nbsp;не понадобятся.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/tarragon.jpg`,
      },
      {
        description:
          "			 				 													 													 						Когда томатное пюре покипит минут 5-7, положить туда нарезанные листочки эстрагона.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/tomato_puree_with_tarragon.jpg`,
      },
      {
        description:
          "Перемешать, прокипятить еще&nbsp;пару минут, посолить и&nbsp;выключить огонь. Если будете класть соус в&nbsp;пиццу&nbsp;—  его&nbsp;лучше предварительно остудить.",
        image: `${process.env.PUBLIC_URL}/images/other_images/salt_the_tomato_paste.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Яблочный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/applesauce.jpg`,
    ingridients: [
      "Яблоки 								3&nbsp;шт. 															",
      "Лимоны 								0.3&nbsp;шт. 															",
      "Сахар-песок 								60&nbsp;г&nbsp;															",
      "Корица молотая 								1&nbsp;ч.л. 															",
      "Сливочное масло 								25&nbsp;г&nbsp;															",
      "Ром светлый 								20&nbsp;мл&nbsp;							",
    ],
    cooking: [
      {
        description:
          "Очистить от&nbsp;кожуры и&nbsp;от семечек яблоки, нарезать квадратиками. Сложить в&nbsp;сотейник или&nbsp;кастрюлю.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_apples.jpg`,
      },
      {
        description: "Выжать на&nbsp;яблоки сок&nbsp;лимона.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/lemon.jpg`,
      },
      {
        description:
          "Посыпать сахаром, порошком корицы, добавить сливочное масло и&nbsp;поставить на&nbsp;медленный огонь. Периодически помешивая довести до&nbsp;кипения.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/apples_with_cinnamon_and_butter.jpg`,
      },
      {
        description:
          "Варить на&nbsp;медленном огне 5&nbsp;минут, добавить ром&nbsp;и варить еще&nbsp;5&nbsp;минут. Выключить, переложить в&nbsp;пиалу и&nbsp;дать слегка остыть. Подавать в&nbsp;теплом виде.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cook_apples.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Горчичный майонез",
    image: `${process.env.PUBLIC_URL}/images/sauces/mustard-mayonnaise.jpg`,
    ingridients: [
      "Яйцо куриное 1 шт. ",
      "Горчичное масло 150 мл ",
      "Соль морская 0.2 ч.л. ",
      "Оливки без косточки 40 г ",
      "Лимонный сок 5 мл ",
    ],
    cooking: [
      {
        description:
          "Хочу предложить вашему вниманию простой рецепт вкусного домашнего майонеза. Он&nbsp;был приготовлен мной из&nbsp;горчичного масла и&nbsp;именно поэтому назван горчичным&nbsp;—  это&nbsp;масло добавит получившемуся продукту приятный аромат и&nbsp;более насыщенный жёлтый цвет. Однако вы&nbsp;можете использовать и&nbsp;любое другое растительное масло и&nbsp;назвать майонез оливковым, подсолнечным или&nbsp;каким-либо ещё&nbsp;—  на&nbsp;ваше усмотрение :) Для&nbsp;приготовления вам&nbsp;понадобится блендер&nbsp;—  с&nbsp;ним весь процесс займёт пару минут.&nbsp; ",
      },
      {
        description:
          "Главные фигуранты приготовления майонеза&nbsp;—  это&nbsp;растительное (горчичное) масло и&nbsp;яйцо. Яйцо берём целиком (желток + белок), тогда майонез получится густым и&nbsp;плотным. Количество масла можно варьировать&nbsp;—  уменьшить или&nbsp;увеличить. Мной пока не&nbsp;установлено влияние количества масла на&nbsp;характеристики майонеза. Возможно, чем&nbsp;больше масла, тем&nbsp;он становится жирнее. Если вы&nbsp;владеете достоверной информацией на&nbsp;этот счёт, будет здорово, если вы&nbsp;раскроете её&nbsp;в комментариях.&nbsp; ",
        image: `${process.env.PUBLIC_URL}/images/other_images/egg_and_mustard_oil.jpg`,
      },
      {
        description:
          "Заливаем в&nbsp;блендер горчичное масло, разбиваем туда яйцо, и&nbsp;туда же&nbsp;забрасываем 1/5&nbsp;чайной ложки соли, несколько капель сока лимона и&nbsp;4&nbsp;оливки без&nbsp;косточки. Оливки мы&nbsp;с вами используем вместо большего количества лимонного сока&nbsp;—  они&nbsp;столь же&nbsp;подкисляют наш&nbsp;майонез, только вкус у&nbsp;них гораздо интереснее и&nbsp;пикантнее. Если вы&nbsp;делали майонез просто с&nbsp;лимонным соком, думаю, вы&nbsp;почувствуете разницу. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mustard_oil_with_lemon_juice.jpg`,
      },
      {
        description:
          "Включаем блендер и&nbsp;начинаем аккуратно двигать его&nbsp;в процессе перемешивания вверх-вниз. Прозрачная субстанция сразу начнёт становиться матовой и&nbsp;постепенно густеть. Взбивать нужно примерно в&nbsp;течение минуты, пока масса не&nbsp;станет однородной и&nbsp;не приобретёт консистенцию густого майонеза. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_egg_with_mustard_oil.jpg`,
      },
      {
        description:
          "Майонез готов! Можно сразу заправлять им&nbsp;блюда, а&nbsp;можно положить в&nbsp;холодильник на&nbsp;несколько дней. Наверное, единственный недостаток домашнего майонеза в&nbsp;том, что&nbsp;он недолго хранится, но&nbsp;в этом и&nbsp;его плюс, ведь он&nbsp;полностью натуральный. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mustard_mayonnaise.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Сметанный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/sour_cream_sauce.jpg`,
    ingridients: [
      "Лук зеленый 								15&nbsp;г&nbsp;															",
      "Сметана 								180&nbsp;г&nbsp;															",
      "Солёные огурцы 								100&nbsp;г&nbsp;															",
      "Сливочный хрен 								1&nbsp;ст.л. 															",
      "Перец черный молотый 								¼ ч.л. 													 					 																 											 							",
    ],
    cooking: [
      {
        description:
          "У соуса приятный свежий и&nbsp;остренький вкус. Соус прекрасно сочетается с&nbsp;рыбой.&nbsp;  					 						 				 								 					",
      },
      {
        description:
          "Огурец мелко нарезать, корневую часть зеленого лука так&nbsp;же нарезать мелко, а&nbsp;зеленые перья длинной 1&nbsp;см. Смешать сметану с&nbsp;хреном, приправить перцем, добавить лук&nbsp;и огурцы. Поставить на&nbsp;1&nbsp;час&nbsp;в холодильник.",
        image: `${process.env.PUBLIC_URL}/images/other_images/pickled_cucumbers_sour_cream_and_green_onions.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Брусничный соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/lingonberry_sauce.jpg`,
    ingridients: [
      " Брусника 500 г ",
      "Сахар-песок 150 г ",
      "Корица молотая 2 ч.л. ",
      "Вино белое сухое (столовое) 100 мл ",
      "Крахмал картофельный 15 г ",
    ],
    cooking: [
      {
        description:
          "Очень красивый универсальный соус, который можно подать к&nbsp;мясу, птице, к&nbsp;десертам, блинам или&nbsp;творогу, а&nbsp;можно вообще есть просто так&nbsp;с чаем вместо варенья. Он&nbsp;везде будет хорош и&nbsp;уместен.&nbsp; ",
      },
      {
        description: "В бруснику добавить 200 мл воды и довести до кипения.  ",
        image: `${process.env.PUBLIC_URL}/images/other_images/lingonberries_in_a_saucepan.jpg`,
      },
      {
        description: "Добавить сахар и&nbsp;корицу. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_cinnamon_to_lingonberries.jpg`,
      },
      {
        description: "Поварить 2-3 минуты. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/boil_lingonberries.jpg`,
      },
      {
        description: "С помощью блендера превратить ягоды в однородное пюре. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/blending_lingonberries.jpg`,
      },
      {
        description: "Влить вино и еще немного нагреть.  ",
      },
      {
        description:
          "Помешивая, тонкой струйкой влить разведенный в&nbsp;небольшом количестве воды крахмал. Довести до&nbsp;кипения и&nbsp;сразу же&nbsp;выключить, не&nbsp;давая соусу кипеть. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_starch.jpg`,
      },
      {
        description: " С творогом тоже прекрасно сочетается. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cottage_cheese_with_lingonberry_sauce.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Сладкий мятный песто",
    image: `${process.env.PUBLIC_URL}/images/sauces/sweet_mint_pesto.jpg`,
    ingridients: [
      "Сахар-песок 								50&nbsp;г&nbsp;															",
      "Миндаль 								100&nbsp;г&nbsp;															",
      "Мята свежая 								50&nbsp;г&nbsp;															",
      "Эстрагон 								25&nbsp;г&nbsp;															",
      "Мёд 								80&nbsp;г&nbsp;							",
      "",
    ],
    cooking: [
      {
        description:
          "Отличный и&nbsp;к тому же&nbsp;постный десертный соус. Очень вкусно с&nbsp;мороженым, творогом или&nbsp;блинами.",
      },
      {
        description:
          "Сделайте сахарный сироп из&nbsp;100&nbsp;мл&nbsp;воды и&nbsp;пары столовых ложек сахара, прокипятите и&nbsp;остудите.   Миндаль залейте кипятком, очистите и&nbsp;подсушите.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/almonds_in_blender.jpg`,
      },
      {
        description:
          "У мяты и&nbsp;эстрагона удалите стебли, оставив только листья. Можно обойтись и&nbsp;просто мятой, но&nbsp;эстрагон привносит туда очень интересные нотки.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mint_and_tarragon.jpg`,
      },
      {
        description:
          "Все вместе измельчите в&nbsp;блендере как&nbsp;можно сильнее.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_almonds_and_mint_in_a_blender.jpg`,
      },
      {
        description: "Добавьте в&nbsp;смесь сироп.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_syrup.jpg`,
      },
      {
        description:
          "Положите мед&nbsp;(не застывший, но&nbsp;и не&nbsp;слишком жидкий) и&nbsp;еще раз&nbsp;взбейте как&nbsp;следует.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_honey1.jpg`,
      },
      {
        description:
          "Соус готов. С&nbsp;блинами очень достойно, хоть и&nbsp;калорийно слегка :)",
        image: `${process.env.PUBLIC_URL}/images/other_images/pancake_with_sauce.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Томатный соус для пиццы",
    image: `${process.env.PUBLIC_URL}/images/sauces/tomato_sauce_for_pizza.jpg`,
    ingridients: [
      "Томатное пюре 								500&nbsp;г&nbsp;															",
      "Оливковое масло 								30&nbsp;мл&nbsp;															",
      "Соль морская 								½ ч.л. 															",
      "Сахар-песок 								10&nbsp;г&nbsp;															",
      "Чеснок дольки 								2&nbsp;шт. 															",
      "Орегано 								½ ч.л. 															",
      "Базилик сушеный 								½ ч.л. 													 					 																 											 							",
    ],
    cooking: [
      {
        description:
          "Когда готовишь пиццу, очень важны все&nbsp;детали&nbsp;—  и&nbsp;тесто, и&nbsp;начинка, и, естественно, соус.  Конечно, можно использовать готовый кетчуп или&nbsp;что-то в&nbsp;этом роде, но&nbsp;гораздо вкуснее, интереснее и&nbsp;полезнее будет приготовить соус самостоятельно. Тем&nbsp;более, что&nbsp;это очень просто.   Готовый соус можно хранить в&nbsp;холодильнике в&nbsp;плотно закрытой стеклянной банке. А&nbsp;можно и&nbsp;не хранить, если сделать побольше теста и&nbsp;готовить разные пиццы несколько раз&nbsp;либо употребить соус с&nbsp;чем-то другим (с пастой, например).&nbsp;  					 						 				 								 					",
      },
      {
        description:
          "Для начала нам&nbsp;понадобится томатное пюре. Либо мы&nbsp;возьмем готовое (500&nbsp;мл), либо приготовим его&nbsp;сами. Для&nbsp;этого понадобится около 600&nbsp;грамм помидоров, которых нужно очистить от&nbsp;кожицы и&nbsp;превратить в&nbsp;пюре с&nbsp;помощью блендера. Если вам&nbsp;мешают семена, можно удалить и&nbsp;их, либо протереть полученное пюре через сито.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/tomato_puree1.jpg`,
      },
      {
        description:
          "На небольшом огне нагреваем пюре, помешивая время от&nbsp;времени, и&nbsp;добавляем туда оливковое масло, соль и&nbsp;сахар (количество сахара можно менять в&nbsp;зависимости от&nbsp;кислоты томатного пюре). Средняя продолжительность варки соуса&nbsp;—  около 20&nbsp;минут.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/tomato_paste_with_olive_oil.jpg`,
      },
      {
        description:
          "Примерно за&nbsp;5&nbsp;минут до&nbsp;окончания приготовления в&nbsp;соус нужно добавить мелко нарезанный чеснок и&nbsp;сушеные травки.  Соус должен немного загустеть за&nbsp;время варки. Теперь его&nbsp;нужно немного охладить и&nbsp;использовать для&nbsp;приготовления пиццы или&nbsp;пасты.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_garlic_and_dried_basil.jpg`,
      },
    ],
    type: saucesType,
  },
  {
    title: "Грибной соус",
    image: `${process.env.PUBLIC_URL}/images/sauces/mushroom_sauce.jpg`,
    ingridients: [
      " Шампиньоны 500 г ",
      "Растительное масло 40 мл ",
      "Лук репчатый 1 шт. ",
      "Сливочное масло 25 г ",
      "Мука пшеничная 20 г ",
      "Соль ½ ч.л. ",
      "Сметана 200 г ",
    ],
    cooking: [
      {
        description:
          "Сначала нужно немного обжарить тонко нарезанный лук, а&nbsp;затем добавить туда кусочки шампиньонов. Думаю, их&nbsp;можно заменить вешенками или&nbsp;лесными грибами.&nbsp; ",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_champignons_with_onions.jpg`,
      },
      {
        description:
          "Столовую ложку муки прогреть в&nbsp;другой сковороде вместе со&nbsp;столовой ложкой масла, не&nbsp;допуская изменения окраски&nbsp; ",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_butter_with_flour.jpg`,
      },
      {
        description:
          "В грибы положить обжаренную муку, посолить. Если будет совсем сухо (а это&nbsp;зависит от&nbsp;грибов), то&nbsp;можно добавить чуть-чуть кипятка и&nbsp;продолжать готовить на&nbsp;небольшом огне при&nbsp;постоянном помешивании.&nbsp; ",
        image: `${process.env.PUBLIC_URL}/images/other_images/salt_the_mushrooms.jpg`,
      },
      {
        description:
          "Через пару минут добавляем сметану, перемешиваем и&nbsp;доводим до&nbsp;кипения. Все, соус можно подавать! ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mushrooms_in_sour_cream.jpg`,
      },
    ],
    type: saucesType,
  },
];

export const saucesTitle = "Соусы,подливы";
