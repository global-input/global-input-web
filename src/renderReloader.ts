import React from "react";

type AvailableListener = (boolean) => void;
let waitingWorker: ServiceWorker | null = null;
const postSkipWaiting = () => {
  waitingWorker && waitingWorker.postMessage({ type: "SKIP_WAITING" });
};

let availableListener: AvailableListener | null = null;
let available = false;
export const onServiceWorkerUpdate = (
  registration: ServiceWorkerRegistration
) => {
  available = true;
  waitingWorker = registration.waiting;
  availableListener && availableListener(available);
};

const reloadPage = () => {
  postSkipWaiting();
  window.location.reload(true);
};

type ReloadPage = () => void;

interface IRenderLoaderProps {
  reloader: (boolean, ReloadPage) => JSX.Element;
}

export const RenderReloader = ({ reloader }: IRenderLoaderProps) => {
  const [needsToReload, setNeedsToReload] = React.useState<boolean>(available);
  availableListener = setNeedsToReload;
  return reloader(needsToReload, reloadPage);
};
