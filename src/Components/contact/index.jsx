import React from "react";
import IconList from '../icon_name/index.jsx';
  
export default function Contact({ contactInfo }) {
    return (
      <div className="contactIcon">
        {contactInfo.map(({ info }, index) => (
          <IconList key={index} icon={info.icon} link={info.link} />
        ))}
      </div>
    );
  }
