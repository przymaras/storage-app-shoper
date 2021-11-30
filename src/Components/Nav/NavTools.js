import NavBtn from "./NavBtn";
import NavBtnsContainer from "./NavBtnsContainer";
import NavFilter from "./NavFilter";

export default function NavTools(props) {
  let tools = props.activeTools;

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

      <NavFilter />
    </>
  );
}
