

var xhr = new XMLHttpRequest();
xhr.open("GET", "js/data.json" ,true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function(){
    
    if(xhr.status === 200){
        var mydata = JSON.parse(xhr.responseText);
        console.log(mydata);
        
//        console.log(mydata.name);
        var result = " ";
        for(var i=0; i<3; i++ ){
            result += "<p><b>"+mydata[i].name+"</b><p>";
            result += "<p>"+mydata[i].description+"<p>";
            result += "<img width='250px' height='250px' src='"+mydata[i].photo+"'>";
            
            result += "<p>"+mydata[i].cost.weekend+"</p>";
            result += "<p>"+mydata[i].cost.weekday+"</p>";
            
            for(var j=0; j<mydata[i].details.length; j++){
                result += "<li>"+mydata[i].details[j]+"</li>";
            }
            
        }
        
        document.getElementById('text').innerHTML = result;

    }
    
}









//var xhr = new XMLHttpRequest();
//xhr.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json" ,true);
//xhr.responseType = 'text';
//xhr.send();
//
//xhr.onload = function(){
//    
//    if(xhr.status === 200){
//        var mydata = JSON.parse(xhr.responseText);
//        console.log(mydata);
//        var result = " ";
//            result += mydata.homeTown+"<br/>";
//            result += mydata.active+"<br/>";
//            result += mydata.formed+"<br/>";
//            result += mydata.secretBase+"<br/>";
//            result += mydata.squadName+"<br/>";
//        
//        for(i=0; i<mydata.members.length; i++){
//            result += "<br/>NAME: <b>"+mydata.members[i].name+"</b>";
//            result += "<br/>Age :"+mydata.members[i].age;
//            result += "<br/>Eecret Identity : "+mydata.members[i].secretIdentity;
//            
//            for(j=0; j<mydata.members[i].powers.length; j++){
//                result += "<li>"+mydata.members[i].powers[j]+"</li><br/>";
//            }
//        }
//        
//        document.getElementById('text').innerHTML = result;
//            
//      
//   
//
//    }
//    
//}




















