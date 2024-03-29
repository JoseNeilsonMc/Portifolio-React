import "../styles/Components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

 const InformationContainer = () => {
  return (
    <div>
       <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(48)9 8839-0463</p>
          <ul>
          <li><a href="https://api.whatsapp.com/send?phone=5549998130442&text=Texto%20aqui" target="_blank">whatsapp</a></li>
          </ul>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>neilsonvlcdn@gmail.com</p>
          <ul>
          <li><a href="mailto:neilsonvlcdn@gmail.com">Enviar um e-mail</a></li>
          </ul>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Florianópolis / SC</p>
        </div>
      </div>
    </section>
    </div>
  )
}
export default InformationContainer;