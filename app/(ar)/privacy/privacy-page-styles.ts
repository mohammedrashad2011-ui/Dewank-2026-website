// Styles for the Arabic legal draft. Inline, so the root and page stylesheet set stays unchanged.
export const privacyPageCss = `/* Legal draft page (Arabic). Plain, readable layout on the site palette: paper background, navy text, gold accents. */

.legal-page {
  background: #f4f2ec;
  color: #111214;
}

.legal-shell {
  max-width: 820px;
  padding-block: clamp(96px, 12vw, 150px) clamp(60px, 8vw, 110px);
}

.legal-draft {
  margin-bottom: 28px;
  padding: 14px 18px;
  border: 1px solid #d2a84e;
  border-radius: 12px;
  background: #fff7e8;
  color: #111214;
  font-size: 14px;
  line-height: 1.7;
}

.legal-eyebrow {
  display: inline-block;
  margin-bottom: 14px;
  color: #6b5320;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.legal-shell h1 {
  margin: 0 0 28px;
  font-size: clamp(30px, 4.6vw, 46px);
  line-height: 1.3;
}

.legal-shell h2 {
  margin: 30px 0 10px;
  font-size: 20px;
  line-height: 1.4;
}

.legal-shell p,
.legal-shell li {
  font-size: 16px;
  line-height: 1.9;
}

.legal-shell ul {
  padding-inline-start: 22px;
}

.legal-shell a {
  color: #1e3a8a;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.legal-shell a:focus-visible {
  outline: 3px solid #d2a84e;
  outline-offset: 3px;
  border-radius: 4px;
}

.legal-link-button {
  padding: 0;
  border: 0;
  background: none;
  color: #1e3a8a;
  font: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}

.legal-link-button:focus-visible {
  outline: 3px solid #d2a84e;
  outline-offset: 3px;
  border-radius: 4px;
}

.legal-table-wrap {
  margin: 16px 0 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.legal-table {
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
  font-size: 14px;
  line-height: 1.7;
}

.legal-table caption {
  margin-bottom: 8px;
  color: #111214;
  font-weight: 800;
  text-align: start;
}

.legal-table th,
.legal-table td {
  padding: 10px 12px;
  border: 1px solid rgba(17, 18, 20, 0.14);
  text-align: start;
  vertical-align: top;
}

.legal-table th {
  background: #fff7e8;
  font-weight: 800;
}

.legal-owner-note {
  display: inline;
  color: #7a4f00;
  font-style: italic;
}
`;
