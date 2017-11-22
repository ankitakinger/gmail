
var array1=["ankita","is","a","very","talented","girl"];
var namelist;

document.getElementById("p").innerHTML="Hello";

for(var i=0;i<array1.length;i++)
{
	namelist="<li>"+array1[i]+"</li>";
	document.getElementById("list").innerHTML+=namelist;
}

document.getElementById("p1").innerHTML="Hello";

var array2=[{"id":101,"name":"ankita","age":24},
{"id":102,"name":"krishna","age":23},
{"id":103,"name":"monkey","age":25},
{"id":104,"name":"donkey","age":24},
{"id":105,"name":"kutrya","age":22}];

for(var i=0;i<array2.length;i++)
{
	namelist="<li style='background-color:yellow; width:100px;'>"+array2[i].name+"-"+array2[i].age+"</li>";
	document.getElementById("list2").innerHTML+=namelist;
}

console.log(navigator.appVersion);