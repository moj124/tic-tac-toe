import Button from "./Button";

interface ButtonListProps {
    list: number[];
    onClick: (index: number) => void;
}

export default function ButtonList({ list, onClick }: ButtonListProps) {
  return (
    <>
        {list.map((cell, index) =>
        <Button 
            key={index}
            index={index}
            value={cell}
            onClick={onClick}
      />
    )}
    </>
  )
}