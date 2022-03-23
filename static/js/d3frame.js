{
    document.getElementById("d3task").hidden=true;
    document.getElementById("d3next").disabled=true;
    document.getElementById("d3playpause").hidden=false;
    document.getElementById('d3complete').hidden=true;
    var inc=1;
    document.getElementById("d3count").innerHTML ="         " + " Viewed :" + (inc) +" times";
    function d3playpau(){
     document.getElementById("d3playpause").hidden=true;
     document.getElementById('d3myVideo').play();
     document.getElementById("d3next").disabled=false;
    }
    function d3myFunction() {
     document.getElementById('d3myVideo').play();
       inc=inc+1;
       document.getElementById("d3count").innerHTML ="         " + " Viewed : " + (inc) + " times";
       if(inc == 6 ) {
        document.getElementById("d3task").hidden=false;
        document.getElementById("d3next").hidden=true;
        document.getElementById("d3hint").hidden=true;
        document.getElementById('d3myVideo').hidden=true;
        document.getElementById('d3myVideo').pause();
        document.getElementById("d3count").hidden=true;
        document.getElementById("d3content").hidden=true;
        document.getElementById("d3doubtimg").hidden=true;
        document.getElementById('d3complete').hidden=false;
        document.getElementById('d3complete').play();
       }      
    }
    $("#d3task").click(function () { 
    document.location.reload();
    })
  }
  {
   document.getElementById("d3task2").hidden=true;
   document.getElementById("d3next2").disabled=true;
   document.getElementById("d3playpause2").hidden=false;
   document.getElementById('d3complete2').hidden=true;
   var inc=1;
   document.getElementById("d3count2").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d3playpau2(){
    document.getElementById("d3playpause2").hidden=true;
    document.getElementById('d3myVideo2').play();
    document.getElementById("d3next2").disabled=false;
   }
   function d3myFunction2() {
    document.getElementById('d3myVideo2').play();
      inc=inc+1;
      document.getElementById("d3count2").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
         document.getElementById("d3task2").hidden=false;
         document.getElementById("d3next2").hidden=true;
         document.getElementById("d3hint2").hidden=true;
         document.getElementById('d3myVideo2').hidden=true;
         document.getElementById('d3myVideo2').pause();
         document.getElementById("d3count2").hidden=true;
         document.getElementById("d3content2").hidden=true;
         document.getElementById("d3doubtimg2").hidden=true;
         document.getElementById('d3complete2').hidden=false;
         document.getElementById('d3complete2').play();
      }      
   }
   $("#d3task2").click(function () {
   document.location.reload();
   })
 }

 {
   document.getElementById("d3task3").hidden=true;
   document.getElementById("d3next3").disabled=true;
   document.getElementById("d3playpause3").hidden=false;
   document.getElementById('d3complete3').hidden=true;
   var inc=1;
   document.getElementById("d3count3").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d3playpau3(){
    document.getElementById("d3playpause3").hidden=true;
    document.getElementById('d3myVideo3').play();
    document.getElementById("d3next3").disabled=false;
   }
   function d3myFunction3() {
    document.getElementById('d3myVideo3').play();
      inc=inc+1;
      document.getElementById("d3count3").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
         document.getElementById("d3task3").hidden=false;
         document.getElementById("d3next3").hidden=true;
         document.getElementById("d3hint3").hidden=true;
         document.getElementById('d3myVideo3').hidden=true;
         document.getElementById('d3myVideo3').pause();
         document.getElementById("d3count3").hidden=true;
         document.getElementById("d3content3").hidden=true;
         document.getElementById("d3doubtimg3").hidden=true;
         document.getElementById('d3complete3').hidden=false;
         document.getElementById('d3complete3').play();
      }      
   }
   $("#d3task3").click(function () {
   document.location.reload();
   })
 }

 {
   document.getElementById("d3task4").hidden=true;
   document.getElementById("d3next4").disabled=true;
   document.getElementById("d3playpause4").hidden=false;
   document.getElementById('d3complete4').hidden=true;
   var inc=1;
   document.getElementById("d3count4").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d3playpau4(){
    document.getElementById("d3playpause4").hidden=true;
    document.getElementById('d3myVideo4').play();
    document.getElementById("d3next4").disabled=false;
   }
   function d3myFunction4() {
    document.getElementById('d3myVideo4').play();
      inc=inc+1;
      document.getElementById("d3count4").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
         document.getElementById("d3task4").hidden=false;
         document.getElementById("d3next4").hidden=true;
         document.getElementById("d3hint4").hidden=true;
         document.getElementById('d3myVideo4').hidden=true;
         document.getElementById('d3myVideo4').pause();
         document.getElementById("d3count4").hidden=true;
         document.getElementById("d3content4").hidden=true;
         document.getElementById("d3doubtimg4").hidden=true;
         document.getElementById('d3complete4').hidden=false;
         document.getElementById('d3complete4').play();
      }      
   }
   $("#d3task4").click(function () {
   document.location.reload();
   })
 }

 {
   document.getElementById("d3task5").hidden=true;
   document.getElementById("d3next5").disabled=true;
   document.getElementById("d3playpause5").hidden=false;
   document.getElementById('d3complete5').hidden=true;
   var inc=1;
   document.getElementById("d3count5").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d3playpau5(){
    document.getElementById("d3playpause5").hidden=true;
    document.getElementById('d3myVideo5').play();
    document.getElementById("d3next5").disabled=false;
   }
   function d3myFunction5() {
    document.getElementById('d3myVideo5').play();
      inc=inc+1;
      document.getElementById("d3count5").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
         document.getElementById("d3task5").hidden=false;
         document.getElementById("d3next5").hidden=true;
         document.getElementById("d3hint5").hidden=true;
         document.getElementById('d3myVideo5').hidden=true;
         document.getElementById('d3myVideo5').pause();
         document.getElementById("d3count5").hidden=true;
         document.getElementById("d3content5").hidden=true;
         document.getElementById("d3doubtimg5").hidden=true;
         document.getElementById('d3complete5').hidden=false;
         document.getElementById('d3complete5').play();
      }      
   }
   $("#d3task5").click(function () {
   document.location.reload();
   })
 }

 {
   document.getElementById("d3task6").hidden=true;
   document.getElementById("d3next6").disabled=true;
   document.getElementById("d3playpause6").hidden=false;
   document.getElementById('d3complete6').hidden=true;
   var inc=1;
   document.getElementById("d3count6").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d3playpau6(){
    document.getElementById("d3playpause6").hidden=true;
    document.getElementById('d3myVideo6').play();
    document.getElementById("d3next6").disabled=false;
   }
   function d3myFunction6() {
    document.getElementById('d3myVideo6').play();
      inc=inc+1;
      document.getElementById("d3count6").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
         document.getElementById("d3task6").hidden=false;
         document.getElementById("d3next6").hidden=true;
         document.getElementById("d3hint6").hidden=true;
         document.getElementById('d3myVideo6').hidden=true;
         document.getElementById('d3myVideo6').pause();
         document.getElementById("d3count6").hidden=true;
         document.getElementById("d3content6").hidden=true;
         document.getElementById("d3doubtimg6").hidden=true;
         document.getElementById('d3complete6').hidden=false;
         document.getElementById('d3complete6').play();
      }      
   }
   $("#d3task6").click(function () {
   document.location.reload();
   })
 }

 {
   document.getElementById("d3task7").hidden=true;
   document.getElementById("d3next7").disabled=true;
   document.getElementById("d3playpause7").hidden=false;
   document.getElementById('d3complete7').hidden=true;
   var inc=1;
   document.getElementById("d3count7").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d3playpau7(){
    document.getElementById("d3playpause7").hidden=true;
    document.getElementById('d3myVideo7').play();
    document.getElementById("d3next7").disabled=false;
   }
   function d3myFunction7() {
    document.getElementById('d3myVideo7').play();
      inc=inc+1;
      document.getElementById("d3count7").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
         document.getElementById("d3task7").hidden=false;
         document.getElementById("d3next7").hidden=true;
         document.getElementById("d3hint7").hidden=true;
         document.getElementById('d3myVideo7').hidden=true;
         document.getElementById('d3myVideo7').pause();
         document.getElementById("d3count7").hidden=true;
         document.getElementById("d3content7").hidden=true;
         document.getElementById("d3doubtimg7").hidden=true;
         document.getElementById('d3complete7').hidden=false;
         document.getElementById('d3complete7').play();
      }      
   }
   $("#d3task7").click(function () {
   document.location.reload();
   })
 }

 {
   document.getElementById("d3task8").hidden=true;
   document.getElementById("d3next8").disabled=true;
   document.getElementById("d3playpause8").hidden=false;
   document.getElementById('d3complete8').hidden=true;
   var inc=1;
   document.getElementById("d3count8").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d3playpau8(){
    document.getElementById("d3playpause8").hidden=true;
    document.getElementById('d3myVideo8').play();
    document.getElementById("d3next8").disabled=false;
   }
   function d3myFunction8() {
    document.getElementById('d3myVideo8').play();
      inc=inc+1;
      document.getElementById("d3count8").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
         document.getElementById("d3task8").hidden=false;
         document.getElementById("d3next8").hidden=true;
         document.getElementById("d3hint8").hidden=true;
         document.getElementById('d3myVideo8').hidden=true;
         document.getElementById('d3myVideo8').pause();
         document.getElementById("d3count8").hidden=true;
         document.getElementById("d3content8").hidden=true;
         document.getElementById("d3doubtimg8").hidden=true;
         document.getElementById('d3complete8').hidden=false;
         document.getElementById('d3complete8').play();
      }      
   }
   $("#d3task8").click(function () {
   document.location.reload();
   })
 }

 {
   document.getElementById("d3task9").hidden=true;
   document.getElementById("d3next9").disabled=true;
   document.getElementById("d3playpause9").hidden=false;
   document.getElementById('d3complete9').hidden=true;
   var inc=1;
   document.getElementById("d3count9").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d3playpau9(){
    document.getElementById("d3playpause9").hidden=true;
    document.getElementById('d3myVideo9').play();
    document.getElementById("d3next9").disabled=false;
   }
   function d3myFunction9() {
    document.getElementById('d3myVideo9').play();
      inc=inc+1;
      document.getElementById("d3count9").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
         document.getElementById("d3task9").hidden=false;
         document.getElementById("d3next9").hidden=true;
         document.getElementById("d3hint9").hidden=true;
         document.getElementById('d3myVideo9').hidden=true;
         document.getElementById('d3myVideo9').pause();
         document.getElementById("d3count9").hidden=true;
         document.getElementById("d3content9").hidden=true;
         document.getElementById("d3doubtimg9").hidden=true;
         document.getElementById('d3complete9').hidden=false;
         document.getElementById('d3complete9').play();
      }      
   }
   $("#d3task9").click(function () {
   document.location.reload();
   })
 }

 {
   document.getElementById("d3task10").hidden=true;
   document.getElementById("d3next10").disabled=true;
   document.getElementById("d3playpause10").hidden=false;
   document.getElementById('d3complete10').hidden=true;
   var inc=1;
   document.getElementById("d3count10").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d3playpau10(){
    document.getElementById("d3playpause10").hidden=true;
    document.getElementById('d3myVideo10').play();
    document.getElementById("d3next10").disabled=false;
   }
   function d3myFunction10() {
    document.getElementById('d3myVideo10').play();
      inc=inc+1;
      document.getElementById("d3count10").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
         document.getElementById("d3task10").hidden=false;
         document.getElementById("d3next10").hidden=true;
         document.getElementById("d3hint10").hidden=true;
         document.getElementById('d3myVideo10').hidden=true;
         document.getElementById('d3myVideo10').pause();
         document.getElementById("d3count10").hidden=true;
         document.getElementById("d3content10").hidden=true;
         document.getElementById("d3doubtimg10").hidden=true;
         document.getElementById('d3complete10').hidden=false;
         document.getElementById('d3complete10').play();
      }      
   }
   $("#d3task10").click(function () {
   document.location.reload();
   })
 }