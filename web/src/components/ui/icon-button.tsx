import type { ComponentProps, ReactNode } from "react";
import { tv } from "tailwind-variants";

const iconButton = tv({
  base: "flex items-center justify-center rounded-lg hover:bg-zinc-700 transition-color duration-150",
  variants: {
    size: {
      sm: "size-6",
      md: "size-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface IconButtonProps extends ComponentProps<"button"> {
  icon: ReactNode;
}

export function IconButton({ icon, ...props }: IconButtonProps) {
  return (
    <button type="button" {...props}>
      {icon}
    </button>
  );
}
