export const transColor={
   "白":"#FFF",
   "オレンジ":"#FFA130",
   "青":"#588BFE",
   "黄":"#FDFC04",
   "紫":"#DEA6FD",
   "緑":"#00F25F",
   "ピンク":"#FE6CB3",
   "赤":"#FE603D",
   "水色":"#9CDAF3",
   "黄緑":"#CCF380",
   "ターコイズ":"#A1F3E7",
   "黒":"#000"
}
export type Color=keyof typeof transColor;
export const colors=Object.keys(transColor);

export interface Member {
   name:string,
   term:number,
   under:boolean,
   graduated:boolean,
   color:Color[],
}

export const perfectMessages=[
   "全問正解というのはロックだぜ！",
   "正解が止まらなくなる",
   "帰り道は全問正解したくなる",
   "裸足でPerfect",
   "何度目の正解か？",
   "ゼンモンセイカイシカ"
]

export const membersData:Member[]=[

   // 山本穂乃香,吉本彩華,岩瀬佑美子,安藤美雲,宮澤成良,市來玲奈は不明。
   {
      name:"秋元真夏",
      term:1,
      under:false,
      graduated:true,
      color:["赤","ピンク"]
   },
   {
      name:"生田絵梨花",
      term:1,
      under:false,
      graduated:true,
      color:["黄","黄"]
   },
   {
      name:"生駒里奈",
      term:1,
      under:false,
      graduated:true,
      color:["青","紫"]
   },
   {
      name:"伊藤寧々",
      term:1,
      under:false,
      graduated:true,
      color:["ピンク","オレンジ"]
   },
   {
      name:"伊藤万理華",
      term:1,
      under:false,
      graduated:true,
      color:["緑","紫"]
   },
   {
      name:"井上小百合",
      term:1,
      under:false,
      graduated:true,
      color:["白","白"]
   },
   {
      name:"衛藤美彩",
      term:1,
      under:false,
      graduated:true,
      color:["赤","赤"]
   },
   {
      name:"柏幸奈",
      term:1,
      under:false,
      graduated:true,
      color:["ピンク","ピンク"]
   },
   {
      name:"川後陽菜",
      term:1,
      under:false,
      graduated:true,
      color:["赤","赤"]
   },
   {
      name:"川村真洋",
      term:1,
      under:false,
      graduated:true,
      color:["赤","白"]
   },
   {
      name:"齋藤飛鳥",
      term:1,
      under:false,
      graduated:true,
      color:["水色","白"]
   },
   {
      name:"斎藤ちはる",
      term:1,
      under:false,
      graduated:true,
      color:["青","赤"]
   },
   {
      name:"斉藤優里",
      term:1,
      under:false,
      graduated:true,
      color:["ピンク","白"]
   },
   {
      name:"桜井玲香",
      term:1,
      under:false,
      graduated:true,
      color:["赤","ピンク"]
   },
   {
      name:"白石麻衣",
      term:1,
      under:false,
      graduated:true,
      color:["水色","水色"]
   },
   {
      name:"高山一実",
      term:1,
      under:false,
      graduated:true,
      color:["水色","ピンク"]
   },
   {
      name:"永島聖羅",
      term:1,
      under:false,
      graduated:true,
      color:["黄","黄"]
   },
   {
      name:"中田花奈",
      term:1,
      under:false,
      graduated:true,
      color:["白","黒"]
   },
   {
      name:"中元日芽香",
      term:1,
      under:false,
      graduated:true,
      color:["ピンク","ピンク"]
   },
   {
      name:"西野七瀬",
      term:1,
      under:false,
      graduated:true,
      color:["緑","白"]
   },
   {
      name:"能條愛未",
      term:1,
      under:false,
      graduated:true,
      color:["オレンジ","オレンジ"]
   },
   {
      name:"橋本奈々未",
      term:1,
      under:false,
      graduated:true,
      color:["緑","緑"]
   },
   {
      name:"畠中清羅",
      term:1,
      under:false,
      graduated:true,
      color:["青","ピンク"]
   },
   {
      name:"樋口日奈",
      term:1,
      under:false,
      graduated:true,
      color:["紫","オレンジ"]
   },
   {
      name:"深川麻衣",
      term:1,
      under:false,
      graduated:true,
      color:["緑","紫"]
   },
   {
      name:"星野みなみ",
      term:1,
      under:false,
      graduated:true,
      color:["白","白"]
   },
   {
      name:"松村沙友理",
      term:1,
      under:false,
      graduated:true,
      color:["赤","赤"]
   },
   {
      name:"大和里菜",
      term:1,
      under:false,
      graduated:true,
      color:["ピンク","白"]
   },
   {
      name:"若月佑美",
      term:1,
      under:false,
      graduated:true,
      color:["青","青"]
   },
   {
      name:"和田まあや",
      term:1,
      under:false,
      graduated:true,
      color:["黄","オレンジ"]
   },
   {
      name:"伊藤かりん",
      term:2,
      under:false,
      graduated:true,
      color:["緑","紫"]
   },
   {
      name:"伊藤純奈",
      term:2,
      under:false,
      graduated:true,
      color:["水色","ピンク"]
   },
   {
      name:"北野日奈子",
      term:2,
      under:false,
      graduated:true,
      color:["ピンク","黄緑"]
   },
   {
      name:"相楽伊織",
      term:2,
      under:false,
      graduated:true,
      color:["緑","オレンジ"]
   },
   {
      name:"佐々木琴子",
      term:2,
      under:false,
      graduated:true,
      color:["青","緑"]
   },
   {
      name:"新内眞衣",
      term:2,
      under:false,
      graduated:true,
      color:["青","紫"]
   },
   {
      name:"鈴木絢音",
      term:2,
      under:false,
      graduated:true,
      color:["白","紫"]
   },
   {
      name:"寺田蘭世",
      term:2,
      under:false,
      graduated:true,
      color:["赤","白"]
   },
   {
      name:"堀未央奈",
      term:2,
      under:false,
      graduated:true,
      color:["白","オレンジ"]
   },
   {
      name:"矢田里沙子",
      term:2,
      under:false,
      graduated:true,
      color:["ピンク","ピンク"]
   },
   {
      name:"山崎怜奈",
      term:2,
      under:false,
      graduated:true,
      color:["黄","白"]
   },
   {
      name:"米徳京花",
      term:2,
      under:false,
      graduated:true,
      color:["水色","青"]
   },
   {
      name:"渡辺みり愛",
      term:2,
      under:false,
      graduated:true,
      color:["黄","黄緑"]
   },
   {
      name:"伊藤理々杏",
      term:3,
      under:true,
      graduated:false,
      color:["紫","赤"]
   },
   {
      name:"岩本蓮加",
      term:3,
      under:false,
      graduated:false,
      color:["赤","ピンク"]
   },
   {
      name:"梅澤美波",
      term:3,
      under:false,
      graduated:false,
      color:["青","水色"]
   },
   {
      name:"大園桃子",
      term:3,
      under:false,
      graduated:true,
      color:["ピンク","緑"]
   },
   {
      name:"久保史緒里",
      term:3,
      under:false,
      graduated:false,
      color:["水色","黄"]
   },
   {
      name:"阪口珠美",
      term:3,
      under:false,
      graduated:true,
      color:["紫","黄"]
   },
   {
      name:"佐藤楓",
      term:3,
      under:true,
      graduated:false,
      color:["赤","赤"]
   },
   {
      name:"中村麗乃",
      term:3,
      under:true,
      graduated:false,
      color:["青","白"]
   },
   {
      name:"向井葉月",
      term:3,
      under:false,
      graduated:true,
      color:["黄","黄"]
   },
   {
      name:"山下美月",
      term:3,
      under:false,
      graduated:true,
      color:["青","黄"]
   },
   {
      name:"吉田綾乃クリスティー",
      term:3,
      under:true,
      graduated:false,
      color:["ピンク","紫"]
   },
   {
      name:"与田祐希",
      term:3,
      under:false,
      graduated:false,
      color:["赤","緑"]
   },
   {
      name:"遠藤さくら",
      term:4,
      under:false,
      graduated:false,
      color:["ピンク","白"]
   },
   {
      name:"賀喜遥香",
      term:4,
      under:false,
      graduated:false,
      color:["オレンジ","緑"]
   },
   {
      name:"掛橋沙耶香",
      term:4,
      under:false,
      graduated:true,
      color:["ピンク","オレンジ"]
   },
   {
      name:"金川紗耶",
      term:4,
      under:false,
      graduated:false,
      color:["水色","赤"]
   },
   {
      name:"北川悠理",
      term:4,
      under:false,
      graduated:true,
      color:["水色","オレンジ"]
   },
   {
      name:"柴田柚菜",
      term:4,
      under:true,
      graduated:false,
      color:["青","黄緑"]
   },
   {
      name:"清宮レイ",
      term:4,
      under:false,
      graduated:true,
      color:["オレンジ","オレンジ"]
   },
   {
      name:"田村真佑",
      term:4,
      under:false,
      graduated:false,
      color:["紫","水色"]
   },
   {
      name:"筒井あやめ",
      term:4,
      under:false,
      graduated:false,
      color:["紫","紫"]
   },
   {
      name:"早川聖来",
      term:4,
      under:false,
      graduated:true,
      color:["青","青"]
   },
   {
      name:"矢久保美緒",
      term:4,
      under:true,
      graduated:false,
      color:["ピンク","黄"]
   },
   {
      name:"黒見明香",
      term:4,
      under:true,
      graduated:false,
      color:["紫","緑"]
   },
   {
      name:"佐藤璃果",
      term:4,
      under:true,
      graduated:false,
      color:["ピンク","ターコイズ"]
   },
   {
      name:"林瑠奈",
      term:4,
      under:false,
      graduated:false,
      color:["ピンク","ピンク"]
   },
   {
      name:"松尾美佑",
      term:4,
      under:true,
      graduated:false,
      color:["ターコイズ","白"]
   },
   {
      name:"弓木奈於",
      term:4,
      under:false,
      graduated:false,
      color:["赤","黄緑"]
   },
   {
      name:"五百城茉央",
      term:5,
      under:false,
      graduated:false,
      color:["ターコイズ","青"]
   },
   {
      name:"池田瑛紗",
      term:5,
      under:false,
      graduated:false,
      color:["緑","白"]
   },
   {
      name:"一ノ瀬美空",
      term:5,
      under:false,
      graduated:false,
      color:["水色","水色"]
   },
   {
      name:"井上和",
      term:5,
      under:false,
      graduated:false,
      color:["赤","白"]
   },
   {
      name:"岡本姫奈",
      term:5,
      under:true,
      graduated:false,
      color:["紫","青"]
   },
   {
      name:"小川彩",
      term:5,
      under:false,
      graduated:false,
      color:["白","白"]
   },
   {
      name:"奥田いろは",
      term:5,
      under:false,
      graduated:false,
      color:["黄緑","ピンク"]
   },
   {
      name:"川﨑桜",
      term:5,
      under:false,
      graduated:false,
      color:["ピンク","緑"]
   },
   {
      name:"菅原咲月",
      term:5,
      under:true,
      graduated:false,
      color:["ピンク","水色"]
   },
   {
      name:"冨里奈央",
      term:5,
      under:true,
      graduated:false,
      color:["ターコイズ","ターコイズ"]
   },
   {
      name:"中西アルノ",
      term:5,
      under:false,
      graduated:false,
      color:["水色","ターコイズ"]
   },
]

