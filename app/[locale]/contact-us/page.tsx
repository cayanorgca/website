import ContactForm from "@/app/[locale]/components/Contact-form";
import { useTranslations } from "next-intl";

export default function Contact() {

  const t = useTranslations('page');

    return (
      <>
        <div className="full_bg_container">
            <div className="full_bg contact_bg" />
        </div>
        <div className="contact_container mt-8">
          <h1 className="contact-title text-centered">{t('contact.title')}</h1>
          <h2 className="contact-subtitle text-centered">{t('contact.subTitle')}</h2>
          <ContactForm />
        </div>
      </>
    )
  }
