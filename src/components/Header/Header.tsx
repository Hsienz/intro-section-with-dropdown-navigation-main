import logo from '../../assets/images/logo.svg'
import iconMenu from '../../assets/images/icon-menu.svg'
import iconCloseMenu from '../../assets/images/icon-close-menu.svg'
const Header = (props:{menuOpen:boolean, setMenuOpen:(state:boolean)=>void}) => {
    return (
        <div className='flex justify-between px-4 py-6 relative'>
            <button>
                <img src={logo} alt="" />
            </button>
            <button className="z-10" onClick={()=>props.setMenuOpen(!props.menuOpen)}>
                <img src={props.menuOpen ? iconCloseMenu : iconMenu} alt="" />
            </button>
        </div>
    )
}
export default Header 