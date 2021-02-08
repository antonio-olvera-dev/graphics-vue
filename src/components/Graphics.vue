<template>
  <div class="graphics">
<h1>Graphics</h1>
   <div>
     <apexchart height="500" width="70%" type="bar" :options="chartOptions" :series="series"></apexchart>
   </div>
   
  </div>
</template>

<script>
export default {
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'graphics-1'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
          name: 'series-2',
          data: [20, 30, 25, 90, 29, 80, 78, 12]
        },
        ]
      }
    },
};
</script>

<style>

</style>