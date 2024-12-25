

const Header=()=>{
    return(
        <div className="bg-yellow-950 w-auto h-[80px] md:pl-[10px] sm:pl[0] text-white  text-3xl pl-[40px] pt-[25px] flex justify-between items-center">
            Data Fetching
            <nav className="md:flex space-x-10  text-3xl  pr-[50px] text-center">
                <a href ="Home">Home</a>
                <a href ="Shop">Client Side</a>
                <a href ="Shop">Server Side</a>
                </nav>    

        </div>
    )
}


export default Header