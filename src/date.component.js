import React from "react";

import { useInternationalization } from "@progress/kendo-react-intl";


export const DateFormatter = (props) => {
  const intl = useInternationalization();

  return (
    <div>
      <span>{intl.formatDate(props.date, "EEEE, d.MM.y")}</span>
    </div>
  );
};