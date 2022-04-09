import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
let Footer = () => {
  return (
    <footer
      style={{
        height: 100,
        backgroundColor: "#418193",
        color:"#fff"
      }}
      //  className="sticky-bottom"
    >
        <div className="d-flex justify-content-center">
            <div className="pt-4"><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> copyright 2022</div>
            {/* <FontAwesomeIcon className="fab fa-facebook-square" />
            <FontAwesomeIcon icon="fa-duotone fa-alien" /> */}
        </div>
    </footer>
  );
};
export default Footer;
