# Run Tests

Build first:

```CMD
npm run build
```

To run tests you can open unittests.html in a the browser.

Note: folder "lib\tests" is autogenerated and contains build output from the local tests folder.
To add new tests group create a new  *.ts file and place it in the tests folder.

## Debug

VSCode is used as IDE and configuration is included to the project sources.

To debug project you should run command once files are changed:

```cmd
npm run build
```

Then navigate to the debug window and click 'Launch Test File'.
Put breakpoint in any typescript tests file to and refresh page or test to run debugger.
