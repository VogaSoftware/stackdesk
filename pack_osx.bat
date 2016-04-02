@echo off
echo Packaging StackDesk source code.
<<<<<<< HEAD
echo StackDesk code located at : 
cd C:\ladel\stackdesk\release
=======
echo StackDesk code located at : C:\ladel\stackdesk
>>>>>>> 015170dce810a26ced015b6487a4c70a1f1c2e8e
echo Building for darwin/OS X.
echo Building for all default darwin archatextures.
echo Using OSX icon file from source code.
electron-packager C:\ladel\stackdesk StackDesk --platform=darwin --arch=all -icon=\ico\stackdesk.icns
