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
      layout: "/client",
    },
    {
      path: "/managers",
      name: "Managers",
      icon: "tim-icons icon-badge",
      component: <Managers />,
      layout: "/client",
    },
    {
      path: "/clients",
      name: "Clients",
      icon: "tim-icons icon-badge",
      component: <Clients />,
      layout: "/client",
    },
    {
      path: "/contact",
      component: <ContactManager />,
      layout: "/client",
    },
    {
      path: "/addmanager",
      component: <AddManager />,
      layout: "/client",
    },
  ];

  export default routes;