<template>
    <div>
        <div
            v-if="isStripeLoaded && content.clientSecret"
            ref="stripe-payment"
            class="stripe-payment"
            :class="{ editing: isEditing }"
        >
            <!--Stripe.js injects the Payment Element-->
        </div>
    </div>
</template>

<script>
import { markRaw } from 'vue';
import CONSTANTS from './constants.js';

export default {
    props: {
        uid: { type: String, required: true },
        content: { type: Object, required: true },
    },
    setup(props) {
        const { value, setValue } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'value',
            defaultValue: null,
            componentType: 'element',
            type: 'stripe-payment',
            readonly: true,
            labelOnly: '[Stripe Element]',
        });
        return { value, setValue };
    },
    computed: {
        isEditing() {
            // eslint-disable-next-line no-unreachable
            return false;
        },
        defaultFontFamily() {
            return getComputedStyle(wwLib.getFrontDocument().body).getPropertyValue('--ww-default-font-family');
        },
        variables() {
            return {
                ...(CONSTANTS.THEME_DEFAULT[this.content.theme].variables || {}),
                colorPrimary: this.content.colorPrimary,
                colorBackground: this.content.colorBackground,
                colorDanger: this.content.colorDanger,
                colorText: this.content['_ww-text_color'],
                fontFamily: this.content['_ww-text_fontFamily'] || this.defaultFontFamily,
                fontWeightNormal: this.content['_ww-text_fontWeight'] || undefined,
                fontSizeBase: this.content['_ww-text_fontSize'] || undefined,
                spacingUnit: this.content.spacingUnit,
                borderRadius: this.content.borderRadius,
            };
        },
        stripe() {
            return wwLib.wwPlugins.stripe?.instance;
        },
        isStripeLoaded() {
            return wwLib.wwPlugins.stripe?.isInstanceLoaded.value;
        },
        theme() {
            switch (this.content.theme) {
                case 'minimal':
                case 'bubblegum':
                    return 'flat';
                case 'ninety-five':
                    return 'none';
                case 'dark-blue':
                    return 'night';
                default:
                    return this.content.theme;
            }
        },
        rules() {
            try {
                return {
                    ...(CONSTANTS.THEME_DEFAULT[this.content.theme].rules || {}),
                    ...(eval(`(function() { return  ${this.content.rules} })`)() || {}),
                };
            } catch {
                return { ...(CONSTANTS.THEME_DEFAULT[this.content.theme].rules || {}) };
            }
        },
        stripeOptions() {
            return {
                appearance: {
                    theme: this.theme,
                    labels: this.content.labels,
                    variables: this.variables,
                    rules: this.rules,
                },
                clientSecret: this.content.clientSecret,
            };
        },
    },
    watch: {
        stripeOptions: {
            deep: true,
            handler() {
                if (!this.content.clientSecret || !this.isStripeLoaded) return;
                this.init();
            },
        },
        isStripeLoaded(value) {
            if (value) this.init();
        },
    },
    mounted() {
        if (!this.content.clientSecret || !this.isStripeLoaded) return;
        this.init();
    },
    methods: {
        init() {
            this.$nextTick(() => {
                if (!this.value) this.createElement();
                else this.updateElement();
            });
        },
        createElement() {
            if (!this.content.clientSecret || !this.isStripeLoaded) return;
            const stripeElements = markRaw(this.stripe.elements(this.stripeOptions));
            const element = stripeElements.create('payment');
            element.mount(this.$refs['stripe-payment']);
            this.setValue(stripeElements);
        },
        updateElement() {
            if (!this.content.clientSecret || !this.isStripeLoaded) return;
            this.value.update(this.stripeOptions);
        },
    },
};
</script>

<style lang="scss" scoped>
.stripe-payment {
    width: 100%;
}
</style>
