///import homeIcon from "../accets/Icons/main";
import { TbSmartHome } from "react-icons/tb";
import { FaSocks } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdAutoGraph } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaPaperclip } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { BiSolidDiscount } from "react-icons/bi";
import { FaCommentDollar } from "react-icons/fa6";
import { LuBadgePercent } from "react-icons/lu";
import { LiaTelegram } from "react-icons/lia";
import { IoMdBasket } from "react-icons/io";
import { MdLoyalty } from "react-icons/md";


export const SidebarData = [

    {
        titel:"Home",
        link:"/",
        Icon: <TbSmartHome className="navIcon" />


    },
    {
        titel:"Products",
        link:"/Products",
        Icon: <FaSocks className="navIcon" />

        

    },
    {
        titel:"Orders",
        link:"/Orders",
        Icon: <FaBox className="navIcon"/>


    },
    {
        titel:"Client",
        link:"/client",
        Icon: <FaPeopleGroup className="navIcon"/>


    },
    {
        titel:"Reports",
        link:"/Reports",
        Icon: <MdAutoGraph className="navIcon" />

    },
    {
        titel:"qustions and rates",
        link:"/qustions and rates",
        Icon: <MdMessage className="navIcon"  />

    },
    {
        titel:"Definition pages",
        link:"/qustions and rates",
        Icon: <FaPaperclip className="navIcon"  />

    },
    {
        titel:"history",
        link:"/qustions and rates",
        Icon: <FaHistory className="navIcon" />

    },
    {
        titel:"Discount coupons",
        link:"/qustions and rates",
        Icon: <BiSolidDiscount className="navIcon" />

    },
    {
        titel:"Affiliate marketing",
        link:"/qustions and rates",
        Icon: <FaCommentDollar   className="navIcon" />

    },
    {
        titel:"Specials",
        link:"/qustions and rates",
        Icon: <LuBadgePercent  className="navIcon" />

    },
    {
        titel:"Marketing campaigns",
        link:"/qustions and rates",
        Icon: <LiaTelegram  className="navIcon" />

    },
    {
        titel:"Abandoned baskets",
        link:"/qustions and rates",
        Icon: <IoMdBasket className="navIcon" />

    },
    {
        titel:"Loyalty system",
        link:"/qustions and rates",
        Icon: <MdLoyalty  className="navIcon" />

    }
];