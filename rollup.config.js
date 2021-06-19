import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import autoExternal from 'rollup-plugin-auto-external';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/app.ts',
    output: {
        file: 'dist/app.js',
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json',
        }),
        autoExternal(),
        generatePackageJson({
            additionalDependencies: ['@discordjs/opus', 'ffmpeg-static'],
        }),
        production && terser(),
    ],
};
