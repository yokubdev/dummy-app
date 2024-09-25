import { Button } from '@nextui-org/react';

interface IProps {
  toggleSidebar: () => void;
}

export const Navbar: React.FC<IProps> = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Button onClick={toggleSidebar}>Toggle Sidebar</Button>
      <h1 className="text-xl">My Application</h1>
    </nav>
  );
};
