import Organizers from "@/components/organizers/Organizers";
import Image from "next/image";
import lines from "/public/linesOrganizers.svg"
const OrganizersPage: React.FC = () => {

  return (
    <div className='  w-full overflow-hidden bg-side text-white'>
       <h1 className="hidden">BEC 2024 Інженерні змагання організатори</h1>
      <Organizers/>
    </div>
       
  );
};

export default OrganizersPage;