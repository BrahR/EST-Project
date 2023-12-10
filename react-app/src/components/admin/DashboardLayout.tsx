import DashboardIcon from "@/views/admin/assets/images/dashboard.png";
import ChefDepartement from "@/views/admin/assets/images/chefD.png";
import Departement from "@/views/admin/assets/images/department.png";
import ElementModule from "@/views/admin/assets/images/elt_module.png";
import Enseignant from "@/views/admin/assets/images/eneignant.png";
import Filiere from "@/views/admin/assets/images/filiere.png";
import Module from "@/views/admin/assets/images/module.png";
import { Link, Outlet, useLocation } from "react-router-dom";

import "@/views/admin/assets/css/dashboard.css";

export default function Dashboard() {
  const location = useLocation();
  const navigation = [
    { name: "Dashboard", to: "/dashboard", icon: DashboardIcon },
    { name: "Departement", to: "/departement", icon: Departement },
    { name: "Chef de departement", to: "/chef_departement", icon: ChefDepartement},
    { name: "Enseignant", to: "/enseignant", icon: Enseignant },
    { name: "Filière", to: "/filiere", icon: Filiere },
    { name: "Module", to: "/module", icon: Module },
    { name: "Element de module", to: "/element_module", icon: ElementModule },
  ];

  return (
    <div className="alo">
      <div>
        <div className="md cqd cqk crr cuy cwt czd">
          <div className="lx ut yr aat adj ajr ark">
            <div className="lx nl ur yz">
              <img
                className="og tm"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt="Your Company"
              />
            </div>
            <nav className="lx um yr">
              <ul role="list" className="lx um yr aav">
                <li>
                  <ul role="list" className="ga abo">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.to}
                          className={`${
                            location.pathname == item.to
                              ? "ajt bah bqg"
                              : "ayc blu biv"
                          } bqg lx aaf adu aqq awa awp awg`}
                        >
                          <img
                            className="og sj"
                            style={{
                              filter: "invert(1)",
                              width: "24px",
                              height: "24px",
                            }}
                            src={item.icon}
                            alt=""
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="awc awg awp ayc">Your teams</div>
                  <ul role="list" className="ga lb abo">
                    <li>
                      <a
                        href="#"
                        className="ayc blu biv bqg lx aaf adu aqq awa awp awg"
                      >
                        <span className="lx oc se ur yz ze adt aez agf ajp avw awe bah">
                          H
                        </span>
                        <span className="adl">Heroicons</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="ayc blu biv bqg lx aaf adu aqq awa awp awg"
                      >
                        <span className="lx oc se ur yz ze adt aez agf ajp avw awe bah">
                          T
                        </span>
                        <span className="adl">Tailwind Labs</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="ayc blu biv bqg lx aaf adu aqq awa awp awg"
                      >
                        <span className="lx oc se ur yz ze adt aez agf ajp avw awe bah">
                          W
                        </span>
                        <span className="adl">Workcation</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="ge lp">
                  <a href="#" className="lx yz aag ark arz awa awg awp bah biv">
                    <img
                      className="og sj ads ajt"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="t">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="ac dn ej lx yz aai ajr ari asc bbn cfc cvc">
          <button type="button" className="ft aqr ayc cvc">
            <span className="t">Open sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="oc se"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="um awa awg awp bah">Dashboard</div>
          <a href="#">
            <span className="t">Your profile</span>
            <img
              className="og sj ads ajt"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>
        <main className="arr des">
          <div className="ari cfc ddh">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
