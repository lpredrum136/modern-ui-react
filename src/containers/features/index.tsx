import { Feature } from '../../components'
import { featuresData } from './featuresData'

const Features = () => {
  return (
    <div className="section__padding w-full flex justify-between" id="features">
      <div className="flex justify-start items-start flex-col mr-20 max-w-[25%]">
        <h1 className="gradient__text text-2xl leading-[45px] font-extrabold">
          The Future is Now and You Just Need To Realise It. Step into Future
          Today & Make it Happen.
        </h1>
        <p className="text-base leading-7 font-medium text-subtext mt-8">
          Request Early Access to Get Started
        </p>
      </div>

      <div className="flex flex-col justify-start items-center">
        {featuresData.map(({ text, title }, index) => (
          <Feature
            title={title}
            text={text}
            key={index}
            isMain
            customStyle="mb-8"
          />
        ))}
      </div>
    </div>
  )
}

export default Features
