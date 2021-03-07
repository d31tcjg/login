<template>
  <section class="bg-coolGray-100 text-coolGray-800 rounded">
    <div class="container flex items-center justify-center text-center">
      <form
        @submit.prevent
        class="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-coolGray-800 ng-untouched ng-pristine ng-valid"
      >
        <label for="username" class="self-start text-xs font-semibold"
          >Username or Email</label
        >
        <input
          id="username"
          type="text"
          class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
        />
        <label for="password" class="self-start mt-3 text-xs font-semibold"
          >Password</label
        >
        <input
          id="password"
          type="password"
          class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
        />
        <button
          type="submit"
          @click="login"
          class="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-violet-600 text-coolGray-50"
        >
          Login
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { isAuthenticated } from "../helpers/userAuth";
import { useRouter } from "vue-router";

const router = useRouter();
const login = () => {
  isAuthenticated.value = true;
  router.push("/");
};
</script>
