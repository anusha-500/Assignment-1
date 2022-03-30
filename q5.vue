<template>
<div>
<h2>name:{{name}}</h2>
<input type=text placeholder="enter the text" @change='$emit("userdetails",$event.target.value)'>
</div>
</template>
<script>
export default{
name:"SuKanya",
//props:{
//name:String
//}
methods:{
userdetails(event){
this.$emit("Anusha",event.target.value)
}
}
}
</script>