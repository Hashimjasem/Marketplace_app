

const Layout =({children}) =>{
    return(
        <>
        <div>
            <div className='w-[100%] bg-[#a13e3e] fixed bottom-0 columns-5'>
                <div>home</div>
                <div>profile</div>
                <div>create post</div>
                <div>liked</div>
                <div>messages</div>          
            </div>
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;