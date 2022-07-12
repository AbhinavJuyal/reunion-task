import {
  MdOutlineSpaceDashboard,
  MdBed,
  MdOutlineBathroom,
} from "react-icons/md";
import { IoSparklesSharp } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { Images } from "../assets";

// after:w-4 after:h-4 after:absolute after:bg-red-900 after:content-[''] after:left-0 after:bottom-0 after:rounded-lg after:skew-x-12 after:skew-y-12

const Card = (props: any) => {
  const {
    image,
    popular,
    price,
    address,
    beds,
    bathrooms,
    dimension,
    apartmentName,
  } = props;
  const fullAddress = Object.values(address).join(", ");
  return (
    <div className="flex flex-col rounded-2xl max-w-md m-6 bg-white drop-shadow-xl">
      <div className="relative">
        <div className="w-full h-60">
          <img
            src={Images(image)}
            className="object-cover w-full h-full rounded-2xl rounded-b-none"
            alt="property-img"
          />
        </div>
        {popular && (
          <div className="absolute z-10 -bottom-[10px] -left-[10px] py-3 px-4 flex flex-col rounded-xl bg-primary">
            <div className="text-base text-white flex items-center">
              <div className="mr-2">
                <IoSparklesSharp size="16" />
              </div>
              <span className="text-sm font-medium">POPULAR</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="pb-4 mb-6 border-b-2 border-b-gray-200">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="mb-2">
                <span className="inline text-[28px] text-primary font-bold tracking-widest">
                  ${price}
                </span>
                <span className="text-sm text-gray-400 font-medium">
                  /month
                </span>
              </div>
              <div className="text-3xl text-black font-semibold">
                {apartmentName}
              </div>
            </div>
            <button
              type="button"
              className="rounded-full border-4 border-solid border-primary/40 w-14 h-14 flex items-center justify-center cursor-pointer"
            >
              <div className="text-primary">
                <AiOutlineHeart size="24" />
              </div>
            </button>
          </div>
          <div className="text-xl text-gray-500 font-medium">{fullAddress}</div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-primary float-left mr-2">
              <MdBed size="32" />
            </div>
            <span className="font-medium text-gray-500 leading-loose">{`${beds} Beds`}</span>
          </div>
          <div>
            <span className="text-primary float-left mr-2">
              <MdOutlineBathroom size="32" />
            </span>
            <span className="font-medium text-gray-500 leading-loose">{`${bathrooms} Bathrooms`}</span>
          </div>
          <div>
            <div className="text-primary float-left mr-2">
              <MdOutlineSpaceDashboard size="32" />
            </div>
            <span className="font-medium text-gray-500 leading-loose">
              {`${dimension} m`}
              <sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
