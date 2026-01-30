// hello.js

// export to use from outside this file ... input from parameter name
export function hello(sName = "world") {
    // processing
    let sGreeting = `Hello ${sName}!`;
    // output
    return sGreeting;
}

if (import.meta.main) {
    console.log(`hello("Rich") returns "${hello("Rich")}"`);
}