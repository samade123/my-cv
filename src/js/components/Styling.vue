<template></template>

<script>
export default {
    props: {
        architectStartingBlock: {
            default: false,
        },
    },
    data() {
        return {};
    },
    mounted() {
            setTimeout(() => {
                
                var style = document.createElement("style");
            console.log(
                "color background",
                this.architectStartingBlock.data.backgroundColor,
            );
            
            style.type = "text/css";
            style.innerHTML = `

            body {
                background: ${this.architectStartingBlock.data.backgroundColor};
            }
            
            main {
                display: inline-block;
                background: ${this.architectStartingBlock.data.backgroundColor};
                background-size: cover;
                background-image: url("${this.architectStartingBlock.data.backgroundImage ? this.architectStartingBlock.data.backgroundImage : ""}");
                color: ${this.architectStartingBlock.data.primaryColor};
            }

            header {
                display: flex;
                background-color: ${this.architectStartingBlock.data.headerBackgroundColor};
                color: ${this.architectStartingBlock.data.headerPriamryColor};
            }

            // .panel {
            //     background-color: ${this.architectStartingBlock.data.secondaryColor};
            // }

            .tabulator {
                border-color: ${this.architectStartingBlock.data.backgroundColor};
                border-bottom: none;
                border-right: none;
            }

            .tabulator .tabulator-header {
                background-color: ${this.architectStartingBlock.data.tabulatorHeaderBackgroundColor};
                border-color: ${this.architectStartingBlock.data.tabulatorHeaderBackgroundColor};
                color: ${this.architectStartingBlock.data.tabulatorHeaderColor};
            }

            .tabulator .tabulator-header .tabulator-col {
                border-color: ${this.architectStartingBlock.data.tabulatorHeaderBackgroundColor};
            }

            .tabulator .tabulator-header .tabulator-col.tabulator-sortable:hover {
                filter: brightness(115%);
                opacity: 0.75;
                background-color: ${this.architectStartingBlock.data.tabulatorHeaderBackgroundColor};
                color: ${this.architectStartingBlock.data.tabulatorHeaderColor};

            }
            // .tabulator .tabulator-tableHolder .tabulator-table .tabulator-row.tabulator-row-even {
            //     border-color: ${this.architectStartingBlock.data.tabulatorHeaderBackgroundColor};
            //     background-color: ${this.architectStartingBlock.data.secondaryColor};
            // }
            // .tabulator .tabulator-tableHolder .tabulator-table .tabulator-row {
            //     border-color: ${this.architectStartingBlock.data.tabulatorHeaderBackgroundColor};
            //     background-color: ${this.architectStartingBlock.data.secondaryColor};
            // }
            // .tabulator .tabulator-tableHolder .tabulator-table .tabulator-row .tabulator-cell {
            //     border-color: ${this.architectStartingBlock.data.tabulatorHeaderBackgroundColor};
            //     border-left: 1px solid  ${this.architectStartingBlock.data.tabulatorHeaderBackgroundColor};
            //     background-color: ${this.architectStartingBlock.data.secondaryColor};
            // }
            // .tabulator .tabulator-tableHolder .tabulator-table .tabulator-row.tabulator-selectable:hover {
            //     filter: brightness(90%);
            //     background-color: ${this.architectStartingBlock.data.secondaryColor};
            // }
            .tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort="none"] .tabulator-col-content .tabulator-arrow {
                color: ${this.architectStartingBlock.data.secondaryColor};
                border-bottom: 6px solid ${this.architectStartingBlock.data.secondaryColor};            
            }

            .panel-wrapper .pdf-fullscreen .scroll-style::-webkit-scrollbar-thumb {
                background-color: ${this.architectStartingBlock.data.headerBackgroundColor};
            // background: black;
             }


        /* Handle on hover */
           .panel-wrapper .pdf-fullscreen .scroll-style::-webkit-scrollbar-thumb:hover {
                background-color: ${this.architectStartingBlock.data.headerBackgroundColor};
            // background: black;
            }
`;
        document.getElementsByTagName("head")[0].appendChild(style);
            });
    },
};
</script>
