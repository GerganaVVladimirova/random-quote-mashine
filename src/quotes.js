const QUOTES_ARRAY=[
    {
        author: "Алберт Айнщайн",
        content: "Ако искате да живеете щастлив живот, обвържете го с цел, а не с хора или неща."
    },
    {
        author: "Ал Рокър",
        content: "Винаги бъди себе си. В края на деня това е всичко, което наистина имаш."
    },
    {
        author: "Букър Т. Вашингтон",
        content: "Успехът трябва да се измерва не толкова с позицията, която човек е достигнал в живота, колкото с препятствията, които е преодолял, докато се е опитвал да успее."

    },
    {
        author: "Стив Джобс",
        content: "Времето ви е ограничено, така че не го губете, като живеете живота на друг."

    },
    {
        author: "Сенека",
        content: "Не колко дълго, а колко добре си живял е основното."
    },
    {
        author: "Иван Тургенев",
        content: "Както и да го сучиш — нямаш ли голям и здрав талант, всеки път излиза недодяланост."
    },
    {
        author: "Хенри Форд",
        content: "Тайната на успешния живот е да разбереш какво ти е предназначено да правиш и след това да го осъществиш."
    },
    {
        author: "Елинор Рузвелт",
        content: "Ако животът беше предвидим, той щеше да престане да бъде живот и щеше да бъде без вкус."
    },
    {
        author: "различни източници",
        content: "Пей така, сякаш никой не те слуша, танцувай така, сякаш никой не гледа, обичай сякаш никога не си бил наранен и живей сякаш е раят е на земята."
    },
    {
        author: "Сьорен Киркегор",
        content: "Животът не е проблем, който трябва да бъде решен, а реалност, която трябва да се изживее."
    },
    {
        author: "Мая Анджелоу",
        content: "„Ще се сблъскате със супер много поражения в живота си, но никога не се оставяйте да бъдете победени."
    },
    {
        author:"Франк Синатра" ,
        content:"Големият урок в живота, скъпа, е никога да не се страхуваш от никого и нищо." 
    },
    {
        author: "Габриел Гарсия Маркес",
        content: "Всички човешки същества имат три живота: публичен, личен и таен."
    },
    {
        author: "Сократ",
        content: "Неизследваният живот не си струва да се живее."
    },
    {
        author: "Аштън Къчър",
        content: "Не се задоволявайте с това, което животът ви предлага, а направете живота си по-добър, като изградите нещо."
    },
    {
        author: "Леброн Джеймс",
        content: "Обичам критиката. Това те прави силен."
    },
    {
        author: "Елтън Джон",
        content: "Живей за всяка секунда без колебание."
    },
    {
        author: "",
        content: ""
    },
]


// 16. „“ — 

// 17. „Животът е поредица от различни уроци, които задължително трябва да се изживеят, за да бъдат разбрани.” — Хелън Келър

// 18. „Животът е наистина прост, но ние настояват да го направят сложен.” —  Конфуций

// 19. „Възнамерявам да живея живота, а не просто да съществувам.“ – Джордж Такей

// 20. „Най-голямата слава в живота не се крие в това никога да не падаме, а да се изправяме всеки път, когато паднем.“ – Нелсън Мандела

// 21. „Животът е или смело приключение, или изобщо е едно нищо.“ – Хелън Келър

// 22. „Дръжте се здраво за мечтите си, защото ако мечтите ви ги няма, животът ще е птица със счупени крила, която не може да лети.“ – Лангстън Хюз

// 23. „Много от провалите в живота са хора, които не са осъзнали колко близо са били до успеха, когато са се отказали.“ – Томас А. Едисън

// 24. „Животът е поредица от уроци, които трябва да се изживеят, за да бъдат разбрани.“ – Ралф Уолдо Емерсън

// 25. „Внимавайте с мислите си; стават думи. Внимавайте с думите си; те се превръщат в действия. Наблюдавайте действията си; стават навици. Внимавайте за навиците си; те се превръщат в характер. Наблюдавайте характера си; това се превръща в твоята съдба.” —  Лао-Дзъ

