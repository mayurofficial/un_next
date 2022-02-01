import React from "react";
import Image from "next/image";
import style from "../../styles/contact.module.scss"
function ContactComponent(props) {
  return (
    <div className={style.contact_container}>
      <div className={style.contact_logo}>
        <Image src={props.image} width="40" height="40" alt="logo" />
      </div>
      <div className={style.contact_detail_wrap}>
        <div className={style.contact_subHeading}>{props.title}</div>
        <div className={style.contact_description}>{props.description}</div>
        <a
          className={style.contact_link}
          href="mailto:ne-nptds@iaea.org?subject=ARIS_Question"
        >
          {props.link}
            <Image
              src="/assets/images/contact/arrow.svg"
              width="30"
              height="12"
              alt="arrow"
            />
        </a>
      </div>
    </div>
  );
}

export default ContactComponent;
