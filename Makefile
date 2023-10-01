install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

test-coverage:
	make test-coverage

make lint:
	npx eslint