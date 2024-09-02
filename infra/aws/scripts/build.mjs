import * as esbuild from "esbuild";

await esbuild.build({
	entryPoints: ["node_modules/graphql_api/src/index.ts"],
	bundle: true,
	outfile: "dist/graphql_api/index.js",
	platform: "node",
	target: "node20",
	minify: true,
});

console.log("graphqlAPI built!")
