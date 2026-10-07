<p align="right">
  <a href="README.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="README.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="README.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# modo-espelho

![modo-espelho](assets/support/project-en-us.svg)

<!-- public-badges:start -->
[![license](assets/support/badge-license.svg)](LICENSE) [![CI](assets/support/badge-ci.svg)](https://github.com/Rdraim/modo-espelho/actions) [![release](assets/support/badge-release.svg)](https://github.com/Rdraim/modo-espelho/releases)
<!-- public-badges:end -->

<p>
  <a href="https://github.com/Rdraim/modo-espelho/tree/main/examples"><img src="assets/support/action-0-en-us.svg" height="40" width="200" alt="View examples"></a>
  <a href="https://github.dev/Rdraim/modo-espelho"><img src="assets/support/action-1-en-us.svg" height="40" width="200" alt="Edit on GitHub"></a>
  <a href="https://github.com/Rdraim/modo-espelho/archive/refs/heads/main.zip"><img src="assets/support/action-2-en-us.svg" height="40" width="200" alt="Download code"></a>
</p>


Declare mode capabilities and authorize on the server before executing an operation.

## Installation

```bash
git clone https://github.com/Rdraim/modo-espelho.git
cd modo-espelho
npm test
node examples/basic.mjs
```

## Runnable example

```js
import {capacidades, permitido, exigir} from './src/index.js';
console.log(permitido({modo:'espelho',acao:'excluir',permissoes:['ler','excluir']}));
```

## API

`capacidades(mode)` returns a detached capability list. `permitido({modo, acao, permissoes})` requires both mode and identity permissions. `exigir(context)` throws with `code: ACESSO_NEGADO`. Modes: principal, read-only espelho, and offline drafts.

## Limits

Authorization reference, not a sync or backup engine. Obtain mode and permissions from trusted server context, never browser input. The consumer must enforce every operation and revalidate drafts on reconnection.

## Compatibility

No runtime dependencies in the core. CI targets Node.js 22 and 24. Install from Git; this project is not published on npm. Review Releases and pin a tag/commit for integration. Dependency updates require license, engine and consumer test review. A CI badge is not a security certification.

[Compatibility](COMPATIBILITY.en-US.md) · [Contributing](CONTRIBUTING.en-US.md) · [Security](SECURITY.en-US.md)

MIT © Rodrigo Rodrigues

## ☕ Buy me a coffee

Did this project help you solve a problem, learn something new, or take your first steps in development? If you feel like supporting my work, a coffee is a kind way to say thank you.

I’m **Rodrigo Rodrigues**, creator of **Nexus** and these open source projects. Your support helps me set aside time to improve the code, write clearer examples, and keep sharing what I learn.

**Give any amount that feels right to you. Supporting is completely optional — the project remains free under the MIT license.**

<p>
  <a href="#support-via-pix"><img src="assets/support/pix-en-us.svg" width="190" height="44" alt="Support via Pix"></a>
  <a href="https://github.com/techrodrigo21-ux/modo-espelho/issues/new?title=Feedback%3A%20this%20project%20helped%20me"><img src="assets/support/comment-en-us.svg" width="210" height="44" alt="Leave a comment"></a>
</p>

### Support via Pix

In your banking app, scan the QR code or copy the Pix key below. Choose your amount and check the recipient details before confirming.

<p align="center">
  <img src="assets/support/pix-qr.png" width="260" alt="Original Pix QR code supplied by Rodrigo Rodrigues; the text key below is an alternative.">
</p>

**Pix key**

```text
8875a24e-44d1-4c91-b6bb-62c9f0070955
```

Pix is Brazil’s payment system. If your bank does not support it, you can still help by sharing the project, reporting a bug, improving the documentation, or leaving feedback.

### Your feedback matters, too

[Tell me how the project helped you](https://github.com/techrodrigo21-ux/modo-espelho/issues/new?title=Feedback%3A%20this%20project%20helped%20me). I’d love to hear what you built, what you learned, and what could be clearer for someone just starting out.

A comment is welcome with or without a donation. Please keep payment receipts, personal details, credentials and private user data out of public Issues.

---

**Thank you for supporting my work and helping me keep building and sharing. ❤️**
