.PHONY: build-RuntimeDependenciesLayer build-lambda-common
.PHONY: build-ExampleFunction

build-HelloWorldFunction:
	$(MAKE) HANDLER=src/handlers/hello.ts build-lambda-common

build-lambda-common:
	npm install
	node_modules/.bin/esbuild ${HANDLER} --bundle --source-root="${PWD}/src" --sourcemap --platform=node --target=node16  --outfile=dist/app.js
	cp dist/* "${ARTIFACTS_DIR}/"

build-RuntimeDependenciesLayer:
	