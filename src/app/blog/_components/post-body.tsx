import markdownStyles from "./markdown-styles.module.css";
// import DOMPurify from "dompurify";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="mx-auto max-w-3xl text-lg tracking-tight sm:tracking-normal md:max-w-4xl md:text-xl md:tracking-wide lg:text-2xl lg:tracking-wider xl:tracking-widest">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
        // dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
      />
    </div>
  );
}
