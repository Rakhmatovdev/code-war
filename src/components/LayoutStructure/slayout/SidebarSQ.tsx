import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router"
import AuthService from "../../../config/service/auth.service";
import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";


const SidebarSQ = () => {
  const { data: Assigment } = useQuery({
    queryKey: ["Assigment2"],
    queryFn: () => AuthService.getAssignments(),
  });

  const [openKeys, setOpenKeys] = useState<string[]>([]);

    type MenuItem = Required<MenuProps>['items'][number];

 const items: MenuItem[] = Assigment?.map(topic => ({
  key: String(topic.id),
  label: <Link to={`/squest/${topic.id}`}>{topic.title}</Link>,
})) || [];
console.log(Assigment);

    const selectedKeys: string[] = [];
   const [show, setshow] = useState(false)
  return (
    <div className="absolute !z-50  sm:left-24 sm:top-[300px] 2xl:top-80 top-32 left-4 w-28   rounded-xl sm:rounded-2xl"> 
    <MenuOutlined className="text-white p-4 sm:p-0 flex sm:hidden " onClick={()=>setshow(prev=>!prev)}/>
     {show && <Menu
      className=" bg-white/10  rounded-xl  z-[1000] h-24 overflow-y-scroll scroll-none"
      mode="inline"
      style={{ width: 190, overflowY: 'auto',color: 'black',backdropFilter: 'blur(10px)' }}
      items={items}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={keys => setOpenKeys(keys.slice(-1))}
    />}
    <Menu
      className="sm:!bg-white/10 hidden sm:flex flex-col !text-white rounded-xl overflow-y-scroll scroll-none sm:h-[75.5vh] 2xl:h-[78.2vh] "
      mode="inline"
      style={{ width: 190, overflowY: 'auto',color: 'white' }}
      items={items}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={keys => setOpenKeys(keys.slice(-1))}
    />
    </div>
  );
};

export default SidebarSQ;
