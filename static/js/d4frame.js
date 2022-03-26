{  
  document.getElementById("d4tickimga").hidden=true;
  document.getElementById("d4tickimgb").hidden=true;
  document.getElementById("d4tickimgc").hidden=true;
  document.getElementById("d4task").hidden=true;
  document.getElementById("d4next").disabled=true;
  document.getElementById("d4playpause").hidden=false;
  document.getElementById('d4complete').hidden=true;
  var inc=1;
  document.getElementById("d4count").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d4playpau(){
   document.getElementById("d4playpause").hidden=true;
   document.getElementById('d4myVideo').play();
   document.getElementById("d4next").disabled=false;
   document.getElementById("d4first").style.color = "green";
  }
  function d4myFunction() {
   document.getElementById('d4myVideo').play();
     inc=inc+1;
     document.getElementById("d4count").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d4tickimga").hidden = false;
        document.getElementById("d4second").style.color = "green";
      }
     else if(inc == 01) {
        document.getElementById("d4tickimgb").hidden = false;
        document.getElementById("d4third").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d4task").hidden=false;
        document.getElementById("d4next").hidden=true;
        document.getElementById('d4myVideo').hidden=true;
        document.getElementById('d4myVideo').pause();
        document.getElementById("d4count").hidden=true;
        document.getElementById("d4content").hidden=true;
        document.getElementById("d4doubtimg").hidden=true;
        document.getElementById('d4complete').hidden=false;
        document.getElementById('d4complete').play();
        document.getElementById("d4first").hidden = true;
        document.getElementById("d4second").hidden = true;
        document.getElementById("d4third").hidden = true;
        document.getElementById("d4tickimga").hidden=true;
        document.getElementById("d4tickimgb").hidden=true;
        document.getElementById("d4tickimgc").hidden=true;
        document.getElementById("d4hintimg01").hidden=true;
        
     }     
  }
  $("#d4task").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d4tickimga2").hidden=true;
  document.getElementById("d4tickimgb2").hidden=true;
  document.getElementById("d4tickimgc2").hidden=true;
  document.getElementById("d4task02").hidden=true;
  document.getElementById("d4next02").disabled=true;
  document.getElementById("d4playpause02").hidden=false;
  document.getElementById('d4complete02').hidden=true;
  var inc=1;
  document.getElementById("d4count02").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d4playpau02(){
   document.getElementById("d4playpause02").hidden=true;
   document.getElementById('d4myVideo02').play();
   document.getElementById("d4next02").disabled=false;
   document.getElementById("d4first2").style.color = "green";
  }
  function d4myFunction02() {
   document.getElementById('d4myVideo02').play();
     inc=inc+1;
     document.getElementById("d4count02").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d4tickimga2").hidden = false;
        document.getElementById("d4second2").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d4tickimgb2").hidden = false;
        document.getElementById("d4third2").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d4task02").hidden=false;
        document.getElementById("d4next02").hidden=true;
        document.getElementById('d4myVideo02').hidden=true;
        document.getElementById('d4myVideo02').pause();
        document.getElementById("d4count02").hidden=true;
        document.getElementById("d4content02").hidden=true;
        document.getElementById("d4doubtimg2").hidden=true;
        document.getElementById('d4complete02').hidden=false;
        document.getElementById('d4complete02').play();
        document.getElementById("d4first2").hidden = true;
        document.getElementById("d4second2").hidden = true;
        document.getElementById("d4third2").hidden = true;
        document.getElementById("d4tickimga2").hidden=true;
        document.getElementById("d4tickimgb2").hidden=true;
        document.getElementById("d4tickimgc2").hidden=true;
        document.getElementById("d4hintimg02").hidden=true;
        
     }     
  }
  $("#d4task02").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d4tickimga3").hidden=true;
  document.getElementById("d4tickimgb3").hidden=true;
  document.getElementById("d4tickimgc3").hidden=true;
  document.getElementById("d4task03").hidden=true;
  document.getElementById("d4next03").disabled=true;
  document.getElementById("d4playpause03").hidden=false;
  document.getElementById('d4complete03').hidden=true;
  var inc=1;
  document.getElementById("d4count03").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d4playpau03(){
   document.getElementById("d4playpause03").hidden=true;
   document.getElementById('d4myVideo03').play();
   document.getElementById("d4next03").disabled=false;
   document.getElementById("d4first3").style.color = "green";
  }
  function d4myFunction03() {
   document.getElementById('d4myVideo03').play();
     inc=inc+1;
     document.getElementById("d4count03").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d4tickimga3").hidden = false;
        document.getElementById("d4second3").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d4tickimgb3").hidden = false;
        document.getElementById("d4third3").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d4task03").hidden=false;
        document.getElementById("d4next03").hidden=true;
        document.getElementById('d4myVideo03').hidden=true;
        document.getElementById('d4myVideo03').pause();
        document.getElementById("d4count03").hidden=true;
        document.getElementById("d4content03").hidden=true;
        document.getElementById("d4doubtimg3").hidden=true;
        document.getElementById('d4complete03').hidden=false;
        document.getElementById('d4complete03').play();
        document.getElementById("d4first3").hidden = true;
        document.getElementById("d4second3").hidden = true;
        document.getElementById("d4third3").hidden = true;
        document.getElementById("d4tickimga3").hidden=true;
        document.getElementById("d4tickimgb3").hidden=true;
        document.getElementById("d4tickimgc3").hidden=true;
        document.getElementById("d4hintimg03").hidden=true;
        
     }     
  }
  $("#d4task03").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d4tickimga4").hidden=true;
  document.getElementById("d4tickimgb4").hidden=true;
  document.getElementById("d4tickimgc4").hidden=true;
  document.getElementById("d4task04").hidden=true;
  document.getElementById("d4next04").disabled=true;
  document.getElementById("d4playpause04").hidden=false;
  document.getElementById('d4complete04').hidden=true;
  var inc=1;
  document.getElementById("d4count04").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d4playpau04(){
   document.getElementById("d4playpause04").hidden=true;
   document.getElementById('d4myVideo04').play();
   document.getElementById("d4next04").disabled=false;
   document.getElementById("d4first4").style.color = "green";
  }
  function d4myFunction04() {
   document.getElementById('d4myVideo04').play();
     inc=inc+1;
     document.getElementById("d4count04").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d4tickimga4").hidden = false;
        document.getElementById("d4second4").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d4tickimgb4").hidden = false;
        document.getElementById("d4third4").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d4task04").hidden=false;
        document.getElementById("d4next04").hidden=true;
        document.getElementById('d4myVideo04').hidden=true;
        document.getElementById('d4myVideo04').pause();
        document.getElementById("d4count04").hidden=true;
        document.getElementById("d4content04").hidden=true;
        document.getElementById("d4doubtimg4").hidden=true;
        document.getElementById('d4complete04').hidden=false;
        document.getElementById('d4complete04').play();
        document.getElementById("d4first4").hidden = true;
        document.getElementById("d4second4").hidden = true;
        document.getElementById("d4third4").hidden = true;
        document.getElementById("d4tickimga4").hidden=true;
        document.getElementById("d4tickimgb4").hidden=true;
        document.getElementById("d4tickimgc4").hidden=true;
        document.getElementById("d4hintimg04").hidden=true;
        
     }     
  }
  $("#d4task04").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d4tickimga5").hidden=true;
  document.getElementById("d4tickimgb5").hidden=true;
  document.getElementById("d4tickimgc5").hidden=true;
  document.getElementById("d4task05").hidden=true;
  document.getElementById("d4next05").disabled=true;
  document.getElementById("d4playpause05").hidden=false;
  document.getElementById('d4complete05').hidden=true;
  var inc=1;
  document.getElementById("d4count05").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d4playpau05(){
   document.getElementById("d4playpause05").hidden=true;
   document.getElementById('d4myVideo05').play();
   document.getElementById("d4next05").disabled=false;
   document.getElementById("d4first5").style.color = "green";
  }
  function d4myFunction05() {
   document.getElementById('d4myVideo05').play();
     inc=inc+1;
     document.getElementById("d4count05").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d4tickimga5").hidden = false;
        document.getElementById("d4second5").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d4tickimgb5").hidden = false;
        document.getElementById("d4third5").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d4task05").hidden=false;
        document.getElementById("d4next05").hidden=true;
        document.getElementById('d4myVideo05').hidden=true;
        document.getElementById('d4myVideo05').pause();
        document.getElementById("d4count05").hidden=true;
        document.getElementById("d4content05").hidden=true;
        document.getElementById("d4doubtimg5").hidden=true;
        document.getElementById('d4complete05').hidden=false;
        document.getElementById('d4complete05').play();
        document.getElementById("d4first5").hidden = true;
        document.getElementById("d4second5").hidden = true;
        document.getElementById("d4third5").hidden = true;
        document.getElementById("d4tickimga5").hidden=true;
        document.getElementById("d4tickimgb5").hidden=true;
        document.getElementById("d4tickimgc5").hidden=true;
        document.getElementById("d4hintimg05").hidden=true;
        
     }     
  }
  $("#d4task05").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d4tickimga6").hidden=true;
  document.getElementById("d4tickimgb6").hidden=true;
  document.getElementById("d4tickimgc6").hidden=true;
  document.getElementById("d4task06").hidden=true;
  document.getElementById("d4next06").disabled=true;
  document.getElementById("d4playpause06").hidden=false;
  document.getElementById('d4complete06').hidden=true;
  var inc=1;
  document.getElementById("d4count06").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d4playpau06(){
   document.getElementById("d4playpause06").hidden=true;
   document.getElementById('d4myVideo06').play();
   document.getElementById("d4next06").disabled=false;
   document.getElementById("d4first6").style.color = "green";
  }
  function d4myFunction06() {
   document.getElementById('d4myVideo06').play();
     inc=inc+1;
     document.getElementById("d4count06").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d4tickimga6").hidden = false;
        document.getElementById("d4second6").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d4tickimgb6").hidden = false;
        document.getElementById("d4third6").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d4task06").hidden=false;
        document.getElementById("d4next06").hidden=true;
        document.getElementById('d4myVideo06').hidden=true;
        document.getElementById('d4myVideo06').pause();
        document.getElementById("d4count06").hidden=true;
        document.getElementById("d4content06").hidden=true;
        document.getElementById("d4doubtimg6").hidden=true;
        document.getElementById('d4complete06').hidden=false;
        document.getElementById('d4complete06').play();
        document.getElementById("d4first6").hidden = true;
        document.getElementById("d4second6").hidden = true;
        document.getElementById("d4third6").hidden = true;
        document.getElementById("d4tickimga6").hidden=true;
        document.getElementById("d4tickimgb6").hidden=true;
        document.getElementById("d4tickimgc6").hidden=true;
        document.getElementById("d4hintimg06").hidden=true;
        
     }     
  }
  $("#d4task06").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d4tickimga7").hidden=true;
  document.getElementById("d4tickimgb7").hidden=true;
  document.getElementById("d4tickimgc7").hidden=true;
  document.getElementById("d4task07").hidden=true;
  document.getElementById("d4next07").disabled=true;
  document.getElementById("d4playpause07").hidden=false;
  document.getElementById('d4complete07').hidden=true;
  var inc=1;
  document.getElementById("d4count07").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d4playpau07(){
   document.getElementById("d4playpause07").hidden=true;
   document.getElementById('d4myVideo07').play();
   document.getElementById("d4next07").disabled=false;
   document.getElementById("d4first7").style.color = "green";
  }
  function d4myFunction07() {
   document.getElementById('d4myVideo07').play();
     inc=inc+1;
     document.getElementById("d4count07").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d4tickimga7").hidden = false;
        document.getElementById("d4second7").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d4tickimgb7").hidden = false;
        document.getElementById("d4third7").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d4task07").hidden=false;
        document.getElementById("d4next07").hidden=true;
        document.getElementById('d4myVideo07').hidden=true;
        document.getElementById('d4myVideo07').pause();
        document.getElementById("d4count07").hidden=true;
        document.getElementById("d4content07").hidden=true;
        document.getElementById("d4doubtimg7").hidden=true;
        document.getElementById('d4complete07').hidden=false;
        document.getElementById('d4complete07').play();
        document.getElementById("d4first7").hidden = true;
        document.getElementById("d4second7").hidden = true;
        document.getElementById("d4third7").hidden = true;
        document.getElementById("d4tickimga7").hidden=true;
        document.getElementById("d4tickimgb7").hidden=true;
        document.getElementById("d4tickimgc7").hidden=true;
        document.getElementById("d4hintimg07").hidden=true;
        
     }     
  }
  $("#d4task07").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d4tickimga8").hidden=true;
  document.getElementById("d4tickimgb8").hidden=true;
  document.getElementById("d4tickimgc8").hidden=true;
  document.getElementById("d4task08").hidden=true;
  document.getElementById("d4next08").disabled=true;
  document.getElementById("d4playpause08").hidden=false;
  document.getElementById('d4complete08').hidden=true;
  var inc=1;
  document.getElementById("d4count08").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d4playpau08(){
   document.getElementById("d4playpause08").hidden=true;
   document.getElementById('d4myVideo08').play();
   document.getElementById("d4next08").disabled=false;
   document.getElementById("d4first8").style.color = "green";
  }
  function d4myFunction08() {
   document.getElementById('d4myVideo08').play();
     inc=inc+1;
     document.getElementById("d4count08").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d4tickimga8").hidden = false;
        document.getElementById("d4second8").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d4tickimgb8").hidden = false;
        document.getElementById("d4third8").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d4task08").hidden=false;
        document.getElementById("d4next08").hidden=true;
        document.getElementById('d4myVideo08').hidden=true;
        document.getElementById('d4myVideo08').pause();
        document.getElementById("d4count08").hidden=true;
        document.getElementById("d4content08").hidden=true;
        document.getElementById("d4doubtimg8").hidden=true;
        document.getElementById('d4complete08').hidden=false;
        document.getElementById('d4complete08').play();
        document.getElementById("d4first8").hidden = true;
        document.getElementById("d4second8").hidden = true;
        document.getElementById("d4third8").hidden = true;
        document.getElementById("d4tickimga8").hidden=true;
        document.getElementById("d4tickimgb8").hidden=true;
        document.getElementById("d4tickimgc8").hidden=true;
        document.getElementById("d4hintimg08").hidden=true;
        
     }     
  }
  $("#d4task08").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d4tickimga9").hidden=true;
  document.getElementById("d4tickimgb9").hidden=true;
  document.getElementById("d4tickimgc9").hidden=true;
  document.getElementById("d4task09").hidden=true;
  document.getElementById("d4next09").disabled=true;
  document.getElementById("d4playpause09").hidden=false;
  document.getElementById('d4complete09').hidden=true;
  var inc=1;
  document.getElementById("d4count09").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d4playpau09(){
   document.getElementById("d4playpause09").hidden=true;
   document.getElementById('d4myVideo09').play();
   document.getElementById("d4next09").disabled=false;
   document.getElementById("d4first9").style.color = "green";
  }
  function d4myFunction09() {
   document.getElementById('d4myVideo09').play();
     inc=inc+1;
     document.getElementById("d4count09").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d4tickimga9").hidden = false;
        document.getElementById("d4second9").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d4tickimgb9").hidden = false;
        document.getElementById("d4third9").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d4task09").hidden=false;
        document.getElementById("d4next09").hidden=true;
        document.getElementById('d4myVideo09').hidden=true;
        document.getElementById('d4myVideo09').pause();
        document.getElementById("d4count09").hidden=true;
        document.getElementById("d4content09").hidden=true;
        document.getElementById("d4doubtimg9").hidden=true;
        document.getElementById('d4complete09').hidden=false;
        document.getElementById('d4complete09').play();
        document.getElementById("d4first9").hidden = true;
        document.getElementById("d4second9").hidden = true;
        document.getElementById("d4third9").hidden = true;
        document.getElementById("d4tickimga9").hidden=true;
        document.getElementById("d4tickimgb9").hidden=true;
        document.getElementById("d4tickimgc9").hidden=true;
        document.getElementById("d4hintimg09").hidden=true;
        
     }     
  }
  $("#d4task09").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d4tickimga10").hidden=true;
  document.getElementById("d4tickimgb10").hidden=true;
  document.getElementById("d4tickimgc10").hidden=true;
  document.getElementById("d4task10").hidden=true;
  document.getElementById("d4next10").disabled=true;
  document.getElementById("d4playpause10").hidden=false;
  document.getElementById('d4complete10').hidden=true;
  var inc=1;
  document.getElementById("d4count10").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d4playpau10(){
   document.getElementById("d4playpause10").hidden=true;
   document.getElementById('d4myVideo10').play();
   document.getElementById("d4next10").disabled=false;
   document.getElementById("d4first10").style.color = "green";
  }
  function d4myFunction10() {
   document.getElementById('d4myVideo10').play();
     inc=inc+1;
     document.getElementById("d4count10").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d4tickimga10").hidden = false;
        document.getElementById("d4second10").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d4tickimgb10").hidden = false;
        document.getElementById("d4third10").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d4task10").hidden=false;
        document.getElementById("d4next10").hidden=true;
        document.getElementById('d4myVideo10').hidden=true;
        document.getElementById('d4myVideo10').pause();
        document.getElementById("d4count10").hidden=true;
        document.getElementById("d4content10").hidden=true;
        document.getElementById("d4doubtimg10").hidden=true;
        document.getElementById('d4complete10').hidden=false;
        document.getElementById('d4complete10').play();
        document.getElementById("d4first10").hidden = true;
        document.getElementById("d4second10").hidden = true;
        document.getElementById("d4third10").hidden = true;
        document.getElementById("d4tickimga10").hidden=true;
        document.getElementById("d4tickimgb10").hidden=true;
        document.getElementById("d4tickimgc10").hidden=true;
        document.getElementById("d4hintimg10").hidden=true;
        
     }     
  }
  $("#d4task10").click(function () {
  document.location.reload();
  })
}