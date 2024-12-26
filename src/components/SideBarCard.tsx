import { GeneralItem } from "../utils/constants";

interface CardProps {
  title: string;
  items: GeneralItem[];
}

const SideBarCard = ({ title, items }: CardProps) => {
  return (
    <div className="text-white">
      <h2 className="text-sm font-semibold leading-5 text-main">{title}</h2>
      <div className="flex flex-col gap-3 mt-2">
        {items.map(({ id, image, label, alt }) => (
          <div
            key={id}
            className="flex items-center gap-5 cursor-pointer text-[#F6F6F6] hover:text-basepPink"
          >
            <img src={image} alt={alt} className="size-6" />
            <p className=" text-lg font-medium leading-[27px] ">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarCard;
