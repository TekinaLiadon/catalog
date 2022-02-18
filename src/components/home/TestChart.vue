<template>
  <div>
    <DoughnutChart ref="doughnutRef" :chartData="testData" :options="options"/>
    <div v-for="stat in data" :key="stat.label" class="control-form">
      <label class="control-form__item">{{ stat.label }}</label>
      <span class="control-form__item">{{ stat.value }}</span>
      <button @click="remove(stat)" class="btn btn-light control-form__item">X</button>
      <input type="range" v-model="stat.value" min="0" max="100" class="form-range">
    </div>

    <div class="row g-3 align-items-center control-form" id="add">
      <div class="col-auto">
        <input name="newlabel" v-model="newLabel" class="form-control">
      </div>
      <div class="col-auto">
        <button @click.prevent="add" class="btn btn-light">Добавить</button>
      </div>
      <div class="col-auto">
        <button @click="shuffleData" class="btn btn-light">Перемешать</button>
      </div>
    </div>
  </div>
</template>

<script>
import {shuffle} from 'lodash';
import {computed, ref, onMounted} from 'vue';
import {DoughnutChart} from 'vue-chart-3';
import {Chart, registerables} from "chart.js";

Chart.register(...registerables);


export default {
  name: "TestChart",
  components: {DoughnutChart},
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    console.log(props.data)
    // Пропажа элемента массива происходит тут
    const data = ref(props.data);
    const doughnutRef = ref();

    const options = ref({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Диаграмма приколов',
        },
      },
    });

    const testData = computed(() => ({
      labels: data.value.map(item => item.label),
      datasets: [
        {
          data: data.value.map(item => item.value),
          backgroundColor: data.value.map(item => item.backgroundColor),
        },
      ],
    }));

    function shuffleData() {
      data.value = shuffle(data.value);
    }

    const newLabel = ref('')

    function add() {
      if (!newLabel.value) return
      data.value.push({
        label: newLabel.value,
        value: 100,
        backgroundColor: '#77CEFF',
      })
      newLabel.value = ''
    }

    onMounted(add)

    function remove(stat) {
      if (data.value.length > 3) {
        data.value.splice(data.value.indexOf(stat), 1)
      } else {
        alert("Низя")
      }
    }

    onMounted(remove)

    return {testData, shuffleData, doughnutRef, options, newLabel, add, remove,};
  },
}
</script>

<style scoped>
.control-form {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.control-form > span {
  border-bottom: 1px solid;
  padding: 0.2rem;
}

.btn-light {
  border: 1px solid;
}

.control-form__item {
  margin-right: 2rem;
}
</style>