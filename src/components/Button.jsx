import ArrowDownIcon from "../assets/icon-arrow-down.svg";
import ArrowUpIcon from "../assets/icon-arrow-up.svg";

export const Button = ({ children, type = "alternate" }) => {
  const styles = {
    // TODO: check if w-full apply too for secondary
    primary:
      "text-neutral-900 bg-light-salmon-50 border-neutral-900 hover:bg-gradient focus:shadow-primary ",
    alternate:
      "text-neutral-0 border-neutral-0 hover:bg-gradient2 focus:shadow-alternate", // TODO: remove bg on production
  };
  return (
    <button
      className={`flex gap-200 items-center justify-center border-2 rounded-lg py-250 w-full focus:outline-none ${styles[type]}`}
    >
      <span className="text-preset-6">{children}</span>
      <img
        src={type === "primary" ? ArrowDownIcon : ArrowUpIcon}
        alt={children}
      />
    </button>
  );
};
