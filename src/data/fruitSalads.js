export const fruitSaladsType = "fruitSalads";

export const fruitSalads = [
  {
    title: "Салат с яблоками и малиной",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/salad_with_apples_and_raspberries.jpg`,
    ingridients: [
      "Фундук 1/2 чашки",
      "Малина 100 г",
      "Красный винный уксус 2 ст. л.",
      "Дижонская горчица 2 ч. л.",
      "Мед 2 ч. л.",
      "Оливковое масло 1/4 чашки",
      "Яблоки 3 шт.",
      "Руккола 120 г",
      "Козий сыр 100 г",
      "Соль по вкусу",
      "Черный молотый перец по вкусу",
    ],
    cooking: [
      { description: "Разогрейте духовку до 180 градусов. " },
      {
        description:
          "Выложите фундук на&nbsp;противень. Выпекайте 10&nbsp;минут. Охладите, счистите шкурку бумажным полотенцем и&nbsp;порубите.&nbsp;",
      },
      {
        description:
          "Малину слегка разомните вилкой в&nbsp;небольшой миске. Добавьте уксус, горчицу и&nbsp;мед. Перемешайте.&nbsp;",
      },
      {
        description:
          "Добавьте масло и еще раз перемешайте. Посолите, поперчите. ",
      },
      {
        description: "Яблоки нарежьте на тонкие ломтики и выложите на блюдо. ",
      },
      { description: "Сверху уложите рукколу и полейте малиновым соусом." },
      { description: "Добавьте рубленый фундук и раскрошенный козий сыр. " },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Салат с жареными персиками и сыром моцарелла",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/salad_with_roasted_peaches_and_mozzarella_cheese.jpg`,
    ingridients: [
      "5 персиков",
      "3 стебля зеленого лука (нарезать)",
      "1/4 стакана нарезанной свежей кинзы",
      "3 ст. л. меда",
      "1 ч. л. соли",
      "1 ч. л. цедры лайма",
      "1/2 стакана свежего сока лайма",
      "3/4 ч. л. молотого тмина",
      "3/4 ч. л. молотого чили",
    ],
    cooking: [
      {
        description:
          "Очистите и&nbsp;измельчите 1&nbsp;персик. Оставшиеся 4&nbsp;разрежьте на&nbsp;кружочки, убирая косточки.",
      },
      {
        description:
          "Соедините в&nbsp;кухонном комбайне нарезанный персик, зеленый лук, нарезанную кинзу, мед, соль, цедру лайма, сок&nbsp;лайма, молотый тмин и&nbsp;чили (при желании можно добавить текилу). После получения однородной массы добавьте масло и&nbsp;еще немного прокрутите в&nbsp;комбайне, пока масса полностью не&nbsp;смешается.",
      },
      {
        description:
          "Сбрызните решетку для гриля специальным спреем и разместите ее на месте. ",
      },
      {
        description:
          "Разогрейте гриль до&nbsp;200-250 °С. Смажьте кружки персиков с&nbsp;обеих сторон персиковым соусом. Подрумяньте персики на&nbsp;гриле с&nbsp;обеих сторон 3-5 минут, пока не&nbsp;появится легкая поджаренность.",
      },
      {
        description:
          "Разместите на&nbsp;4&nbsp;тарелки кресс-салат и&nbsp;рукколу. Выложите на&nbsp;каждую тарелку по&nbsp;4-5 кружков персика и&nbsp;4-5 ломтиков сыра. Полейте оставшимся персиковым соусом, украсьте веточками кинзы.",
      },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Салат с арбузом,огурцами и сыром фета",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/salad_with_watermelon_cucumbers_and_feta_cheese.jpg`,
    ingridients: [
      "250 г мякоти арбуза",
      "2 огурца средней величины",
      "120 г сыра фета",
      "50 г салата",
    ],
    cooking: [
      {
        description:
          "Вырежьте из&nbsp;арбуза 250&nbsp;г мякоти, удалите из&nbsp;нее косточки, нарежьте небольшими кубиками.",
      },
      {
        description:
          "Вымойте и&nbsp;нарежьте огурцы. Если у&nbsp;них грубая горькая кожица, ее&nbsp;следует предварительно снять.",
      },
      { description: "Нарежьте сыр." },
      { description: "Перемешайте все ингредиенты. Салат готов!" },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Фруктовый салат из бананов и мандаринов с яблоками",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/fruit_salad_of_bananas_and_tangerines_with_apples.jpg`,
    ingridients: [
      "крупный банан&nbsp;—  1&nbsp;шт.",
      " крупное зеленое яблоко&nbsp;—  1&nbsp;шт.",
      " мандарины&nbsp;—  200&nbsp;г",
      " небольшая горстка листьев мяты",
    ],
    cooking: [
      {
        description:
          "Для этого салата не&nbsp;требуется никакой заправки&nbsp;—  сок&nbsp;из мандаринов и&nbsp;мелко нарубленная мята очень хорошо связывают все&nbsp;компоненты салата в&nbsp;единое вкусовое целое.",
      },
      {
        description: "Мандарины разделяем на дольки и очищаем от пленок.",
      },
      {
        description: "Банан чистим и нарезаем на средние кусочки.",
      },
      {
        description:
          "Яблоко чистим от кожуры, удаляем сердцевину. Нарезаем на средние кубики.",
      },
      {
        description:
          "Кладем фрукты в салатник, посыпаем мелко нарубленной мятой и перемешиваем.",
      },
      { description: "Подаем." },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Цитрусовый салат с медовой заправкой",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/citrus_salad_with_honey_dressing.jpg`,
    ingridients: [
      "апельсины&nbsp;—  3&nbsp;шт.",
      " красный грейпфрут&nbsp;—  1&nbsp;шт.",
      " помело&nbsp;—  4&nbsp;дольки",
      " жидкий мед&nbsp;—  2&nbsp;ст.л.",
      " лимонный сок&nbsp;—  2&nbsp;ст.л.",
    ],
    cooking: [
      { description: "Грейпфрут разделяем на дольки, очищаем от пленок." },
      {
        description:
          "Апельсины чистим ножом так, чтобы срезать кожуру и&nbsp;белую пленку с&nbsp;долек. Вырезаем мякоть из&nbsp;секторов.",
      },
      { description: "Помело разделяем на дольки и тоже чистим от пленок." },
      {
        description:
          "Кладем на&nbsp;тарелки дольки апельсина и&nbsp;грейпфрута, сверху кладем разломанные на&nbsp;кусочки дольки помело.",
      },
      { description: "Смешиваем мед и лимонный сок, поливаем фрукты." },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Фруктовый салат из дыни и ананаса",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/fruit_salad_with_melon_and_pineapple.jpg`,
    ingridients: [
      "ананас&nbsp;—  1/2&nbsp;шт. (около 300&nbsp;г)",
      " дыня&nbsp;—  1/2&nbsp;шт. (около 400&nbsp;г)",
      " апельсины&nbsp;—  2&nbsp;шт.",
      "гранат&nbsp;—  1/2&nbsp;шт.",
    ],
    cooking: [
      {
        description: "Ананас нарезаем кубиками.",
      },
      {
        description: "Точно также режем дыню.",
      },
      {
        description:
          "Апельсины чистим и&nbsp;вырезаем из&nbsp;них сектора мякоти без&nbsp;перепонок, нарезаем на&nbsp;кусочки удобного размера.",
      },
      {
        description:
          "Смешиваем фрукты, раскладываем по&nbsp;порционным вазочкам и&nbsp;посыпаем зернами граната.",
      },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Салат из экзотических фруктов с малиной",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/exotic_fruit_salad_with_raspberries.jpg`,
    ingridients: [
      "средний ананас&nbsp;—  1/2&nbsp;шт.",
      " зеленый виноград&nbsp;—  150&nbsp;г",
      " крупный манго&nbsp;—  1/2&nbsp;шт.",
      "малина&nbsp;—  горсть",
      " лайм&nbsp;—  1&nbsp;шт.",
      " жидкий мед&nbsp;—  1&nbsp;ст.л.",
      " мята&nbsp;—  по&nbsp;желанию",
    ],
    cooking: [
      {
        description:
          "Фруктовый салат&nbsp;—  это&nbsp;и отличное дополнение к&nbsp;завтраку, и&nbsp;прекрасное завершение обеда или&nbsp;ужина. Или&nbsp;просто способ побаловать себя чем-нибудь вкусным в&nbsp;любой момент дня.",
      },
      {
        description:
          "Виноградины разрезаем пополам. Если есть косточки —  удаляем их.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_grapes.jpg`,
      },
      {
        description: "Ананас нарезаем на небольшие кусочки.",
        image: `${process.env.PUBLIC_URL}/images/other_images/chopped_pineapple.jpg`,
      },
      {
        description:
          "Манго чистим от кожуры, удаляем косточку, мякоть нарезаем кубиками.",
        image: `${process.env.PUBLIC_URL}/images/other_images/chopped_mango.jpg`,
      },
      {
        description:
          "Смешиваем фрукты в&nbsp;салатнике. Добавляем сок&nbsp;лайма, мед&nbsp;и мелко нарубленную мяту. Перемешиваем.",
      },
      {
        description: "Кладем в порционные креманки и посыпаем малиной. Подаем.",
      },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Фруктовый салат в дыне",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/fruit_salad_in_melon.jpg`,
    ingridients: [
      "небольшая спелая дыня&nbsp;—  1&nbsp;шт. (около 800&nbsp;г)",
      " крупные апельсины&nbsp;—  2&nbsp;шт.",
      " свежий ананас&nbsp;—  1/3&nbsp;шт. (около 200&nbsp;г)*",
      " 2&nbsp;киви&nbsp;—  2&nbsp;шт.",
      "Мед 2 ч. л.",
      "Оливковое масло 1/4 чашки",
      "Яблоки 3 шт.",
      "Руккола 120 г",
      "Козий сыр 100 г",
      "Соль по вкусу",
      "Черный молотый перец по вкусу",
    ],
    cooking: [
      {
        description:
          "*Можно использовать и&nbsp;маринованный ананас, но&nbsp;со свежим получается гораздо вкуснее.",
      },
      {
        description:
          "Дыню разрезаем пополам. С&nbsp;торцов срезаем немного кожуры так, чтобы половинки можно было поставить на&nbsp;тарелку. Аккуратно вынимаем мякоть так, чтобы получились 2&nbsp;чаши. Нарезаем мякоть кубиками.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_melon.jpg`,
      },
      {
        description:
          "Апельсины чистим ножом так, чтобы срезать кожуру и&nbsp;белую пленку с&nbsp;долек. Вырезаем мякоть из&nbsp;секторов.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_oranges.jpg`,
      },
      {
        description: "Киви чистим от кожицы и нарезаем на небольшие кусочки.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_kiwi.jpg`,
      },
      {
        description: "Ананас нарезаем кубиками.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_pineapple_into_cubes.jpg`,
      },
      {
        description:
          "Смешиваем нарезанные фрукты в&nbsp;миске и&nbsp;перекладываем в&nbsp;половинки дыни.",
      },
      {
        description:
          " Ставим в&nbsp;холодильник как&nbsp;минимум на&nbsp;30&nbsp;минут, чтобы фрукты пустили сок.",
      },
      {
        description: "Подаем.",
      },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Зеленый фруктовый салат с мороженым",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/green_fruit_salad_with_ice_cream.jpg`,
    ingridients: [
      "зеленые яблоки&nbsp;—  2&nbsp;шт.",
      " киви&nbsp;—  3&nbsp;шт.",
      " зеленый виноград&nbsp;—  300&nbsp;г",
      " ванильный пломбир",
    ],
    cooking: [
      {
        description:
          "Этот салат хорош тем, что&nbsp;его можно приготовить практически в&nbsp;любое время года&nbsp;—  ни&nbsp;один из&nbsp;ингредиентов не&nbsp;является сегодня строго сезонным.",
      },
      {
        description:
          "Вместо ванильного пломбира вы&nbsp;можете украсить вазочки с&nbsp;салатом сладкими взбитыми сливками и&nbsp;добавить немного тертого шоколада.",
      },
      {
        description: "Киви чистим и нарезаем небольшими кубиками.",
      },
      {
        description:
          "Виноград обрываем с&nbsp;ветки. Если он&nbsp;с косточками&nbsp;—  разрезаем ягоды пополам и&nbsp;косточки удаляем. Если без&nbsp;косточек&nbsp;—  кладем целиком.",
      },
      {
        description:
          "У яблок удаляем сердцевину, счищаем кожицу. Нарезаем кубиками.",
      },
      {
        description:
          "Смешиваем фрукты в&nbsp;миске, затем раскладываем по&nbsp;креманкам. Каждую порцию украшаем шариком мороженого. Подаем немедленно.",
      },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Витаминный салат с кокосом",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/vitamin_salad_with_coconut.jpg`,
    ingridients: [
      "сладкие апельсины (предпочтительно сорта нувель)&nbsp;—  2&nbsp;шт.",
      " крупные киви&nbsp;—  3&nbsp;шт.",
      " небольшой кусочек свежего кокоса",
    ],
    cooking: [
      {
        description:
          "Острым ножом срезаем с&nbsp;апельсинов кожуру так, чтобы срезать еще&nbsp;и белую пленку с&nbsp;долек. Нарезаем ломтиками.",
      },
      { description: "Киви чистим от кожицы и нарезаем кружочками." },
      {
        description:
          "Кладем апельсины и киви в тарелки, сверху трем на крупную терку кокос.",
      },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Фруктовый салат из хурмы и граната",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/fruit_salad_of_persimmon_and_pomegranate.jpg`,
    ingridients: [
      "—  хурма&nbsp;—  3&nbsp;шт.",
      "—  гранат&nbsp;—  1&nbsp;шт.",
      "—  яблоко&nbsp;—  1-2 шт.",
      "—  мята свежая",
      "—  сок&nbsp;лимонный&nbsp;—  2&nbsp;ч.л.",
      "—  мед&nbsp;—  1&nbsp;ч.л.",
    ],
    cooking: [
      {
        description:
          "1.	Хурму и&nbsp;яблоки очистить от&nbsp;кожицы и&nbsp;нарезать небольшими кусочками.",
      },
      { description: "2.	Смешать хурму, яблоки и&nbsp;зерна граната." },
      {
        description:
          "3.	Мед смешать с&nbsp;соком лимона и&nbsp;заправить салат.",
      },
      { description: "4.	Сверху посыпать листиками мяты." },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Фруктовый салат",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/fruit_salad.jpg`,
    ingridients: [
      "—  бананы&nbsp;—  1-2 шт. ",
      "—  яблоко&nbsp;—  1-2 шт. ",
      "—  апельсин&nbsp;—  1-2 шт. или&nbsp;мандарин&nbsp;—  3-4 шт. ",
      "—  киви&nbsp;—  2-3 шт. ",
      "—  сливы&nbsp;—  2-3 шт. ",
      "—  сахарная пудра ",
      "—  кедровые орешки&nbsp;—  3-4 ст. л. ",
    ],
    cooking: [
      {
        description:
          "Этот салат непременно понравится и&nbsp;взрослым, и&nbsp;детям. Готовится и&nbsp;съедается очень быстро. ",
      },
      { description: "1. Бананы очистить и&nbsp;нарезать кружочками. " },
      {
        description:
          "2. Яблоко очистить, удалить сердцевину и&nbsp;нарезать небольшими кубиками. ",
      },
      {
        description:
          "3. Апельсин очистить, разделить на&nbsp;дольки и&nbsp;удалить кожицу. Нарезать небольшими кусочками. ",
      },
      {
        description:
          "4. Киви очистить, нарезать кружочками, затем на&nbsp;половинки. ",
      },
      {
        description:
          "5. Из&nbsp;слив удалить косточки и&nbsp;нарезать их&nbsp;небольшими кусочками. ",
      },
      {
        description:
          "6. Все&nbsp;нарезанные фрукты сложить в&nbsp;креманку или&nbsp;салатницу. Добавить сахарную пудру и&nbsp;аккуратно перемешать. ",
      },
      {
        description:
          "7. Готовый салатик посыпать кедровыми орешками или&nbsp;любыми другими орехами (грецкие орехи, арахис&nbsp;и&nbsp;др.). ",
      },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Зеленый фруктовый салат",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/green_fruit_salad.jpg`,
    ingridients: [
      "—  половина дыни ",
      "—  виноград&nbsp;—  небольшая гроздь ",
      "—  груша&nbsp;—  2-3 шт. ",
      "—  киви&nbsp;—  2-3 шт. ",
      "—  лимонный и&nbsp;апельсиновый сок&nbsp;",
      "—  мед&nbsp;",
      "—  корица ",
    ],
    cooking: [
      {
        description: "1. Дыню очистить и&nbsp;нарезать небольшими кусочками. ",
      },
      { description: "2. Виноград нарезать на&nbsp;половинки. " },
      {
        description:
          "3. Из&nbsp;груши удалить сердцевину и&nbsp;нарезать небольшими дольками. ",
      },
      { description: "4. Киви очистить и&nbsp;нарезать кубиками. " },
      {
        description:
          "5. Выложить все&nbsp;фрукты в&nbsp;креманку и&nbsp;заправить лимонным и&nbsp;апельсиновым соком, медом и&nbsp;корицей (по вкусу). ",
      },
      { description: "Десерт готов. " },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Легкий салат с клубникой",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/light_salad_with_strawberries.jpg`,
    ingridients: [
      "Огурцы 100 г ",
      "Персики 1 шт. ",
      "Клубника 150 г ",
      "Груши 1 шт. ",
      "Йогурт натуральный 100 мл ",
      "Оливковое масло 1/4 чашки",
      "Яблоки 3 шт.",
      "Руккола 120 г",
      "Козий сыр 100 г",
      "Соль по вкусу",
      "Черный молотый перец по вкусу",
    ],
    cooking: [
      {
        description:
          "Легкий летний салатик, который отличается немного необычным сочетанием фруктов, ягод и&nbsp;свежего огурца. Очень освежающе, просто и&nbsp;вполне диетически.&nbsp; ",
      },
      {
        description: "Берем свежие продукты, моем их. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/peach_pear_and_strawberry.jpg`,
      },
      {
        description:
          "Нарезаем 100г клубники пополам вдоль, а все остальные фрукты тонкими ломтиками.  ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_pear_and_cucumber.jpg`,
      },
      {
        description:
          "Остальную клубнику разминаем и&nbsp;смешиваем с&nbsp;йогуртом. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_strawberries.jpg`,
      },
      {
        description:
          "Нарезанные фрукты выкладываем слоями в&nbsp;прозрачные порционные емкости и&nbsp;заливаем йогуртовым соусом.",
        image: `${process.env.PUBLIC_URL}/images/other_images/berries_in_glasses.jpg`,
      },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Фруктовый салат с сыром горгонзола",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/fruit_salad_with_gorgonzola_cheese.jpg`,
    ingridients: [
      "—  персик ",
      "—  груша ",
      "—  ананас ",
      "—  банан ",
      "—  сыр&nbsp;горганзола&nbsp;—  50&nbsp;г ",
      "—  майонез&nbsp;—  1&nbsp;ст. л. ",
      "—  сливочный йогурт&nbsp;—  3&nbsp;ст. л. ",
    ],
    cooking: [
      { description: "1. Фрукты нарежьте небольшими кусочками. " },
      {
        description:
          "2. Приготовьте соус. Для&nbsp;этого смешайте сыр, майонез и&nbsp;сливочный йогурт. ",
      },
      {
        description:
          "3. Сложите фрукты в&nbsp;креманку и&nbsp;полейте соусом. ",
      },
      { description: "При подаче украсьте любыми фруктами. " },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Фруктовый салатик",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/fruit__salad.jpg`,
    ingridients: [
      "—  апельсин&nbsp;—  1&nbsp;шт. ",
      "—  яблоко&nbsp;—  1&nbsp;шт. ",
      "—  киви&nbsp;—  1-2 шт. ",
      "—  банан&nbsp;—  1-2 шт. ",
      "—  сливки ",
      "—  ликер&nbsp;—  1-2 ст. л. ",
    ],
    cooking: [
      {
        description:
          "1. Апельсин очистить от&nbsp;кожуры и&nbsp;нарезать мелкими кубиками. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/peel_and_cut_the_orange.jpg`,
      },
      {
        description:
          "2. Яблоко вымыть, удалить сердцевину и&nbsp;нарезать кубиками. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_an_apple.jpg`,
      },
      {
        description:
          "3. Киви и&nbsp;банан очистить и&nbsp;тоже нарезать небольшими кубиками. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_kiwi1.jpg`,
      },
      {
        image: `${process.env.PUBLIC_URL}/images/other_images/cutting_banana.jpg`,
      },
      {
        description:
          "4. Сложить все&nbsp;фрукты в&nbsp;креманку или&nbsp;салатницу, добавить ликер и&nbsp;аккуратно перемешать. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/sliced ​_orange_apple_and_kiwi.jpg`,
      },
      { description: "5. Сверху добавить сливки. " },
      {
        description: "Вот такой простенький и&nbsp;невероятно вкусный салат. ",
      },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Фруктовый салат с земляничным сиропом",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/fruit_salad_with_strawberry_syrup.jpg`,
    ingridients: [
      "яблоко",
      "груша",
      "гранат",
      "манго",
      "грейпфрут",
      "апельсин",
      "банан",
      "виноград",
      "клубника",
      "дыня",
      "ананас",
      "кокос",
      "земляничный сироп",
    ],
    cooking: [
      {
        description:
          "Фрукты почистить и&nbsp;порезать, сложить в&nbsp;креманку и&nbsp;полить земляничным сиропом.",
      },
      { description: "Посыпать зернами граната. Украсить физалисом." },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Салат 'Амур'",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/salad_cupid.jpg`,
    ingridients: [
      "200&nbsp;г. куриного отварного мяса (без кожи)",
      "1&nbsp;яблоко",
      "1&nbsp;киви",
      "8&nbsp;шт. клубники",
      "горсть фисташек",
      "50&nbsp;г. твердого сыра",
      "листья салата",
      "сок лимона",
      "майонез",
      "сметана",
    ],
    cooking: [
      { description: "На тарелку выкладывать слоями." },
      { description: "Листья салата." },
      { description: "Нарезанное куриное мясо." },
      {
        description:
          "Сбрызнуть лимонным соком, а&nbsp;затем полить соусом (сметана с&nbsp;майонезом 1:1).",
      },
      { description: "Яблоко кусочками, снова немного лимонного сока." },
      { description: "Кусочки киви и&nbsp;клубники." },
      { description: "Очищенные фисташки." },
      { description: "Натертый на&nbsp;мелкой терке сыр." },
    ],
    type: fruitSaladsType,
  },
  {
    title: "Фруктовый салат с ананасом",
    image: `${process.env.PUBLIC_URL}/images/fruit_salads/fruit_salad_with_pineapple.jpg`,

    ingridients: [
      "ананас",
      "мандарины",
      "киви",
      "клубника",
      "йогурт (без добавок)",
    ],
    cooking: [
      { description: "Все фрукты вымыть и&nbsp; почистить" },
      {
        description:
          "Ананас порезать треугольничками, у&nbsp; мандарина желательно очистить каждую дольку от&nbsp; кожицы.",
      },
      {
        description:
          "Киви порезать кружочками, клубнику целую или&nbsp; пополам.",
      },
      { description: "Все залить йогуртом и&nbsp; сразу кушать." },
      {
        description:
          "Салат еще&nbsp; больше освежает, если все&nbsp; фрукты и&nbsp; йогурт будут охлажденными.",
      },
    ],
    type: fruitSaladsType,
  },
];

export const fruitSaladsTitle = "Фруктовые салаты";
