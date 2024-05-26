export default function BubbleItem({ bubText }: { bubText: string }) {
  return (
    <div className="m-1 h-fit rounded-full border-2 border-solid border-slate-400 p-2 text-center">
      <p className="border-red-500 px-2">{bubText}</p>
    </div>
  );
}
