import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Module(props) {
  return (
    <section className="module">
      <h2 className="section-title">
        <FontAwesomeIcon icon={props.icon} />
        {props.name}
        <FontAwesomeIcon icon={props.icon} />
      </h2>
      <div className="module--container" id="module-container">
        {props.children}
      </div>
    </section>
  );
}