// 26. „Животът е като монета. Можете да го похарчите както пожелаете, но го харчите само веднъж.” —  Лилиан Диксън

// 27. „Понякога най-голямото постижение в живота е да намериш себе си.“ – Луиза Фернанда Цицерон

// 28. „Животът е това, което се случва, когато си зает да правиш други планове.“ – Джон Ленън

// 29. „Обичай живота който живееш. Живей живота, който обичаш.“ – Боб Марли

// 30. „Животът би бил трагичен, ако не беше така смешен.“ — Стивън Хокинг

// 31. „Животът е такъв, какъвто си го правим, винаги е бил, винаги ще бъде такъв.” — Баба Моисей

// 32. „Най-важните два дни в живота ти са денят, в който си роден и денят, в който разбереш защо.“ – Марк Твен

// 33. „Твърде много от нас не живеят мечтите си, защото живеем със страховете си.“ – Лес Браун

// 34. „Който не е достатъчно смел да поема рискове, няма да постигне нищо в живота.“ – Мохамед Али

// 35. „Не желайте лесен живот, молете се за сила да издържите на трудностите в живота. – Брус Лий

// 36. „Има моменти в живота, когато вместо да се оплакваш, правиш нещо по отношение на оплакванията си.” – Рита Гълъб

// 37. „Живей, сякаш ще умреш утре. Учи така, че сякаш ще живееш вечно.” — Махатма Ганди

// 38. „Когато спреш да мечтаеш, преставаш да живееш.“ — Малкълм Форбс

// 39. „Ако прекарате целия си живот в очакване буря, никога няма да се насладите на прекрасното слънце.” — Морис Уест

// 40. „Целият живот е експеримент. Колкото повече експериментирате, толкова по-добре за вас.” – Ралф Уолдо Емерсън

// 41. „Това, което идва лесно, няма да продължи дълго, а това, което трае дълго, няма да е лесно.“ – Неизвестен

// 42. „Най-упоритият и неотложен въпрос в живота е: „Какво правиш за другите?“ – Мартин Лутър Кинг младши

// 43. „Не е важно какво имаме в живота, а кой имаме в живота си.“ – Маргарет Лорънс

// 44. „Малките стъпки в правилната посока могат да се окажат най-голямата стъпка в живота ви.“ – Неизвестен

// 45. „Животът е като каране на колело. За да запазите равновесие, трябва да продължите да се движите.“ – Алберт Айнщайн

// 46. „Животът не е да намериш себе си. Животът е да създаваш себе си.“ – Джордж Бърнард Шоу

// 47. „Животът е мечта за мъдрите, игра за глупаците, комедия за богатите, трагедия за бедните.“ – Шолом Алейхем

// 48. „Ако обичате живота, не губете времето си, защото времето е това, от което се състои животът ви.“ –  Брус Лий

// 49. „Разпространявайте любов навсякъде, където отидете. И нека никой да не идва при вас, без да си отиде по-щастлив.“ – Майка Тереза

// 50. „Ако искаш да видиш дъгата, трябва да търпиш дъжда.“ — Доли Партън

// 51. „Най-голямото удоволствие в живота е любовта.“ — Еврипид

// 52. „Водете се от сърцето, а не от главата.“ – принцеса Даяна

// 53. „Не му давайте и пет минути, ако няма да му дадете пет години.“ – Меган Маркъл

// 54. „Тези, които не вярват в магията, никога няма да я намерят.“ – Роалд Дал

// 55. „Нищо не може да заглуши светлината, която свети отвътре.“ – Мая Анджелоу

// 56. „Науката учи да мислиш, но любовта учи да се усмихва.“ – Сантош Калвар

// 57. „Винаги е по-добре, когато сме заедно.“ — Джак Джонсън

// 58. „Приятелството е източникът на най-големите удоволствия и без приятели дори най-приятните занимания стават досадни.” – Тома Аквински

// 59. „Не отивайте там, където може да води пътеката, отидете там, където няма път, и оставете следа.“ – Ралф Уолдо Емерсън

