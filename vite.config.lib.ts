import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        vue(),
        libInjectCss(),
        dts({
            entryRoot: './src',
            root: './',
            outDir: './dist/types',
            declarationOnly: false,
            cleanVueFileName: true,
            compilerOptions: {
                incremental: true
            },
            include: [
                `src/**/*.ts`,
                `src/**/*d.ts`,
                `src/**/*.vue`,
            ],
        }),
    ],
    resolve: {
        alias: [
            {
                find: '~',
                replacement: resolve(process.cwd(), '.'),
            },
        ],
    },
    build: {
        watch: {
            include: ['./src/**']
        },
        outDir: './dist',
        cssCodeSplit: false,
        lib: {
            name: "NumberRolling",
            entry: './src/index.ts',
            formats: ['es', 'cjs'],
            fileName(fromat, entry) {
                return `${fromat}/${entry.replace('.vue', '')}.js`;
            },
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: false,
                preserveModules: true,
                preserveModulesRoot: 'src',
                assetFileNames: '[ext]/[name].[ext]',
                globals: {
                    vue: 'Vue',
                    'odometer': 'Odometer',
                },
            },
            external: [
                'vue',
                'odometer',
            ]
        }
    }
});