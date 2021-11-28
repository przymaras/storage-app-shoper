import NavBtn from "./NavBtn";
import NavBtnsContainer from "./NavBtnsContainer";
import NavFilter from "./NavFilter";

export default function NavTools(props) {
  let tools = [];

  for (let i = 0; i < 6; i++) {
    tools.push({ id: i + 1, name: `NARZĘDZIE ${i + 1}` });
  }

  return (
    <>
      <NavBtnsContainer overflow={true}>
        {tools.map((module) => {
          return (
            <NavBtn
              key={module.id}
              name={module.name}
              icon={["fab", "algolia"]}
              id={`nav-btn-module${module.id}`}
              grouped={true}
            />
          );
        })}
      </NavBtnsContainer>

      <NavFilter />
    </>
  );
}
