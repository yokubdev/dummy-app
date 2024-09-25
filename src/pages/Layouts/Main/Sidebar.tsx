import { Button } from '@nextui-org/react';

interface IProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<IProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`bg-gray-700 text-white w-64 p-4 space-y-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
      <Button onClick={toggleSidebar}>Close Sidebar</Button>
      <ul>
        <li className="py-2">
          <a href="#">Dashboard</a>
        </li>
        <li className="py-2">
          <a href="#">Settings</a>
        </li>
        <li className="py-2">
          <a href="#">Profile</a>
        </li>
      </ul>
    </div>
  );
};
