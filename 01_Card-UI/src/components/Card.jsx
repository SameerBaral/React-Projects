import { ArrowUpRight } from "lucide-react";

const Card = ({
  title,
  description,
  tags,
  bgColor,
}) => {
  return (
    <div className="bg-white rounded-4xl p-3">

      <div
        className={`${bgColor} rounded-[28px] p-6 min-h-70 flex flex-col`}
      >
        <h2 className="text-3xl font-semibold leading-none">
          {title}
        </h2>

        <p className="mt-4 text-gray-700 text-xl font-medium max-w-55">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6 max-w-70">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-white px-4 py-2 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center px-2 pt-5">
        <h3 className="text-2xl font-semibold">
          Explore
        </h3>

        <button className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
          <ArrowUpRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Card;