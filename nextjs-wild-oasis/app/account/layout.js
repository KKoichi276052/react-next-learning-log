import SideNavigation from '../_components/SideNavigation';

export const metadata = {
  title: {
    template: '%s | The Wild Oasis',
    default: 'The Wild Oasis',
  },
};

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="">{children}</div>
    </div>
  );
}
