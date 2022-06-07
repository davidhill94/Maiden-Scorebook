import { useDispatch, useSelector } from 'react-redux';
import { incrementLastTen, incrementLastTenFull } from '../../actions/Bowling';

function HandleLastTen(nr) {
    const lastTen = useSelector(state => state.lastTen);
    const dispatch = useDispatch();

    const handleLastTen = (nr) => {
        if (lastTen.length < 10) {
            dispatch(incrementLastTen(nr))
        } else if (lastTen.length >= 10) {
            dispatch(incrementLastTenFull(nr))
        }
    }

}

export default HandleLastTen