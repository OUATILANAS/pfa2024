import Dashboard from "views/Dashboard";
import Managers from "views/Admin/Managers";
import Clients from "views/Admin/Clients";
import ContactManager from "views/Admin/ContactManager";
import AddManager from "views/Admin/CRUD/AddManager";
import Icons from "views/Icons";
import Reclamations from "views/Manager/Reclamations";
import RecDetails from "views/Manager/RecDetails";

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
      path: "/reclamations",
      name: "Reclamations",
      icon: "tim-icons icon-single-copy-04",
      component: <Reclamations />,
      layout: "/manager",
    },
    /*{
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
      path: "/icons",
      name: "Icons",
      component: <Icons />,
      layout: "/manager",
    },*/
    {
      path: "/details/:idB",
      component: <RecDetails />,
      layout: "/manager",
    },
  ];

  export default routes;