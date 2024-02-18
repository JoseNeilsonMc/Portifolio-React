import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from './InformationContainer';
import Avatar from "../img/foto-pefil.png";

import "../styles/Components/sidebar.sass";

 const Sidebar = () => {
  return (
    <div>
        <aside id="sidebar">
      <img src={Avatar} alt="Neilson Santos" />
      <p className="title">Desenvolvedor Web</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn" target="_blank">
        Download currículo
      </a>
    </aside>

    </div>
  )
}
export default Sidebar;
