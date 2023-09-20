//Mark Sheet:



var sub1 = 100;var sub2 = 90;var sub3 = 70;
var subEN = 60;var subMA = 100;var subUR = 80;
var subEn = 100;var subMa = 100;var subUr = 70;
var total = 300;
var total1=  sub1+sub2+sub3;
var total2 = subEN+subMA+subUR;
var total3 = subEn+subMa+subUr;
var Percentage =  total1*100/total ;
var Percentage2 =  total2*100/total ;
var Percentage3 =  total3*100/total ;















//document.write("<h1> Mark Sheet </h1>");


document.write("<table border='1'>"
+
"<tr>"+
"<th>"+"Name" +"</th>"+
"<th>"+"English" +"</th>"+
"<th>"+"Math" +"</th>"+
"<th>"+"Urdu" +"</th>"+
"<th>"+"Total" +"</th>"+
"<th>"+"Percentage" +"</th>"
+
"</tr>"
+
"<tr>"+
"<td>"+"Ali" +"</td>"+
"<td>"+sub1+"</td>"+
"<td>"+sub2 +"</td>"+
"<td>"+sub3 +"</td>"+
"<td>"+total1 +"</td>"+
"<td>"+Percentage.toFixed(2)+"%" +"</td>"
+
"</tr>"+
"<tr>"+
"<td>"+"Abdullah" +"</td>"+
"<td>"+subEN +"</td>"+
"<td>"+subMA +"</td>"+
"<td>"+subUR +"</td>"+
"<td>"+total2 +"</td>"+
"<td>"+Percentage2.toFixed(2)+"%" +"</td>"
+
"</tr>"+
"<tr>"+
"<td>"+"Rafay" +"</td>"+
"<td>"+subEn +"</td>"+
"<td>"+subMa +"</td>"+
"<td>"+subUr +"</td>"+
"<td>"+total3 +"</td>"+
"<td>"+Percentage3.toFixed(2)+"%"+"</td>"




+
"</table>"
);







