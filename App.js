import React, { Component } from "react";

import { TeaNavigator, Theme } from "teaset";
import TeasetExampleHome from "./views/Home";

export default function App() {
  return <TeaNavigator rootView={<TeasetExampleHome />} />;
}
