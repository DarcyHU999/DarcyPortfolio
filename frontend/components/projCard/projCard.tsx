import { ReactNode } from "react"
import Image from "next/image";
import YouTubeIcon from '@mui/icons-material/YouTube';
import PublicIcon from '@mui/icons-material/Public';
interface GrayBgProps{
    children:ReactNode
}

interface Proj{
    imgSrc:string,
    imgAlt:string,
    projName:string,
    description:string
    youtubeSrc?:string,
    website?:string,
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
                <div key={`projcard-${index}`} className="w-1/2 h-auto my-1 flex flex-row py-5 px-5">
                    <div className="bg-white shadow rounded-10 py-5">
                    <section className="flex flex-col">
                        <Image className="px-5 rounded-10" width={150} height={150} src={item.imgSrc} alt={item.imgAlt} />
                        <div className="px-5 mt-1 ml-2 flex flex-row ">
                            {item.youtubeSrc?<YouTubeIcon className="mr-2 text-red-500" href={item.youtubeSrc}/>:undefined}
                            {item.website?<PublicIcon className="text-blue-500" href={item.youtubeSrc}/>:undefined}
                        </div>
                    </section>
                    <section className="px-5 flex flex-col">
                        <h3 className="font-bold">{item.projName}</h3>
                        {item.note?<p className={`italic text-xs my-3`}><label className="font-bold">Note: </label>{item.note}</p>:undefined}
                        <p>{item.description}</p>
                    </section>
                    </div>
                </div>
                )
            })}
        </GrayBg>
    )
}

const GrayBg:React.FC<GrayBgProps> = ({children})=>{
    return(
        <div className="flex flex-row flex-wrap mt-10 py-5 px-10 bg-gray-100 h-auto w-auto mr-10 rounded-10">
            {children}
        </div>
    )
}
export default ProjCard