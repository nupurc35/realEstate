import { useEffect } from "react";
import { trackEvent } from "../analytics/ga4";

export default function usePageView(title) {
  useEffect(() => {
    trackEvent("page_view", {
      page_title: title,
      page_path: window.location.pathname
    });
  }, [title]);
}