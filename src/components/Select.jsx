import { AiOutlineDown } from "react-icons/ai";
export const Select = ({ items, title, className, selectClassName }) => {
  return (
    <div className="relative cursor-pointer">
      <select
        className={`pl-8 pr-12 py-4 border appearance-none cursor-pointer ${className}`}
      >
        <option value={title} className="hidden disabled">
          {title}
        </option>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div
        className={`pointer-events-none flex-center absolute inset-y-5 right-0 pr-3 dark:text-black ${selectClassName}`}
      >
        <AiOutlineDown />
      </div>
    </div>
  );
};
