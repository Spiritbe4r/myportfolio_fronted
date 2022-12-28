import Head from 'next/head'
import Image from 'next/image'
import { getAboutParagraphs, getHomeData, getSocialLink } from './components/request'
import { HomeDataType, aboutType, socialLinkType } from './components/types'
import BackgroundSpline from './components/backgroundSpline'
import Header from './components/Header'

interface contentType {
  paragraphs: aboutType[]
}

export default function About({ paragraphs }: contentType) {
  return (
    <div className='container home-bg about-bg'>
      <BackgroundSpline className='aboutSpline' />
      <div className='content demarcation'>
        <Header active='/about' isDark />
        <BodyContent paragraphs={paragraphs} />

      </div>


    </div>
  )
}

const BodyContent = ({ paragraphs }: contentType) => {

  return (
    <div className='bodyContent'>
      <div className='title'>
        About Me

      </div>
      <div className='context'>

        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vitae excepturi fugit qui saepe perspiciatis ad, eos architecto odio officia sequi voluptates dolore fuga illo! Itaque nemo deleniti officia pariatur iure exercitationem rem, iste eligendi adipisci nam nobis fugiat beatae maxime architecto quas id cum dolore corrupti aut dolorum ut sed. Quo facere veniam atque totam perferendis laboriosam possimus fugit incidunt? Sint et nihil minus cumque repellat sapiente, non quod iste atque impedit quaerat quidem est nobis molestiae corporis, repudiandae numquam tempore magni quasi dicta, delectus sit maxime vitae? Fugiat ipsum harum molestiae pariatur doloremque fugit quaerat, consequuntur corporis magnam excepturi aliquid, voluptatem corrupti nisi eveniet assumenda aut distinctio, reiciendis possimus. Blanditiis dicta itaque hic adipisci tempora quos reiciendis asperiores, voluptates eveniet animi consectetur nemo numquam excepturi enim molestias facere earum distinctio fugit, fugiat unde veritatis obcaecati laudantium. Qui distinctio harum necessitatibus enim a esse incidunt excepturi delectus at quisquam.
        </p>

      </div>
    </div>
  )
}


export const getServerSideProps = async () => {
  const paragraphs: aboutType[] | null = await getAboutParagraphs();

  return {
    props: {
      paragraphs
    },
  }
}