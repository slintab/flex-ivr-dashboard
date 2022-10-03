import { SideLink, Actions } from "@twilio/flex-ui";

export default ({ activeView }) => {
  return (
    <SideLink
      showLabel={true}
      icon="Dashboard"
      iconActive="DashboardBold"
      isActive={activeView === "IvrDashboard"}
      onClick={() => {
        Actions.invokeAction("NavigateToView", { viewName: "IvrDashboard" });
      }}
    >
      IVR Insights
    </SideLink>
  );
};
