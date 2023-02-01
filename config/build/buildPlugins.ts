import path from 'path'
import { ProgressPlugin, WebpackPluginInstance } from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/config'
import MinCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
	return [
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MinCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css' }),
	]
}
