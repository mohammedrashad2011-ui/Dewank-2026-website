// Styles for the consent dialog. Rendered as an inline <style> inside the banner, not as a stylesheet import, so the
// root layout keeps the same stylesheet set and order as before. A new root stylesheet changes the cascade order of the
// page stylesheets (the Arabic service-card and offer-card treatments depend on it).
export const consentBannerCss = `/* Consent dialog. Palette from the site: navy #071a33, gold #d2a84e, ivory #fff7e8. Accept and reject are identical in size,
   weight and treatment, so rejecting is as easy as accepting. Direction comes from the dir attribute (rtl for Arabic,
   ltr for English). Keep it clear of the WhatsApp bridge: the dialog sits at the bottom edge and scrolls with the page. */

.dewank-consent {
  position: fixed;
  inset-inline: 12px;
  bottom: 12px;
  z-index: 9000;
  max-width: 760px;
  margin-inline: auto;
  padding: 18px 20px;
  border: 1px solid rgba(210, 168, 78, 0.5);
  border-radius: 16px;
  background: #071a33;
  color: #fff7e8;
  box-shadow: 0 18px 44px rgba(2, 10, 24, 0.35);
  font-size: 14px;
  line-height: 1.7;
}

.dewank-consent-title {
  margin: 0 0 6px;
  color: #fff7e8;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.4;
}

.dewank-consent-body,
.dewank-consent-essential {
  margin: 0 0 8px;
  color: #fff7e8;
}

.dewank-consent-essential {
  color: rgba(255, 247, 232, 0.82);
  font-size: 13px;
}

.dewank-consent a {
  color: #f2d089;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.dewank-consent-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
}

.dewank-consent-btn {
  min-height: 44px;
  min-width: 132px;
  padding: 10px 18px;
  border: 1px solid #d2a84e;
  border-radius: 999px;
  background: #d2a84e;
  color: #071a33;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
}

.dewank-consent-manage {
  min-height: 44px;
  padding: 10px 6px;
  border: 0;
  background: transparent;
  color: #f2d089;
  font: inherit;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}

.dewank-consent button:focus-visible,
.dewank-consent input:focus-visible,
.dewank-consent a:focus-visible {
  outline: 3px solid #fff7e8;
  outline-offset: 3px;
  border-radius: 6px;
}

.dewank-consent-fieldset {
  margin: 12px 0 0;
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
  margin: 0 0 10px;
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
  color: rgba(255, 247, 232, 0.82);
  font-size: 13px;
}

@media (max-width: 640px) {
  .dewank-consent {
    inset-inline: 8px;
    bottom: 8px;
    padding: 16px;
    font-size: 13px;
  }

  .dewank-consent-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .dewank-consent-btn {
    width: 100%;
  }

  .dewank-consent-manage {
    align-self: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dewank-consent-btn {
    transition: none;
  }
}
`;
