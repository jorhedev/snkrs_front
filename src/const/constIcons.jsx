import {
    FaUserAlt,
    FaUserTie,
    FaOpencart,
    FaPlusCircle,
    FaMinusCircle,
    FaTrashAlt,
    FaCity,
    FaMale,
    FaFemale,
    FaBirthdayCake
} from 'react-icons/fa';
import {
    MdMale,
    MdOutlineFemale,
    MdLock,
    MdEmail,
    MdOutlineEmail,
    MdPerson,
    MdOutlineLocationOn
} from 'react-icons/md';
import {
    BsTelephone,
    BsTelephoneFill,
    BsFillBuildingFill,
    BsBuilding,
    BsSuitHeartFill,
    BsSuitHeart,
    BsPersonVcard,
    BsPersonVcardFill
} from 'react-icons/bs'
import { BiMapPin, BiSolidMapPin } from 'react-icons/bi'
import { IoEarthOutline } from 'react-icons/io5'
import { LiaCitySolid } from 'react-icons/lia'
import { RiArrowLeftDoubleFill } from 'react-icons/ri'
import { TbMapPinCode } from 'react-icons/tb'

export const ICONS = {
    NIT_WHITE: <BsPersonVcard />,
    NIT_BLACK: <BsPersonVcardFill fill={'black'} />,
    USER: <FaUserAlt />,
    ADMIN: <FaUserTie />,
    PERSON: <MdPerson />,
    PHONE_WHITE: <BsTelephone />,
    PHONE_BLACK: <BsTelephoneFill fill={'black'} />,
    BIRTHDAY_BLACK: <FaBirthdayCake />,
    BIRTHDAY_WHITE: <FaBirthdayCake fill={'white'} />,
    TROLLEY: <FaOpencart />,
    PASSWORD: <MdLock />,
    MALE: <MdMale />,
    FEMALE: <MdOutlineFemale />,
    MEN_BLACK: <FaMale fill={'black'} />,
    WOMEN_BLACK: <FaFemale fill={'black'} />,
    E_MAIL_BLACK: <MdEmail fill={'black'} />,
    E_MAIL: <MdOutlineEmail />,
    COUNTRY_WHITE: <IoEarthOutline />,
    COUNTRY_BLACK: <IoEarthOutline />,
    STATE_WHITE: <LiaCitySolid />,
    STATE_BLACK: <LiaCitySolid />,
    CITY: <FaCity />,
    BUILD_WHITE: <BsBuilding />,
    BUILD_BLACK: <BsFillBuildingFill fill={'black'} />,
    LOCATION_WHITE: <BiMapPin fill={'white'} />,
    LOCATION_BLACK: <BiSolidMapPin fill={'black'} />,
    ZIP_CODE_WHITE: <TbMapPinCode fill={'white'} />,
    ZIP_CODE_BLACK: <TbMapPinCode />,
    FAVORITE_BLACK: <BsSuitHeartFill fill={'black'} />,
    FAVORITE_RED: <BsSuitHeartFill fill={'red'} />,
    FAVORITE_WHITE: <BsSuitHeart />,
    PLUS: <FaPlusCircle />,
    MINUS: <FaMinusCircle />,
    TRASH: <FaTrashAlt />,
    ARROW_LEFT_BLACK: <RiArrowLeftDoubleFill fill={'black'} />
}