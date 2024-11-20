import Link from "@/components/link";
import { AppThemeSwitcher } from "@/components/theme";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between border-border border-t pt-2">
      <div className="px-[2px] text-muted text-small flex space-x-3">
        <Link href="https://x.com/blacqee_" text="Twitter" underline />
        <Link href="https://github.com/Tammilore" text="Github" underline />
        <Link href="https://crazyeggs.substack.com/" text="Substack" underline />
        <Link href="mailto:tammilore@gmail.com" text="Email" underline />
      </div>
      <div className="text-muted text-small">
        <AppThemeSwitcher />
      </div>
    </div>
  );
};

export { Footer };
