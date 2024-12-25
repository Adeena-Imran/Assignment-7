
import Link from "next/link"


const Herosec=()=>{
    return(
        <div className="flex  flex-col items-center justify-center min-h-screen ">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-yellow-950 ">
        Data Fetching Assignment
      </h1>
    <p className="text-center text-lg md:text-2xl text-yellow-950 mt-4 "> 
        Explore Client Side Renderring and Server Side Renderring with Next.js</p>
        <Link href="Client-Side-Renderring">
        <button className=" border border-yellow-950 w-[300px] h-[80px] text-white bg-yellow-950  mt-10 px-6 py-2 " >
         Client Side Renderring
        </button>
        </Link>
        
        <Link href="Server-Side-Renderring">
        <button className=" border border-yellow-950 w-[300px] h-[80px] text-white bg-yellow-950  mt-10 px-6 py-2 " >
          Server Side Renderring
        </button>
        </Link>
       
      
    </div>
    )
}

export default Herosec