import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Ok(props) {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(props.backUrl);
      //force refresh page for change to be visible
      window.location.reload(true);
    }, 1500);
  }, [navigate, props]);
  return <h2>Ok</h2>;
}

export default Ok;
