<template>
    <div class="page">
        <el-container>
            <el-main>
            

            </el-main>
            
        </el-container>

    </div>
</template>

<script>
    import index from "@/api/index/index";
    export default {
        name: "Index",
        data() {
            return {
                
                
            };
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                
                this.getScreenWidth();
            },
            getScreenWidth() {
                // 首次加载时,初始化高度
                this.screenWidth = window.innerWidth
                this.carouselHeight = 600 / 1450 * this.screenWidth
                // 窗口大小发生改变
                window.onresize = () => {
                    this.screenWidth = window.innerWidth
                    this.carouselHeight = 600 / 1450 * this.screenWidth
                }
            },

           
        },

    };
</script>

<style scoped>
    .page {
        background: #F2F4F8;
    }

    .el-main {
        text-align: center;
        padding: 0 0;
    }

    body>>>.el-container {
        margin-bottom: 40px;
    }

</style>
<style>


</style>