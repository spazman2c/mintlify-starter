/*
 * Mintlify auto-includes root-level .js files on docs pages.
 * This file injects the exact Woes widget install snippet for docs. Keep the
 * attributes in sync with the customer-facing install snippet.
 */
(function () {
  if (window.__woesDocsWidgetInstalled) return;
  window.__woesDocsWidgetInstalled = true;

  var script = document.createElement("script");
  script.src = "https://woes.dev/widget.js";
  script.setAttribute("data-public-key", "woesw_7caa9909810e4d67a5b7fc5f47f4213b");
  script.setAttribute("data-api", "https://woes.dev/api/widget/messages");
  document.head.appendChild(script);
})();
