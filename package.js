var both = ['client', 'server'];
var client = 'client';

Package.describe({
    name: "tombethoule:autoformly",
    summary: "Create angular-formly forms with automatic insert and update, and automatic reactive validation.",
    version: "0.8.0",

    documentation: 'README.md',
    git: 'https://github.com/TomBethoule/meteor-autoformly.git'
});

Package.onUse(function (api) {

    var packages = {
        use: [
            'aldeed:collection2-core@2.0.0',
            'underscore',
            'check',
            'angular@1.6.3',
            'pbastowski:angular-babel@1.3.7',
            'pbastowski:angular2-now@1.1.5',
            'mys:angular-template-url@0.0.1',
            'formly:angular-formly@7.3.9_3',
            'wieldo:angular-formly-validator@1.5.0'
        ],
        imply: [
            'mys:angular-template-url',
            'pbastowski:angular2-now',
            'aldeed:collection2-core',
            'formly:angular-formly',
            'wieldo:angular-formly-validator'
        ]
    };

    api.versionsFrom("METEOR@1.4");

    api.use(packages.use);

    api.imply(packages.imply);

    api.addFiles([
        'lib/client/main.js',
        'lib/client/auto-formly-helpers.js',
        'lib/client/auto-formly-parsers.js',
        'lib/client/auto-formly.js',
        'lib/client/auto-formly-component.ng.html',
        'lib/client/auto-formly-component.js',
        // parsers
        'lib/client/parsers/key.js',
        'lib/client/parsers/type.js',
        'lib/client/parsers/template-options/label.js',
        'lib/client/parsers/template-options/options.js',
        'lib/client/parsers/template-options/min-date.js',
        'lib/client/parsers/template-options/max-date.js',
        'lib/client/parsers/defaultvalue.js',
        // validation
        'lib/client/parsers/validation/messages.js',
        // validators
        'lib/client/parsers/validators/required.js',
        'lib/client/parsers/validators/minlength.js',
        'lib/client/parsers/validators/maxlength.js',
        'lib/client/parsers/validators/minnumber.js',
        'lib/client/parsers/validators/maxnumber.js',
        'lib/client/parsers/validators/pattern.js',
        'lib/client/parsers/validators/unique.js',
        'lib/client/parsers/validators/allowed.js',
        // extend formlyValidator
        'lib/client/formly-validator/unique.js'
    ], client);

    api.addFiles([
        'lib/schema.js'
    ], both);

});

Package.onTest(function (api) {
    api.use([
        'mongo',
        'underscore',
        'sanjo:jasmine@0.21.0',
        'velocity:helpers',
        'velocity:console-reporter',
        'angular:angular-mocks@1.4.7',
        'pbastowski:angular-babel',
        'tombethoule:autoformly'
    ]);

    api.addFiles([
        'tests/client/schema.js',
        'tests/client/collection.js'
    ], both);

    api.addFiles([
        'tests/client/auto-formly-parsers-spec.js',
        'tests/client/auto-formly-spec.js',
        // parsers
        'tests/client/parsers/key-spec.js',
        'tests/client/parsers/type-spec.js',
        'tests/client/parsers/defaultvalue-spec.js',
        'tests/client/parsers/template-options/label-spec.js',
        'tests/client/parsers/template-options/min-date-spec.js',
        'tests/client/parsers/template-options/max-date-spec.js',
        // parsers validation
        'tests/client/parsers/validation/messages-spec.js',
        // parsers validators
        'tests/client/parsers/validators/required-spec.js',
        'tests/client/parsers/validators/pattern-spec.js',
        'tests/client/parsers/validators/minnumber-spec.js',
        'tests/client/parsers/validators/maxnumber-spec.js',
        'tests/client/parsers/validators/minlength-spec.js',
        'tests/client/parsers/validators/maxlength-spec.js',
        'tests/client/parsers/validators/unique-spec.js',
        'tests/client/parsers/validators/allowed-spec.js'
    ], client);
});
