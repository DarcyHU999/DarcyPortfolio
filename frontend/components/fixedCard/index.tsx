import { LinkedIn } from "@mui/icons-material"
import Image from "next/image"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
const information={
    photo:"/resources/DarcyPhoto.png",
    firstName: "Darcy",
    lastName:"Hu",
    position:"Full Stack Developer",
    linkedin:"https://www.linkedin.com/in/darcyhu",
    address:"Sydney, Australia",
    email:"huqy1021_cd@outlook.com",
    phone:"+61 432432896"
}

const FixedCard=()=>{
    return (
        <div className="bg-white w-2/3 xl:w-1/3 mr-10 mb-5 mt-60 pt-5 rounded-50 relative">
            <div className="relative bottom-60 flex flex-col justify-center items-center">
                <Image className="rounded-10" width={350} height={350} src={information.photo} alt={"Darcy Photo"}/>
                    <div className="flex flex-row my-5 text-5xl">
                        <div className="mr-2">{information.firstName}</div>
                        <div className="font-bold">{information.lastName}                        
                            <a href={information.linkedin} target="_blank" rel="noreferrer"><LinkedIn className="absolute text-blue-500 ml-1 w-8 h-8"/></a>
                        </div>
                    </div>
                <section className="text-3xl w-80 h-12 bg-gray-200 rounded-50 flex flex-row items-center justify-center">{information.position}</section>
            </div>
            
            <div className="relative bg-gray-200 flex flex-col -mt-44 h-auto rounded-b-50 py-3 px-10 items-start">
                <p className="relative xl:left-0 text-3xl w-auto"><LocationOnOutlinedIcon className="w-12 h-12 my-2 mr-2 text-blue-500"/>{information.address}</p>
                <p className="relative xl:left-0 text-3xl w-auto"><MailOutlineOutlinedIcon className="w-12 h-12 my-2 mr-2 text-blue-500"/>{information.email}</p>
                <p className="relative xl:left-0 text-3xl w-auto"><PhoneIphoneOutlinedIcon className="w-12 h-12 my-2 mr-2 text-blue-500"/>{information.phone}</p>
            </div>
        </div>
    )
}

export default FixedCard