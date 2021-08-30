window.onload = function () {
    let tanngos=[ "6Y",
    "尼加拉瓜航空公司",
    "",
    "8L",
    "大菲航空公司",
    "",
    "AA",
    "美國航空公司",
    "寰宇一家初始會員",
    "AC",
    "加拿大航空公司",
    "星空聯盟初始會員/寰宇一家初始會員(退)",
    "AE",
    "華信航空公司",
    "",
    "AF",
    "亞洲法國航空公司",
    "天合聯盟會員",
    "AM",
    "墨西哥國際航空",
    "天合聯盟會員",
    "AI",
    "印度航空公司",
    "",
    "AK",
    "大馬亞洲航空公司",
    "",
    "AN",
    "澳洲安捷航空公司",
    "",
    "AQ",
    "阿羅哈航空公司",
    "",
    "AR",
    "阿根廷航空公司",
    "",
    "AY",
    "芬蘭航空公司",
    "",
    "AZ",
    "義大利航空公司",
    "",
    "B7",
    "立榮航空公司",
    "",
    "BA",
    "英國亞洲航空公司",
    "寰宇一家初始會員",
    "BD",
    "英倫航空公司",
    "",
    "BG",
    "孟加拉航空公司",
    "",
    "BI",
    "汶萊航空公司",
    "",
    "BL",
    "越南太平洋航空公司",
    "",
    "BO",
    "印翔航空公司",
    "",
    "BR",
    "長榮航空公司",
    "星空聯盟",
    "CF",
    "秘魯第一航空公司",
    "",
    "CI",
    "中華航空公司",
    "天合聯盟",
    "CA",
    "中國國際航空",
    "星空聯盟",
    "CM",
    "巴拿馬航空公司",
    "",
    "CO",
    "美國大陸航空",
    "",
    "CP",
    "加拿大國際航空公司",
    "",
    "CV",
    "盧森堡航空公司",
    "",
    "CX",
    "國泰航空公司",
    "寰宇一家初始會員",
    "CZ",
    "中國南方航空",
    "天合聯盟",
    "DL",
    "達美航空公司",
    "天合聯盟會員",
    "EF",
    "遠東航空公司",
    "",
    "EG",
    "日本亞細亞航空公司",
    "",
    "EH",
    "厄瓜多爾航空公司",
    "",
    "EK",
    "阿酋國際航空公司",
    "",
    "EL",
    "日空航空公司",
    "",
    "FI",
    "冰島航空公司",
    "",
    "FJ",
    "斐濟太平洋航空公司",
    "",
    "GA",
    "印尼航空公司",
    "",
    "GE",
    "復興航空公司",
    "",
    "GF",
    "海灣航空公司",
    "",
    "GU",
    "瓜地馬拉航空公司",
    "",
    "HA",
    "夏威夷航空公司",
    "",
    "HP",
    "美西航空公司",
    "",
    "IM",
    "澳亞航空公司",
    "",
    "IT",
    "法國英特航空公司",
    "",
    "JD",
    "日本系統航空公司",
    "",
    "JL",
    "日本航空公司",
    "寰宇一家",
    "KA",
    "港龍航空公司",
    "",
    "KE",
    "大韓航空公司",
    "天合聯盟會員",
    "KL",
    "荷蘭皇家航空公司",
    "",
    "KU",
    "科威特航空公司",
    "",
    "VS",
    "英國維京航空公司",
    "",
    "VY",
    "國華航空公司",
    "",
    "VP",
    "巴西聖保羅航空公司",
    "",
    "KW",
    "美國嘉年華航空公司",
    "",
    "LA",
    "智利航空公司",
    "",
    "LH",
    "德國漢莎航空公司",
    "星空聯盟初始會員",
    "LO",
    "波蘭航空公司",
    "",
    "LR",
    "哥斯大黎加航空公司",
    "",
    "LY",
    "以色列航空公司",
    "",
    "MA",
    "匈牙利航空公司",
    "",
    "ME",
    "中東航空公司",
    "",
    "MF",
    "廈門航空公司",
    "天合聯盟",
    "MH",
    "馬來西亞航空公司",
    "",
    "MI",
    "勝安航空公司",
    "",
    "MK",
    "摩里西斯航空公司",
    "",
    "MP",
    "馬丁航空公司",
    "",
    "MS",
    "埃及航空公司",
    "",
    "MU",
    "東方航空公司",
    "天合聯盟",
    "MX",
    "墨西哥航空公司",
    "",
    "NG",
    "維也納航空公司",
    "",
    "NH",
    "全日空航空公司",
    "*星空聯盟",
    "NW",
    "西北航空公司",
    "",
    "NX",
    "澳門航空公司",
    "",
    "NZ",
    "紐西蘭航空公司",
    "",
    "OA",
    "奧林匹克航空公司",
    "",
    "OK",
    "捷克航空公司",
    "",
    "OS",
    "奧地利航空公司",
    "",
    "OZ",
    "韓亞航空公司",
    "",
    "PA",
    "美國泛亞航空公司",
    "",
    "PL",
    "祕魯航空公司",
    "",
    "PR",
    "菲律賓航空公司",
    "",
    "PX",
    "新幾內亞航空公司",
    "",
    "QF",
    "澳洲航空公司",
    "",
    "RA",
    "尼泊爾航空公司",
    "",
    "RG",
    "巴西航空公司",
    "",
    "RJ",
    "約旦航空公司",
    "",
    "SA",
    "南非航空公司",
    "",
    "SG",
    "森巴迪航空公司",
    "",
    "SK",
    "北歐航空公司",
    "星空聯盟初始會員",
    "SQ",
    "新加坡航空公司",
    "星空聯盟",
    "SR",
    "瑞士航空公司",
    "",
    "SU",
    "俄羅斯航空公司",
    "",
    "SV",
    "沙烏地阿拉伯航空公司",
    "",
    "TA",
    "薩爾瓦多航空公司",
    "",
    "TG",
    "泰國航空公司",
    "星空聯盟初始會員",
    "TK",
    "土耳其航空公司",
    "",
    "TP",
    "葡萄牙航空公司",
    "",
    "TW",
    "美國環球航空公司",
    "",
    "UA",
    "美國聯合航空公司",
    "星空聯盟初始會員",
    "UB",
    "緬甸航空公司",
    "",
    "UC",
    "拉丁美洲航空公司",
    "",
    "UL",
    "斯里蘭卡航空公司",
    "",
    "UN",
    "俄羅斯全錄航空公司",
    "",
    "US",
    "美國全美航空公司",
    "",
    "VN",
    "越南航空公司"
    
    
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
