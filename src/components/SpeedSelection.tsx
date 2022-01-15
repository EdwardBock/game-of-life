
type SpeedSelectionProps = {
    value: number
    onChange: (number) => void
}

export default function SpeedSelection(
    {value, onChange}: SpeedSelectionProps
){
    return <select value={value} onChange={e=>{ onChange(parseInt(e.target.value))} } >
        <option value={150}>150ms</option>
        <option value={300}>300ms</option>
        <option value={600}>600ms</option>
        <option value={1000}>1s</option>
        <option value={3000}>3s</option>
        <option value={5000}>5s</option>
        <option value={10000}>10s</option>
    </select>;
}