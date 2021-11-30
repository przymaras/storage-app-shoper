export default function fixFAonClick(e) {
  // there are font awesome icons inside button and they causing nested e.target when clicked on icon or its area
  let ev = {};
  if (e.target.nodeName === "path") {
    ev = { target: e.target.parentNode.parentNode };
  } else if (e.target.nodeName === "svg") {
    ev = { target: e.target.parentNode };
  } else {
    ev = e;
  }
  return ev;
}
