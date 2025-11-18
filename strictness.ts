/*
The Switch:

    1. different users come to TypeScript looking for different things in a type-checker.
     Some people are looking for a more loose opt-in experience which can help validate only some parts of their program,

Default experience with TypeScript, :
    1. where types are optional
    2. inference takes the most lenient types
    3. there’s no checking for potentially null/undefined values

    Much like how tsc emits in the face of errors, these defaults are put in place to stay out of your way.
     If you’re migrating existing JavaScript, that might be a desirable first step.





     In contrast,


The Dial:

     Typescript to validate as much as it can straight away.
     1. that’s why the language provides strictness settings as well.
     2. The further you turn this dial up, the more TypeScript will check for you. 
     3. pays for itself in the long run
     4. enables more thorough checks 
     5. enables accurate tooling
     6. if possible new code base should alwasy turn these strictness check on. 



     The strict flag in the CLI, or "strict": true in a tsconfig.json:

     The two biggest ones you should know about are noImplicitAny and strictNullChecks.



     1. noImplicitAny:

     TypeScript doesn’t try to infer types for us and instead falls back to the most lenient type: any. 
    falling back to any is just the plain JavaScript experience.
    using any defeats the purpose of js any way. 


    The more typed your program is, the more validation and tooling you’ll get,
     meaning you’ll run into fewer bugs as you code. 


    noImplicitAny flag will issue an error on any variables whose type is implicitly inferred as any.


    strictNullChecks:

    1.By default, values like null and undefined are assignable to any other type.
         This can make writing some code easier, 
    2. But forgetting to handle null and undefined is the cause of countless bugs in the world 
    3. The strictNullChecks flag makes handling null and undefined more explicit, and spares us from worrying about whether we forgot to handle null and undefined.
*/