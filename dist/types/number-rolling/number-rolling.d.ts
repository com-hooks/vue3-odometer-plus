type __VLS_Props = {
    start?: number;
    value: number;
    /**
     * The format option allows you to configure how the digit groups are formatted, and how many digits are shown after the decimal point.
     @default '(d).dd'
     @example
        (,ddd)    -  12,345,678
        (,ddd).dd -  12,345,678.09
        (.ddd),dd -  12.345.678,09
        ( ddd),dd -  12 345 678,09
        d         -  12345678
     */
    format?: string;
    theme?: 'car' | 'default' | 'digital' | 'minimal' | 'plaza' | 'slot-machine' | 'train-station';
    formatFunction?: (v: number) => number;
    animation?: 'count' | 'default';
    /**
     * @default '.odometer'
     */
    selector?: string;
    /**
     * @default false
     */
    auto?: boolean;
};
declare function update(v: number): void;
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    old: import('vue').ShallowRef<any, any>;
    update: typeof update;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    odometerEl: HTMLSpanElement;
}, HTMLSpanElement>;
export default _default;
