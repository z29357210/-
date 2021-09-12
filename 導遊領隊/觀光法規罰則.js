window.onload = function () {
    let tanngos=[ 
    "旅行業經理人兼任其他旅行業",
    "3000以上1萬5000以下",
    "勸不聽得廢其執業證",
    "進入自然人文生態景觀區，無申請專業人員陪同進入",
    "3萬以下",
    "",
    "旅行業經營核准登記範圍外業務",
    "3萬以上15萬以下",
    "情節重大者，得廢止其營業執照",
    "未依規定取得執業證而執行導遊或領隊業務",
    "1萬以上5萬以下",
    "並禁止執業",
    "於風景、觀光區域任棄物品、亂行車停車進入禁止進入區域",
    "5000以上10萬以下",
    "",
    "於風景、觀光區域破壞生態汙染環境、危害安全",
    "5000以上100萬以下",
    "",
    "受雇人員玷汙國家榮譽、損害國家利益、違反善良風俗",
    "1萬以上5萬以下",
    "",
    "旅行業未與旅客訂定書面契約",
    "1萬以上5萬以下",
    "",
    "旅行業停業期屆滿未申報復業、或停業未申請備查",
    "1萬以上5萬以下",
    "",
    "外國旅行業未經核准在我國內設置代表人",
    "1萬以上5萬以下",
    "",
    "違反水域休閒娛樂範圍規範者",
    "1萬以上5萬以下",
    "並禁止其活動",
    "於風景、觀光區域內強行向旅客拍照並收費",
    "1萬以上5萬以下",
    "",
    "於風景、觀光區域強行向旅客推銷商品",
    "1萬以上5萬以下",
    "",
    "於風景、觀光區域內騷擾旅客、影響旅客安全",
    "1萬以上5萬以下",
    "",
    "於風景、觀光區域內擅自經營攤販",
    "1萬以上5萬以下",
    "",
    "於風景、觀光區域內擅自版放物品或障礙物等",
    "1萬以上5萬以下",
    "拆除費用為行為人負擔",
    "相關行業經營者、玷汙國家榮譽、損害國家利益、違反善良風俗、詐騙",
    "3萬以上15萬以下",
    "嚴重者廢止其執業證照或登記證",
    "相關行業經營者妨礙有關機關檢查",
    "3萬以上15萬以下",
    "得按次連續罰",
    "相關行業經營者檢查不合格屆期未改善者",
    "3萬以上15萬以下",
    "有危害旅客安全疑慮、未改善前暫停使用設施",
    "觀光旅館業經營核准登記範圍外業務",
    "3萬以上15萬以下",
    "",
    "民宿經營者擅自擴大營業客房者",
    "3萬以上15萬以下",
    "",
    "有關行業未辦理責任保險屆期仍未辦理者",
    "3萬以上15萬以下",
    "1個月內仍未辦妥、得廢止其執業證",
    "違反水域休閒娛樂範圍規範且具營利性質者",
    "3萬以上15萬以下",
    "",
    "水域休閒娛樂範圍規範且具營利性質者未保相關保險",
    "3萬以上15萬以下",
    "責任險、傷害險",
    "未繳回觀光專用標誌、或擅用標誌標章者",
    "3萬以上15萬以下",
    "",
    "未取得執業證經營相關業務並以媒體散播廣告等資訊者",
    "3萬以上30萬以下",
    "",
    "觀光旅館業、旅館業經營者擅自過大營業客房範圍",
    "5萬以上25萬以下",
    "得按次連續罰、公布",
    "未領取登記證經營民宿者",
    "6萬以上30萬以下",
    "勒令停業、公布",
    "未領取營業證執行觀光旅館業務者",
    "10萬以上50萬以下",
    "勒令停業、公布",
    "未領取登記證執行旅館業務者",
    "10萬以上50萬以下",
    "勒令停業、公布",
    "損害風景、觀光區域名勝",
    "50萬以下",
    "並償還修復費用",
    "損害風景、觀光區域名勝、無法回復",
    "500萬以下",
    "",
    "旅館業未辦理履約保險、責任保險，且3個月內仍未改善者",
    "廢止其營業證、執業證",
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
        
                   
        qsuji = 1//Math.floor( Math.random()  );//創造挖空隨機數
        
        
    
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
