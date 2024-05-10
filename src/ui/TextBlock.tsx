export default function TextBlock({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="p-6">
      <p className="py-2 text-xl">{title}</p>
      <p>{text}</p>
    </div>
  );
}
