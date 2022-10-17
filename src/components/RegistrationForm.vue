<template>
  <form @submit.prevent="handleSubmit">
    <div
      class="container-fluid d-flex justify-content-center align-items-center h-100"
    >
      <div class="card p-3 text-center py-4">
        <h4>Create account</h4>
        <div>
          <span>Already have an account?</span>
          <RouterLink to="/login" href="#" class="text-decoration-none"
            >Signin</RouterLink
          >
        </div>

        <div class="mt-3 px-3">
          <input
            class="form-control"
            v-model="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div class="mt-3 px-3">
          <input
            class="form-control"
            v-model="lastName"
            placeholder="Last Name"
            required
          />
        </div>
        <div class="mt-3 px-3">
          <input
            class="form-control"
            v-model="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div v-if="userExistError" class="alert text-danger p-0 m-0">
          {{ userExistError }}
        </div>

        <div class="mt-3 px-3">
          <input
            class="form-control border"
            v-model="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div class="mt-3 px-3">
          <input
            class="form-control border"
            v-model="passwordConfirm"
            type="password"
            placeholder="Password Confirm"
            required
          />
        </div>

        <div class="mt-3 d-grid px-3">
          <button class="btn btn-primary btn-block btn-signup text-uppercase">
            <span>Signup</span>
          </button>
        </div>
        <div v-if="passwordError" class="alert text-danger">
          {{ passwordError }}
        </div>

        <div class="px-3">
          <div class="mt-2 form-check d-flex flex-row">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="services"
              required
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
import axios from "axios";

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
      passwordError: "",
      userExistError: "",
    };
  },
  methods: {
    async handleSubmit() {
      const userExist = await axios.get(`results?email=${this.email}`);
      if (userExist) this.userExistError = "This user alrealy exists!";
      /////////////////////////////Axios//////////////////////////////////
      if (this.password === this.passwordConfirm && !this.userExistError) {
        await axios.post(`results`, {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          userName: this.userName,
          password: this.password,
          passwordConfirm: this.passwordConfirm,
        });
        this.$router.push("/login");
      } else {
        this.passwordError =
          "Password does not matched.Please enter password correctly!";
      }
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
