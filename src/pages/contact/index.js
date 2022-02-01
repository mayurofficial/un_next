import style from "../../styles/contact.module.scss"
import Link from "next/link";
import { contactinfo } from "./contactinfo";
import ContactComponent from "@components/Header/ContactComponent";
function Contact() {
  return (
    <>
      <h2 className={style.contact_main_heading}>Contact Us</h2>
      {contactinfo.map((data) => (
        <ContactComponent
          key={data.id}
          title={data.title}
          image={data.image}
          description={data.description}
          link={data.link}
        />
      ))}

      <address className={style.contact_address}>
        International Atomic Energy Agency <br />
        Vienna International Centre <br />
        PO Box 100 1400 Vienna, Austria <br />
        Tel: (+43-1) 2600-0 <br />
        Fax: (+43-1) 2600-7
      </address>
      <Link className={style.contact_home_link} href="https://www.iaea.org">
        www.iaea.org
      </Link>
    </>
  );
}
export default Contact;
