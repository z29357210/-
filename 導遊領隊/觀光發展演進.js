window.onload = function () {
    let tanngos=[ "56年",
    "日本光觀人次超越美國",
    "",
    "58年",
    "觀光條例公布施行",
    "",
    "60年",
    "交通部觀光局成立",
    "",
    "67年",
    "訂定元宵節為觀光節",
    "",
    "68年",
    "開放國人赴海外觀光",
    "",
    "76年11月2日",
    "開放赴大陸探親旅遊",
    "",
    "76年12月10日",
    "第一屆台北國際旅展",
    "加強國外資訊交流",
    "77年",
    "開放旅行社設立，綜合、甲種、乙種",
    "",
    "79年2月9日",
    "第一屆中華美食展",
    "",
    "79年2月10日",
    "第一屆台北燈會",
    "",
    "83年",
    "對部分國家實施免簽證措施",
    "中、美、英等15國",
    "90年1月1日",
    "實施周休二日",
    "",
    "90年",
    "開放金門馬租小三通",
    "",
    "91年1月1日",
    "開放大陸第二、三類人士來台觀光",
    "",
    "91年",
    "加入WTO",
    "",
    "92年1月1日",
    "發行國民旅遊卡",
    "",
    "93年",
    "台灣觀光年",
    "邀請張惠妹為港星馬代言",
    "96年",
    "wish to see you in taiwan",
    "",
    "97年",
    "旅行台灣年",
    "飛輪海、蔡依林、吳念真、welcome 2 taiwan",
    "97年7月4日",
    "全面開放大陸人士來台觀光",
    "",
    "97年12月15日",
    "兩岸大三通啟用",
    "",
    "98年",
    "高雄世運、台北聽奧",
    "",
    "99年",
    "台北花卉、上海世博",
    "",
    "100年6月28日",
    "開放陸客自由行",
    "",
    "100年2月11日",
    "taiwan the heart of Asian",
    "",
    "100年",
    "飛輪海、time for taiwan、美食心體驗",
    "",
    "101年",
    "推動台灣十大觀光小城、出國人次突破1000萬",
    "",
    "102年",
    "旅行台灣就是現在time for taiwan",
    "",
    "103年5月23日",
    "於屏東縣舉行台日觀光高峰會",
    "",
    "104年",
    "台日觀光500w人次、來台旅客1000w次",
    "邀請木村拓哉代言",
    "105年",
    "長澤雅美代言、呂珍酒代言",
    "",
    "106年",
    "台北世大運",
    "來台人次1073萬、出國人次1565萬",
    "107年",
    "tourism 2020台灣永續觀光發展方案",
    ""
    
    
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
                        idq2.style.color = "white";
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
                        idq2.style.color = "white";
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
