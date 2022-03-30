<template>
    <div id=demo>
       <p>name: {{name}}</p>
       <p> mailid:{{mailid}}</p>
       <p>password:{{password}}</p>
       <p>phone no:{{number}}</p>
       <p>Gender:{{gender}}</p>
        </div>
</template>
<script>
export default{
    name:'HelloWord',
    props:{
        name:String,
        mailid:String,
        password:String,
        number:{default:"1234567890"},
        gender:{default:"female"},

    },
}
</script>
