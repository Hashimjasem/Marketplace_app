import { Link, NavLink } from "react-router-dom";


const Layout = ({ children }) => {
    return (
        <>
            <div>
                <div className='w-[100%] bg-[#a13e3e] fixed  bottom-0 columns-5'>
                    <div><Link to="/">Home</Link></div>
                    <div><NavLink to="profile">profile</NavLink></div>
                    <div><NavLink to="createpost">Create Post</NavLink></div>
                    <div><NavLink to="liked">Liked</NavLink></div>
                    <div><NavLink to="messages">Messages</NavLink></div>
                </div>
            </div>
            <main>{children}</main>
        </>
    )
}

export default Layout;