 var Word = function(english,german,sentence){
	 this.english = english;
	 this.german = german;
	 this.sentence = sentence;
 }
 
 
 var wordList = [
 //= new Word("","",""),


 als = new Word("than","als","Ich mag dich mehr als ihn"),
 aus = new Word("from","aus","Ich komme aus Frankreich"),
 Bäume = new Word("trees","Bäume (die)","Der Wald ist voller Bäume"),
 bauern = new Word("farmer","Bauern (der)",""),
 besuchen = new Word("to visit","besuchen","Ich besuche meine Eltern jeden Tag"),
 Bluse = new Word("blouse","Bluse (die)","meine Bluse ist schön"),
 dann = new Word("then","dann","und dann ging ich zu mir nach hause"),
 dort = new Word("there","dort","er ging dort hin"),
 durch = new Word("through","durch","Ich fahre durch Stuttgart"),
 eigentlich = new Word("actually","eigentlich","Ich bin eigentlich kein Franzose"),
 elf = new Word("eleven","elf","ich habe elf Freunde"),
// Feld = new Word("field","Feld","Ich baue Zwiebeln auf meinem Feld an"),
 Frage = new Word("question","Frage","Ich habe eine Frage"),
 gehenSie = new Word("go","gehen sie","gehen sie geradeaus"),
 gerne = new Word("gladly","gerne","Ich gehe gerne"),
 gernen = new Word("to like","gernen","Ich gehe gerne zur Arbeit"),
 Getränke = new Word("drinks/beverages","Getränke (die)","Ich kaufe Getränke für alle"),
 hexe = new Word("witch","hexe (die)","Die Hexe ist unheimlich"),
 hören = new Word("to listen","hören","Ich höre gerne Musik"),
 langsam = new Word("slowly","langsam","Ich jogge langsam"),
 lebenslauf = new Word("resume/CV","lebenslauf (der)","Ich habe einen neuen Lebenslauf geschrieben"),
 madchen = new Word("maiden/girl","Mädchen (das)","Das Mädchen ist im Turm"),
 nach = new Word("after","nach","Wir sehen uns nach dem Kino"),
 nachmittag = new Word("afternoon","nachmittag","Bis heute Nachmittag"),
 neblig = new Word("foggy","neblig","das Wetter ist neblig"),
 nehmen = new Word("to take (food, drugs)","nehmen","nehmen Sie Drogen"),
 nur = new Word("only","nur","Ich habe nur einen Freund"),
 schlecht = new Word("bad","schlecht","Ich bin schlecht in Französisch"),
 sollten = new Word("to be supposed to","sollten","Ich sollte nicht gehen"),
 Tiere = new Word("animals","Tiere (die)","die Tiere kommen hierher"),
 toll = new Word("great","toll","deine Wohnung ist toll"),
// über = new Word("over/above","über","Ich wohne über einem Kino"),
 unser = new Word("our","unser","das ist unser Feld"),
// voller = new Word("full of","voller","Du bist voller Scheiße"),
 vorname = new Word("first name","Vorname (der)","mein Vorname ist Emile"),
 weil = new Word("because","weil","Ich bin gekommen, weil ich dich mag"),
 wiederholen = new Word("to repeat","wiederholen","kannst du das wiederholen?"),
 wieOft = new Word("how often","wie oft","wie oft gehst du?"),
 Wiese = new Word("meadow","Wiese (die)","die wiese ist voller blumen"),
 woher = new Word("where from","woher","woher kommst du"),
 wohin = new Word("where to","wohin","wohin gehst du"),
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
