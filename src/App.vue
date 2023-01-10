<script setup lang="ts">
import { ref } from 'vue'
import LensDraw from './components/LensDraw.vue'

const leftRadius = ref<number>(50.0)
const rightRadius = ref<number>(-50)
const thickness = ref<number>(5)
const refractiveIndex = ref<number>(1.52)
</script>

<template>
  <div class="flex">
    <header class="w-1/4">
      <div class="bg-black h-24"><img alt="Meetoptics logo" src="./assets/logo.jpeg" /></div>
      <div class="p-6 font-bold text-gray-600">
        <label for="leftRadiusInput">Left Radius (cm)</label>
        <input id="leftRadiusInput" type="range" min="-100" max="100" step="0.5" v-model=leftRadius class="w-full h-2 bg-red-100 appearance-none" />
        <hr class="my-4" />
        
        <label for="rightRadiusInput">Right Radius (cm)</label>
        <input id="rightRadiusInput" type="range" min="-100" max="100" step="0.5" v-model=rightRadius class="w-full h-2 bg-red-100 appearance-none" />
        <hr class="my-4" />
        
        <label for="thicknessInput">Lens Thickness (cm)</label>
        <input id="thicknessInput" type="range" min="0.1" max="10" step="0.1" v-model=thickness class="w-full h-2 bg-red-100 appearance-none" />
        <hr class="my-4" />
        
        <label for="refractiveIndexInput">Refractive Index (dimensionless)</label>
        <input id="refractiveIndexInput" type="range" min="1.01" max="2" step="0.01" v-model=refractiveIndex class="w-full h-2" />
      </div>
    </header>

    <main>
      <LensDraw :leftRadius=leftRadius :rightRadius=rightRadius :thickness=thickness :refractiveIndex=refractiveIndex />
    </main>
  </div>
</template>
