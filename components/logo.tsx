import { cn } from "@/lib/utils";

export const Logo = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "font-nunito font-black text-3xl md:text-4xl tracking-tight text-primary lowercase select-none leading-none",
        className,
      )}
      {...props}
    >
      zygo
    </span>
  );
};
