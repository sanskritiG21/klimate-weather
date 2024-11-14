import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
} from "../ui/sidebar";
const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>Header</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>Section1</SidebarGroup>
        <SidebarGroup>Section2</SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Footer</SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
