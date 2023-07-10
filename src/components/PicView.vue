<template>
    <img :src="url" v-bind:alt="pic">
</template>

<script>

export default {

    props: {
        url: String
    }

}

</script>

