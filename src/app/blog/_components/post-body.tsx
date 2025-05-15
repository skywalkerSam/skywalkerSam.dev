import markdownStyles from "./markdown-styles.module.css";
// import DOMPurify from "dompurify";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="mx-auto max-w-3xl md:text-xl lg:max-w-4xl lg:text-2xl lg:tracking-wide xl:max-w-5xl">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
        // dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
      />
    </div>
  );
}
