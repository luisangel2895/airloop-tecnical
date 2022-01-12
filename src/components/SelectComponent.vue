<template>
  <div>
    <select v-model="providerSelected" class="form-control" placeholder="">
      <option
        v-for="(provider, index) in providers"
        :value="provider.recordId"
        :key="index"
      >
        {{ provider.recordName }}
      </option>
    </select>
    <input type="number" v-model="numberOrder" />
    <div class="container-buttons">
      <button @click="sendProvider" type="submit" class="button-send">
        ENVIAR
      </button>
      <button class="button-exit">SALIR</button>
    </div>
    <div class="data-conatiner">
      <ul>
        <li v-for="(providerfinal, key) in allProviders" :key="key">
          {{ providerfinal }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getProviders } from "../services/providers-services";
import { postProviders } from "../services/providers-services";
export default {
  name: "SelectComponent",
  data: () => {
    return {
      providers: [],
      providerSelected: null,
      numberOrder: null,
      allProviders: [],
      key: null,
    };
  },
  methods: {
    sendProvider() {
      const provider = {};
      provider.order_number = this.numberOrder;
      provider.providerid = this.providerSelected;
      provider.bearer_token = this.key;
      this.allProviders.push(provider);
      postProviders(provider).then(console.log);
    },
  },
  mounted() {
    getProviders().then((data) => {
      this.providers = data.data;
      this.key = data.custom_key;
    });
  },
};
</script>
<style scoped>
.data-conatiner {
  color: white;
}
li {
  list-style: none;
}
select {
  background-color: #011c39;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px 0px 0px 10px;
}
input {
  padding: 10px;
  border-radius: 0px 10px 10px 0px;
}
.button-send {
  background-color: #011c39;
  border: none;
  color: white;
  width: 200px;
  height: 50px;
  border-radius: 40px;
  margin-top: 200px;
  margin-right: 20px;
}
.button-send:hover {
  background-color: black;
}
.button-exit {
  background-color: white;
  border: none;
  color: blue;
  width: 200px;
  height: 50px;
  border-radius: 40px;
  margin-top: 200px;
  margin-left: 20px;
}
</style>
