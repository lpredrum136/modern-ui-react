import './index.css'

const Article = ({
  imgUrl,
  date,
  text
}: {
  imgUrl: string
  date: string
  text: string
}) => {
  return (
    <div className="h-full flex flex-col bg-footer">
      <div className="bg-gpt3">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="flex flex-col justify-between px-6 py-4 ">
        <div>
          <p className="article-paragraph">{date}</p>
          <h3 className="text-2xl font-extrabold leading-7 text-white mb-20 cursor-pointer">
            {text}
          </h3>
        </div>
        <p className="article-paragraph cursor-pointer">Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
