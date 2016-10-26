
var getURL = function(){

  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    // alert(222);
    tab = tabs[0];
    var url = tab.url;
    var name = Date.now() / 1000 | 0 // unix timestamp
    console.log("http://res.cloudinary.com/imgrab/image/upload/"+name+".jpg");
    makeRequest(url, name);
  });

}

var makeRequest = function(url, name){
  var host = "http://127.0.0.1:5000/";
  // construct an HTTP request
  var xhr = new XMLHttpRequest();
  xhr.open("POST", host, true);
  // Pretty sure JSON requres CORS so using strings instead
  // xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  // send the collected data as JSON
  // var image = {name:"chrome_test1", url:"http://i.imgur.com/xKazcZB.jpg"};
  // xhr.send(JSON.stringify(image));
  var image = '{'
       +'"name" : "'+ name +'",'
       +'"url" : "'+ url +'"'
       +'}';
  xhr.send(image);

  xhr.onloadend = function () {
    // done
  };

}

var click = function(tab){

  getURL();

}

chrome.browserAction.onClicked.addListener(click);
