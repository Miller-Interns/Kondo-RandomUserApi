<script setup lang="ts">



</script>

<template>
  <div class="bg">
    <div class="parent">
      <div class="div1">Random User Profiles </div>
      <div class="div2">User Profile</div>
      <div class="div3">All Users</div>
    </div>
  </div>
</template>

<style >
body{
  margin: 0;
  padding: 0;
}
</style>


<style scoped>
body {
  margin: 0;
  padding: 0;
}

.bg {
  width: 100vw;
  height: 100vh; /* FULL SCREEN */
  display: flex;
  align-items: stretch;
  justify-content: center;
  box-sizing: border-box;

  /* Background always fills screen */
  background: linear-gradient(135deg, #9cc46b 0%, #5fae63 100%);
}

/* GRID fills screen */
.parent {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
  
  box-sizing: border-box;
}

/* CARD STYLE */
.div1,
.div2,
.div3 {
  display: grid;
  place-items: center;
  background: #ffffff;
  color: #333;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

/* Header */
.div1 {
    grid-column: span 5 / span 5;
}

.div2 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 4;
    grid-row-start: 2;
}

.div3 {
    grid-column: span 3 / span 3;
    grid-row: span 4 / span 4;
    grid-column-start: 1;
    grid-row-start: 2;
}


/*Reversed



.div1 {
    grid-column: span 5 / span 5;
}

.div2 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-row-start: 2;
}

.div3 {
    grid-column: span 3 / span 3;
    grid-row: span 4 / span 4;
    grid-column-start: 3;
    grid-row-start: 2;
}

*/


</style>
