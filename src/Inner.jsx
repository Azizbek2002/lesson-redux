import { useSelector } from "react-redux"

const Inner = () => {
    const isLight = useSelector((state) => state.mode.isLight)

    const pageStyle = {
        height: 600,
        backgroundColor: isLight ? "aquamarine" : "#013536",
      };

  return (
    <div style={ pageStyle }>Inner Component</div>
  )
}

export default Inner