import Head from 'next/head'
import Image from 'next/image'
import { getHomeData, getSocialLink } from './components/request'
import { HomeDataType, socialLinkType } from './components/types'
import BackgroundSpline from './components/backgroundSpline'
import Header from './components/Header'

interface contentType {
  homeData: HomeDataType
  socialLinks: socialLinkType[]
}

export default function Home({ homeData, socialLinks }: contentType) {
  return (
    <div className='container home-bg'>
      <BackgroundSpline />
      <div className='content demarcation'>
        <Header active='/' />
        <BodyContent homeData={homeData} socialLinks={socialLinks} />

      </div>


    </div>
  )
}

const BodyContent = ({ homeData, socialLinks }: contentType) => {

  return (
    <div className='bodyContent'>
      <div className='infoArea'>
        <h1>{homeData?.welcome_title}</h1>
        <h1>{homeData?.welcome_note}</h1>
        <p>{homeData?.welcome_description}</p>
        <button>Downloand C.V</button>
      </div>
      <div className='visualArea'>
        <div className="cover">
          <Image width="300" height="300" className="homeImage" src={homeData?.user_image} alt={'home-image'}></Image>
        </div>
        <div className='social-container'>
          <div className='info'> connect with me</div>
          <div className='social-links'>
            {socialLinks.map((item, index) => <SocialLink item={item} key={index} />)}


          </div>
        </div>
      </div>
    </div>
  )
}

const SocialLink = ({ item }: { item: socialLinkType }) => {

  return (
    <a href={item?.link} target="_blank" rel="noreferrer" className='link-item'>


      <Image width="24" height="24" className="" alt={item.name} src={item.icon} />

    </a>)
}

export const getServerSideProps = async () => {
  const homeData: HomeDataType | null = await getHomeData();
  const socialLinks: socialLinkType | socialLinkType[] = await getSocialLink();
  return {
    props: {
      homeData,
      socialLinks
    },
  }
}