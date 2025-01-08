import { useEffect, useState } from "react";

export const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};


export const useCanonicalLink = (url: string) => {
  useEffect(() => {
    if (!url) return;

    // Check if a canonical link already exists
    let existingTag = document.querySelector('link[rel="canonical"]');
    if (!existingTag) {
      // Create a new canonical link tag
      const linkTag = document.createElement("link");
      linkTag.rel = "canonical";
      linkTag.href = url;
      document.head.appendChild(linkTag);
    } else {
      // Update the href if it already exists
      existingTag.setAttribute("href", url);
    }

    // Cleanup function to remove the tag if necessary
    return () => {
      if (existingTag) {
        document.head.removeChild(existingTag);
      }
    };
  }, [url]);
};


export const useCanonicalPage = (defaultUrl: string) => {
  const [canonicalPage, setCanonicalPage] = useState(false);

  useEffect(() => {
    if (
      window.location.search ||
      (window.location.pathname &&
        window.location.pathname !== "/" &&
        window.location.pathname !== "/index.html")
    ) {
      setCanonicalPage(true);
    }

    if (window.location) {
      const { protocol, hostname } = window.location;
      if (protocol === "https:" && hostname === "globalinput.co.uk") {
        return; // Skip setting canonical page if it's already correct
      }

      console.log("Canonical page is set to true");
      setCanonicalPage(true);
    }
  }, []);

  // Use the useCanonicalLink hook to apply the link
  useCanonicalLink(canonicalPage ? defaultUrl : "");

  return canonicalPage;
};