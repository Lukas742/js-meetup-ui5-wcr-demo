import React from "react";
import { Card, List, StandardListItem } from "@ui5/webcomponents-react";
import { appsData } from "./demo-utils";

export const TopAppsTile = () => {
  return (
    <Card
      heading="Top Applications"
      subheading="Top 5 Applications by hits per 24h"
      className="SmallCard"
    >
      <List>
        {appsData.slice(0, 5).map((item) => (
          <StandardListItem description={item.appId} info={`${item.hits}k`}>
            {item.appName}
          </StandardListItem>
        ))}
      </List>
    </Card>
  );
};
