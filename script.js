 var Word = function(english,german,sentence){
	 this.english = english;
	 this.german = german;
	 this.sentence = sentence;
 }
 
 
 var wordList = [

 herbst = new Word("autumn","Herbst (der)","Ich fahre im Herbst in den Urlaub"),
 zusammen = new Word("together","zusammen","wir gehen zusammen ins kino"),
 dritten = new Word("third","dritten","Ich bin der dritte Sohn"),
 zahlen = new Word("to pay","zahlen","Ich habe für das Frühstück bezahlt"),
 Wohnung = new Word("","Wohnung (die)",""),
 sache = new Word("things","Sache (die)","das sind meine Sachen"),
 warten = new Word("to wait","warten","eine Stunde warten"),
 hässlich = new Word("ugly","hässlich","er ist nicht hässlich"),
 welche = new Word("which","welche","an welcher schule lernst du"),
 zuFuß = new Word("by foot","zu Fuß","Ich gehe zu Fuß"),
 Freizeit = new Word("free time","Freizeit","Ich habe keine Freizeit"),
 ruhig = new Word("quiet","ruhig","Mein Bruder ist ruhig"),
 Kollege  = new Word("colleague","Kollege (der)","Ich habe lustige Kollegen"),
  einkaufen = new Word("to shop","einkaufen","Ich gehe einkaufen"),
  laut = new Word("loud","laut","Meine Brüder sind laut"),
  wenig = new Word("little","wenig","ich verstehe nur wenig"),
  Geschichte = new Word("history","Geschichte","Ich liebe alte Geschichte"),
  schneien = new Word("to snow","schneien","Hier schneit es jeden Tag"),
  Blumen = new Word("flowers","Blumen","Ich liebe diese Blumen"),
  Auto = new Word("car","Auto","das Auto ist voll"),
 // Woche = new Word("week","Woche","Ich bleibe diese Woche bei dir"),
  langweilig = new Word("boring","langweilig","er ist langweilig"),
//  machen = new Word("to make/to do","machen","Ich mache Abendessen"),
  nächste = new Word("next","nächste","ich fahre als nächstes nach england"),
  müde = new Word("tired","müde","ich bin so müde"),
  treffe = new Word("to meet","treffen","ich treffe meine Mutter heute"),
  Urlaub = new Word("vacation","Urlaub","Ich mache Urlaub in Italien"),
  
  
  vielleicht = new Word("maybe","vielleicht","vielleicht kann ich helfen"),
  schreiben = new Word("to write","schreiben","ich schreibe Bücher"),
  allein = new Word("alone","allein","ich bin ganz alleine"),
  sagen= new Word("to tell","sagen","Ich sagte ihm, er solle Französisch lernen"),
  Zimmer= new Word("room","Zimmer","das ist mein Zimmer"),
  Stunde= new Word("hour","Stunde",""),
  bewölkt= new Word("cloudy","bewölkt","heute ist es bewölkt"),
  mitte = new Word("middle","mitte (die)",""),
  saft= new Word("juice","saft (der)",""),

  
  

   anderes= new Word("different","anderes",""),
 auch = new Word("also","auch","ich mag ihn auch"),
 als = new Word("than","als","Ich mag dich mehr als ihn"),
 aus = new Word("from","aus","Ich komme aus Frankreich"),
  Balkon = new Word("balcony","Balkon (der)","Meine Wohnung hat einen Balkon"),
 Bäume = new Word("trees","Bäume (die)","Der Wald ist voller Bäume"),
 bauern = new Word("farmer","Bauern (der)",""),
  beamtin= new Word("civil servant","beamtin",""),
  bestellen = new Word("to order","bestellen","Ich habe drei Taxis bestellt"),
 besuchen = new Word("to visit","besuchen","Ich besuche meine Eltern jeden Tag"),
  bleiben = new Word("to stay","bleiben","Ich bleibe bei meiner Mutter"),
 Bluse = new Word("blouse","Bluse (die)","meine Bluse ist schön"),
//  Büch = new Word("book","Büch (das)","Ich liebe alte Bücher"),
  Brot= new Word("bread","Brot","ich esse Brot"),
  Büro = new Word("office","Büro","Mein Büro ist neben dem Bahnhof"),
  danach= new Word("thereafter","danach","danach habe ich aufgehört mit ihr zu reden"),
 dann = new Word("then","dann","und dann ging ich zu mir nach hause"),
 dort = new Word("there","dort","er ging dort hin"),
 durch = new Word("through","durch","Ich fahre durch Stuttgart"),
 eigentlich = new Word("actually","eigentlich","Ich bin eigentlich kein Franzose"),
 elf = new Word("eleven","elf","ich habe elf Freunde"),
   erste= new Word("first","erste (der)",""),
   erwachsene = new Word("adults","erwachsene (die)",""),
  erzählen= new Word("to relate/to tell/to narrate","erzählen","die Geschichte erzählen"),
//  Erzähler= new Word("narrator","Erzähler","der erzähler ist französisch"),
esgibt= new Word("there is","es gibt","es gibt ein Problem"),
  esse = new Word("to eat","essen","ich esse jeden Tag"),
  etwas = new Word("something","etwas","Ich habe etwas gefunden"),
// Feld = new Word("field","Feld","Ich baue Zwiebeln auf meinem Feld an"),
 Flughafen = new Word("airport","Flughafen","Ich wohne neben dem Flughafen"),
 Frage = new Word("question","Frage","Ich habe eine Frage"),
  Frühling= new Word("spring","Frühling",""),
  fürmich= new Word("for me","für mich","keine für mich danke"),
  gehen= new Word("to go","gehen","Ich gehe nach Hause"),
 gehenSie = new Word("go","gehen sie","gehen sie geradeaus"),
  gehören = new Word("","gehören","wir gehören zusammen"),
 gerne = new Word("gladly","gerne","Ich gehe gerne"),
 gernen = new Word("to like","gernen","Ich gehe gerne zur Arbeit"),
  geöffnet = new Word("Open (shop)","geöffnet","der Laden ist geöffnet"),
 Getränke = new Word("drinks/beverages","Getränke (die)","Ich kaufe Getränke für alle"),
 hexe = new Word("witch","hexe (die)","Die Hexe ist unheimlich"),
 hören = new Word("to listen","hören","Ich höre gerne Musik"),
 koffer = new Word("suitcase","koffer","Mein Koffer ist voll"),
  Küche = new Word("kitchen","Küche","Die Küche ist groß"),
 kuchen = new Word("cake","kuchen","der kuchen ist lecker"),
 langsam = new Word("slowly","langsam","Ich jogge langsam"),
 lebenslauf = new Word("resume/CV","lebenslauf (der)","Ich habe einen neuen Lebenslauf geschrieben"),
  machen= new Word("to do","machen",""),
 madchen = new Word("maiden/girl","Mädchen (das)","Das Mädchen ist im Turm"),
  Museum = new Word("museum","Museum (das)","Das Museum ist langweilig"),
 nach = new Word("after","nach","Wir sehen uns nach dem Kino"),
 nachmittag = new Word("afternoon","nachmittag","Bis heute Nachmittag"),
 nachname = new Word("last name","Nachname (der)","mein Nachname ist Buress"),
//  nachts = new Word("night","nachts","ich arbeite nachts"),
 neblig = new Word("foggy","neblig","das Wetter ist neblig"),
 nehmen = new Word("to take (food, drugs)","nehmen","nehmen Sie Drogen"),
   neue= new Word("new","neue","Dies ist ein neues Restaurant"),
 noch = new Word("still","noch","Ich liebe ihn immer noch"),
 nur = new Word("only","nur","Ich habe nur einen Freund"),
  Platz = new Word("space/place","Platz (der)","triff mich auf dem Platz"),
  Regenschirm = new Word("umbrella","Regenschirm","Ich habe meinen Regenschirm gefunden"),
 scharf = new Word("spicy","scharf","der Wurst ist scharf"),
 // schlafe = new Word("to sleep","schlafen","Ich schlafe viel, weil ich müde bin"),
 schlecht = new Word("bad","schlecht","Ich bin schlecht in Französisch"),
  Selber= new Word("by ---self","Selber",""),
  Speck = new Word("bacon","Speck (der)","der Speck ist verbrannt"),
 sollten = new Word("to be supposed to","sollten","Ich sollte nicht gehen"),
  süß = new Word("sweet","süß","Der Kaffee ist zu süß"),
Tiere = new Word("animals","Tiere (die)","die Tiere kommen hierher"),
 toll = new Word("great","toll","deine Wohnung ist toll"),
  traurig = new Word("sad","traurig","ich bin traurig"),
  Treppe= new Word("staircase","Treppe (die)",""),
  Tür= new Word("door","Tür (die)",""),
// über = new Word("over/above","über","Ich wohne über einem Kino"),
 unser = new Word("our","unser","das ist unser Feld"),
// voller = new Word("full of","voller","Du bist voller Scheiße"),
// voll = new Word("full","voll","mein Magen ist voll"),
 vorname = new Word("first name","Vorname (der)","mein Vorname ist Emile"),
  Wald = new Word("forest","Wald","Ich liebe es, im Wald zu joggen"),
  warum= new Word("why","warum",""),
  was = new Word("what","was","Was machen Sie"),
 weil = new Word("because","weil","Ich bin gekommen, weil ich dich mag"),
  weitweg= new Word("far away","weit weg",""),
 wiederholen = new Word("to repeat","wiederholen","kannst du das wiederholen?"),
 wieOft = new Word("how often","wie oft","wie oft gehst du?"),
Wiese = new Word("meadow","Wiese (die)","die wiese ist voller blumen"),
  wieviel= new Word("how much","wie viel",""),
 wildTier = new Word("wild animals","wildtier (das)","Ich sehe ein wildtier"),
 woher = new Word("where from","woher","woher kommst du"),
 wohin = new Word("where to","wohin","wohin gehst du"),
 zug = new Word("train","zug (der)",""),
  Zähne = new Word("teeth","Zähne","Die Briten haben schlechte Zähne"),
  zoo= new Word("zoo","zoo",""),
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
