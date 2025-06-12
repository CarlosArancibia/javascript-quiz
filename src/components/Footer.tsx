export const Footer = () => {
  return (
    <footer className='flex justify-center flex-col sm:justify-between sm:flex-row items-center gap-5'>
      <div>
        <ul className='flex gap-3 font-semibold text-center text-sm sm:text-[16px]'>
          <li>✅ 1 correctas</li>
          <li>❌ 0 incorrectas</li>
          <li>❓9 sin responder</li>
        </ul>
      </div>
      <button className='bg-[#0A0A0A] rounded-md text-white font-semibold p-2 cursor-pointer w-full sm:w-fit'>
        Continuar
      </button>
    </footer>
  )
}
