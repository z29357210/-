window.onload = function () {
    let tanngos=[ "EH",
    "東半球",
    "",
    "WH",
    "西半球",
    "",
    "AP",
    "經大西洋太平洋",
    "",
    "AT",
    "經大西洋",
    "",
    "PA",
    "經北中南太平洋",
    "",
    "PO",
    "北極",
    "",
    "SA",
    "經南大西洋",
    "",
    "TS",
    "TC2到TC3東北亞直飛歐洲",""
    ]
    let one = 1;
    let zero = 0;
    let jsscore = document.getElementById("score");
    let jsscore2 = document.getElementById("score2");
    let jsscore3 = document.getElementById("score3");

    jsscore.innerHTML = zero;
    jsscore2.innerHTML = zero;
    jsscore3.innerHTML = zero;
    

    
    function ts() {
        document.getElementById("peji").style.opacity = "1";

        let suuji , su , Qarr , qsuji , Aarr ,div
        
        function arrts() {
            su = Math.random() * tanngos.length;
            suuji = su - su % 3;
            Qarr = [ tanngos[suuji] , tanngos[suuji+1] , tanngos[suuji+2] ];
            return Qarr 
        }
        Qarr = arrts();//創造數組
        
                   
        qsuji = Math.floor( Math.random() * 2 );//創造挖空隨機數
        
        
    
        for( i=1 ; i <= 4 ; i++ ){ let a ; a = "a" + i };//定義a1-a4

        

        a1 = Array.from(Qarr) ; a2 = arrts()[qsuji] ; a3 = arrts()[qsuji] ; a4 = arrts()[qsuji] ;
        Qarr2 = Array.from(Qarr)
        Qarr[qsuji] = "";
        Aarr = [ a1[qsuji] , a2, a3 ,a4 ];
        if(Qarr2[qsuji] == "外來語"){qsuji = qsuji + 1 ;
            a1 = Array.from(Qarr) ; a2 = arrts()[qsuji] ; a3 = arrts()[qsuji] ; a4 = arrts()[qsuji] ;
            Qarr2 = Array.from(Qarr)
            Qarr[qsuji] = "";
            Aarr = [ a1[qsuji] , a2, a3 ,a4 ];}

        function randarr(num) { //陣列亂序
            for (var i = 0; i < num ; i++){
                var iRand = parseInt(num * Math.random());
                var temp = Aarr[i];
                Aarr[i] = Aarr[iRand];
                Aarr[iRand] = temp;
            }
            return Aarr;
        }
        randarr(Aarr.length);//呼叫函式，使Aarr成為亂序的數組

        function tagsousei(num , tagid , monntaiarr , intext , tagtype ) { 
            for( i = 0 ; i < num ; i++ ){
                let div , text , peji ;
                div = document.createElement(tagtype) ;
                if(monntaiarr[i]){
                    text = document.createTextNode(monntaiarr[i]) ;
                }else{
                    text = document.createTextNode(intext)
                };
                div.id = tagid + i ;
                div.appendChild(text) ;
                peji = document.getElementById("peji") ;
                peji.appendChild(div) ;
            }                    
        }
        
        tagsousei(3,"idq",Qarr,"","span");
        tagsousei(1,"ito","","","div");
        tagsousei(4,"ida",Aarr,"","div");
        tagsousei(1,"btn","","下一題","button");
        
        

        let btn = document.getElementById("btn0");
        let attr = document.createAttribute("disabled");
        attr.value = "disabled";
        btn.setAttributeNode(attr);

        function csschange(idname,cn){           
            idname.className =  cn ;            
        }
        
        csschange(idq0,"idqclass")
        csschange(idq1,"idqclass")
        csschange(idq2,"idqclass")
        csschange(ida0,"idaclass")
        csschange(ida1,"idaclass")
        csschange(ida2,"idaclass")
        csschange(ida3,"idaclass")

        function clear(x,num){
            for(i=0;i<num;i++){
                var peji=document.getElementById("peji");
                var child=document.getElementById(x + i);
                peji.removeChild(child);
            }            
        }

        function myclick() {
            for(i = 0;i <=Aarr.length;i++){
                let id = document.getElementById("ida" + i)
                id.onclick = function () {
                    let text = id.innerHTML;
                    /*
                    alert(isNaN(jsscore.innerHTML))
                    alert(jsscore.innerHTML)
                    alert(isNaN(jsscore2.innerHTML))
                    alert(jsscore2.innerHTML)
                    alert(isNaN(one))
                    alert(one)
                    */

                    if(text == Qarr2[qsuji]){
                        id.style.backgroundColor = "green";
                        btn.disabled=false;
                        for( i=0;i<4;i++){
                            let idanum = document.getElementById("ida" +i);
                            idanum.onclick = function(){}
                        }
                        btn.style.color = "black"
                        let idqq = document.getElementById("idq" + qsuji)
                        idqq.innerHTML = Qarr2[qsuji];
                        idqq.style.backgroundColor = "green";
                        let idq2 = document.getElementById("idq2");
                        idq2.style.backgroundColor = "white";
                        let nb = parseInt(jsscore.innerHTML); 
                        nb = nb + one;
                        jsscore.innerHTML = nb;
                        let nb2 = parseInt(jsscore2.innerHTML); 
                        nb2 = nb2 + one;
                        jsscore2.innerHTML = nb2;
                        let nb3 = parseInt(jsscore3.innerHTML); 
                        nb3 = nb3 + one;
                        jsscore3.innerHTML = nb3;
                    }else{
                        let idq2 = document.getElementById("idq2");
                        idq2.style.backgroundColor = "white";
                        id.style.backgroundColor = "red";
                        btn.disabled=false;
                        for( i=0;i<4;i++){
                            let idanum = document.getElementById("ida" +i);
                            idanum.onclick = function(){}
                        }
                        btn.style.color = "black"
                        let idqq = document.getElementById("idq" + qsuji)
                        idqq.innerHTML = Qarr2[qsuji];
                        idqq.style.backgroundColor = "green";
                        jsscore2.innerHTML = zero ;
                        let nb3 = parseInt(jsscore3.innerHTML); 
                        nb3 = nb3 + one;
                        jsscore3.innerHTML = nb3;
                    }
                }
            }
        }
        btn.onclick = function(){
            clear("idq",3);
            clear("ida",4); 
            clear("btn",1);
            clear("ito",1);
            ts();
        } 

        myclick();

                            
    }             
    ts()     
}
