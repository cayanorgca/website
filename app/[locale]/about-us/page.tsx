import { useTranslations } from "next-intl";

export default function Contact() {

  const t = useTranslations('page.about');

    return (
      <>
        <div className="full_bg_container">
            <div className="full_bg about_bg" />
        </div>
        <div className="about_container mt-8 text-centered">
          <div className="about_wrapper text-left">
            <h1 className="contact-title">{t('ourStoryTitle')}</h1>
            <h3 className="contact-subtitle">{t('ourStorySubtitle')}</h3>
          </div>

          <div className="about_wrapper text-left">
            <h1 className="contact-title">{t('ourPhilosophyTitle')}</h1>
            <h3 className="contact-subtitle">{t('ourPhilosophySubtitle')}</h3>
          </div>

          <div className="about_wrapper text-left">
            <h1 className="contact-title">{t('ourMissionTitle')}</h1>
            <h3 className="contact-subtitle">{t('ourMissionSubtitle')}</h3>
            </div>

            <div className="about_wrapper text-left">
              <h1 className="contact-title">{t('ourVisionTitle')}</h1>
              <h3 className="contact-subtitle">{t('ourVisionSubtitle')}</h3>
            </div>
        </div>

      </>
    )
  }