// 60. „Когато светът е толкова сложен, простият дар на приятелството е в нашите ръце.“ – Мария Шрайвър

// 61. „Приятелството е силно подценено лекарство.“ – Анна Дивър Смит

// 62. „Добри приятели, добри книги и спяща съвест: това е идеалният живот.“ — Марк Твен

// 63. „Ако аз не съм добър към себе си, как мога да очаквам някой друг да бъде добър към мен?“ – Мая Анджелоу

// 64. „За всички нас е много важно да разберем, че сме взаимосвързани и трябва да се държим за ръце, особено когато става трудно.“ – Мишел Йео

// 65. „Когато е очевидно, че целите не могат да бъдат постигнати, не коригирайте целите, а коригирайте стъпките на действие.“ —  Конфуций

// 66. „Тъй като няма нищо толкова добре, което да си струва да имате като приятели, никога не губете шанса да ги създадете.“ – Франческо Гуичардини

// 67. „Приятелят е емоционална връзка, точно както приятелството е човешко преживяване.“ – Саймън Синек

// 68. „Истинското приятелство, като истинската поезия, е изключително рядко – и ценно като перла.“ – Тахар Бен Джелун

// 69. „Украшението на една къща са приятелите, които я посещават.” – Ралф Уолдо Емерсън

// 70. „Приятелството е като парите, по-лесно е да се направи, отколкото да се запази.“ – Самюъл Бътлър

// 71. „Има приятели, има семейство и след това има приятели, които стават семейство.“ — Неизвестен

// 72. „Да ти кажа ли от какво човек става циничен и безчувствен? От това, че са го предавали и заменяли за други хора, а той е бил готов да даде, ако не всичко, то твърде много!“ – Ал Пачино

// 73. „Щастието е като пеперуда! Колкото повече го преследвате, толкова повече ще бяга, но ако насочите вниманието си към други неща, то ще дойде и ще кацне на рамото ви.” —  Хенри Дейвид Торо

// 74. „Щастието е усещането, че силата се увеличава и съпротивата се преодолява.” —  Фридрих Ницше

// 75. „Човек, който е щастлив, ще направи и другите хора щастливи.“ – Ане Франк

// 76. „Бъдещето принадлежи на хората, които вярват в мечтите си.“ –  Елинор Рузвелт

// 77. „Целта на живота ни е да бъдем щастливи.“ – Далай Лама

// 78. „Имаш мозък в главата си. Имате крака в обувките си. Можете да се насочите към всяка посока, която изберете.“ – д-р Сюс

// 79. „Щастието е пътешествие, а не дестинация.“ — Буда

// 80. ​​„Здравето е най-големият дар, удовлетворението е най-голямото богатство, верността е най-добрата връзка.“ — Буда

// 81. „Няма път към щастието; щастието е пътят.“ — Буда

// 82. „Нито едно лекарство не лекува това, което щастието не може.“ – Габриел Гарсия Маркес

// 83. „Разумът и щастието са невъзможна комбинация.“ – Марк Твен

// 84. „Щастието не е цел… то е страничен продукт от добре изживян живот.“ – Елинор Рузвелт

// 85. „Най-добрият начин да развеселите себе си е да се опитате да развеселите някой друг.“ – Марк Твен

// 86. „Тайната на щастието не се изразява в търсенето на повече блага, а в развиването на способността да се наслаждавате и на малкото.” – Сократ

// 87. „Вярвам, че всеки човек има определен брой удари на сърцето. Нямам намерение да пропилявам моите.” — Нийл Армстронг 

// 88. „Ако можеш да правиш това, което правиш най-добре и да си щастлив, ти си по-напред в живота от повечето хора.“ — Леонардо ди Каприо

// 89. „Най-добрият начин да предскажеш бъдещето на живота си е да го създадеш сам.“ — Ейбрахам Линкълн

// 90. „Ако чувствате, че нещо е това, което трябва да правите и имате страст за да го правите, тогава спрете да го мислите и просто го направете.“ – Уанда Сайкс

