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
        <div className="relative bg-white w-full mb-5 pt-5 rounded-10">
            <div className="relative flex flex-col justify-center items-center mb-5">
                <Image className="rounded-10 w-1/3 h-1/3" width={200} height={200} src={information.photo} alt={"Darcy Photo"}/>
                    <div className="flex flex-row my-5 text-3xl">
                        <div className="mr-2">{information.firstName}</div>
                        <div className="font-bold">{information.lastName}                        
                            <a href={information.linkedin} target="_blank" rel="noreferrer"><LinkedIn className="absolute text-blue-500 ml-1 w-6 h-6"/></a>
                        </div>
                    </div>
                <section className="text-xl w-2/3 h-12 bg-gray-200 rounded-50 flex flex-row items-center justify-center">{information.position}</section>
            </div>
            <div className="relative flex flex-col bg-gray-200  h-auto rounded-b-10 py-3 px-5 items-start">
                <p className="relative text-xl w-auto"><LocationOnOutlinedIcon className="w-6 h-6 my-2 mr-2 text-blue-500"/>{information.address}</p>
                <p className="relative text-xl w-auto"><MailOutlineOutlinedIcon className="w-6 h-6 my-2 mr-2 text-blue-500"/>{information.email}</p>
                <p className="relative text-xl w-auto"><PhoneIphoneOutlinedIcon className="w-6 h-6 my-2 mr-2 text-blue-500"/>{information.phone}</p>
            </div>
        </div>
    )
}

export default FixedCard