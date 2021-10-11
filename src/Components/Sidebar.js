import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        // <!-- Sidebar -->
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</Link>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0" />

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <Link className="nav-link" to="/">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider" />

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    React Routing
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        <i className="fas fa-fw fa-cog"></i>
        <span>Components</span>
    </a>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <Link className="collapse-item" to="/button">Buttons</Link>
            <Link className="collapse-item" to="/cards">Cards</Link>
        </div>
    </div>
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Utilities</span>
    </a>
    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <Link className="collapse-item" to="/colors">Colors</Link>
            <Link className="collapse-item" to="/borders">Borders</Link>
        </div>
    </div>
</li>

<hr className="sidebar-divider" />

<div className="sidebar-heading">
                CRUD
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Operations</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link className="collapse-item" to="/create">Create</Link>
                        <Link className="collapse-item" to="/read">Read / View</Link>
                    </div>
                </div>
            </li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider d-none d-md-block" />

{/* <!-- Sidebar Toggler (Sidebar) --> */}
<div className="text-center d-none d-md-inline">
    <button className="rounded-circle border-0" id="sidebarToggle"></button>
</div>


{/* <!-- Sidebar Message --> */}
<div className="sidebar-card d-none d-lg-flex">
    <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
    <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
</div>
</ul>
    )
}
