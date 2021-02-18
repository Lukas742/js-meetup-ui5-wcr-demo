import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  ShellBar,
  ThemeProvider,
} from "@ui5/webcomponents-react";
import React from "react";
import "./App.css";
import { UsageChartTile } from "./UsageChartTile";
import { TopAppsTile } from "./TopAppsTile";
import { AllAppsTile } from "./AllAppsTile";

// npm create react-app my-app --template @ui5/webcomponents-react

function App() {
  return (
    <ThemeProvider>
      <ShellBar primaryTitle="Demo UI5 Web Components for React" />
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
        wrap={FlexBoxWrap.Wrap}
        style={{ padding: "1rem" }}
      >
        <TopAppsTile />
        <UsageChartTile />
        <AllAppsTile />
      </FlexBox>
    </ThemeProvider>
  );
}

export default App;
