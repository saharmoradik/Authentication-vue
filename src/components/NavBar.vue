<template>
  <div class="container-fluid px-0">
    <nav class="navbar navbar-expand-lg navbar-dark bg-white py-0 px-0">
      <a class="navbar-brand" href="#"
        ><strong><i>App</i></strong></a
      >
      <button
        class="navbar-toggler mr-3"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
body {
}

.bg-white {
  background-color: rgb(214, 202, 202);
}

.navbar-brand {
  padding: 11px 20px;
}

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
