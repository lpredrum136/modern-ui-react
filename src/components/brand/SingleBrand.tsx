const SingleBrand = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="m-4 min-w-[120px]">
      <img src={imgSrc} alt={imgSrc} />
    </div>
  )
}

export default SingleBrand
