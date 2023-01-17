import NavElem, {NavElemType} from "./NavElem";
import iconTodo from '../../assets/images/icon-todo.svg'
import iconCalendar from '../../assets/images/icon-calendar.svg'
import iconPlanning from '../../assets/images/icon-planning.svg'
import iconReminders from '../../assets/images/icon-reminders.svg'
const NavElems : NavElemType[] = [
    {
        title : 'Features',
        child : [
            {
                icon : iconTodo,
                title : 'Todo List',
            },
            {
                icon : iconCalendar,
                title : 'Calendar',
            },
            {
                icon : iconReminders,
                title : 'Reminders',
            },
            {
                icon : iconPlanning,
                title : 'Planning',
            },
        ]
    },
    {
        title : 'Company',
        child : [
            {
                title: 'History',
            },
            {
                title: 'Our Team',
            },
            {
                title: 'Blog',
            },
        ]
    },
    {
        title : 'Careers',
    },
    {
        title : 'About',
    },
]
const Nav = () => {
	return (
		<nav className="text-Medium_Gray">
			<div className="flex flex-col">
				<div className=" flex flex-col gap-y-4">
                    {NavElems.map(x=><NavElem {...x}/>)}
				</div>

				<div className="flex flex-col mt-4 gap-y-4">
					<button className="py-2">Login</button>
					<button className="border-2 border-Medium_Gray py-2 rounded-2xl">Register</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav