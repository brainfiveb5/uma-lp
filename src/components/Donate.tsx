import { useDonate } from '../context/DonateContext';
import { useState } from 'react';


const Donate = () => {
  const { isVisible, hideDonate } = useDonate();
  const [copied, setCopied] = useState(false);

  const copyCNPJ = async () => {
    try {
      await navigator.clipboard.writeText('25.088.420.0001-00');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error('Falha ao copiar:', err);
      const textArea = document.createElement('textarea');
      textArea.value = '25.088.420.0001-00';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`
      w-full h-[24%] fixed z-50 bg-white bottom-0 rounded-t-2xl shadow-2xl border-t border-gray-300 p-5
      transition-all duration-500 ease-in-out
      ${isVisible ? 'translate-y-0 opacity-95 visible' : 'translate-y-full opacity-0 invisible'}
      md:top-4 md:w-[30%] md:rounded-l-2xl md:rounded-t-none md: right-0`}>
      <div className="flex justify-end cursor-pointer hover:text-red-500" onClick={hideDonate}>
        X
      </div>

      <div className="flex flex-col justify-center w-full gap-2">
        <div className='flex gap-1'>
          <img width={20} src="pix.svg" alt="" />
          <span>Pix:</span>
        </div>

        <div className='flex justify-center w-full'>
          <div className="border p-2 rounded-l-lg w-[70%]">CNPJ: 25.088.420.0001-00</div>
          <button 
            onClick={copyCNPJ}
            className="w-[30%] border border-black p-2 bg-primary-color flex items-center justify-center gap-1 text-white rounded-r-lg shadow-2xl hover:bg-second-color transition-colors text-sm"
            disabled={copied}
          >
            <img width={20} src="copy.svg" alt="Copy button" /> 
            {copied ? 'Copiado!' : 'copy'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Donate;
