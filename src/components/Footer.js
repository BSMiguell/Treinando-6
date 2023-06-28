import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-black font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between ">
        <span>{new Date().getFullYear()}&copy; All Rights reserved. </span>
        <div className="flex items-center">
          Build With <span className="text-red-500 text-2x1 px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="https://github.com/BSMiguell "
            target={"_blank"}
            className="underline underline-offset-2
"
          >
            BSM
          </Link>
        </div>
        <Link href="/">Say hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
