import React from "react";
import "./style.css"
import AppData from "./AppData";
import Ai from "/assetss/AI.png"
import Iot from "/assetss/IOT.png";
import Block from "/assetss/block.jpg";
import ML from "/assetss/ML.jpg";
import QC from "/assetss/QC.jpeg";
import Robo from "/assetss/Robotics.png";
import Ds from "/assetss/DS.jpg";
import Sustain from "/assetss/sustan.jpg";
import Health from "/assetss/health.jpg";
import Design from "/assetss/Design.jpg";
import Cyber from "/assetss/cyber.jpg";
import Agri from "/assetss/agri.png";

function ThrustMain() {
  return (
    <>
      <div className="destination obj-">
        <h1>THRUST AREAS</h1>
        <p>
          Embark on a transformative journey across key thrust areas, from
          Artificial Intelligence to Sustainable Development, where innovation
          converges to shape the future of industries and drive meaningful
          progress
        </p>
        <AppData
          className="first-des"
          heading="Artificial Intelligence (AI)"
          text="AI is a transformative technology that empowers machines to mimic human intelligence. It includes natural language processing, machine learning, computer vision, and more. AI's impact spans across industries, from healthcare and finance to marketing and autonomous vehicles. Startups in AI can develop innovative solutions for data analysis, automation, and personalized user experiences, making AI a cornerstone of modern innovation."
          img1={Ai}
        />

        <AppData
          className="first-des-reverse"
          heading="Internet of Things (IoT)"
          text="The Internet of Things (IoT) is revolutionizing how we interact with the world around us. IoT connects everyday devices and systems to the internet, enabling them to collect and share data. This technology has applications in smart homes, industrial automation, environmental monitoring, and much more. Startups in IoT can harness the power of connected devices to create solutions that enhance efficiency, convenience, and sustainability, making IoT an exciting field for innovation."
          img1={Iot}
        />

        <AppData
          className="first-des"
          heading="Blockchain"
          text="Blockchain technology is the backbone of secure and transparent digital transactions. It works as a decentralized ledger, ensuring trust and integrity in data. Beyond cryptocurrencies, blockchain is being adopted in supply chain management, healthcare, and voting systems. Entrepreneurs in this field have the potential to reshape traditional systems, improving security, traceability, and accountability."
          img1={Block}
        />

        <AppData
          className="first-des-reverse"
          heading="Machine Learning"
          text="Machine Learning (ML) is a subset of AI that focuses on teaching computers to learn from data and improve their performance. ML algorithms enable predictive analytics, recommendation systems, and autonomous decision-making. Startups in ML have a vast playground, from personalized healthcare solutions to optimizing manufacturing processes. ML is the driving force behind data-driven innovations across various industries."
          img1={ML}
        />

        <AppData
          className="first-des"
          heading="Robotics"
          text="Robotics is a dynamic field encompassing the design and creation of intelligent machines. These robots can perform tasks autonomously or assist humans in various sectors, from healthcare to manufacturing. Robotics startups have the opportunity to develop solutions that enhance efficiency and safety, such as surgical robots, autonomous drones, and warehouse automation systems."
          img1={Robo}
        />

        <AppData
          className="first-des-reverse"
          heading="Quantum Computing"
          text="Quantum computing is at the forefront of computational innovation. It leverages the principles of quantum mechanics to process information in entirely new ways, enabling faster and more efficient computing. Quantum computing startups can tackle complex problems in fields like cryptography, materials science, and optimization, unlocking unprecedented computing power."
          img1={QC}
        />

        <AppData
          className="first-des"
          heading="Data Sciences"
          text="Data Sciences involve collecting, analyzing, and interpreting large datasets to derive valuable insights and drive data-driven decision-making. This field is vital in a data-rich world, offering opportunities for startups in predictive analytics, business intelligence, and personalized customer experiences across industries."
          img1={Ds}
        />

        <AppData
          className="first-des-reverse"
          heading="Cyber Security"
          text="Cybersecurity is paramount in today's digital landscape, with startups playing a crucial role in safeguarding digital systems and data. As cyber threats continue to evolve, cybersecurity startups develop innovative solutions to protect against breaches, data theft, and cyberattacks, ensuring the security and privacy of businesses and individuals."
          img1={Cyber}
        />

        <AppData
          className="first-des"
          heading="3D Printing and Design"
          text="3D printing is a disruptive technology that enables the creation of three-dimensional objects from digital designs. Startups in 3D printing and design have the potential to revolutionize manufacturing, product prototyping, and healthcare by offering customized and cost-effective solutions."
          img1={Design}
        />

        <AppData
          className="first-des-reverse"
          heading="Agriculture"
          text="Agriculture innovation is essential for addressing global food security and sustainability. Startups in this field can leverage technology to increase crop yields, reduce environmental impact, and enhance farming practices, ultimately contributing to a more sustainable and secure food supply."
          img1={Agri}
        />

        <AppData
          className="first-des"
          heading="Healthcare / Life Science"
          text="In the healthcare and life science sector, startups have the opportunity to make a profound impact on human health and well-being. This field encompasses medical research, biotechnology, and innovative healthcare solutions, offering a wide range of opportunities for technological advancements and improved patient care."
          img1={Health}
        />

        <AppData
          className="first-des-reverse"
          heading="Sustainable Development"
          text="Sustainable development is a global imperative, with startups playing a crucial role in addressing environmental, social, and economic challenges. Solutions in renewable energy, conservation, and responsible urban planning are essential for creating a sustainable and thriving future for al."
          img1={Sustain}
        />
      </div>
    </>
  );
}

export default ThrustMain;