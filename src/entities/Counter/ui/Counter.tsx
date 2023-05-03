import { classNames } from 'shared/lib/className/className';
import { useDispatch, useSelector } from 'react-redux';
import { CounterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string
}
export const Counter = (props: CounterProps) => {
    const { className } = props;
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(CounterActions.increment());
    };

    const decrement = () => {
        dispatch(CounterActions.decrement());
    };

    return (
        <div className={classNames('', {}, [className])}>
            <h1 data-testid="counter-value">{counterValue}</h1>
            <button
                data-testid="increment-btn"
                type="button"
                onClick={increment}
                // eslint-disable-next-line i18next/no-literal-string
            >
                increment
            </button>
            <button
                data-testid="decrement-btn"
                type="button"
                onClick={decrement}
                // eslint-disable-next-line i18next/no-literal-string
            >
                decrement
            </button>
        </div>
    );
};
