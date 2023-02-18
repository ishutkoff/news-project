import path from 'path'
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/config'
import MinCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({
	paths,
	isDev,
}: BuildOptions): WebpackPluginInstance[] {
	return [
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MinCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css' }),
		new DefinePlugin({ __IS_DEV__: JSON.stringify(isDev) }),
	]
}
