import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Calcom() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {});
    })();
  }, []);

  return (
    <div className="items-center p-4 z-0">
      <Cal calLink={process.env.NEXT_PUBLIC_CALCOM_LINK} />
    </div>
  );
}