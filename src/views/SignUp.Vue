<template>
  <section class="text-coolGray-800 rounded">
    <div class="flex items-center justify-center text-center">
      <form
        @submit.prevent
        class="flex flex-col w-full mt-12 max-w-lg p-12 rounded shadow-lg bg-coolGray-100 text-coolGray-800 ng-untouched ng-pristine ng-valid"
      >
        <label for="username" class="self-start text-xs font-semibold">
          Enter your Email</label
        >
        <input
          id="username"
          v-model="email"
          type="text"
          placeholder="email"
          class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
        />
        <label for="password" class="self-start mt-3 text-xs font-semibold"
          >Enter your Password</label
        >
        <input
          id="password"
          type="password"
          v-model="password"
          placeholder="Password min 6 characters"
          class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
        />
        <button
          type="submit"
          @click="SignUp"
          class="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-violet-600 text-coolGray-50"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { submit } from "../helpers/signUp";
import { useRouter } from "vue-router";

const router = useRouter();
const SignUp = async () => {
  try {
    await submit(email.value, password.value);
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
const email = ref("");
const password = ref("");
</script>