// 91. „Най-красивите неща на света не могат да се видят или дори докоснат. Те трябва да се усещат със сърцето.“ – Хелън Келър

// 92. „Най-доброто време за ново начало е точно сега.“ – Неизвестен

// 93. „Запомнете, че, трудните пътища често водят до красивите дестинации.“ – Неизвестен

// 94. „Не живейте в миналото, не мечтайте за бъдещето, концентрирайте ума върху настоящия момент.” – Буда

// 95. „Научих се да търся щастие, като ограничавам желанията си, вместо да се опитвам да ги удовлетворявам.” —  Джон Стюарт Мил

// 96. „хората чакат цяла седмица да стане петък, цяла година да дойде лятото и цял живот да дойде щастието“ – Умберто Еко


// 97. „Винаги помнете, че сте абсолютно уникални. Точно като всички останали.“ – Маргарет Мийд

// 98. „Не всичко, пред което се изправя, може да бъде променено, но нищо не може да се промени, докато не се изправи пред него.” – Джеймс Болдуин

// 99. „В живота ви има години, в които ще си задавате въпроси и години, в които ще намирате отговори.“ – Зора Нийл Хърстън

// 100. „Ако чакам някой друг да потвърди съществуването ми, това ще означава, че се лишавам от себе си.“ – Жанел Мухоли

// 101. „Ако не ви харесва пътя, по който вървите, започнете да асфалтирате друг.“ – Доли Партън

// 102. „Възможно е никога няма да разберете стойността на един момент, докато не се превърне в спомен.“ – д-р Сюс

// 103. „Животът е кратък. Усмихвай се, докато все още имаш зъби.“ — Неизвестен

// 104. „Нищо от това, което носите, не е по-важно от вашата красива усмивка.“ – Кони Стивънс

// 105. „Хората рядко забелязват старите дрехи, ако носиш широка усмивка.“ – Лии Майлдън

// 106. „Ако видите някой без усмивка, дайте му една от вашите.” — Неизвестен

// 107. „Ако се усмихваш, когато останеш сам, значи наистина го мислиш.“ – Анди Рууни

// 108. „Ако не използваш усмивката си, ти си като човек притежаващ милион в банката, но без чекова книжка.“ – Лес Гиблин

// 109. „Усмивката е най-добрият начин да се измъкнеш от неприятности, дори и да е фалшива.“ – Масаши Кишимото

// 110. „Усмивката е евтин начин да промените външния си вид.“ —

// 111. „Усмивката създава приятел“. – Бангамбики Хабиаримана

// 112. „Ще откриете, че животът все още си заслужава, ако просто се усмихнете.“ – Чарли Чаплин

// 113. „Усмихването не означава непременно, че си щастлив. Понякога това означава просто, че си достатъчно силен.” — Неизвестен


// 114. „Успехът обикновено отива при хора, които са твърде заети, за да го търсят.“ – Хенри Дейвид Торо

// 115. „Тайната на успеха е да правиш обикновените неща, по необичайно добър начин.“ – Джон Д. Рокфелер младши

// 116. „Откривам, че колкото повече работя, толкова повече късмет имам.“ – Томас Джеферсън

// 117. „Никога не съм мечтала за успеха, аз просто работих за него.“ – Есте Лаудер

// 118. „Няма тайни за успеха. Той е резултат от подготовка, упорита работа и учене от неуспеха.“ – Колин Пауъл

// 119. „Пътят към успеха и този към провала са почти едни и същи.“ – Колин Р. Дейвис

// 120. „Ако искате да постигнете величие, спрете да питате за разрешение.“ — Неизвестен

// 121. „Доверете се, защото сте готови да приемете риска, а не защото е безопасно или сигурно.” — Неизвестен

// 122. „Всички наши мечти могат да се сбъднат, ако имаме смелостта да ги преследваме.“ — Уолт Дисни

// 123. „Успехът е поредица от провал след провал без загуба на ентусиазъм.“ – Уинстън Чърчил

// 124. „Точно когато гъсеницата си помисли, че светът свършва, тя се превърна в пеперуда.“ — Поговорка

