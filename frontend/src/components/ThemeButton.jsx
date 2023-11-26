import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function ThemeButton() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      {theme === "light" ? <MdOutlineDarkMode /> : <CiLight />}
    </button>
  );
}

export default ThemeButton;
