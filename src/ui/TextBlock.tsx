export default function TextBlock({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-96 p-6 md:max-w-none">
      <p className="py-2 text-xl">{title}</p>
      <p>{text}</p>
    </div>
  );
}
