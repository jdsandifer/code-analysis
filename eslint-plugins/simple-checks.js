const plugin = {
	meta: {
		name: 'eslint-plugin-simple-checks',
		version: '0.0.1',
	},
	configs: {},
	rules: {
		'no-absolute-file-imports': {
			create(context) {
				return {
					ImportDeclaration(node) {
						const sourceBlob = node.source.value

						const twoOrMoreSlashesSearch = /\/.*\//
						const hasTwoOrMoreSlashes = sourceBlob.match(
							twoOrMoreSlashesSearch
						)
						const doesntStartWithAPeriod = sourceBlob[0] !== '.'

						if (hasTwoOrMoreSlashes && doesntStartWithAPeriod) {
							context.report({
								node,
								message:
									"'{{ theImport }}' looks like an absolute import.",
								data: {
									theImport: sourceBlob,
								},
							})
						}
					},
				}
			},
		},
	},
}

// assign configs here so we can reference `plugin`
Object.assign(plugin.configs, {
	recommended: [
		{
			plugins: {
				'simple-checks': plugin,
			},
			rules: {
				'simple-checks/no-absolute-file-imports': 'warn',
			},
			languageOptions: {
				globals: {
					myGlobal: 'readonly',
				},
			},
		},
	],
})

export default plugin
