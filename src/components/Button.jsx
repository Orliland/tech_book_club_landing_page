import ArrowDownIcon from "../assets/icon-arrow-down.svg";

export const Button = () => {
  return (
    <button className="flex gap-200 items-center justify-center bg-light-salmon-50 border-2 border-neutral-900 rounded-lg py-250 w-full hover:bg-gradient focus:shadow-primary focus:outline-none">
      <span className="text-preset-6">BUTTON</span>
      {/* TODO: replace alt for button text */}
      <img src={ArrowDownIcon} alt="Click here" />
    </button>
  );
};
