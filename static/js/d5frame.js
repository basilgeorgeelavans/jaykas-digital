{  
  document.getElementById("d5tickimga").hidden=true;
  document.getElementById("d5tickimgb").hidden=true;
  document.getElementById("d5tickimgc").hidden=true;
  document.getElementById("d5task").hidden=true;
  document.getElementById("d5next").disabled=true;
  document.getElementById("d5playpause").hidden=false;
  document.getElementById('d5complete').hidden=true;
  var inc=1;
  document.getElementById("d5count").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d5playpau(){
   document.getElementById("d5playpause").hidden=true;
   document.getElementById('d5myVideo').play();
   document.getElementById("d5next").disabled=false;
   document.getElementById("d5first").style.color = "green";
  }
  function d5myFunction() {
   document.getElementById('d5myVideo').play();
     inc=inc+1;
     document.getElementById("d5count").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d5tickimga").hidden = false;
        document.getElementById("d5second").style.color = "green";
      }
     else if(inc == 01) {
        document.getElementById("d5tickimgb").hidden = false;
        document.getElementById("d5third").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d5task").hidden=false;
        document.getElementById("d5next").hidden=true;
        document.getElementById('d5myVideo').hidden=true;
        document.getElementById('d5myVideo').pause();
        document.getElementById("d5count").hidden=true;
        document.getElementById("d5content").hidden=true;
        document.getElementById("d5doubtimg").hidden=true;
        document.getElementById('d5complete').hidden=false;
        document.getElementById('d5complete').play();
        document.getElementById("d5first").hidden = true;
        document.getElementById("d5second").hidden = true;
        document.getElementById("d5third").hidden = true;
        document.getElementById("d5tickimga").hidden=true;
        document.getElementById("d5tickimgb").hidden=true;
        document.getElementById("d5tickimgc").hidden=true;
        document.getElementById("d5hintimg01").hidden=true;
        
     }     
  }
  $("#d5task").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d5tickimga2").hidden=true;
  document.getElementById("d5tickimgb2").hidden=true;
  document.getElementById("d5tickimgc2").hidden=true;
  document.getElementById("d5task02").hidden=true;
  document.getElementById("d5next02").disabled=true;
  document.getElementById("d5playpause02").hidden=false;
  document.getElementById('d5complete02').hidden=true;
  var inc=1;
  document.getElementById("d5count02").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d5playpau02(){
   document.getElementById("d5playpause02").hidden=true;
   document.getElementById('d5myVideo02').play();
   document.getElementById("d5next02").disabled=false;
   document.getElementById("d5first2").style.color = "green";
  }
  function d5myFunction02() {
   document.getElementById('d5myVideo02').play();
     inc=inc+1;
     document.getElementById("d5count02").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d5tickimga2").hidden = false;
        document.getElementById("d5second2").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d5tickimgb2").hidden = false;
        document.getElementById("d5third2").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d5task02").hidden=false;
        document.getElementById("d5next02").hidden=true;
        document.getElementById('d5myVideo02').hidden=true;
        document.getElementById('d5myVideo02').pause();
        document.getElementById("d5count02").hidden=true;
        document.getElementById("d5content02").hidden=true;
        document.getElementById("d5doubtimg2").hidden=true;
        document.getElementById('d5complete02').hidden=false;
        document.getElementById('d5complete02').play();
        document.getElementById("d5first2").hidden = true;
        document.getElementById("d5second2").hidden = true;
        document.getElementById("d5third2").hidden = true;
        document.getElementById("d5tickimga2").hidden=true;
        document.getElementById("d5tickimgb2").hidden=true;
        document.getElementById("d5tickimgc2").hidden=true;
        document.getElementById("d5hintimg02").hidden=true;
        
     }     
  }
  $("#d5task02").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d5tickimga3").hidden=true;
  document.getElementById("d5tickimgb3").hidden=true;
  document.getElementById("d5tickimgc3").hidden=true;
  document.getElementById("d5task03").hidden=true;
  document.getElementById("d5next03").disabled=true;
  document.getElementById("d5playpause03").hidden=false;
  document.getElementById('d5complete03').hidden=true;
  var inc=1;
  document.getElementById("d5count03").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d5playpau03(){
   document.getElementById("d5playpause03").hidden=true;
   document.getElementById('d5myVideo03').play();
   document.getElementById("d5next03").disabled=false;
   document.getElementById("d5first3").style.color = "green";
  }
  function d5myFunction03() {
   document.getElementById('d5myVideo03').play();
     inc=inc+1;
     document.getElementById("d5count03").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d5tickimga3").hidden = false;
        document.getElementById("d5second3").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d5tickimgb3").hidden = false;
        document.getElementById("d5third3").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d5task03").hidden=false;
        document.getElementById("d5next03").hidden=true;
        document.getElementById('d5myVideo03').hidden=true;
        document.getElementById('d5myVideo03').pause();
        document.getElementById("d5count03").hidden=true;
        document.getElementById("d5content03").hidden=true;
        document.getElementById("d5doubtimg3").hidden=true;
        document.getElementById('d5complete03').hidden=false;
        document.getElementById('d5complete03').play();
        document.getElementById("d5first3").hidden = true;
        document.getElementById("d5second3").hidden = true;
        document.getElementById("d5third3").hidden = true;
        document.getElementById("d5tickimga3").hidden=true;
        document.getElementById("d5tickimgb3").hidden=true;
        document.getElementById("d5tickimgc3").hidden=true;
        document.getElementById("d5hintimg03").hidden=true;
        
     }     
  }
  $("#d5task03").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d5tickimga4").hidden=true;
  document.getElementById("d5tickimgb4").hidden=true;
  document.getElementById("d5tickimgc4").hidden=true;
  document.getElementById("d5task04").hidden=true;
  document.getElementById("d5next04").disabled=true;
  document.getElementById("d5playpause04").hidden=false;
  document.getElementById('d5complete04').hidden=true;
  var inc=1;
  document.getElementById("d5count04").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d5playpau04(){
    document.getElementById("d5playpause04").hidden=true;
    document.getElementById('d5myVideo04').play();
    document.getElementById("d5next04").disabled=false;
    document.getElementById("d5first4").style.color = "green";
  }
  function d5myFunction04() {
   document.getElementById('d5myVideo04').play();
     inc=inc+1;
     document.getElementById("d5count04").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d5tickimga4").hidden = false;
        document.getElementById("d5second4").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d5tickimgb4").hidden = false;
        document.getElementById("d5third4").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d5task04").hidden=false;
        document.getElementById("d5next04").hidden=true;
        document.getElementById('d5myVideo04').hidden=true;
        document.getElementById('d5myVideo04').pause();
        document.getElementById("d5count04").hidden=true;
        document.getElementById("d5content04").hidden=true;
        document.getElementById("d5doubtimg4").hidden=true;
        document.getElementById('d5complete04').hidden=false;
        document.getElementById('d5complete04').play();
        document.getElementById("d5first4").hidden = true;
        document.getElementById("d5second4").hidden = true;
        document.getElementById("d5third4").hidden = true;
        document.getElementById("d5tickimga4").hidden=true;
        document.getElementById("d5tickimgb4").hidden=true;
        document.getElementById("d5tickimgc4").hidden=true;
        document.getElementById("d5hintimg04").hidden=true;
        
     }     
  }
  $("#d5task04").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d5tickimga5").hidden=true;
  document.getElementById("d5tickimgb5").hidden=true;
  document.getElementById("d5tickimgc5").hidden=true;
  document.getElementById("d5task05").hidden=true;
  document.getElementById("d5next05").disabled=true;
  document.getElementById("d5playpause05").hidden=false;
  document.getElementById('d5complete05').hidden=true;
  var inc=1;
  document.getElementById("d5count05").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d5playpau05(){
   document.getElementById("d5playpause05").hidden=true;
   document.getElementById('d5myVideo05').play();
   document.getElementById("d5next05").disabled=false;
   document.getElementById("d5first5").style.color = "green";
  }
  function d5myFunction05() {
   document.getElementById('d5myVideo05').play();
     inc=inc+1;
     document.getElementById("d5count05").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d5tickimga5").hidden = false;
        document.getElementById("d5second5").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d5tickimgb5").hidden = false;
        document.getElementById("d5third5").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d5task05").hidden=false;
        document.getElementById("d5next05").hidden=true;
        document.getElementById('d5myVideo05').hidden=true;
        document.getElementById('d5myVideo05').pause();
        document.getElementById("d5count05").hidden=true;
        document.getElementById("d5content05").hidden=true;
        document.getElementById("d5doubtimg5").hidden=true;
        document.getElementById('d5complete05').hidden=false;
        document.getElementById('d5complete05').play();
        document.getElementById("d5first5").hidden = true;
        document.getElementById("d5second5").hidden = true;
        document.getElementById("d5third5").hidden = true;
        document.getElementById("d5tickimga5").hidden=true;
        document.getElementById("d5tickimgb5").hidden=true;
        document.getElementById("d5tickimgc5").hidden=true;
        document.getElementById("d5hintimg05").hidden=true;
        
     }     
  }
  $("#d5task05").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d5tickimga6").hidden=true;
  document.getElementById("d5tickimgb6").hidden=true;
  document.getElementById("d5tickimgc6").hidden=true;
  document.getElementById("d5task06").hidden=true;
  document.getElementById("d5next06").disabled=true;
  document.getElementById("d5playpause06").hidden=false;
  document.getElementById('d5complete06').hidden=true;
  var inc=1;
  document.getElementById("d5count06").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d5playpau06(){
   document.getElementById("d5playpause06").hidden=true;
   document.getElementById('d5myVideo06').play();
   document.getElementById("d5next06").disabled=false;
   document.getElementById("d5first6").style.color = "green";
  }
  function d5myFunction06() {
   document.getElementById('d5myVideo06').play();
     inc=inc+1;
     document.getElementById("d5count06").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d5tickimga6").hidden = false;
        document.getElementById("d5second6").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d5tickimgb6").hidden = false;
        document.getElementById("d5third6").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d5task06").hidden=false;
        document.getElementById("d5next06").hidden=true;
        document.getElementById('d5myVideo06').hidden=true;
        document.getElementById('d5myVideo06').pause();
        document.getElementById("d5count06").hidden=true;
        document.getElementById("d5content06").hidden=true;
        document.getElementById("d5doubtimg6").hidden=true;
        document.getElementById('d5complete06').hidden=false;
        document.getElementById('d5complete06').play();
        document.getElementById("d5first6").hidden = true;
        document.getElementById("d5second6").hidden = true;
        document.getElementById("d5third6").hidden = true;
        document.getElementById("d5tickimga6").hidden=true;
        document.getElementById("d5tickimgb6").hidden=true;
        document.getElementById("d5tickimgc6").hidden=true;
        document.getElementById("d5hintimg06").hidden=true;
        
     }     
  }
  $("#d5task06").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d5tickimga7").hidden=true;
  document.getElementById("d5tickimgb7").hidden=true;
  document.getElementById("d5tickimgc7").hidden=true;
  document.getElementById("d5task07").hidden=true;
  document.getElementById("d5next07").disabled=true;
  document.getElementById("d5playpause07").hidden=false;
  document.getElementById('d5complete07').hidden=true;
  var inc=1;
  document.getElementById("d5count07").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d5playpau07(){
   document.getElementById("d5playpause07").hidden=true;
   document.getElementById('d5myVideo07').play();
   document.getElementById("d5next07").disabled=false;
   document.getElementById("d5first7").style.color = "green";
  }
  function d5myFunction07() {
   document.getElementById('d5myVideo07').play();
     inc=inc+1;
     document.getElementById("d5count07").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d5tickimga7").hidden = false;
        document.getElementById("d5second7").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d5tickimgb7").hidden = false;
        document.getElementById("d5third7").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d5task07").hidden=false;
        document.getElementById("d5next07").hidden=true;
        document.getElementById('d5myVideo07').hidden=true;
        document.getElementById('d5myVideo07').pause();
        document.getElementById("d5count07").hidden=true;
        document.getElementById("d5content07").hidden=true;
        document.getElementById("d5doubtimg7").hidden=true;
        document.getElementById('d5complete07').hidden=false;
        document.getElementById('d5complete07').play();
        document.getElementById("d5first7").hidden = true;
        document.getElementById("d5second7").hidden = true;
        document.getElementById("d5third7").hidden = true;
        document.getElementById("d5tickimga7").hidden=true;
        document.getElementById("d5tickimgb7").hidden=true;
        document.getElementById("d5tickimgc7").hidden=true;
        document.getElementById("d5hintimg07").hidden=true;
        
     }     
  }
  $("#d5task07").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d5tickimga8").hidden=true;
  document.getElementById("d5tickimgb8").hidden=true;
  document.getElementById("d5tickimgc8").hidden=true;
  document.getElementById("d5task08").hidden=true;
  document.getElementById("d5next08").disabled=true;
  document.getElementById("d5playpause08").hidden=false;
  document.getElementById('d5complete08').hidden=true;
  var inc=1;
  document.getElementById("d5count08").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d5playpau08(){
   document.getElementById("d5playpause08").hidden=true;
   document.getElementById('d5myVideo08').play();
   document.getElementById("d5next08").disabled=false;
   document.getElementById("d5first8").style.color = "green";
  }
  function d5myFunction08() {
   document.getElementById('d5myVideo08').play();
     inc=inc+1;
     document.getElementById("d5count08").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d5tickimga8").hidden = false;
        document.getElementById("d5second8").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d5tickimgb8").hidden = false;
        document.getElementById("d5third8").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d5task08").hidden=false;
        document.getElementById("d5next08").hidden=true;
        document.getElementById('d5myVideo08').hidden=true;
        document.getElementById('d5myVideo08').pause();
        document.getElementById("d5count08").hidden=true;
        document.getElementById("d5content08").hidden=true;
        document.getElementById("d5doubtimg8").hidden=true;
        document.getElementById('d5complete08').hidden=false;
        document.getElementById('d5complete08').play();
        document.getElementById("d5first8").hidden = true;
        document.getElementById("d5second8").hidden = true;
        document.getElementById("d5third8").hidden = true;
        document.getElementById("d5tickimga8").hidden=true;
        document.getElementById("d5tickimgb8").hidden=true;
        document.getElementById("d5tickimgc8").hidden=true;
        document.getElementById("d5hintimg08").hidden=true;
        
     }     
  }
  $("#d5task08").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d5tickimga9").hidden=true;
  document.getElementById("d5tickimgb9").hidden=true;
  document.getElementById("d5tickimgc9").hidden=true;
  document.getElementById("d5task09").hidden=true;
  document.getElementById("d5next09").disabled=true;
  document.getElementById("d5playpause09").hidden=false;
  document.getElementById('d5complete09').hidden=true;
  var inc=1;
  document.getElementById("d5count09").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d5playpau09(){
   document.getElementById("d5playpause09").hidden=true;
   document.getElementById('d5myVideo09').play();
   document.getElementById("d5next09").disabled=false;
   document.getElementById("d5first9").style.color = "green";
  }
  function d5myFunction09() {
   document.getElementById('d5myVideo09').play();
     inc=inc+1;
     document.getElementById("d5count09").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d5tickimga9").hidden = false;
        document.getElementById("d5second9").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d5tickimgb9").hidden = false;
        document.getElementById("d5third9").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d5task09").hidden=false;
        document.getElementById("d5next09").hidden=true;
        document.getElementById('d5myVideo09').hidden=true;
        document.getElementById('d5myVideo09').pause();
        document.getElementById("d5count09").hidden=true;
        document.getElementById("d5content09").hidden=true;
        document.getElementById("d5doubtimg9").hidden=true;
        document.getElementById('d5complete09').hidden=false;
        document.getElementById('d5complete09').play();
        document.getElementById("d5first9").hidden = true;
        document.getElementById("d5second9").hidden = true;
        document.getElementById("d5third9").hidden = true;
        document.getElementById("d5tickimga9").hidden=true;
        document.getElementById("d5tickimgb9").hidden=true;
        document.getElementById("d5tickimgc9").hidden=true;
        document.getElementById("d5hintimg09").hidden=true;
        
     }     
  }
  $("#d5task09").click(function () {
  document.location.reload();
  })
}

