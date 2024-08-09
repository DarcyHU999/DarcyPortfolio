// frontend/components/Hero.tsx
import Image from "next/image";

const FixedCard = () => (
  <div>
    <Image
      className="rounded-50"
      src="@/resources/DarcyPhoto.png"
      alt="Darcy photo"
    />
  </div>
);

export default FixedCard;
