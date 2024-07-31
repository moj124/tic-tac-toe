import playerConfig from "../utils/playerConfig";

interface ButtonProps {
    key: number;
    value: number;
    index: number;
    hasWon: boolean
    onClick: (key: number) => void;
}

export default function Button({value, index, onClick, hasWon } :ButtonProps) {
  const isDisabled = (value !== 0) || hasWon;

  const getPlayerSymbol = (value: number) => {
    if (value === playerConfig[0].value) return playerConfig[0].symbol;
    if (value === playerConfig[1].value) return playerConfig[1].symbol;
    return '';
  }

  const symbol = getPlayerSymbol(value);

  return (
    <>
        <button 
          onClick={() => onClick(index)}
          disabled={isDisabled}
          className='
            bg-dark-background
            text-gray-300
            border-dark-border
            border-2
            border-solid
            text:sm
            sm:text-4xl
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
