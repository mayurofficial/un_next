import React from "react";
import Image from 'next/image'
import style from '../../styles/publication.module.css'
import Link from "next/link";
function PublicationComponent(props) {
  return (
    <div className={style.publication_main_container}>
      <div className={style.publication_image_container} >
        <Image src={props.image} alt={props.title} height="184px" width="130px"/>
      </div>
      <div className={style.publication_content_container}>
        <div className={style.publication_heading}>{props.title}</div>
        <div className={style.publication_content}>{props.description}</div>
          <Link href={props.pdfLink} passHref={false} prefetch={false}>view &#10095;</Link>
      </div>
    </div>
  );
}
export default PublicationComponent;
