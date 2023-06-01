import React from 'react';
import { BiLaugh } from "react-icons/bi";
const services = [
  {
    title: 'Web Development',
    description:
      'We create stunning and responsive websites using the latest web technologies.',
    icon: 'fas fa-code',
  },
  {
    title: 'Graphic Design',
    description:
      'Our talented designers create visually captivating graphics for your brand.',
    icon: 'fas fa-paint-brush',
  },
  {
    title: 'Digital Marketing',
    description:
      'We help you reach your target audience and grow your online presence.',
    icon: 'fas fa-bullhorn',
  },
  {
    title: 'Mobile App Development',
    description:
      'We develop cutting-edge mobile applications for iOS and Android platforms.',
    icon: 'fas fa-mobile-alt',
  },
  {
    title: 'UI/UX Design',
    description:
      'We craft intuitive and user-friendly interfaces for seamless user experiences.',
    icon: 'fas fa-palette',
  },
  {
    title: 'Content Writing',
    description:
      'Our expert writers deliver engaging and persuasive content for your business.',
    icon: 'fas fa-pen',
  },
];

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="p-6 shadow-lg rounded-md bg-white">
      <i className={`${icon} text-4xl text-indigo-500 mb-4`} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};


const Page = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Our virtual Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nibh auctor, aliquet nulla eget, efficitur
          odio. In posuere condimentum sollicitudin. Nullam efficitur metus in dapibus suscipit. Integer sit amet mi in
          tellus mollis vestibulum a at nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Sed dignissim enim id nisi viverra aliquam. Vestibulum vel dolor ac lacus iaculis cursus. In sit amet mauris eu
          arcu eleifend placerat.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nibh auctor, aliquet nulla eget, efficitur
          odio. In posuere condimentum sollicitudin. Nullam efficitur metus in dapibus suscipit. Integer sit amet mi in
          tellus mollis vestibulum a at nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Sed dignissim enim id nisi viverra aliquam. Vestibulum vel dolor ac lacus iaculis cursus. In sit amet mauris eu
          arcu eleifend placerat.
        </p>
      </div>
      <div className="text-[500%] flex justify-center ">
  <BiLaugh className="text-gray-300 mb-4" />

  </div>
  <div className=''></div>

    </div>
  );
};

export default Page;

