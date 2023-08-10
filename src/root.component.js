import React from "react";
import { links } from "./root.helper.js";
import { Link } from "@reach/router";
import { Button, DateFormatter as DateFormatterFromStyledGuide } from "@react-mf/styleguide";

import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";

import bgNumbers from "cldr-numbers-full/main/bg/numbers.json";
import bgLocalCurrency from "cldr-numbers-full/main/bg/currencies.json";
import bgCaGregorian from "cldr-dates-full/main/bg/ca-gregorian.json";
import bgDateFields from "cldr-dates-full/main/bg/dateFields.json";

import deNumbers from "cldr-numbers-full/main/de/numbers.json";
import deLocalCurrency from "cldr-numbers-full/main/de/currencies.json";
import deCaGregorian from "cldr-dates-full/main/de/ca-gregorian.json";
import deDateFields from "cldr-dates-full/main/de/dateFields.json";

import { IntlProvider, load } from "@progress/kendo-react-intl";
import { DateFormatter } from "./date.component.js";


load(
  likelySubtags,
  currencyData,
  weekData,
  bgLocalCurrency,
  bgNumbers,
  bgCaGregorian,
  bgDateFields,
  deLocalCurrency,
  deNumbers,
  deCaGregorian,
  deDateFields
);

export default function Root(props) {
  return (
    <IntlProvider locale="de">
    <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
      <div className="flex items-center justify-between">
        {links.map((link) => {
          return (
            <Link key={link.href} className="p-6" to={link.href}>
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <DateFormatter date={new Date()} />
            <DateFormatterFromStyledGuide date={new Date()}/>
          </div>
          <Button>Testes</Button>
      </div>
    </div>
    </IntlProvider>
  );
}
