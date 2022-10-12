<template>
  <form @submit.prevent="handleSubmit">
    <div
      class="container-fluid d-flex justify-content-center align-items-center h-100"
    >
      <div class="card p-3 text-center py-4">
        <h4>Create account</h4>
        <div>
          <span>Already have an account?</span>
          <a href="#" class="text-decoration-none">Signin</a>
        </div>

        <div class="mt-3 px-3">
          <input
            class="form-control"
            v-model="firstName"
            placeholder="First Name"
          />
        </div>
        <div class="mt-3 px-3">
          <input
            class="form-control"
            v-model="lastName"
            placeholder="Last Name"
          />
        </div>
        <div class="mt-3 px-3">
          <input
            class="form-control"
            v-model="email"
            type="email"
            placeholder="Email"
          />
        </div>

        <div class="mt-3 px-3">
          <input
            class="form-control"
            v-model="userName"
            placeholder="Username"
          />
        </div>
        <div class="mt-3 px-3">
          <input
            class="form-control"
            v-model="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="mt-3 px-3">
          <input
            class="form-control"
            v-model="passwordConfirm"
            type="password"
            placeholder="Password Confirm"
          />
        </div>

        <div class="mt-3 d-grid px-3">
          <button class="btn btn-primary btn-block btn-signup text-uppercase">
            <span>Signup</span>
          </button>
        </div>

        <div class="px-3">
          <div class="mt-2 form-check d-flex flex-row">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="services"
            />
            <label class="form-check-label ms-2" for="services">
              I have read and agree to the terms.
            </label>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        userName: this.userName,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
      };
      console.log("submitted");
      console.log(data);
    },
  },
};
</script>

<style>
.card {
  width: 400px;
  border: none;
  box-shadow: 20px 20px 80px rgb(218, 218, 218);
}

.form-control {
  height: 45px;
  border-radius: 10px;
}

.form-control:focus {
  box-shadow: none;
}

.btn-signup {
  height: 50px;
  border-radius: 10px;
}
</style>
