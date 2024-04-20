import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import simpleChecks from './eslint-plugins/simple-checks.js'

export default [
	{ languageOptions: { globals: globals.browser } },
	// pluginJs.configs.recommended,
	// ...tseslint.configs.recommended,
	// pluginReactConfig,
	...simpleChecks.configs.recommended,
]
