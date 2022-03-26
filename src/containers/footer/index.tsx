import gpt3Logo from '../../logo.svg'
import './index.css'

const FooterLinks = () => (
  <>
    {[
      {
        title: 'Links',
        links: ['Overons', 'Social Media', 'Counters', 'Contact']
      },
      {
        title: 'Company',
        links: ['Terms & Conditions', 'Privacy Policy', 'Contact']
      },
      {
        title: 'Get in touch',
        links: [
          'Crechterwoord K12 182 DK Alknjkcb',
          '085-132567',
          'info@payme.net'
        ]
      }
    ].map(({ title, links }) => (
      <div className="footer-flexed">
        <h4 className="text-sm leading-4 text-white mb-4">{title}</h4>
        {links.map(link => (
          <p className="text-xs leading-4 text-white my-2 cursor-pointer">
            {link}
          </p>
        ))}
      </div>
    ))}
  </>
)

const Footer = () => {
  return (
    <div className="section__padding flex flex-col justify-center items-center bg-footer">
      <div className="text-center mb-12">
        <h1 className="gradient__text font-extrabold text-6xl leading-[75px]">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="flex justify-center items-center p-4 border border-solid border-white text-center mb-[10rem] cursor-pointer">
        <p className="text-lg leading-5 text-white word-spacing-wide">
          Request Early Access
        </p>
      </div>

      <div className="flex justify-between items-start flex-wrap w-full text-left">
        <div className="footer-spaced flex flex-col">
          <img
            src={gpt3Logo}
            alt="gpt3_logo"
            className="w-[118px] h-[30px] mb-4"
          />
          <p className="text-xs text-white">
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <FooterLinks />
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs leading-4 text-white">
          @2021 GPT-3. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
