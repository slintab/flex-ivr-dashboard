import React from "react";
import { FlexPlugin } from "@twilio/flex-plugin";
import { View } from "@twilio/flex-ui";
import Dashboard from "./components/Dashboard";
import DashboardSidebarItem from "./components/DashboardSidebarItem";
import { CustomizationProvider } from "@twilio-paste/core/customization";

const PLUGIN_NAME = "FlexIvrDashboardPlugin";

export default class FlexIvrDashboardPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    flex.setProviders({
      PasteThemeProvider: CustomizationProvider,
    });

    flex.ViewCollection.Content.add(
      <View name="IvrDashboard" key="IvrDashboard">
        <Dashboard />
      </View>
    );
    flex.SideNav.Content.add(
      <DashboardSidebarItem key="IvrDashboardSideLink" />
    );
  }
}
