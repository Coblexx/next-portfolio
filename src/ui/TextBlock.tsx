export default function TextBlock({ content }: { content: string[] }) {
  const [title, text] = content;

  return (
    <div className="p-6">
      <p className="py-2 text-xl">{title}</p>
      <p>{text}</p>
    </div>
  );
}
