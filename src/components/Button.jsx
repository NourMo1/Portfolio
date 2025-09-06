import { useNavigate } from "react-router-dom";

const Button = ({ content = "Click Me", type = "button", btnClass = "bg-primary text-white", iconBgColor ="bg-surface", iconColor = "text-text-primary", icon: Icon, to, download }) => {
  const navigate = useNavigate();

  function navigateToHome() {
    if (download) {
      const link = document.createElement("a");
      link.href = download;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (to) {
      navigate(to);
    }
  }
  
  return (
    <div className="inline-block rounded-xl">
      <button
        className={`${btnClass} text-center px-4 py-2 rounded-lg md:px-6 md:py-3 w-fit md:rounded-xl h-10 md:h-12 relative text-xs md:text-sm font-normal group cursor-pointer`}
        type={type}
        onClick={navigateToHome}
      >
        <div
          className={`button ${iconBgColor} rounded-lg h-8 md:h-10 w-[50px] flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[calc(100%-8px)] z-10 duration-500`}
        >
          {Icon && <Icon size={20} className={iconColor} />}
        </div>
        <p className="translate-x-2 ps-[50px] text-sm md:text-[16px] font-medium">
          {content}
        </p>
      </button>
    </div>
  );
};

export default Button;