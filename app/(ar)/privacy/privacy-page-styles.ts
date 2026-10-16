// Compact privacy-page typography. Scoped to /privacy; no other Arabic page changes.
export const privacyPageCss = `
.legal-page {
  background: #f4f2ec;
  color: #111214;
}
.legal-shell {
  max-width: 760px;
  padding-block: clamp(100px, 12vw, 145px) clamp(46px, 6vw, 70px);
}
.legal-eyebrow {
  display: block;
  margin-bottom: 9px;
  color: #786031;
  font-size: 11px;
  font-weight: 700;
}
.legal-shell h1 {
  margin: 0 0 12px;
  color: #071a33;
  font-size: clamp(24px, 3vw, 29px);
  font-weight: 800;
  line-height: 1.4;
}
.legal-shell h2 {
  margin: 23px 0 6px;
  padding-top: 13px;
  border-top: 1px solid rgba(7,26,51,.12);
  color: #071a33;
  font-size: 15px;
  font-weight: 800;
  line-height: 1.6;
}
.legal-shell p,
.legal-shell li {
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 1.85;
}
.legal-shell ul {
  margin: 0 0 10px;
  padding-inline-start: 19px;
}
.legal-shell li { margin-bottom: 3px; }
.legal-shell .legal-intro { color: #303c4b; }
.legal-shell .legal-updated {
  color: #6b7280;
  font-size: 11.5px;
}
.legal-shell a,
.legal-shell .legal-link-button {
  color: #163b69;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.legal-link-button {
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  cursor: pointer;
}
.legal-shell a:focus-visible,
.legal-shell button:focus-visible {
  outline: 3px solid #c9a34d;
  outline-offset: 3px;
  border-radius: 3px;
}
.legal-shell .legal-signoff {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 28px;
  padding-top: 15px;
  border-top: 1px solid rgba(7,26,51,.16);
  color: #071a33;
}
@media (max-width: 640px) {
  .legal-shell { padding-block: 100px 46px; }
  .legal-shell p, .legal-shell li { font-size: 13px; line-height: 1.9; }
  .legal-shell h2 { font-size: 14.5px; }
}
`;
