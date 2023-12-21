import clsx from "clsx";

export default function Item({ text, onDelete }) {
  return (
    <article
      className={clsx(
        "border border-white/5 rounded ",
        "flex justify-between",
        "p-2",
        { "bg-red-400": text === "lavar" }
      )}
    >
      <span>{text}</span>
      <span className="cursor-pointer bg-white rounded p-1" onClick={onDelete}>
        ❌
      </span>
    </article>
  );
}
