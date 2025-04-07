type SeperatorProps = {
  className?: string;
}

const Seperator = ({ className }: SeperatorProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className={`${className} flex items-center justify-center`}>
        <div className='w-[45%] border-b border-gray-200' /><div className='h-4.5 w-4.5 rounded-full border border-gray-200 m-1' /><div className='w-[45%] border-b border-gray-200' />
      </div>
    </div>
  )
}

export default Seperator;
