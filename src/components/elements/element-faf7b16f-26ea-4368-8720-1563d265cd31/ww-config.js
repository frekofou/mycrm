export default {
    editor: {
        label: 'Stripe - Payment',
        icon: 'logos/stripe',
    },
    inherit: {
        type: 'ww-text',
        exclude: [
            'text',
            'font',
            'lineHeight',
            'textDecoration',
            'textDecorationColor',
            'textDecorationStyle',
            'textAlign',
            'textTransform',
            'textShadow',
            'letterSpacing',
            'wordSpacing',
        ],
    },
    properties: {
        labels: {
            label: 'Labels',
            type: 'TextSelect',
            options: {
                options: [
                    { label: 'Above', value: 'above' },
                    { label: 'Floating', value: 'floating' },
                ],
            },
            defaultValue: 'above',
        },
        theme: {
            label: 'Theme',
            type: 'TextSelect',
            options: {
                options: [
                    { label: 'Stripe', value: 'stripe' },
                    { label: 'Night', value: 'night' },
                    { label: 'Flat', value: 'flat' },
                    { label: 'Minimal', value: 'minimal' },
                    { label: 'Bubblegum', value: 'bubblegum' },
                    { label: 'Ninety Five', value: 'ninety-five' },
                    { label: 'Dark Blue', value: 'dark-blue' },
                    { label: 'None', value: 'none' },
                ],
            },
            defaultValue: 'stripe',
        },
        colorPrimary: {
            label: 'Primary color',
            type: 'Color',
            options: { nullable: true },
        },
        colorBackground: {
            label: 'Background color',
            type: 'Color',
            options: { nullable: true },
        },
        colorDanger: {
            label: 'Danger color',
            type: 'Color',
            options: { nullable: true },
        },
        borderRadius: {
            label: 'Border radius',
            type: 'Length',
            options: { unitChoices: [{ value: 'px', label: 'px', min: 0, max: 100 }] },
            defaultValue: '4px',
            responsive: true,
        },
        spacingUnit: {
            label: 'Spacing',
            type: 'Length',
            options: { unitChoices: [{ value: 'px', label: 'px', min: 0, max: 100 }] },
            defaultValue: '4px',
            responsive: true,
        },
        rules: {
            label: 'Custom Rules',
            type: 'Text',
            options: { placeholder: '{ }' },
            defaultValue: '',
            responsive: true,
        },
        clientSecret: {
            label: 'Client secret (Payment intent)',
            type: 'Text',
            options: { placeholder: 'pi_********' },
            bindable: true,
            defaultValue: '',
            section: 'settings',
        },
    },
};
