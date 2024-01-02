import Dashboard from "views/Dashboard";
import Managers from "views/Admin/Managers";
import Clients from "views/Admin/Clients";
import ContactManager from "views/Admin/ContactManager";
import AddManager from "views/Admin/CRUD/AddManager";


var routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      rtlName: "لوحة القيادة",
      icon: "tim-icons icon-chart-pie-36",
      component: <Dashboard />,
      layout: "/manager",
    },
    {
      path: "/managers",
      name: "Managers",
      icon: "tim-icons icon-badge",
      component: <Managers />,
      layout: "/manager",
    },
    {
      path: "/clients",
      name: "Clients",
      icon: "tim-icons icon-badge",
      component: <Clients />,
      layout: "/manager",
    },
    {
      path: "/contact",
      component: <ContactManager />,
      layout: "/manager",
    },
    {
      path: "/addmanager",
      component: <AddManager />,
      layout: "/manager",
    },
  ];

  export default routes;