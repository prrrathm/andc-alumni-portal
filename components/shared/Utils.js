export function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(" ");
}