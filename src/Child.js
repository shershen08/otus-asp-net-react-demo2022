import PropTypes from 'prop-types';

export default function Child(props) { //

    setTimeout(() => {
        props.handleClick('time 1500 passed')
    }, 1500)

    return (
        <span className="blue"
            onClick={() => props.handleClick(props.data)}
        >{props.data}</span>
    )
}

Child.propTypes = {
    data: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}

Child.defaultProps = {
    handleClick: () => {}
}