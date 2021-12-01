import NavBtn from "./NavBtn";
import NavBtnsContainer from "./NavBtnsContainer";
import NavFilterWares from "./NavFilterWares";

export default function NavTools(props) {
  const tools = props.activeTools;
  const activeModule = props.activeModule;
  let filter;

  switch (activeModule) {
    case "module-wares":
      filter = <NavFilterWares setFilterState={props.setFilterState} />;
      break;

    default:
      filter = undefined;
      break;
  }

  return (
    <>
      <NavBtnsContainer overflow={true}>
        {tools.map((tool) => {
          return (
            <NavBtn
              key={tool.id}
              name={tool.name}
              icon={tool.icon}
              id={tool.id}
              handleClick={props.handleClick}
            />
          );
        })}
      </NavBtnsContainer>

      {filter}
    </>
  );
}
