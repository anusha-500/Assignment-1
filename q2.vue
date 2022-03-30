<template>
<div>
<h2>This is for Question 2</h2>
<p>Using V-for</p>
<p v-for="tabledata in table_data" :key="tabledata.id">
{{ tabledata.text }}
</p>
</div>
</template>
<script>
export default {
name: "Que2A",
data() {
return {
table_data: [
{ text: "Name : Agile CRM" },
{ text: "description: A Company of Excellence" },
{ text: "years of experience: 12" },
{ text: "location:Hyderabad" },
],
};
},
};
</script>


