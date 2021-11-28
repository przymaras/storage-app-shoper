import NavBtn from "./NavBtn";
import NavBtnsGroup from "./NavBtnsGroup";
import NavBtnsContainer from "./NavBtnsContainer";

export default function NavModules(props) {
  let modules = [];

  for (let i = 0; i < 10; i++) {
    modules.push({ id: i + 1, name: `MODUŁ ${i + 1}` });
  }

  return (
    <>
      <NavBtnsContainer overflow={true}>
        <NavBtnsGroup name="GRUPA 1" id="buttons-group-1">
          {modules.slice(0, 6).map((module) => {
            return (
              <NavBtn
                key={module.id}
                name={module.name}
                icon={["fab", "algolia"]}
                id={`nav-btn-module${module.id}`}
                grouped={true}
                handleClick={props.handleClick}
              />
            );
          })}
        </NavBtnsGroup>

        {modules.slice(6, 8).map((module) => {
          return (
            <NavBtn
              key={module.id}
              name={module.name}
              icon={["fab", "algolia"]}
              id={`nav-btn-module${module.id}`}
              handleClick={props.handleClick}
            />
          );
        })}

        <NavBtnsGroup name="GRUPA 2" id="buttons-group-2">
          {modules.slice(8, 10).map((module) => {
            return (
              <NavBtn
                key={module.id}
                name={module.name}
                icon={["fab", "algolia"]}
                id={`nav-btn-module${module.id}`}
                grouped={true}
                handleClick={props.handleClick}
              />
            );
          })}
        </NavBtnsGroup>
      </NavBtnsContainer>
    </>
  );
}
