
function Tooltip(props) {
    const { position ,displayTooltip} = props;
     
    let top, left;
    switch (position) {
        case 'top':
            top = '41vh';
            left = '';
            break;
        case 'bottom':
            top = '53vh';
            left = ''; 
            break;
        case 'left':
            top = '';
            left = '37vw'; 
            break;
        default:
            top = '';
            left = '55vw';            
    }
    console.log(props);
    return ( displayTooltip ?<span style={{
        margin: '.5em',
        backgroundColor: 'black',
        color: 'white',
        position: 'absolute',
        top: top,
        left: left,
        
    }}>Thanks for hovering! I'm a tooltip</span> : '');
}

export default Tooltip
