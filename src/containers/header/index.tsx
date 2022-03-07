import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './index.css'

const Header = () => {
  return (
    <div id="home" className="flex justify-between section__padding">
      <div className="flex flex-col grow justify-center items-start mr-20">
        <h1 className="gradient__text font-extrabold text-[62px] leading-[75px] tracking-tighter">
          Let's Build Something Amazing with GPT-3 OpenAI
        </h1>

        <p className="text-xl leading-7 text-paragraph mt-6">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="flex w-full mt-8 mx-0 mb-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className="bg-footer rounded-tl-md rounded-bl-md grow-[2] border-2 border-footer email-inputs "
          />
          <button
            type="button"
            className="grow-[0.6] font-bold bg-[#FF4820] rounded-tr-md rounded-br-md email-inputs"
          >
            Get Started
          </button>
        </div>

        <div className="flex w-full justify-start items-center mt-8">
          <img src={people} alt="people" />
          <p className="text-white my-0 ml-4 mr-0 font-medium text-[12px]">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={ai} alt="ai" className="w-full h-full" />
      </div>
    </div>
  )
}

export default Header
