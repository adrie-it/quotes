function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function genQuote() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);
}

//quote array
var quotes = ["Blank", "\"I'd like to consider Ferrari as a scaled down version of God. <br> - Jeremy Clarkson", "\"Speed has never killed anyone. Suddenly becoming stationary, that's what gets you <br> - Jeremy Clarkson, "\"It's What non-car people don't get. They see all cars as just ton-and-a-half, two-tons of wires, glass, metal and rubber. That's all they see. People like you or I know, we have an unshakable belief that cars are living entities. You can develop a relationship with a car. And that's justwhat non-car people don't get. <br> - Jeremy Clarkson", "\" There’s sharks and minnows in this world. If you don’t know which you are, you ain’t a shark. <br> - Rip Wheeler, "\" The only painless way to learn this lesson is to watch it. <br> - Rip Wheeler];
//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}



