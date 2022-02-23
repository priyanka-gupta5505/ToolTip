import './SelectPosition.css';

function SelectPosition(props) {
    const { onChangePosition } = props;
    return (<select name='position' id='position' onChange={() => onChangePosition()}>
        <option value='top'>Top</option>
        <option value='bottom'>Bottom</option>
        <option value='left'>Left</option>
        <option value='right'>Right</option>
    </select >);
}
export default SelectPosition;