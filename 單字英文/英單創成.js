window.onload = function () {
    let tanngos=[ "kingdom",
    "領域、王國",
    "",
    "fashion",
    "時尚、風格",
    "",
    "exclusively",
    "專門、獨家",
    "",
    "essay",
    "散文、論文",
    "",
    "belong",
    "屬於",
    "",
    "worldwide",
    "全世界的",
    "",
    "typical",
    "典型的",
    "",
    "title",
    "標題、頭斜",
    "",
    "overseas",
    "海外的",
    "",
    "monthly",
    "按月支付",
    "",
    "educate",
    "教育",
    "",
    "complain",
    "抱怨、投訴",
    "",
    "boundary",
    "分界線",
    "",
    "ashamed",
    "羞愧",
    "",
    "annoy",
    "使惱怒",
    "",
    "goodness",
    "善良、美德",
    "",
    "temper",
    "脾氣",
    "",
    "symbol",
    "象徵",
    "",
    "heroic",
    "英雄氣概",
    "",
    "exhaust",
    "精疲力竭",
    "",
    "importantly",
    "重要的",
    "",
    "imagination",
    "想像力",
    "",
    "helicopter",
    "直升機",
    "",
    "concentrate",
    "集中力、凝聚",
    "",
    "accent",
    "口音",
    "",
    "limit",
    "限制",
    "",
    "payment",
    "支付",
    "",
    "peacemaker",
    "和事佬、調解人",
    "",
    "retire",
    "退休、退出",
    "",
    "sum",
    "總數、總著來說",
    "",
    "fluent",
    "流暢、流利",
    "",
    "bore",
    "使厭煩",
    "",
    "aside",
    "到旁邊",
    "",
    "apologize",
    "道歉、認錯",
    "",
    "absence",
    "缺乏、缺席",
    "",
    "talent",
    "天才、天資",
    "",
    "stable",
    "穩定、馬廄",
    "",
    "seeker",
    "探求者",
    "",
    "intake",
    "攝取量、通風口",
    "",
    "highway",
    "公路",
    "",
    "differently",
    "不同的",
    "",
    "differ",
    "不同、有異議",
    "",
    "defend",
    "防守",
    "",
    "destroy",
    "破壞",
    "",
    "abandon",
    "放棄、丟棄",
    "",
    "vivid",
    "栩栩如生、鮮豔的",
    "",
    "saving",
    "存款、積蓄",
    "",
    "resolve",
    "決心",
    "",
    "opicmistic",
    "樂觀主義",
    "",
    "fortnight",
    "兩星期",
    "",
    "schedule",
    "安排、時程表",
    "",
    "rising",
    "上升",
    "",
    "patience",
    "耐性、容忍",
    "",
    "jet",
    "噴口、噴射飛機",
    "",
    "fairness",
    "公平、公正、美好",
    "",
    "concerning",
    "關於、涉及",
    "",
    "ceremony",
    "禮節",
    "",
    "loose",
    "鬆動",
    "",
    "hesitate",
    "猶豫",
    "",
    "existence",
    "(負面的)生活",
    "",
    "absord",
    "掌握",
    "",
    "youngster",
    "年輕人",
    "",
    "survive",
    "倖存",
    "",
    "ski",
    "滑雪板",
    "",
    "alike",
    "相同的",
    "",
    "warning",
    "預告、警告",
    "",
    "sideways",
    "側身",
    "",
    "shelter",
    "包闢",
    "",
    "salty",
    "鹹的",
    "",
    "puzzle",
    "使迷惑",
    "",
    "motive",
    "動機",
    "",
    "percentage",
    "百分比",
    "",
    "outlook",
    "前景",
    "",
    "muscle",
    "肌肉",
    "",
    "location",
    "位置",
    "",
    "drama",
    "戲劇、戲劇性的",
    "",
    "developer",
    "開發者",
    "",
    "applause",
    "鼓掌、掌聲",
    "",
    "envy",
    "羨慕、忌妒",
    "",
    "digital",
    "數碼的",
    "",
    "considerate",
    "體貼、考慮周到",
    "",
    "bother",
    "麻煩",
    "",
    "appointment",
    "預約、約會",
    "",
    "relate",
    "敘述",
    "",
    "preserve",
    "維護",
    "",
    "improvement",
    "提高",
    "",
    "adoptee",
    "被收養",
    "",
    "achievement",
    "成績",
    "",
    "workforce",
    "勞動力",
    "",
    "stare",
    "盯",
    "",
    "secondary",
    "其次、中等的",
    "",
    "eve",
    "前夜",
    "",
    "unlike",
    "不同的",
    "",
    "recall",
    "召回、回憶起",
    "",
    "permit",
    "允許、准許",
    "",
    "participate",
    "參加",
    "",
    "jungle",
    "叢林、雜亂的地方",
    "",
    "contribute",
    "造成、捐獻",
    "",
    "apology",
    "道歉、認錯",
    "",
    "objective",
    "目標",
    "",
    "moreover",
    "而且",
    "",
    "creativity",
    "創造力",
    "",
    "clue",
    "線索",
    "",
    "childhood",
    "童年",
    "",
    "calculate",
    "計算",
    "",
    "web",
    "網路、蜘蛛網",
    "",
    "definition",
    "定義",
    "",
    "ban",
    "禁止",
    "",
    "account",
    "說明、帳戶",
    "",
    "zone",
    "地區",
    "",
    "trash",
    "垃圾、遭毀",
    "",
    "surround",
    "圍繞",
    "",
    "strengthen",
    "加強",
    "",
    "starve",
    "餓死、使挨餓",
    "",
    "response",
    "反映、回答",
    "",
    "honesty",
    "誠實、正直",
    "",
    "greedy",
    "貪吃的",
    "",
    "expand",
    "擴張",
    "",
    "exit",
    "出口、退出",
    "",
    "employ",
    "雇用",
    "",
    "usage",
    "使用、用法",
    "",
    "triangle",
    "三角形",
    "",
    "suit",
    "適合",
    "",
    "salary",
    "薪水",
    "",
    "remove",
    "移開",
    "",
    "elderly",
    "老人",
    "",
    "dramatic",
    "戲劇性的",
    "",
    "donation",
    "戲劇性的",
    "",
    "chef",
    "主廚",
    "",
    "artificial",
    "矯揉做作的、假裝的",
    "",
    "write",
    "手腕",
    "",
    "wit",
    "智力、風趣",
    "",
    "religion",
    "宗教",
    "",
    "privacy",
    "隱私",
    "",
    "hatred",
    "憎惡",
    "",
    "gymnasium",
    "健身房",
    "",
    "freeze",
    "凍結",
    "",
    "expert",
    "專家",
    "",
    "cure",
    "藥、治療",
    "",
    "adventure",
    "冒險",
    "",
    "weed",
    "除草",
    "",
    "urgent",
    "急迫的",
    "",
    "sample",
    "樣本、樣品",
    "",
    "regularly",
    "定期的",
    "",
    "publisher",
    "出版商",
    "",
    "label",
    "標籤",
    "",
    "independence",
    "獨立",
    "",
    "hollow",
    "中空的",
    "",
    "echo",
    "回音",
    "",
    "beneficial",
    "有益的",
    "",
    "infer",
    "推斷",
    "",
    "workplace",
    "工作場所",
    "",
    "sin",
    "神的憤怒",
    "",
    "roommate",
    "室友",
    "",
    "preparation",
    "製藥",
    "",
    "prefer",
    "更喜歡",
    "",
    "link",
    "連結",
    "",
    "fool",
    "傻瓜",
    "",
    "classification",
    "分類、分級",
    "",
    "charming",
    "迷人的",
    "",
    "willing",
    "願意的",
    "",
    "rental",
    "租金",
    "",
    "poison",
    "毒藥",
    "",
    "laundry",
    "洗衣店",
    "",
    "grain",
    "糧食",
    "",
    "glimpse",
    "撇見",
    "",
    "export",
    "出口",
    "",
    "equality",
    "平等的",
    "",
    "average",
    "平均的",
    "",
    "adjust",
    "調整",
    "",
    "shortage",
    "缺乏",
    "",
    "replace",
    "取代",
    "",
    "excitement",
    "刺激",
    "",
    "deserve",
    "應受到",
    "",
    "core",
    "核心",
    "",
    "complaint",
    "抱怨、投訴",
    "",
    "climate",
    "氣氛",
    "",
    "bow",
    "鞠躬",
    "",
    "bankrupt",
    "破產",
    "",
    "blacony",
    "陽台、包廂",
    "",
    "upset",
    "推翻、翻覆",
    "",
    "slender",
    "微小、苗條",
    "",
    "rescue",
    "營救",
    "",
    "recovery",
    "恢復",
    "",
    "entertainment",
    "娛樂",
    "",
    "emotion",
    "強烈的情感",
    "",
    "diccount",
    "折扣",
    "",
    "consequence",
    "結果",
    "",
    "chin",
    "下巴",
    "",
    "angle",
    "角度",
    "",
    "tuition",
    "學費",
    "",
    "slip",
    "下降",
    "",
    "sigh",
    "嘆氣",
    "",
    "shortly",
    "很快",
    "",
    "leadership",
    "領導階層",
    "",
    "involve",
    "參與",
    "",
    "inform",
    "通知",
    "",
    "faithful",
    "可信任的",
    "",
    "dismiss",
    "解雇",
    "",
    "afterward",
    "之後",
    "",
    "topic",
    "主題",
    "",
    "roll",
    "捲動",
    "",
    "prejudice",
    "偏見",
    "",
    "outcome",
    "結果",
    "",
    "nap",
    "打盹",
    "",
    "fill",
    "塞滿",
    "",
    "fee",
    "費用",
    "",
    "conflict",
    "衝突",
    "",
    "aspirin",
    "阿斯匹靈",
    "",
    "agence",
    "中介處",
    "",
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
            Qarr = [ tanngos[suuji] , tanngos[suuji+1] /*, tanngos[suuji+2]*/ ];
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
