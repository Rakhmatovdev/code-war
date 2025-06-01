import { useState,  useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import user from "../../../../public/user/user.png";
import badge from "../../../../public/user/badge.png";
import AuthService from "../../../config/service/auth.service";

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const NavLinks = [
    { path: "/", title: t("navigation.home") },
    { path: "/mquest", title: t("navigation.mquest") },
    { path: "/squest", title: t("navigation.squest") },
    { path: "/duel",   title: t("navigation.duel") },
    { path: "/rating", title: t("navigation.rating") },
    { path: "/about",  title: t("navigation.about") },
    { path: "/contact",title: t("navigation.contact") },
    { path: "/help",   title: t("navigation.help") },
    { path: "/profile", title: t("navigation.profile") },
    {path:"#", title:<p onClick={()=>AuthService.logout()}> {t("navigation.logout")}</p>}
  ];

  // Close drawer on Escape key
  useEffect(() => {
    const onKey = (e:KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);


  return (
    <header className=" sm:mx-20 sm:my-16 px-4 my-4 flex justify-between  text-white">
      <Link to="/" className="flex items-center    pace-x-4 hover:text-white">
        <div>
          <p className="sm:text-3xl font-medium">{t("logo.title")}</p>
          <div className="text-xs sm:text-base 2xl:text-xl">
            <div className="relative w-10 h-10 sm:w-24 mt-4 sm:h-24">
          <img src={user} alt="User avatar" className="rounded-full w-full h-full object-cover" />
          <img src={badge}
               alt="Badge"
               className="absolute bottom-0 sm:left-20 left-8  transform -translate-x-1/2 w-6 h-6 sm:w-12 sm:h-12 rounded-full" />
        </div>
        <p >
            {t("logo.score")} <span>1225</span></p>
          </div>
        </div>
        
      </Link>

      {/* Desktop nav */}
      <nav className="hidden sm:flex gap-4 2xl:gap-5" aria-label="Main navigation">
        {NavLinks.map((item) => (
          <Link key={item.path} to={item.path} className="text-base 2xl:text-xl hover:text-white">
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Mobile menu button */}
      <Button
        type="text"
        icon={<MenuOutlined className="text-white"/>}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="sm:hidden"
      />

      {/* Drawer for mobile */}
      <Drawer
  title={t("logo.title")}
  
  placement="right"
  onClose={() => setOpen(false)}
  open={open}
  closeIcon={<CloseOutlined className="text-white" />}
  bodyStyle={{ padding: 0 }}
  headerStyle={{ background: "#001529", color: "#fff" }}
  drawerStyle={{ background: "#001529" }}
  aria-labelledby="mobile-menu"
>

        <motion.ul
          className="flex flex-col p-4 space-y-4"
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
            closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
          }}
          role="menu"
          aria-label="Mobile navigation"
        >
          <AnimatePresence>
            {NavLinks.map((item) => (
              <motion.li
                key={item.path}
                variants={{
                  open: { x: 0, opacity: 1 },
                  closed: { x: 20, opacity: 0 }
                }}
                className="border-b border-gray-700"
              >
                <Link
                  to={item.path}
                  className="block py-3 text-lg text-white"
                  onClick={() => setOpen(false)}
                  role="menuitem"
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </Drawer>
    </header>
  );
};

export default Header;
