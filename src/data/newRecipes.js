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

export const newRecipes = [
  {
    title: "Теплый салат из говядины и овощей",
    image: `${process.env.PUBLIC_URL}/images/meat_salads/warm_beef_and_vegetable_salad.jpg`,
    ingridients: [
      "филе говядины&nbsp;—  200&nbsp;г",
      "свежий шпинат&nbsp;—  150&nbsp;г",
      "болгарский перец&nbsp;—  1/2&nbsp;шт.",
      "оливковое масло",
      "бальзамический уксус",
      "сливочное масло",
      "розмарин",
      "мед",
      "соль",
      "черный перец ",
    ],

    cooking: [
      {
        description:
          "Болгарский перец нарежьте ломтиками и&nbsp;обжарьте на&nbsp;оливковом масле. ",
      },
      {
        description:
          "Говядину нарежьте полосками, посолите и&nbsp;поперчите. Смажьте медом&nbsp;—  это&nbsp;позволит мясу приготовиться быстрее, придав золотистую корочку. Добавьте мясо к&nbsp;перцу. ",
      },
      {
        description:
          "Приправьте сухим розмарином и&nbsp;обжарьте в&nbsp;течение 5-7 минут. Влейте немного бальзамического уксуса и&nbsp;дайте жидкости выпариться. переложите на&nbsp;блюдо.",
      },
      {
        description:
          "В сковороду, в&nbsp;которой жарилось мясо и&nbsp;перец выложите шпинат и&nbsp;готовьте в&nbsp;течение нескольких минут.",
      },
      {
        description:
          "Подавайте, выложив на&nbsp;тарелку шпинат и&nbsp;мясо с&nbsp;перцем, добавив немного сливочного масла.",
      },
    ],
    type: meatSaladsType,
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
    title: "Блинный торт с апельсинами",
    image: `${process.env.PUBLIC_URL}/images/pancakes/pancake_cake_with_oranges.jpg`,
    ingridients: [
      "    мука&nbsp;—  100&nbsp;г",
      "    яйцо&nbsp;—  4&nbsp;шт.",
      "    сахар&nbsp;—  70&nbsp;г",
      "    сливки 20% жирности&nbsp;—  400&nbsp;мл",
      "    растопленное масло —  30 г",
      "    сливки 35% жирности&nbsp;—  350&nbsp;мл",
      "    сахарная пудра&nbsp;—  50&nbsp;г",
      "    средний апельсин&nbsp;—  3&nbsp;шт.",
      "    цедра апельсиновая&nbsp;—  1/2&nbsp;шт.",
      "    абрикосовый джем&nbsp;—  100&nbsp;г",
      "    вода&nbsp;—  20&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "    Приготовьте тесто, смешав муку, яйца, соль и&nbsp;сахар. Постепенно влейте сливки и&nbsp;растопленное масло, взбейте до&nbsp;однородности. Дайте тесту настояться около 30&nbsp;минут при&nbsp;комнатной температуре. Испеките тонкие блины.",
      },
      {
        description:
          "Охлажденные сливки взбейте с&nbsp;сахарной пудрой в&nbsp;устойчивый крем. Добавьте цедру апельсина. Апельсины очистите, разделите на&nbsp;дольки, удалив перегородки. Отложите 3-4 блина и&nbsp;несколько долек для украшения",
      },
      {
        description:
          "Отделите желтки от&nbsp;белков, миксером взбейте их&nbsp;с сахаром. Отдельно взбейте белки с&nbsp;солью в&nbsp;пышную пену.",
      },
      {
        description:
          "Кольцо от&nbsp;разъемной формы диаметром 16-18 см&nbsp;выстелите пищевой пленкой так, чтобы ее&nbsp;краями можно было прикрыть готовый торт. Выложите 3&nbsp;блина на&nbsp;дно формы так, чтобы их&nbsp;края выходили за&nbsp;края формы.",
      },
      {
        description:
          "Смажьте блины кремом, вдавите 3-4 дольки апельсина в&nbsp;крем, сверху положите новый блин. Продолжайте выкладывать слои и&nbsp;дольки апельсина, заполняя форму. Закройте свободными краями первых двух блинов верх формы, прикройте пленкой и&nbsp;поставьте торт в&nbsp;холодильник на&nbsp;2-3 часа.",
      },
      {
        description:
          "Перед подачей смешайте абрикосовый джем и&nbsp;воду, доведите до&nbsp;кипения, немного остудите.",
      },
      {
        description:
          "Достаньте торт из&nbsp;формы, уложите сверху отложенные блины, смажьте джемом и&nbsp;украсьте апельсиновыми дольками.",
      },
    ],
    type: pancakesType,
  },
  {
    title: "Дрожжевые оладьи на молоке",
    image: `${process.env.PUBLIC_URL}/images/pancakes/yeast_pancakes_with_milk.jpg`,
    ingridients: [
      "    молоко &nbsp;—  500&nbsp;мл",
      "    мука&nbsp;—  500&nbsp;г",
      "    дрожжи &nbsp;—  3.5&nbsp;ч.л.",
      "    яйца&nbsp;—  2&nbsp;шт.",
      "    сахар &nbsp;—  2&nbsp;ст. л.",
      "    растительное масло&nbsp;—  2&nbsp;ст. л.",
      "    ванильная эссенция &nbsp;—  1&nbsp;ч.л.",
      "    соль&nbsp;—  0,5&nbsp;ч.л.",
      "    яблоки &nbsp;—  2&nbsp;шт.",
    ],
    cooking: [
      {
        description:
          "Сделайте опару. В&nbsp;очень теплое молоко (градусов 40) добавьте дрожжи и&nbsp;муку. Замесите все&nbsp;до однородности.",
      },
      {
        description:
          "Отставьте, накрыв полотенцем, минут на&nbsp;30, чтобы тесто поднялось.",
      },
      {
        description:
          "Спустя 30&nbsp;минут добавьте в&nbsp;поднявшееся тесто яйца, сахар, масло, соль и&nbsp;ванильную эссенцию.",
      },
      {
        description:
          "Снова вымесите хорошенько, накройте полотенцем, отставьте на&nbsp;30&nbsp;минут. Дайте тесту снова подойти.",
      },
      {
        description: "Яблоки мелко порежьте кубиками.",
      },
      {
        description:
          "Добавив яблоки в&nbsp;тесто, советуем еще&nbsp;раз дать ему&nbsp;подняться, чтобы оладьи были пышными. Затем приступаем к&nbsp;жарке: на&nbsp;разогретую сковороду добавьте масло, выкладывайте столовой ложкой массу, обжаривайте с&nbsp;двух сторон.",
      },
      {
        description: "Жарим до&nbsp;золотистого цвета.",
      },
      {
        description:
          "Подавать можете с&nbsp;клиновым сиропом, вареньем, сгущенкой или&nbsp;сметаной.",
      },
      {
        description: "Дрожжевые оладьи на&nbsp;молоке готовы. ",
      },
    ],
    type: pancakesType,
  },
  {
    title: "Пышные блины на молоке",
    image: `${process.env.PUBLIC_URL}/images/pancakes/fluffy_pancakes_with_milk.jpg`,
    ingridients: [
      "  яйца&nbsp;—  2&nbsp;шт.",
      "молоко&nbsp;—  300&nbsp;мл ",
      "сахар&nbsp;—  2&nbsp;ст.л. (если планируете подавать блины с&nbsp;несладкими добавками&nbsp;—  хватит 1&nbsp;ст.л.)",
      "соль&nbsp;—  щепотка",
      "мука&nbsp;—  300&nbsp;г ",
      "разрыхлитель&nbsp;—  2,5&nbsp;ч.л. ",
      "растопленное сливочное масло&nbsp;—  60&nbsp;г",
    ],
    cooking: [
      {
        description: "Яйца взбиваем с молоком и сахаром.",
      },
      {
        description:
          "В отдельную миску просеиваем муку с солью и разрыхлителем.",
      },
      {
        description: "Соединяем две смеси и замешиваем густое тесто.",
      },
      {
        description:
          "Вливаем растопленное масло и&nbsp;еще раз&nbsp;хорошо перемешиваем. Даем постоять 5&nbsp;минут.",
      },
      {
        description:
          "Разогреваем сковороду на&nbsp;огне чуть ниже среднего. Смазываем растительным маслом. Выливаем примерно полторы ст.л. теста и&nbsp;слегка распределяем его&nbsp;в форме круга. слой тесто должен быть около 4&nbsp;мм.",
      },
      {
        description:
          "Печем около 1-2 минут, затем переворачиваем и печем еще минуту.",
      },
      {
        description: "Подаем блинчики с добавками на выбор.",
      },
    ],
    type: pancakesType,
  },
  {
    title: "Оладьи с бананом",
    image: `${process.env.PUBLIC_URL}/images/pancakes/banana_fritters.jpg`,
    ingridients: [
      "бананы&nbsp;—  2&nbsp;шт.",
      "сахар&nbsp;—  1&nbsp;стакан",
      "мука пшеничная&nbsp;—  1/2&nbsp;стакана",
      "молоко&nbsp;—  1/4&nbsp;стакана",
      "яйцо&nbsp;—  1&nbsp;шт.",
      "растительное масло&nbsp;—  2&nbsp;ст.л.",
    ],
    cooking: [
      {
        description:
          "В миксере смешайте бананы, яйца, молоко и&nbsp;сахар до&nbsp;однородности. Добавьте муку и&nbsp;быстро перемешайте, но&nbsp;не до&nbsp;однородного состояния.",
      },
      {
        description:
          "Ложкой выложите полученную массу на&nbsp;горячую сковороду с&nbsp;маслом. Обжарьте с&nbsp;обеих сторон, пока оладьи не&nbsp;станут коричневыми.",
      },
    ],
    type: pancakesType,
  },
  {
    title: "Суп из курицы с вялеными томатами",
    image: `${process.env.PUBLIC_URL}/images/soups/chicken_soup_with_sun-dried_tomatoes.jpg`,
    ingridients: [
      "курица, весом около 1,7-1,8&nbsp;кг&nbsp;(нужно всё, кроме грудки)&nbsp;—  1&nbsp;шт.",
      " небольшая луковица&nbsp;—  1&nbsp;шт. и&nbsp;1&nbsp;средняя",
      " черный перец горошком&nbsp;—  10&nbsp;шт.",
      " лавровый лист&nbsp;—  2&nbsp;шт.",
      " стебель сельдерея&nbsp;—  3&nbsp;шт.",
      " средняя морковь&nbsp;—  1&nbsp;шт.",
      " чеснок&nbsp;—  5&nbsp;зубчиков",
      " бекон&nbsp;—  100&nbsp;г",
      " майоран&nbsp;—  1&nbsp;ч.л.",
      "мука&nbsp;—  1&nbsp;ст.л. с&nbsp;горкой",
      " молотой сухой имбирь&nbsp;—  1/2&nbsp;ч.л.",
      " корневой сельдерей&nbsp;—  200&nbsp;г",
      " половинки вяленых томатов в&nbsp;масле&nbsp;—  8&nbsp;шт.",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
      " жирные сливки&nbsp;—  100&nbsp;мл",
    ],
    cooking: [
      {
        description:
          "Курицу разделываем на&nbsp;части. Филе грудки оставляем для&nbsp;другого блюда остальное кладем в&nbsp;кастрюлю и&nbsp;заливаем водой. Доводим до&nbsp;кипения, сливаем воду, споласкиваем куски курицы и&nbsp;кастрюлю, складываем все&nbsp;обратно. Доводим до&nbsp;кипения и&nbsp;снимаем пену. Кладем в&nbsp;кастрюлю 2&nbsp;раздавленных зубчика чеснока, 1&nbsp;крупно нарезанный стебель сельдерея, надрезанную крест-накрест небольшую луковицу, перец-горошек и&nbsp;лавровый лист. Вливаем 2,2&nbsp;литра воды. Солим. Доводим до&nbsp;кипения на&nbsp;сильном огне. Варим, периодически снимая пену, на&nbsp;небольшом огне минут 40-45.",
      },
      {
        description:
          "Вторую луковицу мелко рубим, морковь разрезаем пополам вдоль, а&nbsp;затем&nbsp;—  ломтиками поперек. Крупно режем сельдерей. Бекон нарезаем на&nbsp;мелкие кубики.",
      },
      {
        description:
          "В сковороде на&nbsp;среднем огне разогреваем 1&nbsp;ст.л. растительного масла. Кладем бекон и&nbsp;нарезанные овощи и&nbsp;жарим, помешивая, 5&nbsp;минут.",
      },
      {
        description:
          "Добавляем майоран и&nbsp;имбирь, жарим 1&nbsp;минуту. Далее добавляем муку и&nbsp;жарим, помешивая, еще&nbsp;1&nbsp;минуту. Снимаем с&nbsp;огня.",
      },
      {
        description:
          "Сельдерей нарезаем кубиками, вяленые томаты&nbsp;—  полосками, оставшийся чеснок мелко рубим.",
      },
      {
        description:
          "Из готового бульона вынимаем курицу. Сам&nbsp;бульон процеживаем и&nbsp;возвращаем в&nbsp;кастрюлю. Кладем в&nbsp;него сельдерей и&nbsp;варим 10&nbsp;минут.",
      },
      {
        description:
          "Снимаем куриное мясо с&nbsp;костей и&nbsp;нарезаем на&nbsp;небольшие кусочки. Кладем в&nbsp;суп вместе с&nbsp;зажаренными овощами и&nbsp;нарезанными томатами и&nbsp;варим еще&nbsp;10&nbsp;минут. Вливаем сливки, доводим до&nbsp;кипения и&nbsp;включаем.",
      },
      {
        description:
          "По желанию добавляем в&nbsp;суп нарубленную петрушку, даем постоять под&nbsp;крышкой 5&nbsp;минут и&nbsp;подаем.",
      },
    ],
    type: soupsType,
  },
  {
    title: "Суп из индейки с макаронами",
    image: `${process.env.PUBLIC_URL}/images/soups/turkey_pasta_soup.jpg`,
    ingridients: [
      "индюшиные голени&nbsp;—  2&nbsp;шт. или&nbsp;1&nbsp;бедро весом около 600-700 г",
      " морковь&nbsp;—  3&nbsp;шт.",
      " зеленая фасоль&nbsp;—  150&nbsp;г",
      " сухие макароны среднего размера&nbsp;—  100&nbsp;г",
      " соль и&nbsp;перец&nbsp;—  по&nbsp;вкусу",
      " нарубленный зеленый лук&nbsp;и дольки лимона для&nbsp;подачи",
    ],
    cooking: [
      {
        description:
          "Еще один вариант простого, но&nbsp;очень вкусного супа. Крупные кусочки овощей и&nbsp;мяса индейки в&nbsp;сочетании с&nbsp;заправкой из&nbsp;лимонного сока дают просто замечательный вкус&nbsp;—  одновременно сытный и&nbsp;свежий. Этот суп&nbsp;можно приготовить из&nbsp;курицы, но&nbsp;в случае с&nbsp;индейкой он&nbsp;получается более сытным.",
      },
      {
        description:
          "Мясо заливаем 2,5&nbsp;л&nbsp;холодной воды, добавляем 2&nbsp;лавровых листа и&nbsp;10&nbsp;горошин черного перца. Доводим до&nbsp;кипения, уменьшаем огонь и&nbsp;варим при&nbsp;несильном кипении, пока мясо не&nbsp;станет мягким, около часа.",
      },
      {
        description:
          "Пока варится индейка, нарезаем морковь кружочками толщиной около 0,5 см.",
      },
      {
        description:
          "Вынимаем готовое мясо из&nbsp;кастрюли и&nbsp;даем немного остыть. Нарезаем на&nbsp;средние кусочки.",
      },
      {
        description:
          "В бульон кладем морковь, зеленую фасоль и&nbsp;макароны. Варим, пока макароны не&nbsp;достигнут состояния аль&nbsp;денте, а&nbsp;морковь не&nbsp;станет мягкой.",
      },
      { description: "Кладем мясо в суп и прогреваем в течение пары минут." },
      {
        description:
          "При подаче посыпаем суп зеленым луком. Гарнируем дольками лимона.",
      },
    ],
    type: soupsType,
  },
  {
    title: "Сладко-острый суп с индейкой и карри",
    image: `${process.env.PUBLIC_URL}/images/soups/sweet_and_spicy_turkey_curry_soup.jpg`,
    ingridients: [
      "картофель&nbsp;—  3&nbsp;шт.",
      " подогретое молоко&nbsp;—  50&nbsp;мл",
      " отварное мясо индейки, нарезанное на&nbsp;небольшие кусочки&nbsp;—  450&nbsp;г",
      " индюшиный или&nbsp;куриный бульон&nbsp;—  1,2&nbsp;л",
      " средняя луковица, нарубленная&nbsp;—  1&nbsp;шт.",
      " крупный стебель сельдерея, нарубленный&nbsp;—  2&nbsp;шт.",
      " соль&nbsp;—  1&nbsp;ч.л.",
      " черный молотый перец&nbsp;—  1/2&nbsp;ч.л.",
      " молотый душистый перец&nbsp;—  1/2&nbsp;ч.л.",
      " порошок карри&nbsp;—  3-4 ч.л.",
      " кайенский или&nbsp;красный острый перец&nbsp;—  щепотка",
      " коричневый сахар&nbsp;—  2&nbsp;ч.л.",
      " чеснок, мелко нарубленный&nbsp;—  2&nbsp;зубчика",
      " свежий мелко нарубленный имбирь&nbsp;—  2&nbsp;ч.л.",
      " средняя морковь, разрезанная пополам вдоль и&nbsp;нарезанная на&nbsp;тонкие ломтики&nbsp;—  2&nbsp;шт.",
      " нежирные сливки&nbsp;—  350&nbsp;мл",
      " 3отваренный коричневый или&nbsp;дикий рис&nbsp;—  300&nbsp;г",
    ],
    cooking: [
      {
        description:
          "Этот суп&nbsp;—  отличный вариант для&nbsp;того, чтобы разнообразить список повседневных блюд. Его&nbsp;вкус выбивается из&nbsp;ряда привычных нам&nbsp;с детства супов.",
      },
      {
        description:
          "Если суп&nbsp;покажется вам&nbsp;слишком сильным и&nbsp;острым&nbsp;—  вы&nbsp;можете добавить в&nbsp;тарелку нарезанное кубиками зеленое яблоко. Этот сочный компонент придаст блюду свежести и&nbsp;сгладит остроту.",
      },
      {
        description:
          "Картофель нарезаем на&nbsp;небольшие кусочки, кладем в&nbsp;подсоленную воду и&nbsp;отвариваем до&nbsp;готовности, около 15&nbsp;минут. Сливаем воду, добавляем подогретое молоко и&nbsp;делаем из&nbsp;картофеля пюре. Отставляем в&nbsp;сторону.",
      },
      {
        description:
          "В сковороде разогреваем 2&nbsp;ст.л. растительного масла. Кладем лук&nbsp;и сельдерей.  Жарим, помешивая, около 4&nbsp;минут, до&nbsp;мягкости и&nbsp;золотистого цвета.",
      },
      {
        description:
          "Добавляем соль, карри, черный, кайенский и&nbsp;душистый перец, сахар, имбирь и&nbsp;чеснок. Жарим около 2&nbsp;минут, до&nbsp;проявления сильного аромата специй.",
      },
      {
        description:
          "Вливаем в&nbsp;сковороду 100&nbsp;мл бульона и&nbsp;размешиваем, чтобы растворить все&nbsp;коричневые комочки, образовавшиеся при&nbsp;жарке.",
      },
      {
        description:
          "Переливаем содержимое сковороды в&nbsp;кастрюлю, туда же&nbsp;добавляем картофельное пюре, оставшийся бульон, мясо индейки и&nbsp;морковь.",
      },
      {
        description:
          "Доводим суп&nbsp;до кипения и&nbsp;варим до&nbsp;мягкости моркови, около 10&nbsp;минут. Добавляем сливки и&nbsp;прогреваем в&nbsp;течение пары минут.",
      },
      {
        description: "При подаче в каждую тарелку кладем рис.",
      },
      { description: "Сверху наливаем суп." },
    ],
    type: soupsType,
  },
  {
    title: "Суп с фрикадельками и кус-кусом",
    image: `${process.env.PUBLIC_URL}/images/soups/soup_with_meatballs_and_couscous.jpg`,
    ingridients: [
      "картофель&nbsp;—  2&nbsp;шт.",
      "сельдерей (черешки)&nbsp;—  2&nbsp;шт.",
      "фасоль стручковая&nbsp;—  100&nbsp;г",
      "лук&nbsp;—  1&nbsp;шт.",
      "морковь&nbsp;—  1&nbsp;шт.",
      "помидор&nbsp;—  1&nbsp;шт.",
      "кус-кус&nbsp;—  2&nbsp;ст. л.",
      "куркума&nbsp;—  1/2&nbsp;ч. л.",
      "соль",
      "вода (или овощной бульон)&nbsp;—  2&nbsp;л",
      "фарш мясной&nbsp;—  300&nbsp;г",
      "яйца куриные&nbsp;—  1&nbsp;шт.",
      "манка&nbsp;—  2&nbsp;ст. л.",
      "перец",
    ],
    cooking: [
      {
        description:
          "Первым делом приготовим фарш для&nbsp;фрикаделек. Мясо пропустить через мясорубку, добавить яйцо, соль, перец, манку. Все&nbsp;тщательно перемешать и&nbsp;отставить в&nbsp;сторону.",
      },
      {
        description:
          "Картофель нарезать соломкой, лук&nbsp;—  кубиками, морковь&nbsp;—  соломкой, черешки сельдерея&nbsp;—  небольшими кусочками.",
      },
      {
        description:
          "У стручковой фасоли отрезать кончики и&nbsp;порезать кусочками 1,5-2 см.",
      },
      {
        description: "Помидор ошпарить, снять кожицу и&nbsp;нарезать кубиками.",
      },
      { description: "В кипящую воду бросить картофель." },
      {
        description:
          "И тут&nbsp;же влить в&nbsp;сковороду небольшое количество растительного масла. Пассеровать в&nbsp;нем лук&nbsp;несколько минут, бросить туда морковь. Подержать на&nbsp;огне и&nbsp;добавить черешки сельдерея. Подождать еще&nbsp;3&nbsp;минуты и&nbsp;отправить зажарку в&nbsp;кастрюлю.",
      },
      {
        description:
          "К этому времени картофель уже&nbsp;наполовину готов, и&nbsp;можно суп&nbsp;посолить по&nbsp;вкусу. Добавить в&nbsp;суп фрикадельки.",
      },
      {
        description:
          "В сковородку снова налить растительное масло. Разогреть. Положить помидор, тушить 3-4 минуты и&nbsp;добавить стручковую фасоль. Тушить еще&nbsp;3&nbsp;минуты.",
      },
      {
        description:
          "Отправить фасоль в&nbsp;суп. Добавить куркуму, кус-кус и&nbsp;варить до&nbsp;готовности фрикаделек.",
      },
    ],
    type: soupsType,
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
    title: "Огурцы по-корейски с кунжутом",
    image: `${process.env.PUBLIC_URL}/images/vegetable_salads/korean_cucumbers1.jpg`,
    ingridients: [
      "—  огурцы&nbsp;—  1&nbsp;кг ",
      "—  соль&nbsp;—  1&nbsp;ч. л&nbsp;",
      "—  соевый соус&nbsp;—  2&nbsp;ст. л&nbsp;",
      "—  уксус&nbsp;—  2&nbsp;ст. л&nbsp;",
      "—  растительное масло&nbsp;—  5&nbsp;ст. л. ",
      "—  жгучий красный перец&nbsp;—  ¼&nbsp;ч. л&nbsp;",
      "—  чеснок&nbsp;—  4&nbsp;зубчика ",
      "—  кунжут&nbsp;—  1&nbsp;ст. л&nbsp;",
    ],
    cooking: [
      {
        description: "1. Вымойте огурцы и&nbsp;обрежьте кончики.",
        image: `${process.env.PUBLIC_URL}/images/other_images/cut_cucumbers_in_half.jpg`,
      },
      {
        description:
          "&nbsp;Каждый огурец разрежьте на&nbsp;4&nbsp;части в&nbsp;длину, затем 2-3 раза поперёк, чтобы получились небольшие брусочки.",
        image: `${process.env.PUBLIC_URL}/images/other_images/chopped_cucumbers1.jpg`,
      },
      {
        description:
          "Слегка посолите и&nbsp;оставьте на&nbsp;25-30 мин., чтобы они&nbsp;пустили сок.",
        image: `${process.env.PUBLIC_URL}/images/other_images/salt_cucumbers.jpg`,
      },
      { description: "2. Затем слейте образовавшийся сок. " },
      {
        description:
          "3. Добавьте к&nbsp;огурцам перец, соевый соус и&nbsp;уксус. Хорошо перемешайте.",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_soy_sauce_to_cucumbers.jpg`,
      },
      {
        description:
          "4. Раскалите на&nbsp;сковороде растительное масло, снимите сковороду с&nbsp;плиты, быстро высыпьте кунжут. Как&nbsp;только кунжут станет коричневого цвета (это происходит очень быстро) влейте эту&nbsp;смесь в&nbsp;огурцы. Перемешайте.",
        image: `${process.env.PUBLIC_URL}/images/other_images/fry_sesame_seeds.jpg`,
      },
      {
        image: `${process.env.PUBLIC_URL}/images/other_images/add_sesame_seeds_in_oil_to_cucumbers.jpg`,
      },
      {
        description:
          "5. Добавьте измельченный чеснок и&nbsp;поставьте в&nbsp;холод на&nbsp;30&nbsp;минут. ",
        image: `${process.env.PUBLIC_URL}/images/other_images/add_garlic_to_cucumbers.jpg`,
      },
      {
        description:
          "Готовый салат можно хранить в&nbsp;холодильнике несколько дней. ",
      },
      { description: "Несколько примечаний: " },
      {
        description:
          "—  Вместо кунжута в&nbsp;салат можно влить несколько капель кунжутного масла. ",
      },
      {
        description:
          "—  Также в&nbsp;этот салат можно добавить репчатый лук&nbsp;(полукольцами) и&nbsp;сахар. ",
      },
      {
        description:
          "—  В&nbsp;качестве заправки можно использовать яннём. Это&nbsp;смесь из&nbsp;красного жгучего перца и&nbsp;измельчённого чеснока. Яннём часто используется в&nbsp;корейских салатах. ",
      },
    ],
    type: vegetableSaladsType,
  },
  {
    title: "Борщ с пельменями",
    image: `${process.env.PUBLIC_URL}/images/borsch/borsch_with_dumplings.jpg`,
    ingridients: [
      "    капуста белокочанная&nbsp;—  100&nbsp;г",
      "    свекла&nbsp;—  1&nbsp;шт.",
      "    картофель&nbsp;—  4-5 шт.",
      "    морковь&nbsp;—  1&nbsp;шт.",
      "    лук&nbsp;репчатый&nbsp;—  1-2 шт.",
      "    пельмени&nbsp;—  10-15 шт.",
      "    томатный соус или&nbsp;сок&nbsp;—  1&nbsp;стакан",
      "    растительное масло&nbsp;—  50&nbsp;мл",
      "    соль, специи&nbsp;—  по&nbsp;вкусу",
    ],
    cooking: [
      {
        description:
          "Для приготовления борща с&nbsp;пельменями нам&nbsp;необходимо очистить овощи. Так, очищаем картофель и&nbsp;нарезаем кубиком. Слишком мелко не&nbsp;режим, ибо&nbsp;в готовом борще мелкие кубики разварятся. Перекладываем картофель в&nbsp;кастрюлю, заливаем 2&nbsp;литрами воды и&nbsp;ставим на&nbsp;огонь.",
      },
      {
        description:
          "Морковь нарезать тонко руками или&nbsp;натереть на&nbsp;крупной терке. Выбор нарезки особой роли не&nbsp;играет, главное чтоб было удобно и&nbsp;приятно кушать.",
      },
      { description: "Нарезаем репчатый лук&nbsp;мелко. " },
      { description: "На растительном масле обжариваем лук." },
      {
        description:
          "Добавляем морковь и&nbsp;тушим все&nbsp;вместе под&nbsp;крышкой, помешивая.",
      },
      {
        description:
          "Добавляем свеклу и&nbsp;томат. Тушим все&nbsp;вместе помешивая до&nbsp;мягкости овощей.",
      },
      {
        description:
          "Наша зажарка для&nbsp;борща с&nbsp;пельменями готова. Пусть тушится пока будем варить остальные продукты.",
      },
      {
        description:
          "В кипящий картофельный отвар добавляем нашинкованную соломкой капусту.",
      },
      {
        description:
          "Приготовьте пельмени. Можно взять домашние (замороженные) или&nbsp;покупные.",
      },
      {
        description:
          "Когда капуста станет мягкой, добавьте в&nbsp;борщ зажарку. Варите 10&nbsp;минут. Теперь добавьте пельмени и&nbsp;варите еще&nbsp;6&nbsp;минут. Добавьте в&nbsp;борщ соль, сахар, перчик молотый. Можно измельчить чеснок и&nbsp;зелень. Перемешайте. Доведите до&nbsp;вкуса и&nbsp;выключайте.",
      },
    ],
    type: borschType,
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
];

export const newRecipesTitle = "Новые рецепты";
export const newRecipesType = "newRecipes";
