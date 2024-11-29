export const milkshakesType = "milkshakes";

export const milkshakes = [
  {
    title: "Мандариновый смузи",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/tangerine_smoothie.jpg`,
    ingridients: [
      "мандарины&nbsp;—  2&nbsp;шт.",
      "замороженный банан&nbsp;—  1&nbsp;шт.",
      "молоко&nbsp;—  1&nbsp;стакан",
      "йогурт&nbsp;—  ⅓&nbsp;стакана",
      "мед&nbsp;—  1&nbsp;ч. л.",
      "ванилин&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Очищаем банан, режем его&nbsp;на небольшие кусочки и&nbsp;отправляем в&nbsp;морозилку минут на&nbsp;20.",
      },
      {
        description: "Очищаем мандарины.",
      },
      {
        description:
          "Загружаем в&nbsp;блендер мандарины. Добавляем кусочки замороженного банана.",
      },
      {
        description: "Добавляем молоко, йогурт, мед&nbsp;и ванилин.",
      },
      {
        description: "Взбиваем на&nbsp;максимальной скорости 30&nbsp;секунд.",
      },
      {
        description: "Разливаем по&nbsp;стаканам.",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Кофейно-мятный смузи",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/coffee_mint_smoothie.jpg`,
    ingridients: [
      "бананы 	—  0,5&nbsp;шт.",
      "кофе эспрессо/американо 	—  50&nbsp;мл",
      "молоко&nbsp;—  200&nbsp;мл",
      "мята свежая 	—  1&nbsp;пучок",
      "мед&nbsp;—  1&nbsp;ст. л.",
    ],
    cooking: [
      {
        description:
          "     Сварите кофе и&nbsp;дождитесь, пока он&nbsp;остынет. В&nbsp;небольшую кастрюлю налейте молоко, положите в&nbsp;него пучок мяты и&nbsp;нагрейте молоко практически до&nbsp;кипения. Достаньте мяту и&nbsp;остудите молоко. В&nbsp;блендер налейте кофе и&nbsp;добавьте в&nbsp;него банан, порезанный колечками, остывшее мятное молоко и&nbsp;мед по&nbsp;вкусу. Взбейте полученную смесь и&nbsp;подавайте в&nbsp;бокалах, украшенных мятными листочками.",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Коктейль 'Молочная вишня'",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/cocktail_milk_cherry.jpg`,
    ingridients: [
      "йогурт&nbsp;—  100&nbsp;г",
      "мороженая вишня&nbsp;—  100&nbsp;г",
      "мороженое ванильное&nbsp;—  50&nbsp;г",
      "сироп гренадин&nbsp;—  30&nbsp;мл",
      "лед дробленый&nbsp;—  100&nbsp;г",
      "мята для&nbsp;украшения",
    ],
    cooking: [
      {
        description: "Положите в блендер вишню",
        image: `${process.env.PUBLIC_URL}/images/other_images/frozen_cherries.jpg`,
      },
      {
        description: "Добавьте все&nbsp;остальные ингредиенты и&nbsp;смешайте.",
      },
      {
        description:
          "Перелейте напиток в&nbsp;бокалы и&nbsp;украсьте веточкой мяты. ",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Молочный коктейль с клубникой",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/milkshake_with_strawberries.jpg`,
    ingridients: [
      "молоко&nbsp;—  2/3&nbsp;стакана",
      "мороженое сливочное&nbsp;—  100&nbsp;г",
      "клубника&nbsp;—  7-10 ягод",
    ],
    cooking: [
      {
        description:
          "    Мороженое слегка разморозить, клубнику помыть и&nbsp;удалить хвостики. Налить молоко в&nbsp;стакан.",
      },
      {
        description:
          "    В&nbsp;блендер залить молоко, положить мороженое и&nbsp;клубнику. Взбить блендером мороженое, молоко и&nbsp;клубнику до&nbsp;однородной массы.",
      },
      {
        description:
          "Если коктейль получается слишком густым, добавьте еще&nbsp;молока.",
      },
      {
        description: "Перелейте молочный коктейль в&nbsp;бокал.",
      },
      {
        description: "Готово!",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Смузи с авокадо и бананом",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/smoothie_with_avocado_and_banana.jpg`,
    ingridients: [
      "авокадо&nbsp;—  1/2&nbsp;шт.",
      "банан&nbsp;—  1&nbsp;шт.",
      "молоко&nbsp;—  150&nbsp;мл",
      "овсяные хлопья&nbsp;—  2&nbsp;ст.л.",
      "мед&nbsp;—  1&nbsp;ч.л.",
      "корица&nbsp;—  щепотка",
    ],
    cooking: [
      {
        description:
          "Благодаря наличию авокадо, данный смузи получается очень сытным, полезным и, конечно же, очень вкусным! Сладость придают банан и&nbsp;мед, а&nbsp;корица вносит свои ароматные нотки. ",
      },
      {
        description:
          "Для начала очистим авокадо и&nbsp;банан. Авокадо обязательно должен быть спелым. Это&nbsp;легко можно определить. Нужно слегка надавить на&nbsp;кожуру, и&nbsp;если плод слегка проминается, то&nbsp;это то, что&nbsp;нам нужно!",
        image: `${process.env.PUBLIC_URL}/images/other_images/banana_with_avocado.jpg`,
      },
      {
        description:
          "Режем авокадо и&nbsp;банан на&nbsp;небольшие кусочки и&nbsp;загружаем в&nbsp;блендер.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_avocado_and_banana.jpg`,
      },
      {
        description:
          "Добавляем пару столовых ложек овсяных хлопьев, мед&nbsp;и корицу.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_oatmeal_honey_and_cinnamon.jpg`,
      },
      {
        description:
          "Вливаем молоко и&nbsp;взбиваем 30&nbsp;секунд на&nbsp;максимальной скорости.",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Коктейль 'Карамельное небо'",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/cocktail_caramel_sky.jpg`,
    ingridients: [
      "бананы&nbsp;—  2&nbsp;шт.",
      " мороженое&nbsp;—  100&nbsp;г",
      " молоко&nbsp;—  100&nbsp;мл",
      " карамельный пудинг&nbsp;—  1&nbsp;стаканчик",
    ],
    cooking: [
      {
        description:
          "Бананы режем на&nbsp;куски и&nbsp;кладем в&nbsp;чашу блендера. Перемалываем в&nbsp;пюре, добавляем пудинг и&nbsp;перемешиваем. Добавляем молоко и&nbsp;мороженое, взбиваем на&nbsp;самой высокой скорости в&nbsp;течение 30-40 секунд.",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Клубничный ласси",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/strawberry_lassi.jpg`,
    ingridients: [
      "клубника&nbsp;—  200&nbsp;г",
      " мед&nbsp;—  2&nbsp;ст.л.",
      " натуральный йогурт&nbsp;—  250&nbsp;мл",
      " молотый кардамон&nbsp;—  1/4&nbsp;ч.л.",
      " лед&nbsp;—  4-5 кубиков",
    ],
    cooking: [
      {
        description:
          "Кладем все&nbsp;ингредиенты в&nbsp;чашу блендера.Перемалываем до&nbsp;однородного состояния.Переливаем в&nbsp;стаканы и&nbsp;подаем.",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Клубнично-шоколадный шейк",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/strawberry_chocolate_shake.jpg`,
    ingridients: [
      "молоко&nbsp;—  375&nbsp;мл",
      " какао-порошок&nbsp;—  3&nbsp;ст.л.",
      " замороженная клубника (или свежая)&nbsp;—  300&nbsp;г",
      " спелый банан&nbsp;—  1&nbsp;шт.",
      " ванильный сахар&nbsp;—  1&nbsp;ч.л.",
      " сахарная пудра (можно больше, по&nbsp;вкусу)&nbsp;—  2&nbsp;ч.л.",
    ],
    cooking: [
      {
        description:
          "Из половины молока и 3 ложек какао-порошка готовим какао. Остужаем.",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_milk_with_cocoa_powder.jpg`,
      },
      {
        description:
          "Переливаем в&nbsp;чашу блендера. Туда же&nbsp;кладем поломанный на&nbsp;кусочки банан и&nbsp;неразмороженную клубнику.",
        image: `${process.env.PUBLIC_URL}/images/other_images/pour_into_blender_jar.jpg`,
      },
      {
        description:
          "Добавляем все остальные ингредиенты, взбиваем все в пену.",
      },
      {
        description: "Разливаем по стаканам и сразу же подаем.",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Шоколадно-банановый смузи с арахисовой пастой",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/chocolate_banana_peanut_butter_smoothie.jpg`,
    ingridients: [
      "бананы (они могут быть слегка перезрелыми)&nbsp;—  2&nbsp;шт.",
      " молоко&nbsp;—  250&nbsp;мл",
      " арахисовая паста&nbsp;—  50&nbsp;г",
      " лед&nbsp;—  4-6 кубиков",
      " сахарный сироп (сахар и&nbsp;вода 1&nbsp;к 1; можно использовать обычный сахар, но&nbsp;он до&nbsp;конца не&nbsp;растворится)&nbsp;—  20&nbsp;мл",
      " какао-порошок&nbsp;—  2&nbsp;ст.л.",
    ],
    cooking: [
      {
        description:
          "Это очень хороший вариант для&nbsp;завтрака&nbsp;—  сытный и&nbsp;бодрящий. В&nbsp;составе этого смузи есть арахисовая паста, которая делает его&nbsp;очень насыщающим. Если у&nbsp;вас или&nbsp;ваших близки аллергия на&nbsp;арахис&nbsp;—  вы&nbsp;можете заменить пасту нутеллой или&nbsp;другой шоколадно-ореховой пастой. В&nbsp;таком случае ваш&nbsp;напиток приобретет более насыщенный шоколадный вкус.",
      },
      {
        description: "Кладем все ингредиенты в чашу блендера.",
        image: `${process.env.PUBLIC_URL}/images/other_images/place_all_ingredients_in_blender_bowl.jpg`,
      },
      {
        description: "Перемалываем до однородности.",
      },
      {
        description:
          "Переливаем в бокалы или стаканы, украшаем по вкусу и сезону.",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Молочный коктейль",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/milkshake.jpg`,
    ingridients: [
      "молоко&nbsp;—  600&nbsp;мл",
      " пломбир&nbsp;—  500&nbsp;г",
      " сахарная пудра по&nbsp;вкусу и&nbsp;желанию",
    ],
    cooking: [
      {
        description: "Кладем все ингредиенты в блендер.",
        image: `${process.env.PUBLIC_URL}/images/other_images/preparing_a_milkshake.jpg`,
      },
      {
        description:
          "Взбиваем на&nbsp;средней скорости в&nbsp;течение пары минут. Готовый коктейль разливаем в&nbsp;большие стаканы и&nbsp;пьем через трубочку.",
      },
      {
        description: "Все предельно просто.",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Молочно-манговый коктейль",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/milk_mango_shake.jpg`,
    ingridients: [
      "    пюре из&nbsp;манго",
      "    молоко&nbsp;—  1&nbsp;ст.",
      "    жирный йогурт&nbsp;—  1&nbsp;ст.",
      "    соль, сахар&nbsp;—  по&nbsp;вкусу",
      "    вода&nbsp;—  немного",
    ],
    cooking: [
      {
        description:
          "Смешайте все&nbsp;ингредиенты в&nbsp;блендере, добавьте соль и&nbsp;сахар по&nbsp;вкусу. Разведите коктейль водой до&nbsp;приобретения желаемой консистенции. Снова перемешайте напиток и&nbsp;дайте ему&nbsp;немного постоять, чтобы все&nbsp;ароматы и&nbsp;вкусы смешались вместе. Можете подавать ваш&nbsp;коктейль.",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Малиновый коктейль",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/raspberry_cocktail.jpg`,
    ingridients: [
      "малина&nbsp;—  250&nbsp;г",
      "молоко&nbsp;—  300&nbsp;мл",
      "мороженое&nbsp;—  200&nbsp;г",
      "сахар&nbsp;—  3&nbsp;ст.л.",
    ],
    cooking: [
      {
        description:
          "Малину положить в&nbsp;кастрюльку, добавить сахар. Довести до&nbsp;кипения. Затем протереть через сито и&nbsp;охладить. В&nbsp;охлажденную малину добавить молоко и&nbsp;мороженое. Взбивать блендером или&nbsp;миксером в&nbsp;течение 2-3 минут.",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Молочный коктейль с мороженым",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/milkshake_with_ice_cream.jpg`,
    ingridients: [
      "Бананы 	1&nbsp;шт. 	",
      "Молоко 	200&nbsp;мл",
      "Мороженое сливочное 	150&nbsp;г&nbsp;	",
    ],
    cooking: [
      {
        description:
          "                     Прохладный молочный коктейль&nbsp;—  что-то среднее между освежающим напитком и&nbsp;нежным десертом: в&nbsp;меру сладкий, воздушный и&nbsp;к тому же&nbsp;дает огромный простор для&nbsp;воображения. Банан придает коктейлю густую консистенцию и&nbsp;отличный вкус. Мороженое можно выбирать по&nbsp;своему вкусу, мне&nbsp;больше всего нравится пломбир или&nbsp;сливочное ванильное.            ",
      },
      {
        description:
          "В блендер положите спелый очищенный банан, налейте холодное молоко и&nbsp;хорошенько взбейте.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/milk_and_banana_in_blender.jpg`,
      },
      {
        description:
          "Добавьте мороженое и&nbsp;взбейте еще&nbsp;раз. Подавайте в&nbsp;прозрачных бокалах, украсив ягодами, корицей, тертым шоколадом или&nbsp;миндальными лепестками.					 								  				 			  			 									",
        image: `${process.env.PUBLIC_URL}/images/other_images/preparing_a_milkshake.jpg`,
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Молочный коктейль с бананом",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/add_ice_cream.jpg`,
    ingridients: [
      "Бананы 	1&nbsp;шт. 	",
      "Молоко 	200&nbsp;мл",
      "Сахар коричневый 	20&nbsp;г&nbsp;	",
      "Вишня замороженная 	150&nbsp;г",
    ],
    cooking: [
      {
        description:
          "                     Вариация одного из&nbsp;моих самых любимых коктейлей: банан, молоко, замороженные ягоды и&nbsp;немного сахара. Получается холодный, густой и&nbsp;очень вкусный коктейль, который легко может заменить легкий прием пищи, особенно летом. Быстро готовится и&nbsp;хорошо освежает.            ",
      },
      {
        description:
          "В блендер положите очищенный банан, замороженные ягоды, налейте молоко (можно смешать со&nbsp;сливками, тогда будет еще&nbsp;вкуснее, но&nbsp;менее диетично) и&nbsp;добавьте сахар.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/banana_with_berries_and_milk_in_a_blender.jpg`,
      },
      {
        description:
          "			 				 																	 													 						На высокой скорости превратите все&nbsp;в однородную массу и&nbsp;разлейте по&nbsp;бокалам.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_until_smooth1.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Можете украсить целыми ягодами, посыпать тертым шоколадом, корицей или&nbsp;кокосовой стружкой.					 								  				 			  			 									",
        image: `${process.env.PUBLIC_URL}/images/other_images/pink_milkshake.jpg`,
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Молочный коктейль с черникой",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/blueberry_milkshake.jpg`,
    ingridients: [
      "—  мороженое (пломбир)&nbsp;—  0,5&nbsp;кг&nbsp;",
      "—  молоко&nbsp;—  1/3&nbsp;стакана ",
      "—  аэрозольные сливки ",
      "—  черника&nbsp;—  4-5 ст. л&nbsp;",
    ],
    cooking: [
      {
        description:
          "Взбить в&nbsp;блендере половину мороженого, молоко и&nbsp;чернику.",
      },
      {
        description:
          "В получившуюся однородную массу добавить остальную часть пломбира и&nbsp;ещё раз&nbsp;взбить.",
      },
      {
        description:
          "Разлить напиток по&nbsp;стаканам, сверху выдавить сливки и&nbsp;украсить черникой. ",
      },
      {
        description: "Коктейль готов. ",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Горячий банановый коктейль с шоколадом",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/hot_banana_smoothie_with_chocolate.jpg`,
    ingridients: [
      "Молоко коровье 500&nbsp;мл",
      "Ваниль в&nbsp;стручках 1&nbsp;шт.",
      "Бананы 1&nbsp;шт.",
      "Шоколад темный 70-80% какао 50&nbsp;г",
      "Корица молотая ¼&nbsp;ч.л.",
    ],
    cooking: [
      {
        description:
          "Такой коктейль хорошо выпить прохладным пасмурным утром, чтобы согреться и&nbsp;поднять себе настроение. Шоколад и&nbsp;бананы очень способствуют этому.&nbsp; ",
      },
      {
        description:
          "Нагрейте молоко в&nbsp;кастрюле. Можете положить туда разрезанный вдоль стручок ванили, а&nbsp;затем вынуть.&nbsp; ",
        image: `${process.env.PUBLIC_URL}/images/other_images/warming_the_milk.jpg`,
      },
      {
        description: "С помощью блендера превратите банан в&nbsp;пюре. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/banana_in_blender.jpg`,
      },
      {
        description:
          " Подогрейте молоко и добавьте в него банановое пюре, продолжая нагревать.  ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_banana_puree.jpg`,
      },
      {
        description: "Наломайте шоколад и бросьте его в кастрюлю с напитком.  ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_chocolate_to_drink.jpg`,
      },
      {
        description:
          "Хорошо мешайте, чтобы шоколад полностью растворился. Когда коктейль станет однородным, снимите с&nbsp;огня и&nbsp;разлейте по&nbsp;чашкам. При&nbsp;подаче посыпьте корицей. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/hot_chocolate_cocktail.jpg`,
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Бананово-клубничный коктейль",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/banana_strawberry_smoothie.jpg`,
    ingridients: [
      "Сливки 20-22% 100&nbsp;мл",
      "Бананы 1&nbsp;шт.",
      "Сахар-песок 50&nbsp;г",
      "Клубника 150&nbsp;г",
      "Молоко коровье 150&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "Молочные коктейли вроде бы&nbsp;совсем не&nbsp;редкость, и&nbsp;каждый знает, как&nbsp;их приготовить. Но&nbsp;именно в&nbsp;силу их&nbsp;распространенности и&nbsp;вкусности существует множество разных рецептов, меняющих оттенки вкуса. Этот рецепт проверялся неоднократно и&nbsp;с неизменным успехом. Не&nbsp;менее (а может даже более) вкусно получается с&nbsp;замороженной вишней, так&nbsp;как у&nbsp;нее нет&nbsp;таких мелких семечек, которые могут потом чувствоваться в&nbsp;клубничном коктейле.&nbsp; ",
      },
      {
        description:
          "Кладем спелый банан в блендер и превращаем его в пюре вместе со сливками  ",
        image: `${process.env.PUBLIC_URL}/images/other_images/bananas_in_blender.jpg`,
      },
      {
        description:
          "Замороженную клубнику и&nbsp;сахар добавляем в&nbsp;банановое пюре и&nbsp;все вместе хорошо взбиваем (клубнику не&nbsp;размораживать, она&nbsp;будет служить естественным охладителем и&nbsp;заменителем льда и&nbsp;мороженного).&nbsp; ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_strawberries_to_banana_puree.jpg`,
      },
      {
        description:
          "В конце разбавляем молоком, еще&nbsp;раз взбиваем. Вкуснее всего пить из&nbsp;прозрачных бокалов с&nbsp;помощью довольно толстых соломинок (коктейль густой получается, тонкой будет сложно орудовать). ",
        image: `${process.env.PUBLIC_URL}/images/other_images/banana_strawberry_smoothie.jpg`,
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Шоколадно-ягодный милк-шейк",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/chocolate_berry_milkshake.jpg`,
    ingridients: [
      "Молоко коровье 								350&nbsp;мл&nbsp;															",
      "Какао-порошок 								25&nbsp;г&nbsp;															",
      "Бананы 								1&nbsp;шт. 															",
      "Клубника 								300&nbsp;г&nbsp;															",
      "Сахарная пудра 								25&nbsp;г&nbsp;															",
      "Сахар ванильный 								10&nbsp;г&nbsp;							",
    ],
    cooking: [
      {
        description:
          "Из молока и&nbsp;какао-порошка сварить какао согласно инструкции на&nbsp;упаковке.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/heat_milk_and_cocoa_powder.jpg`,
      },
      {
        description:
          "Какао остудить и&nbsp;перелить в&nbsp;блендер. Банан очистить, крупно порубить и&nbsp;добавить в&nbsp;блендер.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_cocoa_with_banana.jpg`,
      },
      {
        description:
          "Добавить туда же&nbsp;и замороженную клубнику, молоко, ванильный сахар, сахарную пудру.    Взбить массу в&nbsp;пышную пену, разлить по&nbsp;бокалам и&nbsp;немедленно подать!",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_strawberries_and_milk_to_blender.jpg`,
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Шоколадный милк-шейк",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/chocolate_milkshake.jpg`,
    ingridients: [
      "—  молоко&nbsp;—  50&nbsp;мл ",
      "—  шоколадное мороженое&nbsp;—  100&nbsp;г ",
      "—  банан&nbsp;—  1&nbsp;шт. ",
    ],
    cooking: [
      {
        description:
          "Смешайте в&nbsp;блендере молоко, мороженое и&nbsp;один банан. Перелейте в&nbsp;бокал для&nbsp;подачи (хайбол, харрикейн) и&nbsp;украсьте тертым шоколадом. По&nbsp;желанию коктейль можно украсить веточкой мяты. ",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Клубничный шейк",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/strawberry_shake.jpg`,
    ingridients: [
      "20&nbsp;ягод клубники среднего размера",
      "300&nbsp;г. молока",
      "120&nbsp;г. мороженого",
      "3&nbsp;—  4&nbsp;столовые ложки фруктового или&nbsp;молочного&nbsp;ликера или&nbsp;сиропа",
    ],
    cooking: [
      {
        description:
          "Все ингредиенты смешать в&nbsp;блендере и&nbsp;разлить по&nbsp;стаканам. Получится 4&nbsp;порции.",
      },
    ],
    type: milkshakesType,
  },
  {
    title: "Клубничный шейк с апельсиновым соком",
    image: `${process.env.PUBLIC_URL}/images/milkshakes/strawberry_shake_with_orange_juice.jpg`,
    ingridients: [
      "10&nbsp;средних ягод клубники",
      "150&nbsp;г. апельсинового сока",
      "5&nbsp;столовых ложек мороженого пломбир",
    ],
    cooking: [
      {
        description:
          "Все ингридиенты смешать в&nbsp;&nbsp;блендере и&nbsp;разлить по&nbsp;бокалам.",
      },
    ],
    type: milkshakesType,
  },
];

export const milkshakesTitle = "Молочные коктейли";
