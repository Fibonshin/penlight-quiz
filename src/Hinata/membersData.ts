export interface Member {
   name:string,
   term:number,
   hiragana:boolean,
   graduated:boolean,
   color:string[],
}

export const membersData:Member[]=[
   {
    name:"正源司陽子",
    term:4,
    hiragana:false,
    graduated:false,
    color:["レッド","オレンジ"]
   },
   {
    name:"濱岸ひより",
    term:2,
    hiragana:true,
    graduated:false,
    color:["ホワイト","オレンジ"]
   },
]
