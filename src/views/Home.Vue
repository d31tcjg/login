<template>
  <div class="mt-16">
    <p class="text-3xl mx-auto text-center m-8 tracking-wider font-thin">
      Welcome {{ user?.email || "New User" }}
    </p>
    <img class="h-60 mx-auto" src="../assets/home.svg" alt="Home Image" />
  </div>
</template>

<script setup>
import { user } from "../helpers/useAuth";
</script>
