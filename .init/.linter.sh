#!/bin/bash
cd /home/kavia/workspace/code-generation/nimisha-tripathi-portfolio-29855-29868/frontend_react_js
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

