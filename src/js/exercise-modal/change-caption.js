export default function changeCaption(str, btn) {
  const textNode = btn.childNodes[0];
  textNode.nodeValue = str;
}
