function commonSelectedItemsChange(
  current_id,
  heading_id,
  allItemsArray,
  objectKeyOfId,
  selectedItemsArray,
  setNewState
) {
  if (current_id === heading_id) {
    //changed header checkbox
    if (!selectedItemsArray.includes(heading_id)) {
      //checked header checkbox
      const allItemsIDs = allItemsArray.map((item) => item[objectKeyOfId]);
      setNewState([...allItemsIDs, heading_id]);
    } else {
      //unchecked header checkbox
      setNewState([]);
    }
  } else if (!selectedItemsArray.includes(current_id)) {
    //checked single checkbox
    setNewState((prevState) => [...prevState, current_id]);
  } else {
    //unchecked single checkbox
    setNewState((prevSelected) =>
      prevSelected.filter(
        (selection) => selection !== current_id && selection !== heading_id
      )
    );
  }
}

export { commonSelectedItemsChange };
