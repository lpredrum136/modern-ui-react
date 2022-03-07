import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
import SingleBrand from './SingleBrand'

const Brand = () => {
  return (
    <div className="section__padding flex justify-center items-center">
      {[google, slack, atlassian, dropbox, shopify].map(brand => (
        <SingleBrand imgSrc={brand} />
      ))}
    </div>
  )
}

export default Brand
