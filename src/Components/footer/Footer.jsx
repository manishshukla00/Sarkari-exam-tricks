import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='pt-4 pb-4 text-center'>
        <p className='border-t-2 border-b-2'><i class="fa-solid fa-magnifying-glass"></i>This site uses Google AdSense ad intent links. AdSense automatically generates these links and they may help creators earn money.</p>
      </div>

      <div className='mx-auto p-5 flex justify-around'>
        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" >Sarkari Result @X</a></li>
            <li><a href="#" >Sarkari Result @Telegram</a></li>
            <li><a href="#" >Sarkari Result @WhatsApp</a></li>
            <li><a href="#" >Sarkari Result @Instagram</a></li>
            <li><a href="#" >Sarkari Result @Threads</a></li>
            <li><a href="#" >Sarkari Result @Facebook</a></li>
            <li><a href="#" >Sarkari Result @Linkedin</a></li>
            <li><a href="#" >Sarkari Result @Youtube</a></li>
            <li><a href="#" >All Board Exams</a></li>
            <li><a href="#" >Sarkari Result Contact Us</a></li>
            <li><a href="#" >Privacy Policy</a></li>
          </ul>
        </div>

        {/* Apps */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Apps</h3>
          <ul className="space-y-2">
            <li><a href="#" >Android App</a></li>
            <li><a href="#" >Apple IOS App</a></li>
          </ul>
        </div>

        {/* More */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">More</h3>
          <div className="grid grid-cols-3 gap-2">
            <a href="#" >BPSC</a>
            <a href="#" >UPSSSC</a>
            <a href="#" >CCC</a>
            <a href="#" >UP-scholarship</a>
            <a href="#" >IBPS</a>
            <a href="#" >SSC</a>
            <a href="#" >UPSC</a>
            <a href="#" >Air Force</a>
            <a href="#" >Navy</a>
            <a href="#" >RPSC</a>
            <a href="#" >Delhi Dssb</a>
            <a href="#" >Railway</a>
            <a href="#" >UPPCS</a>
            <a href="#">HSSC</a>
            <a href="#" >TET</a>
            <a href="#" >Coast Guard</a>
            <a href="#" >Police Vacancy</a>
          </div >
        </div >

      </div >
    </footer >
  )
}

export default Footer
