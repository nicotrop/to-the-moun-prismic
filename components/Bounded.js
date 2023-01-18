import clsx from "clsx";

export const Bounded = ({
  as: Comp = "div",
  size = "widest",
  className,
  children,
}) => {
  return (
    <Comp className={clsx("px-4 py-8 md:py-10 md:px-6 lg:py-10", className)}>
      <div
        className={clsx(
          "border-red mx-auto flex w-full flex-col gap-y-8",
          size === "small" && "max-w-xl",
          size === "base" && "max-w-3xl",
          size === "wide" && "max-w-4xl",
          size === "widest" && "max-w-6xl",
          size === "full" && "max-w-full"
        )}
      >
        {children}
      </div>
    </Comp>
  );
};
