@echo off
echo Packaging StackDesk source code.
echo StackDesk code located at : C:\ladel\stackdesk
<<<<<<< HEAD
cd C:\ladel\stackdesk
=======
>>>>>>> 015170dce810a26ced015b6487a4c70a1f1c2e8e
echo Building for windows.
echo Building for x64bit (win64).
echo Using windows icon file from source code.
electron-packager C:\ladel\stackdesk StackDesk --platform=win32 --arch=all -icon=\ico\stackdesk.ico
