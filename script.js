function sync(){
    let selectInputValue = document.getElementById("searchBox").value;
    console.log(cmd);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.7/cgi-bin/webapp.py?var=" +cmd, true);
    xhr.send();
    xhr.onload = function (){
      let output = xhr.responseText;
      document.getElementById("container").innerHTML = output;
    }
  }   
  