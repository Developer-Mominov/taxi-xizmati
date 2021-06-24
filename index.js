
document.querySelector("#tt").checked=true;
var select1,select2,select3,select4,narx;

select1="i1";
select2="b1";

function f3(){
 select1 = document.querySelector(".ss1").value;
console.log(select1);
}

function f4(){
 select2 = document.querySelector(".ss3").value;
console.log(select2);
}


function f5(){
 select2 = document.querySelector(".ss2").value;
console.log(select2);
}

function f6(){
 select1 = document.querySelector(".ss4").value;
console.log(select1);
}




function f1(){
  document.querySelector(".ss2").style.display="none";
  document.querySelector(".ss4").style.display="none";

  document.querySelector(".ss1").style.display="block";
  document.querySelector(".ss3").style.display="block";

  document.querySelector(".ss1").selectedIndex = "0";
  document.querySelector(".ss3").selectedIndex = "0";

  select1="i1";
  select2="b1";



}
function f2(){
  document.querySelector(".ss2").style.display="block";
  document.querySelector(".ss4").style.display="block";

  document.querySelector(".ss1").style.display="none";
  document.querySelector(".ss3").style.display="none";

  document.querySelector(".ss2").selectedIndex = "0";
  document.querySelector(".ss4").selectedIndex = "0";

  select1="i1";
  select2="b1";


}
