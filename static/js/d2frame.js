{
  document.getElementById("d2task").hidden=true;
  document.getElementById("d2next").disabled=true;
  document.getElementById("d2playpause").hidden=false;
  document.getElementById('d2complete').hidden=true;
  var inc=1;
  document.getElementById("d2count").innerHTML ="         " + " Viewed :" + (inc) +" times";
  function d2playpau(){
   document.getElementById("d2playpause").hidden=true;
   document.getElementById('d2myVideo').play();
   document.getElementById("d2next").disabled=false;
  }
  function d2myFunction() {
   document.getElementById('d2myVideo').play();
     inc=inc+1;
     document.getElementById("d2count").innerHTML ="         " + " Viewed : " + (inc) + " times";
     if(inc == 6 ) {
      document.getElementById("d2task").hidden=false;
      document.getElementById("d2next").hidden=true;
      document.getElementById("d2hint").hidden=true;
      document.getElementById('d2myVideo').hidden=true;
      document.getElementById('d2myVideo').pause();
      document.getElementById("d2count").hidden=true;
      document.getElementById("d2content").hidden=true;
      document.getElementById("d2doubtimg").hidden=true;
      document.getElementById('d2complete').hidden=false;
      document.getElementById('d2complete').play();
     }      
  }
  $("#d2task").click(function () {
  document.location.reload();
  })
}
{
   document.getElementById("d2task2").hidden=true;
   document.getElementById("d2next2").disabled=true;
   document.getElementById("d2playpause2").hidden=false;
   document.getElementById('d2complete2').hidden=true;
   var inc=1;
   document.getElementById("d2count2").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d2playpau2(){
    document.getElementById("d2playpause2").hidden=true;
    document.getElementById('d2myVideo2').play();
    document.getElementById("d2next2").disabled=false;
   }
   function d2myFunction2() {
    document.getElementById('d2myVideo2').play();
      inc=inc+1;
      document.getElementById("d2count2").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
         document.getElementById("d2task2").hidden=false;
         document.getElementById("d2next2").hidden=true;
         document.getElementById("d2hint2").hidden=true;
         document.getElementById('d2myVideo2').hidden=true;
         document.getElementById('d2myVideo2').pause();
         document.getElementById("d2count2").hidden=true;
         document.getElementById("d2content2").hidden=true;
         document.getElementById("d2doubtimg2").hidden=true;
         document.getElementById('d2complete2').hidden=false;
         document.getElementById('d2complete2').play();
      }      
   }
   $("#d2task2").click(function () {
   document.location.reload();
   })
 }
 {
   document.getElementById("d2task3").hidden=true;
   document.getElementById("d2next3").disabled=true;
   document.getElementById("d2playpause3").hidden=false;
   document.getElementById('d2complete3').hidden=true;
   var inc=1;
   document.getElementById("d2count3").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d2playpau3(){
    document.getElementById("d2playpause3").hidden=true;
    document.getElementById('d2myVideo3').play();
    document.getElementById("d2next3").disabled=false;
   }
   function d2myFunction3() {
    document.getElementById('d2myVideo3').play();
      inc=inc+1;
      document.getElementById("d2count3").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
       document.getElementById("d2task3").hidden=false;
       document.getElementById("d2next3").hidden=true;
       document.getElementById("d2hint3").hidden=true;
       document.getElementById('d2myVideo3').hidden=true;
       document.getElementById('d2myVideo3').pause();
       document.getElementById("d2count3").hidden=true;
       document.getElementById("d2content3").hidden=true;
       document.getElementById("d2doubtimg3").hidden=true;
       document.getElementById('d2complete3').hidden=false;
       document.getElementById('d2complete3').play();
      }      
   }
   $("#d2task3").click(function () {
   document.location.reload();
   })
 }
{
   document.getElementById("d2task4").hidden=true;
   document.getElementById("d2next4").disabled=true;
   document.getElementById("d2playpause4").hidden=false;
   document.getElementById('d2complete4').hidden=true;
   var inc=1;
   document.getElementById("d2count4").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d2playpau4(){
      document.getElementById("d2playpause4").hidden=true;
      document.getElementById('d2myVideo4').play();
      document.getElementById("d2next4").disabled=false;
     }
   function d2myFunction4() {
      document.getElementById('d2myVideo4').play();
      inc = inc+1;
      document.getElementById("d2count4").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
       document.getElementById("d2task4").hidden=false;
       document.getElementById("d2next4").hidden=true;
       document.getElementById("d2hint4").hidden=true;
       document.getElementById('d2myVideo4').hidden=true;
       document.getElementById('d2myVideo4').pause();
       document.getElementById("d2count4").hidden=true;
       document.getElementById("d2content4").hidden=true;
       document.getElementById("d2doubtimg4").hidden=true;
       document.getElementById('d2complete4').hidden=false;
       document.getElementById('d2complete4').play();
      }      
   }
   $("#d2task4").click(function () {
   document.location.reload();
   }) 
}
{
   document.getElementById("d2task5").hidden=true;
   document.getElementById("d2next5").disabled=true;
   document.getElementById("d2playpause5").hidden=false;
   document.getElementById('d2complete5').hidden=true;
   var inc=1;
   document.getElementById("d2count5").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d2playpau5(){
      document.getElementById("d2playpause5").hidden=true;
      document.getElementById('d2myVideo5').play();
      document.getElementById("d2next5").disabled=false;
     }
   function d2myFunction5() {
      document.getElementById('d2myVideo5').play();
      inc = inc+1;
      document.getElementById("d2count5").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
       document.getElementById("d2task5").hidden=false;
       document.getElementById("d2next5").hidden=true;
       document.getElementById("d2hint5").hidden=true;
       document.getElementById('d2myVideo5').hidden=true;
       document.getElementById('d2myVideo5').pause();
       document.getElementById("d2count5").hidden=true;
       document.getElementById("d2content5").hidden=true;
       document.getElementById("d2doubtimg5").hidden=true;
       document.getElementById('d2complete5').hidden=false;
       document.getElementById('d2complete5').play();
      }      
   }
   $("#d2task5").click(function () {
   document.location.reload();
   }) 
}
{
   document.getElementById("d2task6").hidden=true;
   document.getElementById("d2next6").disabled=true;
   document.getElementById("d2playpause6").hidden=false;
   document.getElementById('d2complete6').hidden=true;
   var inc=1;
   document.getElementById("d2count6").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d2playpau6(){
      document.getElementById("d2playpause6").hidden=true;
      document.getElementById('d2myVideo6').play();
      document.getElementById("d2next6").disabled=false;
     }
   function d2myFunction6() {
      document.getElementById('d2myVideo6').play();
      inc = inc+1;
      document.getElementById("d2count6").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
       document.getElementById("d2task6").hidden=false;
       document.getElementById("d2next6").hidden=true;
       document.getElementById("d2hint6").hidden=true;
       document.getElementById('d2myVideo6').hidden=true;
       document.getElementById('d2myVideo6').pause();
       document.getElementById("d2count6").hidden=true;
       document.getElementById("d2content6").hidden=true;
       document.getElementById("d2doubtimg6").hidden=true;
       document.getElementById('d2complete6').hidden=false;
       document.getElementById('d2complete6').play();
      }      
   }
   $("#d2task6").click(function () {
   document.location.reload();
   }) 
}
{
   document.getElementById("d2task7").hidden=true;
   document.getElementById("d2next7").disabled=true;
   document.getElementById("d2playpause7").hidden=false;
   document.getElementById('d2complete7').hidden=true;
   var inc=1;
   document.getElementById("d2count7").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d2playpau7(){
      document.getElementById("d2playpause7").hidden=true;
      document.getElementById('d2myVideo7').play();
      document.getElementById("d2next7").disabled=false;
     }
   function d2myFunction7() {
      document.getElementById('d2myVideo7').play();
      inc = inc+1;
      document.getElementById("d2count7").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
       document.getElementById("d2task7").hidden=false;
       document.getElementById("d2next7").hidden=true;
       document.getElementById("d2hint7").hidden=true;
       document.getElementById('d2myVideo7').hidden=true;
       document.getElementById('d2myVideo7').pause();
       document.getElementById("d2count7").hidden=true;
       document.getElementById("d2content7").hidden=true;
       document.getElementById("d2doubtimg7").hidden=true;
       document.getElementById('d2complete7').hidden=false;
       document.getElementById('d2complete7').play();
      }      
   }
   $("#d2task7").click(function () {
   document.location.reload();
   }) 
}
{
   document.getElementById("d2task8").hidden=true;
   document.getElementById("d2next8").disabled=true;
   document.getElementById("d2playpause8").hidden=false;
   document.getElementById('d2complete8').hidden=true;
   var inc=1;
   document.getElementById("d2count8").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d2playpau8(){
      document.getElementById("d2playpause8").hidden=true;
      document.getElementById('d2myVideo8').play();
      document.getElementById("d2next8").disabled=false;
     }
   function d2myFunction8() {
      document.getElementById('d2myVideo8').play();
      inc = inc+1;
      document.getElementById("d2count8").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
       document.getElementById("d2task8").hidden=false;
       document.getElementById("d2next8").hidden=true;
       document.getElementById("d2hint8").hidden=true;
       document.getElementById('d2myVideo8').hidden=true;
       document.getElementById('d2myVideo8').pause();
       document.getElementById("d2count8").hidden=true;
       document.getElementById("d2content8").hidden=true;
       document.getElementById("d2doubtimg8").hidden=true;
       document.getElementById('d2complete8').hidden=false;
       document.getElementById('d2complete8').play();
      }      
   }
   $("#d2task8").click(function () {
   document.location.reload();
   }) 
}
{
   document.getElementById("d2task9").hidden=true;
   document.getElementById("d2next9").disabled=true;
   document.getElementById("d2playpause9").hidden=false;
   document.getElementById('d2complete9').hidden=true;
   var inc=1;
   document.getElementById("d2count9").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d2playpau9(){
      document.getElementById("d2playpause9").hidden=true;
      document.getElementById('d2myVideo9').play();
      document.getElementById("d2next9").disabled=false;
     }
   function d2myFunction9() {
      document.getElementById('d2myVideo9').play();
      inc = inc+1;
      document.getElementById("d2count9").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
       document.getElementById("d2task9").hidden=false;
       document.getElementById("d2next9").hidden=true;
       document.getElementById("d2hint9").hidden=true;
       document.getElementById('d2myVideo9').hidden=true;
       document.getElementById('d2myVideo9').pause();
       document.getElementById("d2count9").hidden=true;
       document.getElementById("d2content9").hidden=true;
       document.getElementById("d2doubtimg9").hidden=true;
       document.getElementById('d2complete9').hidden=false;
       document.getElementById('d2complete9').play();
      }      
   }
   $("#d2task9").click(function () {
   document.location.reload();
   }) 
}
{
   document.getElementById("d2task10").hidden=true;
   document.getElementById("d2next10").disabled=true;
   document.getElementById("d2playpause10").hidden=false;
   document.getElementById('d2complete10').hidden=true;
   var inc=1;
   document.getElementById("d2count10").innerHTML ="         " + " Viewed :" + (inc) +" times";
   function d2playpau10(){
      document.getElementById("d2playpause10").hidden=true;
      document.getElementById('d2myVideo10').play();
      document.getElementById("d2next10").disabled=false;
     }
   function d2myFunction10() {
      document.getElementById('d2myVideo10').play();
      inc = inc+1;
      document.getElementById("d2count10").innerHTML ="         " + " Viewed : " + (inc) + " times";
      if(inc == 6 ) {
       document.getElementById("d2task10").hidden=false;
       document.getElementById("d2next10").hidden=true;
       document.getElementById("d2hint10").hidden=true;
       document.getElementById('d2myVideo10').hidden=true;
       document.getElementById('d2myVideo10').pause();
       document.getElementById("d2count10").hidden=true;
       document.getElementById("d2content10").hidden=true;
       document.getElementById("d2doubtimg10").hidden=true;
       document.getElementById('d2complete10').hidden=false;
       document.getElementById('d2complete10').play();
      }      
   }
   $("#d2task10").click(function () {
   document.location.reload();
   }) 
}

