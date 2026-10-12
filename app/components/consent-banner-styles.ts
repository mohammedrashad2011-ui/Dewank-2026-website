// Styles for the consent banner and preferences dialog. Rendered as an inline <style> by consent-bootstrap.ts, not as a
// stylesheet import, so the root layouts keep the same stylesheet set and cascade order (a new root stylesheet changes the
// order of the page stylesheets; the Arabic service-card and offer-card treatments depend on it).
export const consentBannerCss = `/* Consent banner and preferences. Palette from the site: navy #071a33, gold #d2a84e, ivory #fff7e8. Accept and reject are
   identical in size, weight and treatment, so rejecting is as easy as accepting. Direction comes from the dir attribute
   (rtl for Arabic, ltr for English). The visible buttons are compact; each one keeps a 44 px touch area through its
   ::before pseudo-element, so the banner is small without making the controls harder to tap. */

.dewank-consent {
  position: fixed;
  inset-inline: 12px;
  bottom: 12px;
  z-index: 9000;
  box-sizing: border-box;
  max-width: 480px;
  margin-inline: auto;
  padding: 10px 12px;
  border: 1px solid rgba(210, 168, 78, 0.5);
  border-radius: 12px;
  background: #071a33;
  color: #fff7e8;
  box-shadow: 0 10px 28px rgba(2, 10, 24, 0.35);
  font-size: 12.5px;
  line-height: 1.5;
}

.dewank-consent-title {
  margin: 0 0 2px;
  color: #fff7e8;
  font-size: 14px;
  font-weight: 800;
  line-height: 1.35;
}

.dewank-consent-title[tabindex="-1"]:focus {
  outline: none;
}

.dewank-consent-body {
  margin: 0 0 6px;
  color: #fff7e8;
}

.dewank-consent-small {
  margin: 0 0 6px;
  color: rgba(255, 247, 232, 0.85);
  font-size: 12px;
}

.dewank-consent a {
  color: #f2d089;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.dewank-consent-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.dewank-consent-btn {
  position: relative;
  min-height: 32px;
  padding: 5px 12px;
  border: 1px solid #d2a84e;
  border-radius: 999px;
  background: #d2a84e;
  color: #071a33;
  font: inherit;
  font-size: 12.5px;
  font-weight: 800;
  cursor: pointer;
}

.dewank-consent-btn::before,
.dewank-consent-manage::before,
.dewank-consent-links a::before {
  content: "";
  position: absolute;
  inset: -6px -4px;
}

.dewank-consent-save {
  grid-column: 1 / -1;
}

.dewank-consent-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px 14px;
  margin-top: 2px;
}

.dewank-consent-manage {
  position: relative;
  min-height: 32px;
  padding: 6px 0;
  border: 0;
  background: transparent;
  color: #f2d089;
  font: inherit;
  font-size: 12.5px;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}

.dewank-consent-links a {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  font-size: 12.5px;
}

.dewank-consent button:focus-visible,
.dewank-consent input:focus-visible,
.dewank-consent a:focus-visible {
  outline: 3px solid #fff7e8;
  outline-offset: 3px;
  border-radius: 6px;
}

.dewank-consent-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9001;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(2, 10, 24, 0.55);
}

.dewank-consent.dewank-consent-dialog {
  position: relative;
  inset: auto;
  bottom: auto;
  z-index: auto;
  width: 100%;
  max-width: 640px;
  max-height: 88vh;
  margin: 0;
  overflow: auto;
  padding: 20px;
}

.dewank-consent-fieldset {
  margin: 4px 0 12px;
  padding: 0;
  border: 0;
}

.dewank-consent-fieldset legend {
  padding: 0;
  margin-bottom: 8px;
  color: #fff7e8;
  font-weight: 800;
}

.dewank-consent-option {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0 0 12px;
  cursor: pointer;
}

.dewank-consent-option input {
  width: 22px;
  height: 22px;
  flex: 0 0 22px;
  margin-top: 3px;
  accent-color: #d2a84e;
}

.dewank-consent-option strong {
  display: block;
  font-weight: 800;
}

.dewank-consent-option small {
  display: block;
  color: rgba(255, 247, 232, 0.85);
  font-size: 13px;
}

@media (max-width: 640px) {
  .dewank-consent {
    inset-inline: 8px;
    bottom: 8px;
    padding: 9px 10px;
    font-size: 11px;
  }

  .dewank-consent-title {
    font-size: 12px;
  }

  .dewank-consent-manage,
  .dewank-consent-links a {
    font-size: 11px;
  }

  .dewank-consent-btn {
    min-height: 30px;
    padding: 4px 10px;
    font-size: 12px;
  }

  .dewank-consent-backdrop {
    padding: 8px;
  }

  .dewank-consent.dewank-consent-dialog {
    padding: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dewank-consent-btn,
  .dewank-consent-manage {
    transition: none;
  }
}
`;
