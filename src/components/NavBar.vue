<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img src="../assets/logo.png" alt="Logo" class="img-fluid"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" href="#"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>
        </ul>
        <div class="d-flex">
          <RouterLink to="/login" class="btn btn-light ms-3 m-1"
            >Login</RouterLink
          >
          <RouterLink
            to="/registration"
            class="btn btn-light ms-3 bg-warning m-1"
            >Sign up</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.active {
  background-color: #fff;
  color: #000 !important;
}

.navbar-nav {
  width: 100%;
}

.nav-link {
  color: inherit !important;
}

.nav-item {
  padding: 6px 20px;
  color: rgb(98, 96, 96);
}

.nav-item:hover {
  color: #000 !important;
}

.right {
  margin-left: auto;
}

.navbar-collapse.collapse.in {
  display: block !important;
}

@media (max-width: 992px) {
  .right {
    margin-left: 0;
  }

  .nav-item {
    width: 100%;
  }
}
</style>
