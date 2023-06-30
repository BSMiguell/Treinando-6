import React from "react";
import Head from "next/head";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
