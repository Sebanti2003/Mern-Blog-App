
const Footer = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-white flex-col items-center gap-2 border-y-2 border-black p-1 flex '>
      <div className='font-bold italic'>Sebi&apos;s Blogg Post</div>
      <div className='font-bold italic'>All Copyright &#0169; encrypted by Goverment of India {2024||Date.now().toLocaleString()}</div>
    </div>
  )
}

export default Footer
