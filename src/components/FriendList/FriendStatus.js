export const Status =styles.span`
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => {if (props.color === 'true'){
        return 'green'} else {return 'red'}
    }}`