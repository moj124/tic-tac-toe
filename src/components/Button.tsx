interface ButtonProps {
    key: number;
    value: number;
    index: number;
    onClick: (key: number) => void;
}

export default function Button({value, index, onClick } :ButtonProps) {
  const isDisabled = value !== 0;
  const symbol = value === 1 ? 'X' : value === -1 ? '0' : '';

  return (
    <>
        <button 
          onClick={() => onClick(index)}
          disabled={isDisabled}
          className='
            bg-white
            text-black
            border-gray-100
            border-2
            border-solid
            text-4xl
            rounded
            font-bold
            p-8
            size-28
          '
          >
            {symbol}
        </button>
    </>
  )
}
