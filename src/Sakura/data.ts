export const transColor={
   "ホワイト":"#FFF",
   "サクラピンク":"#FF87CF",
   "グリーン":"#00FF00",
   "イエロー":"#FFFF00",
   "レッド":"#FF0000",
   "パステルブルー":"#00BFFF",
   "パープル":"#7A3CFF",
   "ピンク":"#FF2883",
   "エメラルドグリーン":"#00FA9A",
   "ライトグリーン":"#EBFF00",
   "バイオレット":"#C750FF",
   "パールグリーン":"#00FF7F",
   "パッションピンク":"#FF2055",
   "オレンジ":"#FFA500",
   "ブルー":"#0000FF"
}
export type Color=keyof typeof transColor;
export const colors=Object.keys(transColor);

export interface Member {
   name:string,
   term:number,
   backs:boolean,
   graduated:boolean,
   color:Color[],
}

export const perfectMessages=[
   "No Problems fault",
   "キャラメリゼ(全問正解)されちゃった",
   "全問正解ですけども。",
   "ドローン正解中",
   "全問ペピパピ！(全問正解！)",
   "えつとえつと、全問正解だに。",
   "ひゃっ、百万馬力！"
]

export const membersData:Member[]=[
   {
      name:"上村莉菜",
      term:1,
      backs:false,
      graduated:true,
      color:["サクラピンク","サクラピンク"]
   },
   {
      name:"尾関梨香",
      term:1,
      backs:false,
      graduated:true,
      color:["ホワイト","イエロー"]
   },
   {
      name:"小池美波",
      term:1,
      backs:true,
      graduated:false,
      color:["ホワイト","サクラピンク"]
   },
   {
      name:"小林由依",
      term:1,
      backs:false,
      graduated:true,
      color:["イエロー","ブルー"]
   },
   {
      name:"齋藤冬優花",
      term:1,
      backs:false,
      graduated:true,
      color:["イエロー","イエロー"]
   },
   {
      name:"菅井友香",
      term:1,
      backs:false,
      graduated:true,
      color:["ホワイト","パステルブルー"]
   },
   {
      name:"土生瑞穂",
      term:1,
      backs:false,
      graduated:true,
      color:["ホワイト","レッド"]
   },
   {
      name:"原田葵",
      term:1,
      backs:false,
      graduated:true,
      color:["ホワイト","ホワイト"]
   },
   {
      name:"守屋茜",
      term:1,
      backs:false,
      graduated:true,
      color:["レッド","レッド"]
   },
   {
      name:"渡辺梨加",
      term:1,
      backs:false,
      graduated:true,
      color:["パステルブルー","パステルブルー"]
   },
   {
      name:"渡邉理佐",
      term:1,
      backs:false,
      graduated:true,
      color:["ホワイト","ブルー"]
   },
   {
      name:"井上梨名",
      term:2,
      backs:true,
      graduated:false,
      color:["ブルー","ブルー"]
   },
   {
      name:"遠藤光莉",
      term:2,
      backs:true,
      graduated:false,
      color:["パープル","パープル"]
   },
   {
      name:"大園玲",
      term:2,
      backs:false,
      graduated:false,
      color:["バイオレット","バイオレット"]
   },
   {
      name:"大沼晶保",
      term:2,
      backs:true,
      graduated:false,
      color:["パステルブルー","イエロー"]
   },
   {
      name:"幸阪茉里乃",
      term:2,
      backs:true,
      graduated:false,
      color:["パールグリーン","サクラピンク"]
   },
   {
      name:"関有美子",
      term:2,
      backs:false,
      graduated:true,
      color:["ホワイト","オレンジ"]
   },
   {
      name:"武元唯衣",
      term:2,
      backs:true,
      graduated:false,
      color:["パッションピンク","ブルー"]
   },
   {
      name:"田村保乃",
      term:2,
      backs:false,
      graduated:false,
      color:["パステルブルー","パステルブルー"]
   },
   {
      name:"藤吉夏鈴",
      term:2,
      backs:false,
      graduated:false,
      color:["ホワイト","バイオレット"]
   },
   {
      name:"増本綺良",
      term:2,
      backs:true,
      graduated:false,
      color:["オレンジ","オレンジ"]
   },
   // 現行のペンライトにはホットピンクが存在しないため一旦対象外とした。
   // {
   //    name:"松平璃子",
   //    term:2,
   //    backs:false,
   //    graduated:false,
   //    color:["ホットピンク","バイオレット"]
   // },
   {
      name:"松田里奈",
      term:2,
      backs:false,
      graduated:false,
      color:["グリーン","イエロー"]
   },
   {
      name:"森田ひかる",
      term:2,
      backs:false,
      graduated:false,
      color:["レッド","ブルー"]
   },
   {
      name:"守屋麗奈",
      term:2,
      backs:false,
      graduated:false,
      color:["イエロー","ピンク"]
   },
   {
      name:"山﨑天",
      term:2,
      backs:false,
      graduated:false,
      color:["ホワイト","グリーン"]
   },
   {
      name:"石森璃花",
      term:3,
      backs:false,
      graduated:false,
      color:["ピンク","グリーン"]
   },
   {
      name:"遠藤理子",
      term:3,
      backs:true,
      graduated:false,
      color:["サクラピンク","バイオレット"]
   },
   {
      name:"小田倉麗奈",
      term:3,
      backs:true,
      graduated:false,
      color:["パッションピンク","ホワイト"]
   },
   {
      name:"小島凪紗",
      term:3,
      backs:true,
      graduated:false,
      color:["パステルブルー","オレンジ"]
   },
   {
      name:"谷口愛季",
      term:3,
      backs:false,
      graduated:false,
      color:["パープル","レッド"]
   },
   {
      name:"中嶋優月",
      term:3,
      backs:true,
      graduated:false,
      color:["ピンク","ピンク"]
   },
   {
      name:"的野美青",
      term:3,
      backs:false,
      graduated:false,
      color:["ブルー","パステルブルー"]
   },
   {
      name:"向井純葉",
      term:3,
      backs:false,
      graduated:false,
      color:["パステルブルー","エメラルドグリーン"]
   },
   {
      name:"村井優",
      term:3,
      backs:false,
      graduated:false,
      color:["パープル","ブルー"]
   },
   {
      name:"村山美羽",
      term:3,
      backs:false,
      graduated:false,
      color:["バイオレット","パープル"]
   },
   {
      name:"山下瞳月",
      term:3,
      backs:false,
      graduated:false,
      color:["レッド","パステルブルー"]
   }
]

