import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/Components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

 const SocialNetworkContainer = () => {
  return (
    <div>
         <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="#" 
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