// 125. „Не съм се провалил. Току-що открих 10 000 начина, които няма да работят.” — Томас А. Едисън

// 126. „За да победи злото е необходимо само едно, добрите хора да не правят нищо!“ – Едмънд Бърк

// 127. „Единствения изход из това грозно положение, в което се намира народа, е революцията и то революция народна, незабавна, отчаяна!“ – Христо Ботев

// 128. „От тук започва родината, с гроб на незнаен юнак, над който смъртта е преминала, смъртта, но не и вражия крак!“ – Текст от химна на град Шумен

// 129. „Ако минаваш през ада, продължавай напред.” – Уинстън Чърчил

// 130. „Великите умове обсъждат идеи; обикновените умове обсъждат събития; малките умове обсъждат хората.“ — Елинор Рузвелт

// 131. „Ако познаваш врага и познаваш себе си, не бива да се боиш какъв ще е изхода дори и от 1000 битки. Ако познаваш себе си и не познаваш врага, за всяка победа ще получиш и една загуба. Ако не познаваш нито врага, нито себе си, ще губиш всяка битка.“ – Сун Дзъ, Автор на трактата „Изкуството на войната“

// 132. „Тези, които са достатъчно луди, за да мислят, че могат да променят света, са тези, които го правят.“ — Неизвестен

// 133. „Блажени са онези, които могат да дават, без да помнят, и да вземат, без да забравят.” — Неизвестен

// 134. „Пропуснал съм повече от 9000 удара в кариерата си. Загубих почти 300 игри. 26 пъти ми се е доверило да направя печеливш удар в играта и съм пропуснал. Провалих се отново и отново и отново в живота си и затова успявам.” – Майкъл Джордан

// 135. „Най-доброто време за засаждане на дърво беше преди 20 години. Второто най-добро време е сега.” – Китайска поговорка

// 136. „Трудно е да победиш човек, който никога не се предава.“ – Бейб Рут

// 137. „Приказките са повече от истина: не защото ни казват, че съществуват дракони, а защото ни казват, че драконите могат да бъдат победени.“ – Нийл Гейман

// 138. „Умните хора се учат от всичко и всеки, обикновените хора от своя опит, глупавите вече имат всички отговори. – Сократ

// 139. „Магията е да вярваш в себе си. Ако успеете да направите това, можете да накарате всичко да се случи.” – Йохан Волфганг фон Гьоте

// 140. „Никой не е виновен за бъдещата ви ситуация, освен вие самите. Ако искате да бъдете успешни, тогава станете „успешни.“― Джеймин Шах

// 141. „Неуспешните хора вземат решения въз основа на текущата си ситуация. Успешните хора вземат своите решения въз основа на това къде искат да бъдат.” – Бенджамин Харди

// 142. „Никога не се отказвайте от една мечта само заради времето, което ще отнеме, за да я осъществите. Времето така или иначе ще мине.” – Ърл Найтингейл

// 143. „Всеки път, когато откриете, че се съмнявате колко далеч можете да стигнете, просто си спомнете колко далеч сте стигнали. – Неизвестен

// 144. „В средата на всяка трудност се крие възможността.” – Алберт Айнщайн

// 145. „Дръжте лицето си винаги към слънцето – и сенките ще паднат зад вас.“ – Уолт Уитман

// 146. „Всеки шампион някога е бил претендент, който не се е предавал.“ – Габи Дъглас

// 147. „Мразех всяка минута тренировка, но си казвах: „Не се отказвай. Страдай сега и живей остатъка от живота си като шампион.” – Мохамед Али

// 148. „Не е нужно да виждате цялото стълбище, просто направете първата крачка.“ – Мартин Лутър Кинг младши

// 149. „Когато някой каже, че не можете да го направите, направете го два пъти и го снимайте.“ – Неизвестен

// 150. „След двадесет години ще бъдете по-разочаровани от нещата, които не сте направили, отколкото от тези, които сте направили. – Марк Твен

export default QUOTES_ARRAY;