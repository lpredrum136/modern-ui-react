import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'
import { Article } from '../../components'

const defaultProps = {
  date: 'Sep 26, 2021',
  text: 'GPT-3 and Open AI is the future. Let us exlore how it is?'
}

const Blog = () => {
  return (
    <div className="section__padding flex flex-col" id="blog">
      <div className="text-left mb-20">
        <h1 className="gradient__text text-6xl leading-[75px] font-extrabold">
          A lot is happening.
          <br />
          We are blogging about it.
        </h1>
      </div>
      <div className="flex">
        <div className="mr-8">
          <Article imgUrl={blog01} {...defaultProps} />
        </div>
        <div className="grid grid-cols-2 gap-8">
          {[blog02, blog03, blog04, blog05].map((blog, index) => (
            <Article imgUrl={blog} key={index} {...defaultProps} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
