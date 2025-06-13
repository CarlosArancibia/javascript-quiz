interface Props {
  current: number
  total: number
}

export const ProgressBar = ({ current, total }: Props) => {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className='w-full h-3 bg-gray-200 rounded-full overflow-hidden'>
      <div
        className='h-full bg-yellow-400 transition-all duration-300'
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
