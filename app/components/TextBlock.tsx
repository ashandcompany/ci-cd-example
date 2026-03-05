interface TextBlockProps {
  content: string;
  span: string;
  index: number;
  verticalAlign?: "start" | "end";
}

export default function TextBlock({ content, span, index, verticalAlign = "start" }: TextBlockProps) {
  const justifyClass = verticalAlign === "end" ? "justify-end" : "justify-start";
  return (
    <div 
      className={`${span} group relative overflow-hidden h-full w-full`}
    >
      {/* Conteneur qui prend toute la hauteur */}
      <div className={`w-full h-full py-6 pe-3 flex flex-col ${justifyClass}`}>
        <p className="text-black text-lg leading-relaxed font-extrabold">
          {content}
        </p>
      </div>
    </div>
  );
}