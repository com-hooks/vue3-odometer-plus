export type OdometerProps = {
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
    theme?: 'car' | 'default' | 'digital' | 'minimal' | 'plaza' | 'slot-machine' | 'train-station',
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
    /**
     * @default 1000
     */
    duration?: number;
}