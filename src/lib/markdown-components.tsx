import CopyButton from "@/components/CopyButton";
import { MDXComponents } from "mdx/types";
import reactToText from "react-to-text";
 
// import { CopyButton } from "path/to/copy-button";
 
export const mdxComponents: MDXComponents = {
  pre: (props: JSX.IntrinsicElements["pre"] & { "data-language"?: string }) => (
    <>
      <figcaption className="flex items-center justify-between rounded-t-lg px-4 py-2 bg-[#04181f]">
        <span className="text-sm">
          {props["data-language"]}
        </span>
        {/* <CopyButton text={reactToText(props.children)} /> */}
        <CopyButton text={reactToText(props.children)}/>
      </figcaption>
      <pre
      {...props}
        className=" relative rounded-b-lg rounded-none border px-0 py-4 bg-[#20c4ff]"
        
      />
    </>
  )
}