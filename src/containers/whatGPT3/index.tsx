import { Feature } from '../../components'
import { featuresData } from './featuresData'
import './index.css'

const WhatGPT3 = () => {
  const { main, supplementary } = featuresData
  return (
    <div
      id="whatisgpt3"
      className="flex flex-col p-8 bg-footer section__margin gradient__whatisgpt3 filter-whatisgpt3"
    >
      <div className="flex">
        <Feature title={main.title} text={main.text} isMain />
      </div>

      <div className="flex justify-between items-center mx-0 mt-16 mb-8">
        <h1 className="gradient__text text-3xl leading-10 font-extrabold max-w-lg">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-base leading-4 font-medium text-subtext cursor-pointer">
          Explore The Library
        </p>
      </div>

      <div className="flex mt-8">
        {supplementary.map((sup, index) => (
          <Feature key={index} title={sup.title} text={sup.text} />
        ))}
      </div>
    </div>
  )
}

export default WhatGPT3
