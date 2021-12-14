function waresTools(id, selectedItems, navigate) {
  console.log(id, selectedItems);
  if (id === "tool-wares-edit") {
    if (selectedItems.length > 1) {
      alert("Zaznacz tylko jedną pozycję!");
    } else if (selectedItems.length === 0) {
      alert("Nic nie zaznaczono!");
    } else {
      navigate(`/module-wares/edit/${selectedItems[0]}`);
    }
  }
}

export { waresTools };
