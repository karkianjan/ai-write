import { Button } from "@/components/ui/button";

interface HamburgerMenuProps {
  onClick: () => void;
}

const HamburgerMenu = ({ onClick }: HamburgerMenuProps) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-5 left-5 z-30 flex size-10 flex-col items-center justify-center gap-1.5 rounded-full px-2.5 ring ring-white *:block *:h-0.5 *:w-full *:rounded *:bg-white md:hidden"
    >
      <span />
      <span />
      <span />
    </Button>
  );
};

export default HamburgerMenu;
