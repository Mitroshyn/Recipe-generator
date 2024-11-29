export const softDrinksType = "softDrinks";

export const softDrinks = [
  {
    title: "Смузи с абрикосом,арбузом и базиликом",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/smoothie_with_apricot_watermelon_and_basil.jpg`,
    ingridients: [
      "Абрикос крупный 5 шт.",
      "Арбуз небольшой (без косточек) 1/4 шт.",
      "Базилик 10 листиков",
    ],
    cooking: [
      {
        description:
          "Иногда неожиданные вкусовые сочетания становятся самыми любимыми. Приготовьте этот очень летний вариант смузи, чтобы освежиться в&nbsp;жаркий день.",
      },
      {
        description: "Абрикосы разделить пополам и удалить косточку. ",
      },
      {
        description:
          "Выложить абрикосы в&nbsp;блендер вместе с&nbsp;нарезанным крупными кусками арбузом и&nbsp;листьями базилики.&nbsp;",
      },
      { description: "Измельчить до получения однородной консистенции. " },
    ],
    type: softDrinksType,
  },
  {
    title: "Землянично-кофейный коктейль",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/strawberry_coffee_cocktail.jpg`,
    ingridients: [
      "эспрессо&nbsp;—  2&nbsp;чашки",
      "сезонные ягоды&nbsp;—  500&nbsp;мл",
      "молоко (сливки)&nbsp;—  250&nbsp;мл",
      "какао порошок&nbsp;—  1&nbsp;ст.л.",
      "корица&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description: "Сварите кофе и&nbsp;остудите.",
      },
      {
        description:
          "В блендере перемешайте замороженный банан и&nbsp;ягоды. Добавьте молоко.",
        image: `${process.env.PUBLIC_URL}/images/other_images/berries_in_milk.jpg`,
      },
      {
        description:
          "Добавьте кофе, какао и&nbsp;корицу. Все&nbsp;взбейте до&nbsp;однородной массы.",
      },
      { description: "Разлейте по&nbsp;стаканам." },
    ],
    type: softDrinksType,
  },
  {
    title: "Морковно-клюквенный коктейль",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/carrot_cranberry_cocktail.jpg`,
    ingridients: [
      "морковный сок&nbsp;—  400&nbsp;мл",
      "клюквенный сок&nbsp;—  100&nbsp;мл",
      "лимонный сок&nbsp;—  50&nbsp;мл",
      "сахар&nbsp;—  2&nbsp;ст.л.",
      "вода&nbsp;—  200&nbsp;мл",
      "клюква&nbsp;—  50&nbsp;г",
    ],
    cooking: [
      {
        description:
          "Смешайте все&nbsp;соки, выдавите сок&nbsp;из лимона и&nbsp;добавьте сахар. Добавьте в&nbsp;готовый напиток клюкву. ",
      },
      {
        description: "Коктейль с&nbsp;зарядом бодрости и&nbsp;витаминов готов.",
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Арбузный фреш с мятой и лимоном",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/fresh_watermelon_with_mint_and_lemon.jpg`,
    ingridients: [
      "арбуз&nbsp;—  несколько кусочков",
      "мята&nbsp;—  несколько листиков",
      "лимон&nbsp;—  по&nbsp;вкусу",
      "лед&nbsp;—  несколько кусочков",
    ],
    cooking: [
      {
        description:
          "Арбузный фреш с&nbsp;мятой и&nbsp;лимоном&nbsp;—  отличный вариант получить глоток свежести в&nbsp;жаркий летний день!",
      },
      {
        description:
          "Арбуз нарезать кубиками и&nbsp;освободить от&nbsp;семечек. Мяту вымыть.",
      },
      {
        description:
          "Смешать в&nbsp;блендере арбуз, несколько листочков мяты, немного лимонного сока и&nbsp;несколько кусочков льда. Если арбуз недостаточно сладкий, добавить немного меда или&nbsp;сахара.",
      },
      {
        description:
          "Подавать фреш сразу, украсив лимонной долькой или&nbsp;листочком мяты. И&nbsp;можно наслаждаться вкусным, свежим и&nbsp;полезным напитком.",
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Лимонад 'Тархун'",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/lemonade_tarragon.jpg`,
    ingridients: [
      "    тархун	(свежий)&nbsp;—  70&nbsp;г",
      "    лимон	—  2&nbsp;шт.",
      "    лайм	—  2&nbsp;шт.",
      "    сахар	—  150&nbsp;г",
      "    вода газированная	—  1,5&nbsp;л",
      "    вода	—  200&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "Тархун обмыть, отделить листочки от&nbsp;основного стебля. Стебель в&nbsp;напитке лучше не&nbsp;использовать.",
      },
      {
        description:
          "Сахар растворить в&nbsp;200&nbsp;мл&nbsp;воды, положить в&nbsp;сироп тархун и&nbsp;дать жидкости закипеть на&nbsp;маленьком огне. Накрыть крышкой и&nbsp;оставить настаиваться 40-60 минут. ",
      },
      {
        description:
          "Блендером взбиваем наш&nbsp;сироп с&nbsp;тархуном и&nbsp;процеживаем пару раз. Получается насыщенный цветом и&nbsp;вкусом полезный сироп.",
      },
      {
        description:
          "Теперь выдавливаем сок&nbsp;из лимонов и&nbsp;лаймов, смешиваем в&nbsp;большом кувшине вместе с&nbsp;сиропом и&nbsp;вливаем холодную газировку. Все, наш&nbsp;домашний лимонад готов! ",
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Горячий белый шоколад с клубникой",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/hot_white_chocolate_with_strawberries.jpg`,
    ingridients: [
      "замороженная клубника&nbsp;—  120&nbsp;г",
      " сахарная пудра&nbsp;—  100&nbsp;г",
      " молоко (3-6% жирности)&nbsp;—  200&nbsp;мл",
      " кукурузный крахмал&nbsp;—  2&nbsp;ч.л. или&nbsp;1&nbsp;ч.л. картофельного",
      " белый шоколад&nbsp;—  60&nbsp;г",
      " жирные сливки (от 30%)&nbsp;—  150&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "Готовится этот напиток-десерт просто, а&nbsp;на выходе получается очень интересный напиток с&nbsp;контрастом вкусов (сладкий шоколад и&nbsp;клубника с&nbsp;кислинкой) и&nbsp;температур (горячая основа и&nbsp;холодное подмороженное ягодное пюре).",
      },
      {
        description:
          "При желании вы&nbsp;можете приготовить этот напиток с&nbsp;молочным шоколадом вместо белого&nbsp;—  он&nbsp;тоже будет хорошо сочетаться с&nbsp;клубникой.",
      },
      {
        description:
          "Клубнике даем немного разморозиться, но&nbsp;не полностью. Добавляем 50&nbsp;г сахарной пудры и&nbsp;перемалываем блендером в&nbsp;пюре.",
      },
      { description: "Сливки взбиваем с оставшейся сахарной пудрой." },
      {
        description:
          "Молоко смешиваем с&nbsp;крахмалом в&nbsp;ковшике, ставим его&nbsp;на средний огонь и&nbsp;при постоянном помешивании доводим практически до&nbsp;кипения. Снимаем с&nbsp;плиты и&nbsp;добавляем нарубленный белый шоколад.",
      },
      {
        description:
          "Перемешиваем венчиком, пока шоколад не растает и не смешается с молоком.",
      },
      {
        description:
          "Оформляем подачу. Первым слоем кладем в&nbsp;чашки ягодную массу, сверху вливаем горячий шоколад. На&nbsp;шоколад кладем взбитые сливки&nbsp;—  ложкой или&nbsp;при помощи кондитерского мешка с&nbsp;насадкой.",
      },
      {
        description: "Подаем немедленно.",
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Апельсиново-ананасовый коктейль с мороженым",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/orange_pineapple_cocktail_with_ice_cream.jpg`,
    ingridients: [
      "    охлажденный апельсиновый сок&nbsp;—  1/3&nbsp;стакана",
      "    охлажденный ананасовый сок&nbsp;—  1/3&nbsp;стакана",
      "    охлажденная газированная вода&nbsp;—  1/3&nbsp;стакана",
      "    ванильное мороженое&nbsp;—  2&nbsp;ст.л.",
    ],
    cooking: [
      {
        description:
          "    Смешать апельсиновый сок, ананасовый и&nbsp;газированную воду, вылить в&nbsp;стакан.",
      },
      {
        description: "    Затем добавить мороженое, трубочку и&nbsp;смаковать.",
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Напиток в яблоке",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/drink_in_apple.jpg`,
    ingridients: [
      "    яблоки&nbsp;—  12&nbsp;шт.",
      "    апельсин&nbsp;—  1&nbsp;шт.",
      "    коричневый сахар&nbsp;—  1/2&nbsp;чашки",
      "    корицы (больше для&nbsp;украшения)&nbsp;—  2&nbsp;палочки",
      "    мускатный орех&nbsp;—  2&nbsp;шт.",
      "гвоздика&nbsp;—  1/2&nbsp;ст.л.",
      "    душистый перец&nbsp;—  1/2&nbsp;ч.л.",
      "    вода, чтобы покрыть яблоки",
    ],
    cooking: [
      {
        description:
          "    Вымойте и&nbsp;высушите яблоки, отрежьте немного верхушки и&nbsp;при помощи ножа и&nbsp;ложки выньте середину.",
      },
      {
        description:
          "    Отложите яблоки, можно помазать лимонным соком, чтобы не&nbsp;потемнели.",
      },
      {
        description:
          "    Сердцевину яблок поместите в&nbsp;кастрюлю, покройте водой, добавьте апельсин, сахар, палочку корицы, мускатный орех, гвоздику, душистый  перец, поставьте на&nbsp;средний огонь и&nbsp;дайте закипеть, уменьшить огонь и&nbsp;варить 2&nbsp;часа.",
      },
      {
        description:
          "    После размять в&nbsp;пюре яблоки с&nbsp;апельсином и&nbsp;дать остыть.",
      },
      {
        description:
          "    Перед подачей вылить в&nbsp;яблочные чашки украсить корицей,  обычно подают при&nbsp;комнатной температуре, но&nbsp;и очень вкусно пить холодным этот напиток.",
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Напиток с клубникой и базиликом",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/drink_with_strawberries_and_basil.jpg`,
    ingridients: [
      "лимонный сок&nbsp;—  2&nbsp;ст.л.",
      "сахар&nbsp;—  1&nbsp;ст.л.",
      "зеленый базилик&nbsp;—  6&nbsp;листьев",
      "клубника&nbsp;—  5&nbsp;ягод",
      "кошерная соль&nbsp;—  1&nbsp;щепотка",
      "содовая&nbsp;—  3/4&nbsp;чашки",
      "лед",
    ],
    cooking: [
      {
        description:
          "Приятный безалкогольный напиток с&nbsp;оригинальным сочетанием клубники и&nbsp;базилика.",
      },
      {
        description:
          "Смешать лимонный сок, сахар, ягоды и&nbsp;соль в&nbsp;стакане, порвать туда листья базилика. Размять пестиком, чтобы растворился сахар и&nbsp;соль, добавить лед&nbsp;и содовую. Процедить в&nbsp;бокал со&nbsp;льдом и&nbsp;украсить.",
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Кокосовый коктейль с ягодами",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/coconut_smoothie_with_berries.jpg`,
    ingridients: [
      "Клубника 	150&nbsp;г&nbsp;	",
      "Черника 	200&nbsp;г",
      "Молоко кокосовое 	400&nbsp;мл&nbsp;	",
      "Молоко 	200&nbsp;мл",
      "Сахар темно-коричневый (мусковадо, браун кассонад и&nbsp;т.п.) 	80&nbsp;г&nbsp;",
      "	Кокосовая стружка 	20&nbsp;г",
    ],
    cooking: [
      {
        description:
          "Обычный молочный коктейль становится необычным благодаря кокосовому молоку, которое делает вкус интереснее и&nbsp;вносит экзотическую нотку.&nbsp; 						 				 												 					",
      },
      {
        description:
          "Ягоды сложите в&nbsp;блендер. Если вы, как&nbsp;я, используете замороженные ягоды, то&nbsp;не надо их&nbsp;предварительно размораживать. Если ягоды свежие, положите в&nbsp;блендер немного льда.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/berries_in_a_blender.jpg`,
      },
      {
        description:
          "Добавьте кокосовое и&nbsp;обычное молоко. Взбейте до&nbsp;однородности.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_milk_and_coconut_milk.jpg`,
      },
      {
        description:
          "Добавьте сахар по&nbsp;вкусу. Я&nbsp;использую мелкий коричневый сахар brown cassonade, который хорошо растворяется и&nbsp;придает карамельный привкус блюдам.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_dark_sugar.jpg`,
      },
      {
        description: "			 				 																	 													 						Еще раз&nbsp;тщательно взбейте. 					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/blend_everything.jpg`,
      },
      {
        description:
          "Разлейте по&nbsp;высоким бокалам, украсьте ягодами и&nbsp;кокосовой стружкой. Подавайте холодным немедленно.					 								  				 			  			 									",
        image: `${process.env.PUBLIC_URL}/images/soft_drinks/coconut_smoothie_with_berries.jpg`,
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Зеленый коктейль с грушей и голубикой",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/green_smoothie_with_pear_and_blueberry.jpg`,
    ingridients: [
      "Груши (140г) 	2&nbsp;шт. 	",
      "Салат зеленый 	30&nbsp;г",
      "Голубика 	120&nbsp;г&nbsp;	",
    ],
    cooking: [
      {
        description:
          "                     Настоящий витаминный коктейль, объединяющий полезные свойства свежей зелени, голубики и&nbsp;груши. Коктейль готовится с&nbsp;добавлением воды и&nbsp;без сахара.             ",
      },
      {
        description:
          "Спелую грушу очистите от&nbsp;кожицы и&nbsp;вырежьте сердцевину.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_pears.jpg`,
      },
      {
        description:
          "Вымойте и&nbsp;подсушите листья салата и&nbsp;ягоды.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/blueberry.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Сложите все&nbsp;в блендер, добавьте 50-100 мл&nbsp;чистой холодной воды и&nbsp;тщательно измельчите на&nbsp;высокой скорости до&nbsp;однородности.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/blueberries_and_lettuce.jpg`,
      },
      {
        description: "			 				 																	 													 						Подавайте немедленно.	",
        image: `${process.env.PUBLIC_URL}/images/soft_drinks/green_smoothie_with_pear_and_blueberry.jpg`,
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Коктейль клубника со сливками",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/strawberry_and_cream_cocktail.jpg`,
    ingridients: [
      "Клубника 	500&nbsp;г&nbsp;	",
      "Сливки 10-11% 	160&nbsp;мл",
      "Сахар темно-коричневый (мусковадо, браун кассонад и&nbsp;т.п.) 	60&nbsp;г&nbsp;	",
    ],
    cooking: [
      {
        description:
          "                     Находка для&nbsp;сезона клубники. Вкусный густой коктейль, объединяющий свежесть и&nbsp;аромат ягод с&nbsp;нежностью сливок.            ",
      },
      {
        description: "Вымойте и&nbsp;очистите клубнику.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/strawberry.jpg`,
      },
      {
        description: "Добавьте сливки и&nbsp;сахар. 					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_dark_sugar_to_strawberries.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Взбейте на&nbsp;высокой скорости до&nbsp;однородного состояния.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/whipped_strawberries_and_cream.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Разлейте по&nbsp;высоким бокалам, украсьте клубничкой и&nbsp;подавайте.					 								  				 			  			 									",
        image: `${process.env.PUBLIC_URL}/images/soft_drinks/strawberry_and_cream_cocktail.jpg`,
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Зеленый коктейль",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/green_smoothie.jpg`,
    ingridients: [
      "Салат ромэн 	50&nbsp;г&nbsp;",
      "	Нектарины 	200&nbsp;г",
      "Бананы 	2&nbsp;шт. 	",
    ],
    cooking: [
      {
        description:
          "Листья салата (10-12 шт.) вымойте и&nbsp;дайте стечь воде.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/lettuce.jpg`,
      },
      {
        description:
          "Возьмите мягкие спелые персики или&nbsp;нектарины и&nbsp;спелые бананы.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/peaches_and_bananas.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Сложите фрукты и&nbsp;зелень в&nbsp;блендер, добавьте немного (100&nbsp;мл) холодной питьевой воды.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/banana_peach_and_lettuce.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Измельчите в&nbsp;блендере на&nbsp;высокой мощности до&nbsp;как можно более однородного состояния, разлейте по&nbsp;бокалам и&nbsp;подавайте.					 								  				 			  			 									",
        image: `${process.env.PUBLIC_URL}/images/soft_drinks/green_smoothie.jpg`,
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Овощной коктейль",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/vegetable_smoothie.jpg`,
    ingridients: [
      "Свекла 	300&nbsp;г&nbsp;",
      "	Морковь 	500&nbsp;г",
      "Кольраби (120&nbsp;г) 	1&nbsp;шт. 	",
      "Имбирь свежий 	5&nbsp;см",
      "Лимоны 	½ шт. ",
    ],
    cooking: [
      {
        description:
          "                     Польза овощных коктейлей широко известна: это&nbsp;легкая пища, насыщенная витаминами и&nbsp;микроэлементами, отлично утоляет жажду дает заряд бодрости. Овощной коктейль со&nbsp;свеклой и&nbsp;морковью имеет яркий красивый цвет и, благодаря лимону и&nbsp;имбирю, очень приятный необычный вкус.  Для&nbsp;приготовления коктейля понадобятся свежие овощи, хорошая соковыжималка и&nbsp;5&nbsp;минут времени.            ",
      },
      {
        description:
          "Тщательно вымойте овощи. Желательно использовать овощи, выращенные натуральным способом, т.н. 'био'.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/beets_kohlrabi_carrots.jpg`,
      },
      {
        description: "			 				 																	 													 						Почистите овощи и&nbsp;отрежьте хвостики.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/peeled_beets_and_carrots.jpg`,
      },
      {
        description:
          "Пропустите через соковыжималку, начиная со&nbsp;свеклы, затем морковь и&nbsp;в самом конце бесцветную капусту и&nbsp;имбирь.  Из&nbsp;указанного количества овощей у&nbsp;меня получилось больше 600&nbsp;мл сока.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/juicing_the_vegetables.jpg`,
      },
      {
        description:
          "Выжмите в&nbsp;емкость с&nbsp;коктейлем от&nbsp;четверти до&nbsp;половины лимона (по вкусу), тщательно перемешайте и&nbsp;употребляйте немедленно.  Можно немного разбавить коктейль свежей прохладной водой.					 								  				 			  			 									",
        image: `${process.env.PUBLIC_URL}/images/other_images/vegetable_cocktail.jpg`,
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Коктейль 'Мятный джулеп'",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/cocktail_mint_julep.jpg`,
    ingridients: [
      "минеральная вода&nbsp;—  1&nbsp;л",
      "мята&nbsp;—  4&nbsp;веточки",
      "лимон&nbsp;—  1&nbsp;шт.",
    ],
    cooking: [
      {
        description:
          "Джулеп —  напиток, обязательной составляющей которого является мята. Этот популярный освежающий коктейль (один из&nbsp;старейших&nbsp;—  история его&nbsp;начинается в&nbsp;южных американских штатах в&nbsp;конце 18&nbsp;века) стал традиционным напитком знаменитых скачек в&nbsp;США&nbsp;—  Кентукки Дерби. ",
      },
      {
        description:
          "Мяту вымыть, обсушить бумажными салфетками и&nbsp;нарезать вместе со&nbsp;стеблем. Влить в&nbsp;чашу блендера 100&nbsp;мл минеральной воды, положить мяту и&nbsp;измельчить. Чтобы получившееся пюре стало более нежным, протереть его&nbsp;через сито.",
      },
      {
        description:
          "Лимон вымыть, разрезать пополам. Из&nbsp;одной половины выжать сок&nbsp;и добавить в&nbsp;мятное пюре. Вторую половину нарезать тонкими кружками&nbsp;—  для&nbsp;украшения. Разложить пюре по&nbsp;бокалам, влить оставшуюся минеральную воду, перемешать. Украсить бокалы дольками лимона и&nbsp;листиками мяты.",
      },
      { description: "Подавать со&nbsp;льдом." },
      {
        description:
          "Для приготовления этого напитка можно использовать газированную и&nbsp;негазированную минеральную или&nbsp;ключевую воду. ",
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Сангрита",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/sangrita.jpg`,
    ingridients: [
      "Помидоры красные 								700&nbsp;г&nbsp;															",
      "Апельсины 								3&nbsp;шт. 															",
      "Лаймы 								2&nbsp;шт. 															",
      "Лук репчатый 								1&nbsp;шт. 															",
      "Сахар-песок 								5&nbsp;г&nbsp;															",
      "Соль 								1&nbsp;ч.л. 															",
      "Перец чили молотый 								2&nbsp;ч.л. 													 					 																 											 							",
    ],
    cooking: [
      {
        description:
          "Помидоры превращаем в&nbsp;пюре с&nbsp;помощью блендера. Я&nbsp;брала готовые очищенные от&nbsp;семян и&nbsp;кожицы помидоры, расфасованные в&nbsp;500-граммовые пакеты. Но можно взять обычные и очистить их собственноручно. В этом случае помидоров изначально должно быть чуть больше —  грамм 700-800. 			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/tomato_puree.jpg`,
      },
      {
        description:
          "Из апельсинов и&nbsp;выжимаем сок. У&nbsp;меня нет&nbsp;специальной соковыжималки для&nbsp;цитрусовых, поэтому я&nbsp;делаю это&nbsp;вручную. Легче всего это&nbsp;делать из&nbsp;нарезанных вдоль на&nbsp;4&nbsp;части плодов.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/orange_slices.jpg`,
      },
      { description: "Тоже самое делаем с&nbsp;лаймами.&nbsp;			 				 								 					", image: "" },
      {
        description: `${process.env.PUBLIC_URL}/images/other_images/lime_wedges.jpg`,
      },
      {
        description:
          "Теперь самое страшное. Режем луковицу на&nbsp;небольшие кусочки и&nbsp;превращаем ее&nbsp;в пюре с&nbsp;помощью блендера.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_the_onion.jpg`,
      },
      {
        description:
          "Смешиваем томатное и&nbsp;луковое пюре, апельсиновый и&nbsp;лаймовый соки, добавляем соль, сахар и&nbsp;перец. Еще&nbsp;раз перемешиваем.",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_tomato_and_onion_puree.jpg`,
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Безалкогольный мохито",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/nonalcoholic_mojito.jpg`,
    ingridients: [
      " Мята свежая 40 г ",
      "Лаймы 1 шт. ",
      "Клюквенный сок 100 мл ",
      "Содовая 200 мл ",
      "Сахарный сироп 30 мл ",
    ],
    cooking: [
      {
        description:
          "Мелко режем мяту, добавляем туда лайм, все вместе разминаем.  ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mint_and_lime_wedges.jpg`,
      },
      {
        description:
          "Добавляем туда же&nbsp;клюквенный сок&nbsp;и сахарный сироп. (У меня был&nbsp;клюквенный сок&nbsp;с сахаром, поэтому сироп добавлять я&nbsp;не стал, а&nbsp;просто увеличил количество сока). Доливаем содовой, кладем лед, наливаем в&nbsp;стаканы. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_cranberry_juice.jpg`,
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Тропический коктейль",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/tropical_cocktail.jpg`,
    ingridients: [
      "Манго 								1&nbsp;шт. 															",
      "Киви 								1&nbsp;шт. 															",
      "Ананасовый сок&nbsp;								200&nbsp;мл&nbsp;							",
    ],
    cooking: [
      {
        description:
          "Очищаем манго и&nbsp;киви, срезаем мякоть манго с&nbsp;косточки.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/peeled_mango_and_kiwi.jpg`,
      },
      {
        description:
          "Измельчаем фрукты в&nbsp;блендере с&nbsp;добавлением охлажденного ананасового сока.    Разливаем в&nbsp;бокалы.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_pineapple_juice.jpg`,
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Фруктовый коктейль",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/fruit_cocktail.jpg`,
    ingridients: [
      "Бананы 								1&nbsp;шт. 															",
      "Киви 								2&nbsp;шт. 															",
      "Груши 								1&nbsp;шт. 															",
      "Сахарная пудра 								20&nbsp;г&nbsp;															",
      "Яблочный сок&nbsp;								200&nbsp;мл&nbsp;															",
      "Шоколад 								10&nbsp;г&nbsp;							",
    ],
    cooking: [
      {
        description:
          "Для коктейля нам&nbsp;понадобятся спелый банан, киви и&nbsp;сочная груша (вильямс, анжу).					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/banana_kiwi_and_pear.jpg`,
      },
      {
        description: "			 				 													 													 						Фрукты очистите и&nbsp;крупно порежьте.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/peeled_banana_kiwi_and_pear.jpg`,
      },
      {
        description:
          "			 				 													 													 						Из фруктов сделайте однородное пюре с&nbsp;помощью блендера.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/banana_and_pear_puree.jpg`,
      },
      {
        description:
          "В пюре добавьте сахарную пудру и&nbsp;сок, чтобы получилась более жидкая консистенция. Если не&nbsp;добавлять сок, будет вкусное фруктовое пюре, которое можно есть ложкой.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_powdered_sugar_and_juice.jpg`,
      },
      {
        description:
          "При подаче можно посыпать коктейль тертым шоколадом или&nbsp;корицей.",
        image: `${process.env.PUBLIC_URL}/images/soft_drinks/fruit_cocktail.jpg`,
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Клубничный коктейль",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/strawberry_cocktail.jpg`,
    ingridients: [
      " Ананасовый сок 200 мл ",
      "Персиковый сок (нектар) 200 мл ",
      "Клубника 250 г ",
    ],
    cooking: [
      {
        description:
          "В блендер налейте соки и&nbsp;добавьте замороженную клубнику. Чем&nbsp;более холодными будут ингредиенты, тем&nbsp;гуще получится коктейль. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/strawberries_in_pineapple_peach_juice.jpg`,
      },
      {
        description:
          "Хорошо измельчите блендером клубнику до&nbsp;получения пюреобразной массы. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/strawberry_puree_with_juice.jpg`,
      },
      {
        description:
          "Разлейте коктейль по бокалам и подавайте в охлажденном виде.",
        image: `${process.env.PUBLIC_URL}/images/soft_drinks/strawberry_cocktail.jpg`,
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Ягодный коктейль с бананом",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/berry_smoothie_with_banana.jpg`,
    ingridients: [
      "—  половина банана ",
      "—  свежие или&nbsp;замороженные ягоды (клубника, черника, малина) ",
      "—  нежирный йогурт&nbsp;—  ½&nbsp;стакана ",
      "—  апельсиновый сок&nbsp;—  ½&nbsp;стакана ",
    ],
    cooking: [
      {
        description:
          "Смешайте в&nbsp;блендере ягоды и&nbsp;половину банана, затем влейте йогурт и&nbsp;апельсиновый сок, снова взбейте. Разлейте по&nbsp;бокалам и&nbsp;украсьте целыми ягодами. ",
      },
      {
        description: "Витаминный коктейль готов. ",
      },
    ],
    type: softDrinksType,
  },
  {
    title: "Манго ласси",
    image: `${process.env.PUBLIC_URL}/images/soft_drinks/mango_lassi.jpg`,
    ingridients: [
      "1&nbsp;среднего размера манго",
      "50&nbsp;мл. холодной воды",
      "150&nbsp;мл. натурального йогурта",
      "сок лимона",
      "лед",
    ],
    cooking: [
      {
        description: "Манго очистить от&nbsp;кожуры и&nbsp;косточки, порезать.",
      },
      {
        description: "Измельчить в&nbsp;блендере.",
      },
      {
        description:
          "Добавить к&nbsp;манго воду, йогурт и&nbsp;сок лимона. Взбить.",
      },
      { description: "По желанию подавать можно со&nbsp;льдом." },
    ],
    type: softDrinksType,
  },
];
export const softDrinksTitle = "Безалкогольные напитки";