{  
  document.getElementById("d5tickimga10").hidden=true;
  document.getElementById("d5tickimgb10").hidden=true;
  document.getElementById("d5tickimgc10").hidden=true;
  document.getElementById("d5task10").hidden=true;
  document.getElementById("d5next10").disabled=true;
  document.getElementById("d5playpause10").hidden=false;
  document.getElementById('d5complete10').hidden=true;
  var inc=1;
  document.getElementById("d5count10").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d5playpau10(){
   document.getElementById("d5playpause10").hidden=true;
   document.getElementById('d5myVideo10').play();
   document.getElementById("d5next10").disabled=false;
   document.getElementById("d5first10").style.color = "green";
  }
  function d5myFunction10() {
   document.getElementById('d5myVideo10').play();
     inc=inc+1;
     document.getElementById("d5count10").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6) {
        document.getElementById("d5tickimga10").hidden = false;
        document.getElementById("d5second10").style.color = "green";
      }
     else if(inc == 11) {
        document.getElementById("d5tickimgb10").hidden = false;
        document.getElementById("d5third10").style.color = "green";
      }
     else if(inc == 16 ) {
        document.getElementById("d5task10").hidden=false;
        document.getElementById("d5next10").hidden=true;
        document.getElementById('d5myVideo10').hidden=true;
        document.getElementById('d5myVideo10').pause();
        document.getElementById("d5count10").hidden=true;
        document.getElementById("d5content10").hidden=true;
        document.getElementById("d5doubtimg10").hidden=true;
        document.getElementById('d5complete10').hidden=false;
        document.getElementById('d5complete10').play();
        document.getElementById("d5first10").hidden = true;
        document.getElementById("d5second10").hidden = true;
        document.getElementById("d5third10").hidden = true;
        document.getElementById("d5tickimga10").hidden=true;
        document.getElementById("d5tickimgb10").hidden=true;
        document.getElementById("d5tickimgc10").hidden=true;
        document.getElementById("d5hintimg10").hidden=true;
        
     }     
  }
  $("#d5task10").click(function () {
  document.location.reload();
  })
}