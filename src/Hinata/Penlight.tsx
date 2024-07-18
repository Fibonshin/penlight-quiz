const transColor={
  "パステルブルー":"#00BFFF",
  "エメラルドグリーン":"#00FA9A",
  "グリーン":"#00FF00",
  "パールグリーン":"#00FF7F",
  "ライトグリーン":"EBFF00",
  "イエロー":"#FFFF00",
  "オレンジ":"#FFA500",
  "レッド":"#FF0000",
  "ホワイト":"FFF",
  "サクラピンク":"#FF87CF",
  "ピンク":"FF2883",
  "パッションピンク":"#FF2055",
  "バイオレット":"#C750FF",
  "パープル":"#7A3CFF",
  "ブルー":"#0000FF"
}

function Penlight({lColor,rColor,borderColor}:{lColor:string,rColor:string,borderColor:string}) {
  return (
    <svg width="107" height="219" viewBox="0 0 107 219" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="81" width="24" height="218" rx="3.2" fill="url(#paint0_linear_73_12)" stroke="black" stroke-width={lColor===borderColor?"0.5":"0"}/>
    <rect x="79" y="128" width="28" height="90.4" rx="1.6" fill="#5BBEE4"/>
    <rect x="2" width="24" height="218" rx="3.2" fill="url(#paint1_linear_73_12)" stroke="black" stroke-width={lColor===borderColor?"0.5":"0"}/>
    <rect y="128" width="28" height="90.4" rx="1.6" fill="#5BBEE4"/>
    <defs>
    <linearGradient id="paint0_linear_73_12" x1="93" y1="0" x2="93" y2="218" gradientUnits="userSpaceOnUse">
    <stop offset="0.15" stop-color="#FF9900"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint1_linear_73_12" x1="14" y1="0" x2="14" y2="218" gradientUnits="userSpaceOnUse">
    <stop offset="0.146667" stop-color="#FF9900"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    </defs>
    </svg>
  )
}
// TODO :背景と同色の場合の縁取りを実装する
export default Penlight