import React from 'react'; 
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa'
export const Sidebar = () => (
    <div className="sidebar" data-testid="sidebar">
        <ul className="sidebar_generic">
            <li className="inbox">
                <span><FaInbox/></span>
                <span>Inbox</span>
            </li>
            <li className="today">
                <span><FaRegCalendar/></span>
                <span>Today</span>
            </li>
            <li className="next-week">
                <span><FaRegCalendarAlt/></span>
                <span>Next 7 Days</span>
                
            </li>
        </ul>
        <div className="sidebar__middle">
            <span><FaChevronDown/></span>
            <h2>Projects</h2>
        </div>
        <div className="sidebar__projects">
            <ul>
                Projects will be here.
                {/* Project component will go here */}
            </ul>
        </div>
    </div>

);