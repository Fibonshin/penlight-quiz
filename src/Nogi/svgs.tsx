import { transColor,Color} from "./data"

export default function Penlight({lColor,rColor,borderColor}:{lColor:Color,rColor:Color,borderColor?:Color}) {
  return (
    <svg width="107" height="219" viewBox="0 0 107 219" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="81" width="24" height="218" rx="3.2" fill="url(#paint0_linear_73_12)" stroke="black" strokeWidth={rColor===borderColor?"0.5":"0"}/>
    <rect x="79" y="128" width="28" height="90.4" rx="1.6" fill="#5BBEE4"/>
    <rect x="2" width="24" height="218" rx="3.2" fill="url(#paint1_linear_73_12)" stroke="black" strokeWidth={lColor===borderColor?"0.5":"0"}/>
    <rect y="128" width="28" height="90.4" rx="1.6" fill="#5BBEE4"/>
    <defs>
    <linearGradient id="paint0_linear_73_12" x1="93" y1="0" x2="93" y2="218" gradientUnits="userSpaceOnUse">
    <stop offset="0.15" stopColor={transColor[rColor]}/>
    <stop offset="1" stopColor="white"/>
    </linearGradient>
    <linearGradient id="paint1_linear_73_12" x1="14" y1="0" x2="14" y2="218" gradientUnits="userSpaceOnUse">
    <stop offset="0.15" stopColor={transColor[lColor]}/>
    <stop offset="1" stopColor="white"/>
    </linearGradient>
    </defs>
    </svg>
  )
}

export function MiniPenlight({lColor,rColor,borderColor,height}:{lColor:Color,rColor:Color,borderColor?:Color,height?:number}){
  return(
  <svg width="20" height={height?height:"43"} viewBox="0 0 9 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.221387" y="0.05" width="2.55714" height="14.3" rx="0.292857" fill={transColor[lColor]} stroke="black" strokeWidth={lColor===borderColor?"0.1":"0"}/>
  <rect y="13.7143" width="3" height="9.68571" rx="0.171429" fill="#5BBEE4"/>
  <rect x="6.17139" width="2.65714" height="14.4" rx="0.342857" fill={transColor[rColor]} stroke="black" strokeWidth={rColor===borderColor?"0.1":"0"}/>
  <rect x="6" y="13.7143" width="3" height="9.68571" rx="0.171429" fill="#5BBEE4"/>
  </svg>
  )
}

export function Circle(){
  return(
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="o">
  <path d="M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100ZM24.8068 100C24.8068 141.528 58.4719 175.193 100 175.193C141.528 175.193 175.193 141.528 175.193 100C175.193 58.4719 141.528 24.8068 100 24.8068C58.4719 24.8068 24.8068 58.4719 24.8068 100Z" fill="#FF0000" fillOpacity="0.7"/>
  </svg>
  )
}

export function Cross(){
  return(
    <svg width="195" height="195" viewBox="0 0 195 195" fill="none" xmlns="http://www.w3.org/2000/svg" className="x">
    <mask id="path-1-outside-1_89_50" maskUnits="userSpaceOnUse" x="-1" y="-1" width="197" height="197" fill="black">
    <rect fill="white" x="-1" y="-1" width="197" height="197"/>
    <path d="M175.418 0.458822L194.389 19.4301L116.81 97.3479L194.389 175.266L175.418 194.237L97.5 116.658L19.5822 194.237L0.610951 175.266L78.1899 97.3479L0.610951 19.4301L19.5822 0.458822L97.5 78.0378L175.418 0.458822Z"/>
    </mask>
    <path d="M175.418 0.458822L194.389 19.4301L116.81 97.3479L194.389 175.266L175.418 194.237L97.5 116.658L19.5822 194.237L0.610951 175.266L78.1899 97.3479L0.610951 19.4301L19.5822 0.458822L97.5 78.0378L175.418 0.458822Z" fill="#0000FF" fillOpacity="0.7"/>
    <path d="M175.418 0.458822L176.125 -0.248285L175.419 -0.953853L174.712 -0.249823L175.418 0.458822ZM194.389 19.4301L195.098 20.1357L195.802 19.4286L195.096 18.723L194.389 19.4301ZM116.81 97.3479L116.101 96.6423L115.399 97.3479L116.101 98.0534L116.81 97.3479ZM194.389 175.266L195.096 175.973L195.802 175.267L195.098 174.56L194.389 175.266ZM175.418 194.237L174.712 194.946L175.419 195.65L176.125 194.944L175.418 194.237ZM97.5 116.658L98.2056 115.949L97.5 115.247L96.7944 115.949L97.5 116.658ZM19.5822 194.237L18.8751 194.944L19.5807 195.65L20.2878 194.946L19.5822 194.237ZM0.610951 175.266L-0.0976948 174.56L-0.801724 175.267L-0.096156 175.973L0.610951 175.266ZM78.1899 97.3479L78.8986 98.0534L79.6011 97.3479L78.8986 96.6423L78.1899 97.3479ZM0.610951 19.4301L-0.096156 18.723L-0.801724 19.4286L-0.0976948 20.1357L0.610951 19.4301ZM19.5822 0.458822L20.2878 -0.249823L19.5807 -0.953853L18.8751 -0.248285L19.5822 0.458822ZM97.5 78.0378L96.7944 78.7465L97.5 79.449L98.2056 78.7465L97.5 78.0378ZM174.711 1.16593L193.682 20.1372L195.096 18.723L176.125 -0.248285L174.711 1.16593ZM193.68 18.7245L116.101 96.6423L117.519 98.0534L195.098 20.1357L193.68 18.7245ZM116.101 98.0534L193.68 175.971L195.098 174.56L117.519 96.6423L116.101 98.0534ZM193.682 174.559L174.711 193.53L176.125 194.944L195.096 175.973L193.682 174.559ZM176.123 193.528L98.2056 115.949L96.7944 117.367L174.712 194.946L176.123 193.528ZM96.7944 115.949L18.8767 193.528L20.2878 194.946L98.2056 117.367L96.7944 115.949ZM20.2893 193.53L1.31806 174.559L-0.096156 175.973L18.8751 194.944L20.2893 193.53ZM1.3196 175.971L78.8986 98.0534L77.4813 96.6423L-0.0976948 174.56L1.3196 175.971ZM78.8986 96.6423L1.3196 18.7245L-0.0976948 20.1357L77.4813 98.0534L78.8986 96.6423ZM1.31806 20.1372L20.2893 1.16593L18.8751 -0.248285L-0.096156 18.723L1.31806 20.1372ZM18.8767 1.16747L96.7944 78.7465L98.2056 77.3292L20.2878 -0.249823L18.8767 1.16747ZM98.2056 78.7465L176.123 1.16747L174.712 -0.249823L96.7944 77.3292L98.2056 78.7465Z" fill="#0000FF" fillOpacity="0.7" mask="url(#path-1-outside-1_89_50)"/>
    </svg>      
  )
}