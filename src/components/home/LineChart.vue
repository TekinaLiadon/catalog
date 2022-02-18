<template>
  <canvas ref="myChart" id="myChart"></canvas>
</template>

<script>
import {Chart, registerables} from "chart.js";
import DataChart from "./DataChart";

Chart.register(...registerables);
export default {
  name: "LineChart",
  data(){
    return {
      config: DataChart,
    }
  },
  mounted() {
    new Chart(this.$refs.myChart, this.config)
  }
}
</script>

<style scoped>

</style>