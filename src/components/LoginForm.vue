<template>
  <form @submit.prevent="handlerSubmit">
    <div
      class="container-fluid d-flex justify-content-center align-items-center h-100"
    >
      <div class="card p-3 text-center py-4">
        <h4>Log in</h4>

        <div class="mt-3 px-3">
          <input
            class="form-control"
            v-model="email"
            placeholder="Email"
            required
          />
          <div class="invalid-feedback">Please enter your email</div>
        </div>

        <div class="mt-3 px-3">
          <input
            class="form-control"
            v-model="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <div class="mt-3 d-grid px-3">
          <button class="btn btn-primary btn-block btn-signup text-uppercase">
            <span>Login</span>
          </button>
          <div v-if="error" class="alert text-danger">
            {{ error }}
          </div>
        </div>

        <div class="px-3">
          <div class="mt-2 form-check d-flex flex-row">
            <RouterLink to="/forgotPassword" class="ms-2" href="#">
              Forgot Password?
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async handlerSubmit() {
      try {
        const user = {
          email: this.email,
          password: this.password,
        };
        const response = await axios.get(
          `results?email=${user.email}&&password=${user.password}`
        );

        localStorage.setItem("id", response.data[0].id);
        this.$store.dispatch("user", response.data[0].id);
        this.$router.push("/");
      } catch {
        this.error = "Invalid username or password!";
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.container {
  margin: 50px auto;
}
.panel-heading {
  text-align: center;
  margin-bottom: 10px;
}
#forgot {
  min-width: 100px;
  margin-left: auto;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
.form-inline label {
  padding-left: 10px;
  margin: 0;
  cursor: pointer;
}
.btn.btn-primary {
  margin-top: 20px;
  border-radius: 15px;
}
.panel {
  min-height: 380px;
  box-shadow: 20px 20px 80px rgb(218, 218, 218);
  border-radius: 12px;
}
.input-field {
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ddd;
}
input[type="text"],
input[type="password"] {
  border: none;
  outline: none;
  box-shadow: none;
  width: 100%;
}
.fa-eye-slash.btn {
  border: none;
  outline: none;
  box-shadow: none;
}
img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
}
a[target="_blank"] {
  position: relative;
  transition: all 0.1s ease-in-out;
}

.bordert {
  border-top: 1px solid #aaa;
  position: relative;
}
.bordert:after {
  content: "or connect with";
  position: absolute;
  top: -13px;
  left: 33%;
  background-color: #fff;
  padding: 0px 8px;
}
@media (max-width: 360px) {
  #forgot {
    margin-left: 0;
    padding-top: 10px;
  }
  body {
    height: 100%;
  }
  .container {
    margin: 30px 0;
  }
  .bordert:after {
    left: 25%;
  }
}
</style>
