import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/Components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link:<a href="https://www.linkedin.com/in/neisonsantos/#:~:text=www.linkedin.com/in/neisonsantos" target="_blank">Linkedin</a>},
  { name: "github", icon: <FaGithub />,link:<a href="https://github.com/JoseNeilsonMc" target="_blank"></a> },
 // { name: "instagram", icon: <FaInstagram /> },
];

 const SocialNetworkContainer = () => {
  return (
    <div>
         <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} 
           className="social-btn" 
           id={network.name} 
           key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>

    </div>
  )
}
export default SocialNetworkContainer;
