import { borschType } from "./borsch";
import { fruitDrinksType } from "./fruitDrinks";
import { fruitSaladsType } from "./fruitSalads";
import { meatSaladsType } from "./meatSalads";
import { milkshakesType } from "./milkshakes";
import { pancakesType } from "./pancakes";
import { saucesType } from "./sauces";
import { softDrinksType } from "./softDrinks";
import { soupsType } from "./soups";
import { vegetableSaladsType } from "./vegetableSalads";

export const popular = [
  {
    title: "Куриный суп с яйцом",
    image: `${process.env.PUBLIC_URL}/images/soups/chicken_soup_with_egg.jpg`,
    ingridients: [
      "курица&nbsp;—  1&nbsp;кг",
      "луковица&nbsp;—  1&nbsp;шт.",
      "морковь&nbsp;—  1&nbsp;шт.",
      "картофель&nbsp;—  4-5 шт.",
      "яйца&nbsp;—  2&nbsp;шт.",
      "зелень",
      "соль, перец",
    ],
    cooking: [
      {
        description:
          "Сначала курицу нужно порезать на&nbsp;кусочки, залить водой и&nbsp;поставить варить бульон. Когда вода закипит, убавить огонь чтобы вода сильно не&nbsp;бурлила, собрать пену. Оставить вариться в&nbsp;течение 5-10 минут. Почистить, порезать кубиками картофель и&nbsp;добавить в&nbsp;бульон. Пока картофель с&nbsp;курицей варится, почистить лук&nbsp;и морковь, морковь натереть на&nbsp;крупной терке, лук&nbsp;мелко порезать, быстро все&nbsp;обжарить на&nbsp;растительном масле и&nbsp;добавить в&nbsp;суп.",
      },
      {
        description:
          "Посолить, поперчить и&nbsp;варить еще&nbsp;около 5-10 минут. Попробовать, сварился ли&nbsp;картофель, достаточно ли&nbsp;соли, при&nbsp;необходимости досолить. В&nbsp;пиале взбить немного яйца. Зелень порезать и&nbsp;добавить в&nbsp;суп. Быстро мешая суп&nbsp;ложкой в&nbsp;центре, тонкой струйкой влить яйца. Дать минуту провариться и&nbsp;убрать с&nbsp;огня.",
      },
    ],
    type: soupsType,
  },
  {
    title: "Зеленый борщ",
    image: `${process.env.PUBLIC_URL}/images/borsch/green_borsch.jpg`,
    ingridients: [
      "картофель&nbsp;—  4&nbsp;шт.",
      " крупная луковица&nbsp;—  1&nbsp;шт.",
      " морковь&nbsp;—  1&nbsp;шт.",
      " щавель&nbsp;—  300&nbsp;г (средний пучок)",
      " бульон (варим загодя)&nbsp;—  3&nbsp;л и&nbsp;мясо с&nbsp;косточек, на&nbsp;которых этот бульон варился",
      " вареные яйца и&nbsp;сметана при&nbsp;подаче",
      " соль&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Режем картошку&nbsp;и засыпаем ее&nbsp;в кастрюлю. Одну большую морковку трем на&nbsp;крупной терке, мелко рубим большую луковицу. Можно все&nbsp;это зажарить на&nbsp;масле, но&nbsp;я засыпаю морковь и&nbsp;лук в&nbsp;кастрюлю в&nbsp;сыром виде&nbsp;—  меньше жира&nbsp;—  здоровее пища.",
      },
      {
        description:
          " Когда картошка готова&nbsp;—  разбираем руками на&nbsp;кусочки мясо с&nbsp;косточек и&nbsp;отправляем в&nbsp;бульон.",
      },
      {
        description: "Режем и засыпаем щавель.",
      },
      {
        description:
          " Как&nbsp;только он&nbsp;потемнеет&nbsp;—  снимаем борщ с&nbsp;огня, разливаем по&nbsp;тарелкам, в&nbsp;каждую кладем по&nbsp;половинке яйца (можно мелко нарубить) и&nbsp;по паре ложек сметаны.",
      },
    ],
    type: borschType,
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
    title: "Куриный салат",
    image: `${process.env.PUBLIC_URL}/images/meat_salads/chicken_salad.jpg`,
    ingridients: [
      "китайский салат (китайская капуста)&nbsp;—  300&nbsp;г",
      "перец сладкий красный (паприка)&nbsp;—  1&nbsp;шт.",
      "яблоки (160&nbsp;г)&nbsp;—  2&nbsp;шт.",
      "растительное масло&nbsp;—  20&nbsp;мл",
      "чеснок&nbsp;—  1&nbsp;зубок",
      "куриное филе&nbsp;—  200&nbsp;г",
      "соль морская&nbsp;—  3/4&nbsp;ч.л.",
      "перец черный молотый&nbsp;—  1/2&nbsp;ч.л.",
      "йогурт натуральный&nbsp;—  125&nbsp;мл",
      "горчица дижонская&nbsp;—  2&nbsp;ч.л.",
      "лимонный сок&nbsp;—  5&nbsp;мл",
      "мед гречишный&nbsp;—  15&nbsp;г",
      "укроп сушеный&nbsp;—  1&nbsp;ч.л.",
    ],
    cooking: [
      {
        description:
          "Листья салата тщательно вымойте, высушите и&nbsp;нарежьте тонкими полосками. Перец очистите от&nbsp;семян и&nbsp;тонко нарежьте соломкой. Яблоко очистите от&nbsp;семян и&nbsp;кожицы и&nbsp;тоже нарежьте соломкой. Все&nbsp;сложите в&nbsp;миску и&nbsp;слегка сбрызните лимонным соком, чтобы яблоко не&nbsp;темнело.",
      },
      {
        description:
          "В небольшом количестве масла обжарьте до&nbsp;золотистого оттенка раздавленный зубчик чеснока, чеснок удалите.",
      },
      {
        description:
          "На ароматизированном чесночном масле обжарьте полоски куриного филе, посолите и&nbsp;поперчите. Не&nbsp;пересушивайте курицу, чтобы она&nbsp;не стала сухой, жарьте буквально 5&nbsp;минут на&nbsp;среднем огне.",
      },
      {
        description:
          "Для заправки соедините все&nbsp;ингредиенты и&nbsp;как следует перемешайте. Для&nbsp;этой заправки можно использовать йогурт или&nbsp;сметану. Если вы&nbsp;увидите отслоившуюся от&nbsp;йогурта жидкость, слейте ее, чтобы заправка была более густой. Можно даже выложить йогурт на&nbsp;сито и&nbsp;дать стечь жидкости в&nbsp;течение 15-20 минут. Готовую заправку обязательно попробуйте, чтобы отрегулировать ее&nbsp;вкус в&nbsp;зависимости от&nbsp;вкуса имеющихся компонентов и&nbsp;своих предпочтений.",
      },
      {
        description:
          "Готовую и&nbsp;слегка остывшую курицу добавьте в&nbsp;салат, хорошо перемешайте.",
      },
    ],
    type: meatSaladsType,
  },
  {
    title: "Салат из курицы с ананасами",
    image: `${process.env.PUBLIC_URL}/images/meat_salads/chicken__salad_with_pineapple.jpg`,
    ingridients: [
      "Салат айсберг 								100&nbsp;г&nbsp;															",
      "Куриное филе 								300&nbsp;г&nbsp;															",
      "Растительное масло 								20&nbsp;мл&nbsp;															",
      "Соль морская 								½ ч.л. 															",
      "Перец сладкий желтый 								½ шт. 															",
      "Масло виноградных косточек 								30&nbsp;мл&nbsp;															",
      "Лимонный сок&nbsp;								30&nbsp;мл&nbsp;															",
      "Горчица 								¼ ч.л. 															",
      "Перец черный молотый 								¼ ч.л. 															",
      "Ананасы консервированные 								100&nbsp;г&nbsp;															",
      "Брусника 								50&nbsp;г&nbsp;							",
    ],
    cooking: [
      {
        description:
          "Листья салата вымыть холодной водой, хорошенько просушить и&nbsp;порвать на&nbsp;кусочки небольшого размера.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/lettuce2.jpg`,
      },
      {
        description:
          "Куриную грудку (берем одно филе на&nbsp;порцию) режем кусочками и&nbsp;обжариваем на&nbsp;горячей сковороде до&nbsp;золотистого цвета, чуть посолив.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_chopped_chicken_fillet1.jpg`,
      },
      {
        description:
          "Сладкий перец (в принципе, можно использовать тот&nbsp;цвет, который вам&nbsp;больше нравится) нарезаем кусочками как&nbsp;куриное филе.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_yellow_pepper.jpg`,
      },
      {
        description:
          "Смешиваем ингредиенты заправки и&nbsp;слегка взбиваем, чтобы получился однородный соус. Для&nbsp;более сладкой заправки можно вместо части лимонного сока добавить пару столовых ложек жидкости от&nbsp;ананасов.&nbsp;			 				 								 					",
      },
      {
        description:
          "На большую тарелку выкладываем слоями листья салата, курицу, ананас и&nbsp;перец, поливаем заправкой и&nbsp;украшаем ягодами брусники.",
        image: `${process.env.PUBLIC_URL}/images/meat_salads/chicken__salad_with_pineapple.jpg`,
      },
    ],
    type: meatSaladsType,
  },
  {
    title: "Салат из утки с припущенными помидорами черри",
    image: `${process.env.PUBLIC_URL}/images/meat_salads/duck_salad_with_poached_cherry_tomatoes.jpg`,
    ingridients: [
      "филе утиных грудок&nbsp;—  2&nbsp;шт.",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
      " томаты черри&nbsp;—  150&nbsp;г",
      " чеснок&nbsp;—  1&nbsp;зубчик",
      " базилик&nbsp;—  пара веточек",
      " яблочный или&nbsp;белый винный уксус&nbsp;—  1&nbsp;ст.л.",
      " сахар&nbsp;—  1&nbsp;ч.л.",
      " голубой сыр&nbsp;—  50&nbsp;г",
      " салатная смесь&nbsp;—  150&nbsp;г",
      " орехи (фисташки, грецкие или&nbsp;жареный миндаль)&nbsp;—  30&nbsp;г",
    ],
    sauceIngridients: [
      "оливковое масло&nbsp;—  4&nbsp;ст.л.",
      " белый винный уксус&nbsp;—  2&nbsp;ст.л.",
      " дижонская горчица 2ч.л.",
      " жидкий мед&nbsp;—  2&nbsp;ч.л.",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "На утином филе делаем неглубокие надрезы со стороны кожи. Солим и перчим.",
        image: `${process.env.PUBLIC_URL}/images/other_images/duck_breast.jpg`,
      },
      {
        description:
          "На средне сильном огне разогреваем сухую сковороду, кладем филе кожей вниз и&nbsp;жарим около 5&nbsp;минут. Затем переворачиваем и&nbsp;жарим еще&nbsp;5&nbsp;минут, уменьшив огонь до&nbsp;среднего.",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_duck_breast.jpg`,
      },
      {
        description:
          "Готовое филе перекладываем на тарелку и отставляем в сторону.",
      },
      {
        description:
          "Помидорки черри разрезаем пополам каждую. В&nbsp;сковороде на&nbsp;сильном огне разогреваем 1&nbsp;ст.л. оливкового масла. Кладем черри и&nbsp;жарим, помешивая, 1&nbsp;минуту. Добавляем мелко нарубленный чеснок и&nbsp;базилик, уксус и&nbsp;сахар. Жарим еще&nbsp;30&nbsp;секунд.",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_cherry_tomatoes.jpg`,
      },
      {
        description: "Перекладываем на тарелку.",
      },
      {
        description:
          "Готовим заправку. Для&nbsp;этого кладем все&nbsp;ингредиенты в&nbsp;миску и&nbsp;взбиваем вилкой до&nbsp;получения эмульсии.",
      },
      {
        description:
          "Откладываем половину заправки. В&nbsp;остальную кладем салатные листья и&nbsp;перемешиваем.",
        image: `${process.env.PUBLIC_URL}/images/other_images/chopped_lettuce.jpg`,
      },
      {
        description:
          "Остывшее утиное филе нарезаем на тонкие ломтики. Сыр крошим.",
      },
      {
        description:
          "В тарелки кладем заправленные салатные листья, ломтики утки, припущенные черри и&nbsp;раскрошенный сыр. Поливаем остатками заправки и&nbsp;посыпаем нарубленными орехами.",
      },
    ],
    type: meatSaladsType,
  },
  {
    title: "Теплый салат с говядиной и грушей",
    image: `${process.env.PUBLIC_URL}/images/meat_salads/warm_salad_with_beef_and_pear.png`,
    ingridients: [
      "Азу из говядины 200 г",
      "Помидоры 2 шт.",
      "Груши  2 шт.   ",
      "Салатная смесь  2 упаковки",
      "Соевый соус 60 мл",
      "Кунжутные семена для посыпки",
      "Перец черный, молотый по вкусу",
    ],
    cooking: [
      {
        description:
          "Главной особенностью этого салата являются груши. Для&nbsp;того, чтобы стать мягким и&nbsp;приятным дополнением к&nbsp;салату, груши должны быть мягких и&nbsp;сладких сортов.",
      },
      {
        description:
          "Нарезать помидоры на&nbsp;средние куски. Подогреть сковородку на&nbsp;сильном огне, затем убавить до&nbsp;среднего. Добавить соевый соус, нарезанные помидоры и&nbsp;говядину. Готовить так&nbsp;примерно 10&nbsp;минут, переворачивая.",
      },
      {
        description:
          "После того, как&nbsp;говядина в&nbsp;помидорах будет готова, немного остудить и&nbsp;добавить к&nbsp;смеси салатов.",
        image: `${process.env.PUBLIC_URL}/images/other_images/beef_soy_sauce_and_tomato.jpg`,
      },
      {
        description:
          "Нарезать грушу небольшими кубиками и&nbsp;добавить в&nbsp;ту же&nbsp;самую сковородку с&nbsp;25&nbsp;мл&nbsp;соевого соуса. Готовить так&nbsp;5&nbsp;минут под&nbsp;крышкой.",
      },
      {
        description:
          "Добавить груши в&nbsp;салат, посыпать кунжутными семечками и&nbsp;заправить небольшим количеством соевого соуса и&nbsp;перца.",
      },
    ],
    type: meatSaladsType,
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
    title: "Блины на воде",
    image: `${process.env.PUBLIC_URL}/images/pancakes/water_pancakes.jpg`,
    ingridients: [
      "мука&nbsp;—  500&nbsp;г",
      "вода&nbsp;—  3&nbsp;стакана и&nbsp;1&nbsp;стакан для&nbsp;разведения лимонной кислоты",
      "яйца&nbsp;—  2-3 шт.",
      "сахар&nbsp;—  1&nbsp;ст. ложка",
      "соль, сода, лимонная кислота&nbsp;—  по&nbsp;0.5&nbsp;ч. ложки",
    ],
    cooking: [
      {
        description: "Яйца смешать с&nbsp;3&nbsp;стаканами теплой воды.",
      },
      {
        description:
          "Прибавить соль, сахар и&nbsp;соду, веничком, чтобы тесто было без&nbsp;комков.",
      },
      {
        description:
          "Лимонную кислоту развести в&nbsp;стакане воды, влить в&nbsp;подготовленное тесто, размешать и&nbsp;сразу же&nbsp;печь блины.",
      },
    ],
    type: pancakesType,
  },
  {
    title: "Оладьи с яблоками",
    image: `${process.env.PUBLIC_URL}/images/pancakes/fritters_with_apples.jpg`,
    ingridients: [
      "Кефир 								500&nbsp;мл&nbsp;															",
      "Мука пшеничная 								300&nbsp;г&nbsp;															",
      "Яйцо куриное 								3&nbsp;шт. 															",
      "Сахар-песок 								100&nbsp;г&nbsp;															",
      "Соль 								¼ ч.л. 															",
      "Разрыхлитель теста 								5&nbsp;г&nbsp;															",
      "Яблоки 								2&nbsp;шт. 															",
      "Корица молотая 								2&nbsp;ч.л. 															",
      "Растительное масло 								100&nbsp;мл&nbsp;							",
    ],
    cooking: [
      {
        description:
          "В яблочный сезон у&nbsp;многих из&nbsp;нас скапливается столько яблок, что&nbsp;просто так&nbsp;съесть их&nbsp;невозможно. Вот&nbsp;тогда и&nbsp;мы начинаем употреблять их&nbsp;в разных блюдах&nbsp;—  печь пироги, готовить разные компоты и&nbsp;десерты, делать заготовки. Хочу предложить еще&nbsp;один вариант использования яблок&nbsp;—  яблочные оладьи на&nbsp;кефире.  Они&nbsp;получаются очень ароматными за&nbsp;счет классического сочетания яблок и&nbsp;корицы и&nbsp;улучшают настроение в&nbsp;прохладный осенний день.&nbsp;  					 						 				 								 					",
      },
      {
        description:
          "Для теста нужно соединить все&nbsp;ингредиенты и&nbsp;размешать тесто (можно миксером), чтобы не&nbsp;было комков.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/pancake_dough.jpg`,
      },
      {
        description:
          "Яблоки очистить от&nbsp;семечек и&nbsp;шкурки, нарезать небольшими кусочками. Лучше, чтобы они&nbsp;были немного плоскими, тогда они&nbsp;будут легче укладываться в&nbsp;оладьях.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_apple_pieces_to_the_dough.jpg`,
      },
      {
        description:
          "Перемешать тесто с&nbsp;яблоками, добавив пару чайных ложек корицы. Если хотите, можно добавить также ванильный сахар или&nbsp;тертую лимонную цедру для&nbsp;усиления аромата. Но&nbsp;вообще, корица отлично оттеняет яблоки и&nbsp;поэтому я&nbsp;ничего больше не&nbsp;стала добавлять.&nbsp;			 				 								 					",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_cinnamon_to_the_dough.jpg`,
      },
      {
        description:
          "Жарить оладьи нужно на&nbsp;среднем огне в&nbsp;небольшом количестве растительного масла.",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_pancakes_with_apples.jpg`,
      },
      {
        description:
          "Когда вы&nbsp;будете их&nbsp;переворачивать, они&nbsp;должны хорошо подниматься за&nbsp;счет добавления разрыхлителя и&nbsp;становиться пышными.  Даже если они&nbsp;потом осядут, все&nbsp;равно останутся нежными и&nbsp;нетяжелыми.",
        image: `${process.env.PUBLIC_URL}/images/other_images/flip_the_apple_pancakes.jpg`,
      },
    ],
    type: pancakesType,
  },
  {
    title: "Оладьи с вишней",
    image: `${process.env.PUBLIC_URL}/images/pancakes/cherry_fritters.jpg`,
    ingridients: [
      "мука&nbsp;—  200&nbsp;г",
      "молоко&nbsp;—  150&nbsp;мл",
      "вишня&nbsp;—  100&nbsp;г",
      "яйцо&nbsp;—  3&nbsp;шт.",
      "подсолнечное масло&nbsp;—  100&nbsp;мл",
      "сахар&nbsp;—  20&nbsp;г",
      "разрыхлитель&nbsp;—  5&nbsp;г",
    ],
    cooking: [
      {
        description:
          "Сперва следует смешать все&nbsp;ингредиенты, кроме вишни. Затем взбить миксером. Разрезать каждую вишню на&nbsp;4&nbsp;части. Разогреть сковороду с&nbsp;растительным маслом. Столовой ложкой выкладывать тесто на&nbsp;сковороду. Пока оладьи жарятся с&nbsp;одной стороны, посыпать их&nbsp;сверху вишней. Затем перевернуть и&nbsp;обжарить с&nbsp;другой стороны.",
      },
    ],
    type: pancakesType,
  },
  {
    title: "Рецепт —  Винегрет",
    image: `${process.env.PUBLIC_URL}/images/vegetable_salads/vinaigrette.jpg`,
    ingridients: [
      "Свекла 	800&nbsp;г&nbsp;",
      "	Картофель 	800&nbsp;г",
      "Морковь 	250&nbsp;г&nbsp;	",
      "Соленые огурцы 	300&nbsp;г",
      "Лук красный 	½ шт. 	",
      "Лук зеленый 	30&nbsp;г",
      "Горчица дижонская 	1&nbsp;ч.л. 	",
      "Уксус столовый 	60&nbsp;мл",
      "Растительное масло 	100&nbsp;мл&nbsp;	",
      "Перец черный молотый 	¼ ч.л.",
    ],
    cooking: [
      {
        description:
          "Свеклу, картофель и&nbsp;морковь нужно предварительно сварить 'в мундире'. Лучше всего это&nbsp;делать в&nbsp;пароварке, так&nbsp;они теряют меньше витаминов и&nbsp;получаются вкуснее. Перед варкой просто помойте их.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/boil_potatoes.jpg`,
      },
      {
        description: "			 				 																	 													 						Дайте овощам немного остыть, затем очистите.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/boiled_beets_carrots_and_potatoes.jpg`,
      },
      {
        description:
          "Мелко нарежьте вареные овощи и&nbsp;соленые огурцы. Слишком крупная нарезка отрицательно повлияет на&nbsp;конечный вкус. Количество огурцов может быть разным в&nbsp;зависимости от&nbsp;крепости их&nbsp;посола. 					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/chopped_beets_carrots_and_potatoes.jpg`,
      },
      {
        description:
          "Лук лучше взять сладкий и&nbsp;нарезать как&nbsp;можно мельче. Если сладкого лука нет, можно взять любой и&nbsp;ошпарить его&nbsp;кипятком.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/chopped_red_onion1.jpg`,
      },
      {
        description:
          "Свежий зеленый лук&nbsp;очень украшает винегрет. Если взять его&nbsp;побольше, можно даже совсем не&nbsp;добавлять репчатый лук.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/chopped_green_onions.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Хорошо перемешайте все&nbsp;овощи в&nbsp;большой миске.					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/mix_boiled_vegetables.jpg`,
      },
      {
        description:
          "Заправка для&nbsp;винегрета&nbsp;—  один из&nbsp;самых важных моментов. Дижонская горчица подходит лучше всего, т.к. она&nbsp;не сладкая и&nbsp;умеренно острая.  Чайную ложку горчицы смешайте с&nbsp;тремя столовыми ложками 9%-ного уксуса и&nbsp;5&nbsp;столовыми ложками масла и&nbsp;черным перцем. Тщательно перемешайте до&nbsp;однородности и&nbsp;заправьте винегрет.   Для&nbsp;особого аромата можно добавить в&nbsp;винегрет горчичное или&nbsp;нерафинированное подсолнечное масло (смешать наполовину с&nbsp;рафинированным).					 								  				 			  			 ",
        image: `${process.env.PUBLIC_URL}/images/other_images/make_the_vinaigrette_dressing.jpg`,
      },
      {
        description:
          "			 				 																	 													 						Перед подачей дайте винегрету настояться в&nbsp;холодильнике пару часов.					 								  				 			  			 									",
        image: `${process.env.PUBLIC_URL}/images/other_images/vinaigrette.jpg`,
      },
    ],
    type: vegetableSaladsType,
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
];
export const popularRecipesTitle = "Популярные рецепты";
export const popularRecipesType = "popularRecipes";
