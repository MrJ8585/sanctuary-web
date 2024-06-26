import Navbar from '../components/Navbar';

export default function Landing() {
    
    return(
        <div className='w-[100%] h-[100%] bg-[#FFF7FC]'>
            <div className='w-[100%] h-[10%]'>
                <Navbar />
            </div>
            <div>
                <h1>Landing Page</h1>
            </div>
        </div>
    )
};