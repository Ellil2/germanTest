 var Word = function(english,german,sentence){
	 this.english = english;
	 this.german = german;
	 this.sentence = sentence;
 }
 /*
   = new Word("","",""),
   = new Word("","",""),
   = new Word("","",""),
   = new Word("","",""),
   
   
//   = new Word("","",""),
//   = new Word("","",""),
//   = new Word("","",""),
//   = new Word("","",""),
 */
 
 var wordList = [

  besser = new Word("better","besser","Französisches Essen ist besser als englisches Essen"),
  Fahrrad = new Word("bicycle","Fahrrad","Fahren Sie lieber Fahrrad oder Motorrad?"),
  Fahren = new Word("to ride","Fahrad","Fahren Sie lieber Fahrrad oder Motorrad?"),
  Motorrad = new Word("motorcycle","Motorrad","Fahren Sie lieber Fahrrad oder Motorrad?"),
  Mitternacht = new Word("midnight","Mitternacht","Sei zu Hause um Mitternacht"),
  ganzenTag = new Word("all day","ganzen Tag","er isst den ganzen tag"),
  weniger = new Word("fewer","weniger","es gibt weniger kinder in deutschland"),
  Mond = new Word("moon","Mond","der Mond scheint heute nacht"),
  scheint = new Word("to shine","scheinen","der Mond scheint heute nacht"),
  hell = new Word("bright/ly","hell","der Mond scheint hell"),
  fälltaus = new Word("is cancelled","fällt aus","der Zug fällt aus"),
  stornieren = new Word("to cancel","stornieren","Ich habe mein Ticket storniert"),
  Kreditkarte = new Word("credit card","Kreditkarte (die)","Die Kreditkarte ist cool"),
  Fahrkarte = new Word("ticket","Fahrkarte (die)",""),
  Sitz = new Word("seat","Sitz",""),
  frei = new Word("free","frei",""),
//  Wurst = new Word("sausage","Wurst (die)",""),
//  Schnitzel = new Word("schnitzel","Schnitzel (das)",""),
//  Rechnung = new Word("check (restaurant)","Rechnung",""),
//  gleich = new Word("very soon/right away","gleich",""),
//  leise = new Word("quiet/silent","leise",""),
//  Werkstatt = new Word("garage (repair)","Werkstatt (die)",""),
//  spatzieren = new Word("to stroll","spatzieren",""),
//  fertig = new Word("finished","fertig","Bist du mit deinem Essen fertig?"),
//  zeigen = new Word("to show","zeigen","lass es mich dir zeigen"),
//  grün = new Word("green","grün","warum habe ich grüne haare"),
//  haare = new Word("hair","Haare (die)","warum habe ich grüne haare"),
//  kopf = new Word("head","kopf (der)","es geht mir durch den kopf"),
//  weich = new Word("soft","weich","Ist dein bett zu weich"),
//  braun = new Word("brown","braun",""),
//  mögen = new Word("'pouvoir', to like","mögen","Wir möchten Geld haben"),
//  Gurke = new Word("cucumber","Gurke (die)",""),
//  Kinder = new Word("children","Kinder (die)",""),
//  Stadt = new Word("city","Stadt (die)",""),
//  wieistes = new Word("how is it","wie ist es","wie ist es in frankreich"),
//  rauchen = new Word("to smoke","rauchen",""),
//  Chef = new Word("boss","Chef (der)","Mein Chef ist alt"),
//  lesen = new Word("to read","lesen",""),
//  lange = new Word("long (time or length)","lange","ich habe ihn lange nicht gesehen"),
//  lang = new Word("long (length only)","lang","Dein Arm ist lang"),
//  daueren = new Word("to last","daueren","das dauert nicht lange"),
//  finden = new Word("to find","finden",""),
//  sammeln = new Word("to collect","sammeln","Ich sammle Briefmarken. Was sammelst du?"),
//  abholen = new Word("to pick up","abholen","Können Sie das Paket bei mir zu Hause abholen?"),
//  bald = new Word("soon","bald","ich werde dich bald sehen"),
//  endlich = new Word("finally","endlich","Ich werde endlich nach Frankreich gehen"),
//  lassuns = new Word("let's go","lass uns","Lass uns ins Kino gehen"),
//  Weißwein = new Word("white wine","Weißwein (der)",""),
//  zweiten = new Word("second","zweiten","das zweite Kind"),
//  Metzgerei = new Word("butcher shop","Metzgerei (die)",""),
//  Keks = new Word("cookies","Keks (der)","Ich bin zu viele Kekse"),
//  Konditorei = new Word("pastry shop","Konditorei",""),
//  Hilfe = new Word("help","Hilfe","ich brauche Hilfe"),
//  wichtig = new Word("important","wichtig","Dies ist ein wichtiger Tag"),
//  Tüte = new Word("bag","Tüte (die)","Brauchst du eine Tüte"),
//  Kasse = new Word("cash register","Kasse (die)",""),
//  besser = new Word("better","besser",""),
//  wenigerals = new Word("less than","weniger als","Ich brauche Essen weniger als du"),
//  freundlich = new Word("friendly","freundlich",""),
//  Licht = new Word("light","Licht (das)","das Licht ist heute hell"),
//   = new Word("","",""),
//   = new Word("","",""),
//   = new Word("","",""),




  

  allein = new Word("alone","allein","ich bin ganz alleine"),
   anderes= new Word("different","anderes",""),
 auch = new Word("also","auch","ich mag ihn auch"),
  Auto = new Word("car","Auto","das Auto ist voll"),
 als = new Word("than","als","Ich mag dich mehr als ihn"),
 aus = new Word("from","aus","Ich komme aus Frankreich"),
  Badeanzug = new Word("swimsuit","Badeanzug","Welchen Badeanzug möchten Sie kaufen?"),
  Balkon = new Word("balcony","Balkon (der)","Meine Wohnung hat einen Balkon"),
 Bäume = new Word("trees","Bäume (die)","Der Wald ist voller Bäume"),
 bauern = new Word("farmer","Bauern (der)",""),
  beamtin= new Word("civil servant","beamtin",""),
  bestellen = new Word("to order","bestellen","Ich habe drei Taxis bestellt"),
 besuchen = new Word("to visit","besuchen","Ich besuche meine Eltern jeden Tag"),
  bewölkt= new Word("cloudy","bewölkt","heute ist es bewölkt"),
  blau = new Word("blue","blau","Dieses Kleid ist blau"),
bleiben = new Word("to stay","bleiben","Ich bleibe bei meiner Mutter"),
  Blumen = new Word("flowers","Blumen","Ich liebe diese Blumen"),
 Bluse = new Word("blouse","Bluse (die)","meine Bluse ist schön"),
 Büch = new Word("book","Büch (das)","Ich liebe alte Bücher"),
 brauchen  = new Word("to need","brauchen","ich brauche es"),
  Brot= new Word("bread","Brot","ich esse Brot"),
  Büro = new Word("office","Büro","Mein Büro ist neben dem Bahnhof"),
  danach= new Word("thereafter","danach","danach habe ich aufgehört mit ihr zu reden"),
 dann = new Word("then","dann","und dann ging ich zu mir nach hause"),
  Dorf = new Word("village","Dorf","Meine Oma lebt in diesem Dorf"),
 dort = new Word("there","dort","er ging dort hin"),
 dritten = new Word("third","dritten","Ich bin der dritte Sohn"),
 durch = new Word("through","durch","Ich fahre durch Stuttgart"),
 eigentlich = new Word("actually","eigentlich","Ich bin eigentlich kein Franzose"),
   einkaufen = new Word("to shop","einkaufen","Ich gehe einkaufen"),
  Elefant = new Word("","Elefant (der)","Elefanten sind schwer"),
elf = new Word("eleven","elf","ich habe elf Freunde"),
   erste= new Word("first","erste (der)",""),
   erwachsene = new Word("adults","erwachsene (die)",""),
  erzählen= new Word("to relate/to tell/to narrate","erzählen","die Geschichte erzählen"),
 Erzähler= new Word("narrator","Erzähler","der erzähler ist französisch"),
esgibt= new Word("there is","es gibt","es gibt ein Problem"),
  esse = new Word("to eat","essen","ich esse jeden Tag"),
  etwas = new Word("something","etwas","Ich habe etwas gefunden"),
  fast = new Word("nearly/almost","fast","er hat mich fast geschlagen"),
 Feld = new Word("field","Feld","Ich baue Zwiebeln auf meinem Feld an"),
  Fleisch = new Word("meat","Fleisch (das)","Ich esse kein Fleisch"),
 Flughafen = new Word("airport","Flughafen","Ich wohne neben dem Flughafen"),
 Frage = new Word("question","Frage","Ich habe eine Frage"),
 Freizeit = new Word("free time","Freizeit","Ich habe keine Freizeit"),
  Früchte = new Word("Fruit (botanical)","Frucht","Dieser Wald hat viele Früchte"),
  Frühling= new Word("spring","Frühling",""),
  fürmich= new Word("for me","für mich","keine für mich danke"),
  gehen= new Word("to go","gehen","Ich gehe nach Hause"),
 gehenSie = new Word("go","gehen sie","gehen sie geradeaus"),
  gehören = new Word("to belong","gehören","wir gehören zusammen"),
 gerne = new Word("gladly","gerne","Ich gehe gerne"),
 gernen = new Word("to like","gernen","Ich gehe gerne zur Arbeit"),
  geöffnet = new Word("Open (shop)","geöffnet","der Laden ist geöffnet"),
   Geschichte = new Word("history","Geschichte","Ich liebe alte Geschichte"),
Getränke = new Word("drinks/beverages","Getränke (die)","Ich kaufe Getränke für alle"),
 hässlich = new Word("ugly","hässlich","er ist nicht hässlich"),
 herbst = new Word("autumn","Herbst (der)","Ich fahre im Herbst in den Urlaub"),
 hexe = new Word("witch","hexe (die)","Die Hexe ist unheimlich"),
 hören = new Word("to listen","hören","Ich höre gerne Musik"),
  Hut = new Word("hat","Hut","Ich packe diesen Hut"),
  Jacke = new Word("jacket","Jacke",""),
  Kleid  = new Word("dress","Kleid ","Dieses Kleid ist blau"),
  Kleidung = new Word("clothes","Kleidung",""),
 koffer = new Word("suitcase","koffer","Mein Koffer ist voll"),
 Kollege  = new Word("colleague","Kollege (der)","Ich habe lustige Kollegen"),
  Küche = new Word("kitchen","Küche","Die Küche ist groß"),
 kuchen = new Word("cake","kuchen","der kuchen ist lecker"),
 langsam = new Word("slowly","langsam","Ich jogge langsam"),
  langweilig = new Word("boring","langweilig","er ist langweilig"),
  laufen = new Word("to run","laufen","sie läuft jeden tag"),
  laut = new Word("loud","laut","Meine Brüder sind laut"),
 lebenslauf = new Word("resume/CV","lebenslauf (der)","Ich habe einen neuen Lebenslauf geschrieben"),
   lila = new Word("purple","lila",""),
machen = new Word("to make/to do","machen","Ich mache Abendessen"),
 madchen = new Word("maiden/girl","Mädchen (das)","Das Mädchen ist im Turm"),
  meer = new Word("sea","meer","das meer ist ruhig"),
  mitte = new Word("middle","mitte (die)",""),
  müde = new Word("tired","müde","ich bin so müde"),
  Museum = new Word("museum","Museum (das)","Das Museum ist langweilig"),
 nach = new Word("after","nach","Wir sehen uns nach dem Kino"),
 nachmittag = new Word("afternoon","nachmittag","Bis heute Nachmittag"),
 nachname = new Word("last name","Nachname (der)","mein Nachname ist Buress"),
  nächste = new Word("next","nächste","ich fahre als nächstes nach england"),
  Nachtisch = new Word("dessert","Nachtisch","Ich bin satt, ich esse keinen Nachtisch"),
  nachts = new Word("night","nachts","ich arbeite nachts"),
 neblig = new Word("foggy","neblig","das Wetter ist neblig"),
 nehmen = new Word("to take (food, drugs)","nehmen","nehmen Sie Drogen"),
   neue= new Word("new","neue","Dies ist ein neues Restaurant"),
 noch = new Word("still","noch","Ich liebe ihn immer noch"),
 nur = new Word("only","nur","Ich habe nur einen Freund"),
  Obst = new Word("Fruit (culinary term)","Obst","Ich mache einen Obstkuchen"),
  packe  = new Word("to pack","packen","Ich packe diesen Hut"),
  passen = new Word("to fit","passen","dieser Anzug passt gut"),
 Platz = new Word("space/place","Platz (der)","triff mich auf dem Platz"),
  rot = new Word("red","rot",""),
  Regenschirm = new Word("umbrella","Regenschirm","Ich habe meinen Regenschirm gefunden"),
 ruhig = new Word("quiet","ruhig","Mein Bruder ist ruhig"),
 sache = new Word("things","Sache (die)","das sind meine Sachen"),
  saft= new Word("juice","saft (der)",""),
  sagen= new Word("to tell","sagen","Ich sagte ihm, er solle Französisch lernen"),
  Sakko= new Word("suit jacket","Sakko",""),
 scharf = new Word("spicy","scharf","der Wurst ist scharf"),
  schade = new Word("too bad","schade","schade, dass du zu spät warst"),
  Schildkröte = new Word("turtle","Schildkröte (die)","Meine Schildkröte ist nicht sehr sportlich"),
  schlafe = new Word("to sleep","schlafen","Ich schlafe viel, weil ich müde bin"),
 schlecht = new Word("bad","schlecht","Ich bin schlecht in Französisch"),
  Schloss= new Word("castle","Schloss (das)","das ist ein altes Schloss"),
  schlüssel  = new Word("keys","schlüssel","vergiss deine schlüssel nicht"),
  schneien = new Word("to snow","schneien","Hier schneit es jeden Tag"),
   Schrank = new Word("closet","Schrank",""),
 schreiben = new Word("to write","schreiben","ich schreibe Bücher"),
  schwer = new Word("heavy","schwer","Elefanten sind schwer"),
  Selber= new Word("by ---self","Selber",""),
  Speck = new Word("bacon","Speck (der)","der Speck ist verbrannt"),
  sportlich = new Word("athletic","sportlich","Meine Schildkröte ist nicht sehr sportlich"),
 sollten = new Word("to be supposed to","sollten","Ich sollte nicht gehen"),
   Sonne = new Word("sun","Sonne (die)",""),
 Stunde= new Word("hour","Stunde",""),
  süß = new Word("sweet","süß","Der Kaffee ist zu süß"),
Tiere = new Word("animals","Tiere (die)","die Tiere kommen hierher"),
 toll = new Word("great","toll","deine Wohnung ist toll"),
  tragen = new Word("to wear","tragen","Ich trage dieses Kleid nur im Urlaub"),
  traurig = new Word("sad","traurig","ich bin traurig"),
  treffe = new Word("to meet","treffen","ich treffe meine Mutter heute"),
  Treppe= new Word("staircase","Treppe (die)",""),
  Tür= new Word("door","Tür (die)",""),
 über = new Word("over/above","über","Ich wohne über einem Kino"),
 unser = new Word("our","unser","das ist unser Feld"),
  Urlaub = new Word("vacation","Urlaub","Ich mache Urlaub in Italien"),
 voller = new Word("full of","voller","Du bist voller Scheiße"),
 voll = new Word("full","voll","mein Magen ist voll"),
  vergessen = new Word("to forget","vergessen","vergiss deine schlüssel nicht"),
  vielleicht = new Word("maybe","vielleicht","vielleicht kann ich helfen"),
vorname = new Word("first name","Vorname (der)","mein Vorname ist Emile"),
  Wald = new Word("forest","Wald","Ich liebe es, im Wald zu joggen"),
  warten = new Word("to wait","warten","eine Stunde warten"),
 warum= new Word("why","warum",""),
  was = new Word("what","was","Was machen Sie"),
  waschen = new Word("to wash","waschen","Musst du diese Socken noch waschen"),
 weil = new Word("because","weil","Ich bin gekommen, weil ich dich mag"),
  weitweg= new Word("far away","weit weg",""),
 welche = new Word("which","welche","an welcher schule lernst du"),
  wenig = new Word("little","wenig","ich verstehe nur wenig"),
 wiederholen = new Word("to repeat","wiederholen","kannst du das wiederholen?"),
 wieOft = new Word("how often","wie oft","wie oft gehst du?"),
Wiese = new Word("meadow","Wiese (die)","die wiese ist voller blumen"),
  wieviel= new Word("how much","wie viel",""),
 wildTier = new Word("wild animals","wildtier (das)","Ich sehe ein wildtier"),
 Woche = new Word("week","Woche","Ich bleibe diese Woche bei dir"),
 Wochenende = new Word("weekend","Wochenende (das)","Ich laufe jedes Wochenende"),
 woher = new Word("where from","woher","woher kommst du"),
 wohin = new Word("where to","wohin","wohin gehst du"),
 Wohnung = new Word("apartment","Wohnung (die)",""),
 zug = new Word("train","zug (der)",""),
 zahlen = new Word("to pay","zahlen","Ich habe für das Frühstück bezahlt"),
  Zähne = new Word("teeth","Zähne","Die Briten haben schlechte Zähne"),
  Zimmer= new Word("room","Zimmer","das ist mein Zimmer"),
  zoo= new Word("zoo","zoo",""),
 zuFuß = new Word("by foot","zu Fuß","Ich gehe zu Fuß"),
 zusammen = new Word("together","zusammen","wir gehen zusammen ins kino"),
 zweibeln = new Word("onions","zweibeln (die)","Ich esse viele Zwiebeln")
]



 
var testWords = []
var testCounter = 0
var score = 0
 
 function mainTest(){
	  var testCounter = 0
	  var score = 0
	 
	 for(i=0;testWords.length<20;i++){
		 chosenWord = wordList[Math.floor(Math.random()*wordList.length)]
		 if(testWords.indexOf(chosenWord) === -1){testWords.push(chosenWord)}
	 }
	 
	 function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(testWords)

testWords.push(end = new Word("END","END",""),)

coinFlip = Math.random()
if(coinFlip >= 0.5){wordDisplay = testWords[0].german}
else{wordDisplay = testWords[0].english}


document.getElementById("TestBox").innerHTML = wordDisplay
document.getElementById("Score").innerHTML = score
	 
//	 testedWord = testWords[Math.floor(Math.random()*wordList.length)]
 }
 
 function success(){
	 
if(testCounter<20){testCounter+=1; score+=1}


coinFlip = Math.random()
if(coinFlip >= 0.5){wordDisplay = testWords[testCounter].german}
else{wordDisplay = testWords[testCounter].english}


document.getElementById("TestBox").innerHTML = wordDisplay	 
document.getElementById("Score").innerHTML = score	 
document.getElementById("sentenceBox").innerHTML = ""

 }
 function failure(){

if(testCounter<20){testCounter+=1}

coinFlip = Math.random()
if(coinFlip >= 0.5){wordDisplay = testWords[testCounter].german}
else{wordDisplay = testWords[testCounter].english}


document.getElementById("TestBox").innerHTML = wordDisplay	 
	 document.getElementById("sentenceBox").innerHTML = ""
	 
 }
 function flip(){
	 if(coinFlip >= 0.5){wordDisplay = testWords[testCounter].english; coinFlip = 0}
	 else{wordDisplay = testWords[testCounter].german; coinFlip = 1}
document.getElementById("TestBox").innerHTML = wordDisplay

 }
 
 function Sentence(){
	 document.getElementById("sentenceBox").innerHTML = testWords[testCounter].sentence
 }
