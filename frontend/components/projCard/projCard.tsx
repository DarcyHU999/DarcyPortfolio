import { ReactNode } from "react"
import Image from "next/image";
import YouTubeIcon from '@mui/icons-material/YouTube';

interface GrayBgProps{
    children:ReactNode
}

interface Proj{
    imgSrc:string,
    imgAlt:string,
    description:string
    youtubeSrc?:string,
    note?:string,
}

interface ProjcardProps{
    projects:Proj[]
}

const ProjCard:React.FC<ProjcardProps> = ({projects})=>{
    return(
        <GrayBg>
            {projects.map((item,index)=>{
                return(
                <div key={`projcard-${index}`} className="w-2/3 h-auto rounded-50 flex flex-row flex-wrap">
                    <Image className="rounded-50" width={200} height={200} src={item.imgSrc} alt={item.imgAlt} />
                    
                    <section className="flex flex-col">
                        {item.youtubeSrc?<YouTubeIcon component={"a"} href={item.youtubeSrc}/>:undefined}
                        {item.note?<p>{item.note}</p>:undefined}
                        <p>{item.description}</p>
                    </section>
                </div>
                )
            })}
        </GrayBg>
    )
}

const GrayBg:React.FC<GrayBgProps> = ({children})=>{
    return(
        <div className="bg-gray-100 h-auto w-full rounded-b-10">
            {children}
        </div>
    )
}
export default ProjCard