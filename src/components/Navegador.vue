<template>
  <div class="navegador-optime">
    <b-navbar toggleable="lg" type="dark" fixed="top" class="color-navbar">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-button v-b-toggle.sidebar-menu>
          <b-icon icon="arrow-right-circle-fill"></b-icon>
        </b-button>
        <!-- Items derecho -->

        <b-navbar-nav class="ml-auto" v-if="user">
          <b-nav-item href="#">
            <b-icon icon="bell"></b-icon>
          </b-nav-item>
          <b-nav-item href="#">
            <b-icon icon="search"></b-icon>
          </b-nav-item>
          <b-nav-item href="#">
            <b-icon icon="fullscreen"></b-icon>
          </b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Usuario</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Config</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item href="#"></b-nav-item>
          <b-nav-item href="#">
            <b-button class="w-100" variant="primary">
              Register
            </b-button>
          </b-nav-item>
          <b-nav-item href="#">
            <b-button class="w-100">
             Login
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- sidebar -->

    <b-sidebar
      body-class="background-sidebar-2"
      header-class="background-sidebar color-blanco"
      id="sidebar-menu"
      shadow
    >
      <div class="container-fluid background-sidebar-2">
        <div class="row">
          <div class="col-12 text-center background-sidebar">
            <img
              style="width:200px; height:200px; padding-bottom:20px"
              src="https://i.ibb.co/bzmgNp7/cashier2-117800.png"
            />
          </div>
        </div>

        <div class="row mt-2 background-sidebar-2">
          <div class="col-12 text-center">
            <b-button style="width:100%" size="lg" variant="success">
              <b-icon icon="minecart-loaded"></b-icon>
            </b-button>
          </div>
          <div class="col-12 row align-items-center h-100">
            <router-link class="col-12 row mt-2 p-3 text-white no-style" to="/dashboard">
              <div class="col-4 text-center">
                <b-icon icon="columns-gap"></b-icon>
              </div>
              <div class="col-8">Dashboard</div>
            </router-link>
            <router-link class="col-12 row mt-2 p-3 text-white no-style" to="/storage">
              <div class="col-4 text-center">
                <b-icon icon="box-seam"></b-icon>
              </div>
              <div class="col-8">Inventario</div>
            </router-link>
            <router-link class="col-12 row mt-2 p-3 text-white no-style" to="/clients">
              <div class="col-4 text-center">
                <b-icon icon="basket2"></b-icon>
              </div>
              <div class="col-8">Clientes</div>
            </router-link>
            <router-link class="col-12 row mt-2 p-3 text-white no-style" to="/sellers">
              <div class="col-4 text-center">
                <b-icon icon="person"></b-icon>
              </div>
              <div class="col-8">Vendedores</div>
            </router-link>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "Navegador",
  components: {},
  data: function() {
    return {
      user: false
    };
  }
};
</script>

<style>
.background-sidebar {
  background-color: #222d32;
}
.background-sidebar-2 {
  background-color: #2c3b41;
}
.color-blanco {
  color: white;
}
.color-navbar {
  background-color: #4d52b9 !important;
}
.no-style:hover {
  text-decoration: none;
}
</style>