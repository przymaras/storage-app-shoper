import NavBtn from "./NavBtn";
import NavBtnsGroup from "./NavBtnsGroup";
import NavBtnsContainer from "./NavBtnsContainer";
import PropTypes from "prop-types";

function NavModules(props) {
  const modules = [
    {
      id: "warehouse",
      name: "Magazyn",
      group: [
        {
          id: "module-wares",
          name: "Asortyment",
          icon: ["fab", "algolia"],
        },
        {
          id: "module-weresIn",
          name: "Dostawy",
          icon: ["fab", "algolia"],
        },
        {
          id: "module-weresOut",
          name: "Wydania",
          icon: ["fab", "algolia"],
        },
        {
          id: "module-stocktaking",
          name: "Inwentaryzacja",
          icon: ["fab", "algolia"],
        },
        {
          id: "module-recepies",
          name: "Receptury",
          icon: ["fab", "algolia"],
        },
      ],
      startFolded: false,
    },
    {
      id: "orders",
      name: "Zamówienia",
      group: [
        {
          id: "module-ordersSales",
          name: "Zam. sprzedaży",
          icon: ["fab", "algolia"],
        },
        {
          id: "module-ordersPurchase",
          name: "Zam. zakupu",
          icon: ["fab", "algolia"],
        },
      ],
      startFolded: true,
    },
    {
      id: "raports",
      name: "Raporty",
      group: [
        {
          id: "module-raport1",
          name: "Raport1",
          icon: ["fab", "algolia"],
        },
      ],
      startFolded: true,
    },
    {
      id: "module-contractors",
      name: "Kontrahenci",
      icon: ["fab", "algolia"],
    },
  ];

  function renderModulesNav(modules) {
    return modules.map((module) => {
      let modulesToRender = [];
      if (module.group) {
        modulesToRender.push(
          <NavBtnsGroup
            startFolded={module.startFolded}
            addToFoldGroups={props.addToFoldGroups}
            foldGroups={props.foldGroups}
            name={module.name}
            id={module.id}
            key={module.id}
          >
            {module.group.map((groupItem) => {
              return (
                <NavBtn
                  key={groupItem.id}
                  name={groupItem.name}
                  icon={groupItem.icon}
                  id={groupItem.id}
                  grouped={true}
                  groupId={module.id}
                  navBtnAction={props.navBtnAction}
                />
              );
            })}
          </NavBtnsGroup>
        );
      } else {
        modulesToRender.push(
          <NavBtn
            key={module.id}
            name={module.name}
            icon={module.icon}
            id={module.id}
            navBtnAction={props.navBtnAction}
          />
        );
      }
      return modulesToRender;
    });
  }

  return (
    <>
      <NavBtnsContainer overflow={true}>
        {renderModulesNav(modules)}
      </NavBtnsContainer>
    </>
  );
}

NavModules.propTypes = {
  addToFoldGroups: PropTypes.func.isRequired,
  foldGroups: PropTypes.array.isRequired,
  navBtnAction: PropTypes.func.isRequired,
};

export default NavModules;
