import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
return <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-slate-950">
    <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
            <a 
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                Ojas Kumar Singh
            </a>
            {/* <button>
                <img src="assets/hbr.png" className="w-6 h-6" alt= "toggle"/>
            </button> */}
            <button
            alt="toggle"
            className="group inline-flex w-6 h-6 text-slate-800 bg-white text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition"
            aria-pressed={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            >
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <rect 
            className={`origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${isOpen ? 'translate-x-0 translate-y-0 rotate-[315deg]' : ''}`} 
            y="7" 
            width="9" 
            height="2" 
            rx="1"
            />
            <rect 
          className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${isOpen ? 'rotate-45' : ''}`} 
          y="7" 
          width="16" 
          height="2" 
          rx="1"
        />
        <rect 
          className={`origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${isOpen ? 'translate-y-0 rotate-[135deg]' : ''}`} 
          y="7" 
          width="9" 
          height="2" 
          rx="1"
        />
        </svg>
        </button>
        </div>
    </div>
    </div>
}

export default Navbar;