import { MdHome } from "react-icons/md";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between py-6 px-12 border-2 border-gray-100 border-solid max-w-[2700px] mx-auto">
      <div className="flex items-center">
        <div className="flex mr-12">
          <div className="text-primary">
            <MdHome size="32" />
          </div>
          <div className="text-2xl font-bold text-black">Estatery</div>
        </div>
        {["Rent", "Buy", "Sell"].map((item, index) => (
          <button
            className="text-xl hover:bg-gray-100 mr-10 py-3 px-5 rounded-lg"
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex">
        <button className="btn btn-secondary">Login</button>
        <button className="btn btn-primary ml-10">Sign Up</button>
      </div>
    </div>
  );
};

export default Navigation;
