import { useState } from "react";
import { Check, CheckCheck } from "lucide-react";

const Card = ({ post }) => {
  const [use, setUse] = useState(false);

  return (
    <div
      onClick={() => {
        setUse((preState) => !preState);
      }}
      className={`w-full text-white font-semibold text-lg h-full p-3 flex rounded-xl border-2  hover:bg-cyan-100 hover:border-sky-500 shadow-md hover:shadow-sky-600 transform ease-in-out duration-150 hover:-translate-y-1 bg-linear-to-bl active:translate-0 ${use ? "from-lime-400 to-green-500" : "from-zinc-400/70 to-gray-600/60"} `}
    >
      <div
        className={`w-full h-full flex items-center justify-between duration-4 `}
      >
        <h2 className="font-semibold">{post.title} </h2>
        <h3 className="text-2xl">{use ? <CheckCheck /> : <Check/>}</h3>
      </div>
    </div>
  );
};

export default Card;
