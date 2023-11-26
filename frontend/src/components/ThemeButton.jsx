import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/slices/themeSlice';

function ThemeButton() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
    {theme}
    </button>
  );
}

export default ThemeButton;
