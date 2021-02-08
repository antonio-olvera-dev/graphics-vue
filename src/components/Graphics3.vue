<template>
  <div class="graphics3">
      <h1> Donuts </h1>
 <div id="donut">
        <apexchart height="500" type="donut" :options="chartOptions" :series="series"></apexchart>
      </div>
  </div>
</template>

<script>
export default {


    data() {
        return {
            
            series: [44, 55, 41, 17, 15],
          chartOptions: {
            chart: {
              type: 'donut',
              id:"donut",
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
          


        }
    },          
         

}
</script>

<style>

</style>