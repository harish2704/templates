NPM_PATHS = $(shell npm bin);

PATH += $(NPM_PATHS)
$(info $(PATH) )

all: public/js/bundle.js

public/js/bundle.js: public/client-bundle.js
	echo 'Building bundle.js'
	browserify $< -o $@
	echo 'Finished building bundle.js'
