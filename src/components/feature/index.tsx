const Spacer = () => (
  <div className="w-[38px] h-[3px] bg-gradient-bar shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] mb-1"></div>
)

const Feature = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="m-4 w-full flex justify-between items-start">
      <div className="grow max-w-[180px] mr-8">
        <Spacer />
        <h1 className="font-extrabold text-lg leading-6 tracking-tighter text-white">
          {title}
        </h1>
      </div>
      <div className="max-w-[700px]">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
