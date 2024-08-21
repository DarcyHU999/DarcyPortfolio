import { LinkedIn } from "@mui/icons-material";
import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
const information = {
  photo: "/resources/DarcyPhoto.jpg",
  firstName: "Darcy",
  lastName: "Hu",
  position: "Full Stack Developer",
  linkedin: "https://www.linkedin.com/in/darcyhu",
  address: "Sydney, Australia",
  email: "huqy1021_cd@outlook.com",
  phone: "+61 432432896",
};

const DownloadCVButton = () => {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/resources/DarcyHuCV.pdf";
    a.download = "DarcyHuCV.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button
      className="relative rounded-50 bg-blue-500 text-gray-200 shadow text-2xl px-5 py-2 hover:text-white active:bg-blue-800 active:scale-95"
      onClick={handleDownload}
    >
      Download CV
    </button>
  );
};

const FixedCard = () => {
  return (
    <div className="relative bg-white w-full mb-5 pt-5 rounded-10">
      <div className="relative flex flex-col justify-center items-center mb-5">
        <Image
          className="rounded-10 w-1/3 h-1/3"
          width={200}
          height={200}
          src={information.photo}
          alt={"Darcy Photo"}
        />
        <div className="flex flex-row my-5 text-3xl">
          <div className="mr-2">{information.firstName}</div>
          <div className="font-bold">
            {information.lastName}
            <a href={information.linkedin} target="_blank" rel="noreferrer">
              <LinkedIn className="absolute text-blue-500 ml-1 w-6 h-6" />
            </a>
          </div>
        </div>
        <section className="text-xl w-auto px-5 xl:2/3 h-12 bg-gray-200 rounded-50 flex flex-row items-center justify-center">
          {information.position}
        </section>
      </div>
      <div className="relative flex flex-row justify-between mx-5 rounded-10 xl:flex-col xxl:flex-row bg-gray-200  h-auto py-3 px-5 items-start">
        <p className="relative text-xl w-auto mx-5 xl:mx-0">
          <LocationOnOutlinedIcon className="w-6 h-6 my-2 mr-2 text-blue-500" />
          {information.address}
        </p>
        <p className="relative text-xl w-auto mx-5 xl:mx-0">
          <MailOutlineOutlinedIcon className="w-6 h-6 my-2 mr-2 text-blue-500" />
          {information.email}
        </p>
        <p className="relative text-xl w-auto mx-5 xl:mx-0">
          <PhoneIphoneOutlinedIcon className="w-6 h-6 my-2 mr-2 text-blue-500" />
          {information.phone}
        </p>
      </div>
      <div className="w-full flex justify-center items-center my-5">
        <DownloadCVButton />
      </div>
    </div>
  );
};

export default FixedCard;
