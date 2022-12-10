import { connect } from "react-redux";

function counter({ value }: { value: number }) {
    return <div>counter {value}</div>;
}

function mapStateToProps(state: any) {
    return {
        value: state.value,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        increment: (value: number) => dispatch(value),
        decrement: (value: number) => dispatch(value),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(counter);
