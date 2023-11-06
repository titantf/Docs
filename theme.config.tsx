import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>titan.tf Docs</span>,
  // logo: () => {
  //   const title = "titan.tf";
  //   return (
  //     <>
  //       <Logo height={12} />
  //       <span
  //         className="mx-2 font-extrabold hidden md:inline select-none"
  //         title={`titan.tf: ${title}`}
  //       >
  //         titan.tf
  //       </span>
  //     </>
  //   );
  // },
  project: {
    link: "https://github.com/titantf/docs",
  },
  chat: {
    link: "https://titan.tf/discord",
  },
  docsRepositoryBase: "https://github.com/titantf/docs",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – titan.tf",
    };
  },
  footer: {
    text: "©️ titan.tf 2023.",
  },
};

export default config;
