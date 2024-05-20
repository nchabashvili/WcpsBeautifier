# WCPS code formatter
formats any type of WCPS query if it is grammatically correct.

# Set up

install node.js by following instructions on this link:
[install node.js and NPM](https://nodejs.org/en/download/package-manager)


# How To Use

1. Run the program using the specified command.
2. After running the program, paste or type a query inside the terminal.
3. Press Ctrl+C to see the formatted query appear below the inputted one.

# Run

```bash
npm run run
```


# Transpiling to Javascript

1. Edit the `tsconfig.json` file:
   - Uncomment the relevant lines to enable transpiling.
   - Comment out the current code lines that are not needed for transpiling.

2. Run these commands to build the project and generate the library file in the project root directory:


```bash
npm run build
```

```bash
cp ./dist/lib/WCPSBeautifier.js ./WCPSBeautifier.js
```

change code back in tsconfig.json.

to view an example of usage of library file See the [Link](https://github.com/nchabashvili/WCPS-Code-Beautifier.git)
