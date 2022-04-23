<script setup>
import { ref } from 'vue'

const str = ref('some str')
const reversedStr = ref('')

function sendToServer () {
	fetch('API-request-reverse-str', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({"str": str.value})
		})
		.then(response => response.json())
		.then(data => reversedStr.value = data.reversedStr);
	}
</script>

<template>
	<form @submit.prevent="sendToServer">
		<input v-model="str">
		<button>send to server</button>
  </form>
  <div v-if="reversedStr">
  	Str from server: "{{ reversedStr }}"
  </div>
</template>

<style scoped>
	form, div {
		text-align: center;
		margin: 20px;
	}
	* {
		font-size: 20px;
	}
</style>

	
