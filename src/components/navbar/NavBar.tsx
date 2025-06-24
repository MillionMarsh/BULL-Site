
import './NavBar.css'
const NavbarComp = () => {
  return (
<div className="relative w-full bg-white">

  {/* Bull Logo */}
  <div className="absolute top-2 left-6 z-20 flex items-center space-x-2">
    <img src="/bull-logo.png" alt="Bull" className="h-10" />
    <span className="text-3xl font-bold text-red-600">BULL</span>
  </div>

  {/* Arasan Logo */}
  <div className="absolute top-2 right-6 z-20 flex items-center space-x-2">
    <img src="/arasan-logo.png" alt="Arasan" className="h-10" />
  </div>

  {/* Top Info Bar - centered content */}
  <div className="w-3/4 mx-auto bg-[#838282] text-white text-sm font-semibold px-8 py-2 relative z-10 polygon-top transform translate-x-[30px]">
    <div className="flex justify-center items-center space-x-6">
      <span>ABOUT US</span>
      <span>MEDIA</span>
      <span>CAREER</span>
      <span>SERVICE SUPPORT</span>
      <span>987654321</span>
    </div>
  </div>

  {/* Navbar - centered content */}
  <div className="w-3/4 mx-auto bg-[#414141] text-white px-10 py-3 relative z-10 polygon-top transform -translate-x-[30px]">
    <div className="flex justify-center items-center space-x-8 text-sm font-semibold">
      <a href="#" className="hover:text-yellow-400">HOME</a>
      <div className="relative group">
        <a href="#" className="hover:text-yellow-400 flex items-center">
          OUR PRODUCTS <span className="ml-1 text-yellow-400">▼</span>
        </a>
      </div>
      <a href="#" className="hover:text-yellow-400">CONTACT US</a>
    </div>
  </div>
</div>








  );
};

export default NavbarComp;
