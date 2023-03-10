import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toDark, toLight } from "./redux/modeSlice";

const Home = () => {
  const getThemeValue = JSON.parse(localStorage.getItem('themeValue'))
  const [isLight, setIsLight] = useState(getThemeValue);
  const dispatch = useDispatch();


  const pageStyle = {
    height: 600,
    backgroundColor: isLight ? "aquamarine" : "#013536",
  };
  const handeClick = () => {
    if(isLight) dispatch(toDark())
    else dispatch(toLight())
    setIsLight(!isLight)
  }
  localStorage.setItem('themeValue', isLight)
  return (
    <div style={pageStyle}>
      <button onClick={handeClick}>Change mode</button>
      <br />
      <br />
      <Link to="/inner">Inner</Link>
    </div>
  );
};

export default Home;
