<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import LensDraw from './components/LensDraw.vue'

const leftRadius = ref('50.0')
const rightRadius = ref('-50')
const thickness = ref('5')
const refractiveIndex = ref('1.52')

const newConfigLabel = ref('')
const selectedConfigLabel = ref('')
const configs = ref<any>({})

watch(selectedConfigLabel, (label) => {
  const applyConfig = configs.value[label];
  if (!applyConfig) return;

  leftRadius.value = applyConfig.leftRadius;
  rightRadius.value = applyConfig.rightRadius;
  thickness.value = applyConfig.thickness;
  refractiveIndex.value = applyConfig.refractiveIndex;
});

const handleSaveConfig = () => {
  const configToSave = {
    label: newConfigLabel.value,
    leftRadius: leftRadius.value,
    rightRadius: rightRadius.value,
    thickness: thickness.value,
    refractiveIndex: refractiveIndex.value,
  };

  fetch('https://rffx7spcmx63iv6hoh5iyg54ly0yymkc.lambda-url.us-east-1.on.aws/save_config', {
    method: 'POST',
    body: JSON.stringify(configToSave)
  })
    .then(() => {
      configs.value[configToSave.label] = configToSave;
      newConfigLabel.value = '';
      selectedConfigLabel.value = configToSave.label;
    })
    .catch(() => {
      configs.value[configToSave.label] = configToSave;
      newConfigLabel.value = '';
      selectedConfigLabel.value = configToSave.label;
    })
}

onMounted(() => {
  fetch('https://zqucebsqtr3ll7tvx2jkukpohm0ihqrx.lambda-url.us-east-1.on.aws/list_configs')
    .then(res => res.json())
    .then(data => {
      // Convert the array response into an object with labels as keys
      configs.value = (data.Items as any[]).reduce((p,c) => ({...p, [c.label]: c}), {});
      selectedConfigLabel.value = 'default';
    })
    .catch(() => {
      configs.value = {}
    });
})
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

        <hr class="my-6 h-2" />

        <label for="newConfigLabelInput">Save template as</label>
        <div class="flex mb-4 mt-1">
          <input id="newConfigLabelInput" type="text" v-model=newConfigLabel class="w-full h-8 px-2 mr-2 border" />
          <button v-if="newConfigLabel.length > 0 && !Object.keys(configs).includes(newConfigLabel.trim())" @click=handleSaveConfig class="border px-2">Save</button>
        </div>

        <label for="configSelect">Load template</label>
        <select id="configSelect" v-model=selectedConfigLabel class="w-full h-fit p-1 border mt-1">
          <option :id="id" v-for="{ id, label } in configs" :key=id>{{label}}</option>
        </select>
      </div>
    </header>

    <main>
      <LensDraw :leftRadius=leftRadius :rightRadius=rightRadius :thickness=thickness :refractiveIndex=refractiveIndex />
    </main>
  </div>
</template>
