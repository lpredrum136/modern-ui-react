import possibilityImg from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="section__padding flex" id="possibility">
      <div className="mr-8 w-1/2">
        <img src={possibilityImg} alt="possibility" />
      </div>
      <div className="flex flex-col justify-end items-start">
        <h4 className="possibility-call-to-action text-[#71E5FF]">
          Request Early Access to Get Started
        </h4>
        <h1 className="gradient__text font-extrabold text-4xl leading-[45px] my-4">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-paragraph font-normal text-base leading-7 mb-8">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4 className="possibility-call-to-action text-[#FF8A71]">
          Request Early Access to Get Started
        </h4>
      </div>
    </div>
  )
}

export default Possibility
