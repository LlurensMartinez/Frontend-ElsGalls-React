import React from 'react';

const navbar = () => {
  return (
    <nav>
      <div className="navbar-fixed">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">PAGINA PRINCIPAL</a></li>
          <li><a href="badges.html">MENU</a></li>
          <li><a href="collapsible.html">TORTILLAS</a></li>
          <li><a href="collapsible.html">COMENTARIOS</a></li>
          <li><a href="collapsible.html">CONTACTO</a></li>
          <li><a href="collapsible.html">UBICACION</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;