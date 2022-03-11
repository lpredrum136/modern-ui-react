import './index.css'

const Spacer = () => (
  <div className="w-[38px] h-[3px] bg-gradient-bar shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] mb-1"></div>
)

const Feature = ({
  title,
  text,
  isMain
}: {
  title: string
  text: string
  isMain?: boolean
}) => {
  return (
    <div
      className={`${
        isMain ? 'm-0' : 'm-4 grow min-w-[210px] unset flex-col'
      } w-full flex justify-between items-start`}
    >
      <div className="grow max-w-[180px] mr-8">
        <Spacer />
        <h1 className="font-extrabold text-lg leading-6 tracking-tighter text-white">
          {title}
        </h1>
      </div>
      <div
        className={`${
          isMain ? 'max-w-[700px] ' : 'mt-2 max-w-[390px]'
        }grow-[2]`}
      >
        <p className="font-medium text-sm leading-6 text-primarytext">{text}</p>
      </div>
    </div>
  )
}

export default Feature
