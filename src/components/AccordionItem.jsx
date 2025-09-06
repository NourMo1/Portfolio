import { Sparkle } from "lucide-react";

const AccordionItem = ({ title, content, isExpanded, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="col-span-12 cursor-pointer bg-background p-5 md:p-10 rounded-xl border-2 border-border transition-all duration-300"
    >
      <div className="grid grid-cols-12 gap-5 place-items-center sm:place-items-start">
        <div className="col-span-12 flex items-center justify-between gap-5">
          <span className="flex justify-center items-center px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-primary">
            <Sparkle
              className={`w-4.5 sm:w-5 text-[#F5F5F5] transition-transform duration-500 ${
                isExpanded ? "rotate-45" : ""
              }`}
            />
          </span>
          <h3 className="text-lg md:text-xl text-left font-medium text-text-primary">
            {title}
          </h3>
        </div>
      </div>

      {/* محتوى الأكورديون */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm md:text-lg font-normal text-text-secondary text-left">
            {content}
          </p>
        </div>
      </div>
    </button>
  );
};

export default AccordionItem;