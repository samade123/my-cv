<template>
    <div ref="table"></div>
</template>

<script>
var Tabulator = require('tabulator-tables');

export default {
    props:{
        "data":{
            default:[],
        },
    },
    data(){
        return{
            table:false,
        }
    },
    methods:{

    },
    mounted(){
        this.table = new Tabulator(this.$refs.table, {
            height: "100%",
            data: this.data,
            layout:"fitColumns",
            responsiveLayout: true,
            columns: [
                { title: "Title", field: "data.title", minWidth: 180, responsive: 0 },
                { title: "Description", field: "data.description" },
                { title: "Version", field: "data.version", minWidth: 150, responsive: 0 },
            ],
            rowClick: function (e, row) {
                if (row.getData().data.type == "url") {
                    console.log(row.getData().data);
                    window.open(row.getData().data.url, '_blank');
                }
                else if (row.getData().data.type == "file") {
                    console.log(row.getData().data);
                    window.open(row.getData().data.file, '_blank');
                }
                else {
                    console.log(row.getData().data);
                }
            }
        });
    }
}
</script>
