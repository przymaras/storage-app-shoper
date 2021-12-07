import NavBtn from "./NavBtn";
import NavBtnsContainer from "./NavBtnsContainer";
import NavFilterWares from "./NavFilterWares";

export default function NavTools(props) {
  let filter;

  switch (props.activeModule) {
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
        {props.activeTools.map((tool) => {
          return (
            <NavBtn
              key={tool.id}
              name={tool.name}
              icon={tool.icon}
              id={tool.id}
              navBtnAction={props.navBtnAction}
            />
          );
        })}
      </NavBtnsContainer>

      {filter}
    </>
  );
}
