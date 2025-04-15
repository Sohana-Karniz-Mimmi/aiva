const Button = ({
  className = "",
  buttonClassName = "",
  iconClassName = "",
  text = "Book your meeting",
  icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={`w-[16.697px] h-[16.697px] ${iconClassName}`}
    >
      <g clipPath="url(#clip0_2036_633)">
        <path
          d="M13.5228 2.04277H13.175V1.69492C13.175 1.11818 12.7075 0.651367 12.1314 0.651367C11.5554 0.651367 11.0879 1.11818 11.0879 1.69492V2.04277H6.91366V1.69492C6.91366 1.11818 6.44615 0.651367 5.87011 0.651367C5.29406 0.651367 4.82655 1.11818 4.82655 1.69492V2.04277H4.4787C2.36934 2.04277 0.652344 3.75907 0.652344 5.86913V13.5218C0.652344 15.6319 2.36934 17.3482 4.4787 17.3482H13.5228C15.6322 17.3482 17.3492 15.6319 17.3492 13.5218V5.86913C17.3492 3.75907 15.6322 2.04277 13.5228 2.04277ZM13.5228 15.2611H4.4787C3.51933 15.2611 2.73945 14.4805 2.73945 13.5218V6.91268H15.2621V13.5218C15.2621 14.4805 14.4822 15.2611 13.5228 15.2611ZM7.60936 9.34764V10.739C7.60936 11.3151 7.14185 11.7826 6.56581 11.7826H5.1744C4.59836 11.7826 4.13085 11.3151 4.13085 10.739V9.34764C4.13085 8.7716 4.59836 8.30408 5.1744 8.30408H6.56581C7.14185 8.30408 7.60936 8.7716 7.60936 9.34764Z"
          fill="#634AB0"
        />
      </g>
      <defs>
        <clipPath id="clip0_2036_633">
          <rect
            width="16.6968"
            height="16.6968"
            fill="white"
            transform="translate(0.652344 0.651367)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  onClick = () => {},
}) => (
  <button
    onClick={onClick}
    className={`inline-flex max-w-[185px] h-[44px] pl-[4px] pr-[16px] py-[16px] items-center gap-2 rounded-[100px] bg-primary hover:bg-primary-hover ${buttonClassName} ${className}`}
  >
    <span className="flex w-9 h-9 p-[10px] justify-center items-center rounded-[60px] bg-white">
      {icon}
    </span>
    {text}
  </button>
);

export default Button;