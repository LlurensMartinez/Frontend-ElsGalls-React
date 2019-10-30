import React from 'react';

const menu = () => {

  return (
    <section id="sectionMenu">
      <div className="container">
          <h2>Descubre</h2>
          <h3>MENU DIARIO</h3>
          <p>*********</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum officia temporibus velit facere provident incidunt dolores quia facilis, pariatur consequuntur praesentium dolore unde neque nisi dignissimos veniam vitae iusto?</p>
      </div>
      
      <div className="containerMenu">
          <div className="containerPlates" >
                <div className="containerMiddlePrice containerMiddlePricePosition">
                  <p>Primeros Platos</p>
                </div>
                <div className="imageMenu imageMenuFirstPlate">
                    
                </div>
                  <figure>Paella</figure>
                  <figure>Huevos rellenos</figure>
                  <figure>Consome con yema</figure>
                  <figure>Sopa de galets</figure>
                  <figure>Ensalada con atún</figure>
                  <figure>Judias verdes con patata</figure>
                  <figure>Esparragos con mayonesa</figure>
                  <figure>Gazpacho</figure>
          </div>

          <div className="containerPlates" >
                <div className="containerMiddlePrice containerMiddlePricePosition">
                    <p>Segundos Platos</p>
                </div>
                <div className="imageMenu imageMenuSecondPlate">
                    
                </div>
                  <figure>Marcillas de cebolla y piñones</figure>
                  <figure>Salchichas plancha</figure>
                  <figure>Bistec a la plancha</figure>
                  <figure>Lomo a la plancha</figure>
                  <figure>Bacalao con sanfaina</figure>
                  <figure>Surtido de tortillas</figure>
                  <figure>Huevos fritos</figure>
          </div>

          <div className="containerPlates" >
                <div className="containerMiddlePrice containerMiddlePricePosition">
                    <p>Postres</p>
                </div>
                <div className="imageMenu imageMenuDesserts">
                    
                </div>
                  <figure>Flan de huevo</figure>
                  <figure>Cuajada con miel y nueces</figure>
                  <figure>Fruta del tiempo</figure>
                  <figure>Yogurt</figure>
                  <figure>Helados</figure>
                  <figure>Mousse de limon</figure>
          </div>

      </div>

      <div className="ContainerTypesMenu">
          <div className="typesMenu">
            <h4>MENU PRIMERO</h4>
            <div className="typesMenuIcons">
                <i className="material-icons small">room_service</i>
                <i className="plus fas fa-plus"></i>
                <span className="iconMenuStyle"><i className="fas fa-wine-glass-alt"></i></span>
                <i className="plus fas fa-plus"></i>
                <span className="iconMenuStyle"><i className="fas fa-bread-slice"></i></span>
                <i className="plus fas fa-plus"></i>
                <span className="iconMenuStyle"><i className="fas fa-coffee"> o</i></span>
                <span className="iconMenuStyle"><i className="fas fa-ice-cream"></i></span>
            </div>
            <p>8,10€</p>
          </div>

          <div className="typesMenu">
            <h4>MENU SEGUNDO</h4>
            <div className="typesMenuIcons">
                <i class="material-icons small">room_service</i>
                <i class="plus fas fa-plus"></i>
                <span className="iconMenuStyle"><i class="fas fa-wine-glass-alt"></i></span>
                <i class="plus fas fa-plus"></i>
                <span className="iconMenuStyle"><i class="fas fa-bread-slice"></i></span>
                <i class="plus fas fa-plus"></i>
                <span className="iconMenuStyle"><i class="fas fa-coffee"> o</i></span>
                <span className="iconMenuStyle"><i class="fas fa-ice-cream"></i></span>
            </div>  
            <p>9,10€</p>
          </div>

          <div className="typesMenu">
            <h4>MENU COMPLETO</h4>
            <div className="typesMenuIcons">
                <i class="material-icons small">room_service</i>
                <i class="material-icons small">room_service</i>
                <i class="plus fas fa-plus"></i>
                <span className="iconMenuStyle"><i class="fas fa-wine-glass-alt"></i></span>
                <i class="plus fas fa-plus"></i>
                <span className="iconMenuStyle"><i class="fas fa-bread-slice"></i></span>
                <i class="plus fas fa-plus"></i>
                <span className="iconMenuStyle"><i class="fas fa-coffee"> o</i></span>    
                <span className="iconMenuStyle"><i class="fas fa-ice-cream"></i></span>
            </div>
            <p>12,40€</p>
          </div>
      </div>
      
    </section>
  );
};

export default menu;