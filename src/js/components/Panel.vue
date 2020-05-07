<template>
    <div :class="['panel',panelType]">
        <div :class="['panel-heading',{'accordion-toggle':inAccordion}]" @click.prevent="inAccordion&&toggle()">
            <slot name="header">
                <div class="header-left">
                    <slot name="header-left"></slot>
                    <h4 class="panel-title"><i v-if="icon" class="fa" :class="icon"></i>{{ title }}<slot name="header-title"></slot><slot name="header-btn"></slot> </h4>
                    <div v-if="desc" class="panel-description">{{ desc }}</div>
                </div>
                <div class="header-right"><slot name="header-right"></slot></div>
            </slot>
        </div>
        <transition
        name="collapse"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        >
        <div class="panel-collapse" v-if="open">
            <div class="panel-body">
                <slot></slot>
            </div>
        </div>
    </transition>
    <div class="panel-footer"><slot name="footer"></slot></div>
</div>
</template>

<script>
export default {
    props: {
        icon: {type: String},
        title: {type: String},
        desc: {type: String},
        isOpen: {type: Boolean, default: null},
        type: {type: String, default : null}
    },
    data() {
        return {
            open: this.isOpen
        }
    },
    watch: {
        isOpen( val ) {
            this.open = val
        }
    },
    computed: {
        inAccordion () { return this.$parent && this.$parent._isAccordion },
        panelType () { return 'panel-' + (this.type || (this.$parent && this.$parent.type) || 'default') }
    },
    methods: {
        toggle () {
            this.open = !this.open
            if (this.inAccordion) {
                this.$parent.openChild(this)
            }
        },
        enter (el) {
            el.style.height = 'auto'
            var endWidth = getComputedStyle(el).height
            el.style.height = '0px'
            el.offsetHeight // force repaint
            el.style.height = endWidth;
        },
        afterEnter (el) {
            el.style.height = 'auto'
        },
        beforeLeave (el) {
            el.style.height = getComputedStyle(el).height
            el.offsetHeight // force repaint
            el.style.height = '0px'
        },
    },
    created () {
        if (this.isOpen === null) {
            this.open = !this.inAccordion
        }
    }
}
</script>

<style>
.accordion-toggle {
    cursor: pointer;
}
.collapse-enter-active,
.collapse-leave-active {
    transition: all .5s ease;
    overflow: hidden;
}
.collapse-enter,
.collapse-leave-active {

}

</style>
