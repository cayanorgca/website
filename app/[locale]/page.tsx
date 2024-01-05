import { FC } from 'react';
import { LangParamProps } from '@/interfaces/commonProps.interface';
import Head from 'next/head';
import EventsCarousel from './components/Eventscarousel';
import Slideshow from './components/SlideImages';
import ProgramCard from './components/ProgramsCards';
import { ProgramCardInterface } from '@/interfaces/programCard.interface';
import { useTranslations } from 'next-intl';

const programs: ProgramCardInterface[] = [
  {
    id: '1',
    titleKey: 'program1title',
    descKey: 'program1subtitle',
    imageUrl: '/images/women@community.jpg'
  },
  {
    id: '2',
    titleKey: 'program2title',
    descKey: 'program2subtitle',
    imageUrl: '/images/immigration_support.jpg'
  },
  {
    id: '3',
    titleKey: 'program3title',
    descKey: 'program3subtitle',
    imageUrl: '/images/education_and_jobs.jpg'
  },
  {
    id: '4',
    titleKey: 'program4title',
    descKey: 'program4subtitle',
    imageUrl: '/images/webinars.jpg'
  }
  // {
  //   id: '5',
  //   titleKey: 'Marrying young muslims',
  //   descKey: 'Helping our young to get married and educating them on matters of marriage and marital life',
  //   imageUrl: '/images/muslim-wedding.jpg'
  // }
]

const Home : FC<LangParamProps> = ({ params: {locale}}) => {

  const canonicalUrl: string = `/${locale}`;
  const t = useTranslations();

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Slideshow />
      <div className="container">
          <h2 className='primary-title'>{t('page.home.ourServices')}:</h2>
        {
          programs.map((program: ProgramCardInterface) => {
            return <ProgramCard key={program.id} titleKey={t(`programs.${program.titleKey}`)}  descKey={t(`programs.${program.descKey}`)} imageUrl={program.imageUrl}/>
          })
        }
        {/* <h2 className='primary-title'>{t('page.home.ourEvents')}:</h2>
        <EventsCarousel params={{locale}} /> */}
      </div>
    </>
  )
}

export default Home;