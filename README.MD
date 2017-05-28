# ng2-national-code-validator
textbox validator for iranian national code

اعتبار سنجی کد ملی


## Demo
coming soon

## آموزش فارسی
به زودی


## Installation

To install this library, run:

```bash
$ npm install ng2-national-code-validator --save
```

## Consuming library

you can import library in any Angular application by running:

```bash
$ npm install ng2-national-code-validator
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library
import { NationalCodeValidatorModule } from 'ng2-national-code-validator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import
    NationalCodeValidatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

you can use `national-code` directive in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<input required national-code type="text" class="form-control">
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Sajad Mehrabi](mailto:mehrabisajad@outlook.com)
