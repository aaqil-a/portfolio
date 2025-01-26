interface ProjectButtonProps {
    idx : number,
    selected : boolean,
    onProjectButtonClick : (i : number) => void,
}

export default function ProjectButton({idx, selected, onProjectButtonClick} : ProjectButtonProps) {
    function handleClick() {
        onProjectButtonClick(idx);
    }

    return (
        <button 
            className={'rounded-full w-4 h-4 ' + (selected ? 'bg-primary' : 'bg-secondary')}
            onClick={handleClick}
            disabled={selected}
        />
    )
}