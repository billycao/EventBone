# Concatenate js files
SRC_DIR = js/

JS_MODULES =	${SRC_DIR}gcalendar.js\
              ${SRC_DIR}script.js\
		          ${SRC_DIR}plugins.js

application.js: ${JS_MODULES}
	cat > $@ $^
