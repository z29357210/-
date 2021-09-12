window.onload = function () {
    let tanngos=[ 
        "（よ）うが",
        "無論~都~",
        "どうなに工夫してやろうが、結局は失敗に決まっている",
        "に際して",
        "正值...之際",
        "入居に際しての注意事項を説明します",
        "いかんをとわず",
        "不論、不管",
        "目的のいかんを問わず、これらの国々への渡航は自粛してください",
        "てたまらない",
        "...得不得了",
        "あ～、暑くて暑くてたまらないよ",
        "いかんによらず",
        "不管、不論",
        "試合の勝敗いかんによらず、反省するところは反省すべき",
        "いかんにかかわらず",
        "不管、不論",
        "成績のいかんにかかわらず、地元クラブを応援したい",
        "いかんで",
        "根據...",
        "今年の結果いかんでは引退も辞さないつもりらし",
        "いかんだ",
        "取決於...",
        "成功するか否かは、結局本人の努力いかんだ",
        "いかにも",
        "顯然",
        "いかにもそうだ",
        "あっての",
        "正因為...才",
        "健康あっての幸せ",
        "かけだ",
        "動作剛開始就被中斷",
        "彼女は何か言いかけたが、うつむいて結局何も言わなかった",
        "か...ないかのうちに",
        "一...的同時",
        "日曜休んだか休んでないかのうちに終わってまた月曜",
        "う（よう）ものなら",
        "只要...就...",
        "このことが彼女にバレようものなら何をされるか分からない",
        "うと...まいと",
        "不論是...還是...",
        "痩せようと痩せまいと、どうせはブスだろう",
        "うが...まいが",
        "不論是...還是不...",
        "勉強しようがするまいが、大学に受かる訳がないよ",
        "かたわら",
        "一邊...一邊...",
        "彼女は子育てのかたわら、大学に通っている",
        "かたがた",
        "順便",
        "今度、結婚の挨拶かたがた、そちらに伺います",
        "がたい",
        "不容易...",
        "彼はずっと勉強していて、近寄りがたい雰囲気がある",
        "かけの",
        "動作未完被中斷",
        "作りかけのパズル",
        "おそれがある",
        "恐怕要...",
        "消費税は将来もっと高くなるおそれがある",
        "からして",
        "從...來看",
        "彼は言葉遣いからして生意気だ",
        "かねる",
        "難以...",
        "確証が無いので判断しかねます",
        "かと思うと",
        "本以為",
        "ようやく泣き止んだと思ったら、また泣き出した",
        "嫌いがある",
        "有...傾向",
        "彼は物事を独断で考えるきらいがある",
        "が早いか",
        "剛...就",
        "電車のドアが開くが早いか、並んでいた人たちは中に乗り込んだ",
        "からは",
        "既然如此",
        "この仕事を引き受けるからは全力でやろう",
        "からといって",
        "雖說如此",
        "海外に住んだからといって、英語がペラペラになるとは限らない",
        "からの",
        "加上",
        "玉突き事故で２０人からの人が怪我を負った",
        "からある",
        "以上",
        "５００ｋｍからある距離を車で移動するのは疲れる",
        "がてら",
        "順便",
        "散歩がてら、ちょっとコンビニまで行ってきます",
        "ことは...が",
        "雖然...但是",
        "あの本を読んだことは読んだが、全然わからなかった",
        "げ",
        "似的",
        "彼女はなんだか悲しげな様子だ",
        "くせに",
        "儘管...可是",
        "買ってくれると約束したくせに、買ってくれなかった",
        "きる",
        "結束",
        "食べ切る",
        "ざるを得ない",
        "不能不...",
        "足が痛く、歩ける状況ではないので、病院へ行かざるを得ない",
        "ことなしに",
        "如果不...就",
        "この建物は許可なしに入ることができない",
        "こととて",
        "因為",
        "子供のやったこととて許してください",
        "ごとく",
        "如同...",
        "汗が滝のごとく流れ出す",
        "ごとき",
        "如同...",
        "たかがゲームごときにムキになるな",
        "ぐらい",
        "表示程度",
        "毎日２時間ぐらいギターを練習した",
        "だだ...のみ",
        "只、只是",
        "今はただみんなの無事を祈るのみです",
        "たが最後",
        "...就完了",
        "信頼関係は失ったが最後、取り戻すのは難しい",
        "ず...ず",
        "既不...也不...",
        "大学院も入らず勤め先も見つからず、毎日家でぶらぶらしている",
        "始末だ",
        "導致",
        "昨晩飲み過ぎたせいでこの始末だ",
        "そばから",
        "剛...就",
        "食事したそばから食事したことを忘れる",
        "ずにはすまない",
        "不...不暢快",
        "借りたカメラを壊してしまったので、弁償せずにはすまない",
        "ずにはおかない",
        "肯定會引起",
        "癌とは、誰もに死を意識させずにはおかない病だ",
        "ずくめ",
        "完全",
        "今年は幸せずくめの一年だった",
        "つ...つ",
        "時而",
        "持ちつ持たれつの関係",
        "たるもの",
        "具有...身分",
        "医者たるもの、患者を第一に考えるべきだ",
        "ために",
        "為了",
        "健康のために、ダイエットした",
        "たばかりに",
        "只因為",
        "無理やり柵を跳び越えたばかりに怪我をしてしまった",
        "たとえ...でも",
        "即使...也",
        "たとえ失敗しても、次また挑戦すればいい",
        "ついでに",
        "順便",
        "買い物のついでに友達の家に寄ってきました",
        "たりとも",
        "即使...也",
        "１秒たりとも気を抜くな",
        "だに",
        "連...都",
        "考えるだに恐ろしい事態だ",
        "だところで",
        "即使...也...",
        "もう絶対に間に合わないし、慌てたところでどうにもならないよ",
        "ただ...のみならず",
        "不僅",
        "タバコはただ自分の健康に害があるのみならず、他人にも害を及ぼしている",
        
        
    
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
