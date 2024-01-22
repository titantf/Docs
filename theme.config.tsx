import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

import Image from "next/image";

const config: DocsThemeConfig = {
  logo: () => {
    const title = "titan.tf";
    return (
      <>
        <Image src="/assets/logos/logo.svg" alt="logo" width="32" height="32" />
        <span
          className="font-extrabold hidden md:inline select-none"
          title={`titan.tf: ${title}`}
        >
          titan.tf
        </span>
      </>
    );
  },
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
    text: `©️ titan.tf ${new Date().getFullYear()}.`,
  },
};

export default config;
