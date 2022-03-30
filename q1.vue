<template>
<div>
<h1>Question 1</h1>
<h2>Display the table data</h2>
<table align="center">
<thead>
<tr>
<th><b> name </b></th>
<th><b> index</b></th>
</tr>
</thead>
<tbody>
<tr v-for="tabledata in tabledata" :key="tabledata.id">
<td>{{tabledata.name}} </td>
<td>{{tabledata.Index}}</td>
</tr>
</tbody>
</table>
</div>
</template>
<script>
export default {
name: 'tableDataAS',
data(){
return{
    tabledata: [
{ name: "agile CRM", Index: "0" },
{ name: "mantra technologies", Index: "1" },
{ name: "500apps python", Index: "2" },
{ name: "500apps infinity", Index: "3" },
],
}
}
}
</script>
<style scoped>
table {
font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
border-collapse: collapse;
width: 50%;
background-color: white;
}
td,
th {
border: 5px solid #dddddd;
text-align: left;
padding: 8px;
}
</style>
