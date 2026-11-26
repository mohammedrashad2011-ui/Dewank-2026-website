-- DEWANK CRM: new MySQL tables. Apply only to the designated CRM database
-- after staging verification. Do not drop or migrate the legacy SQLite schema.
CREATE TABLE IF NOT EXISTS dewank_crm_leads (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  lead_ref CHAR(36) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  request_id CHAR(36) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  request_hash CHAR(64) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(16) CHARACTER SET ascii NOT NULL,
  email VARCHAR(160) NULL,
  company VARCHAR(120) NULL,
  service VARCHAR(64) NOT NULL,
  brief TEXT NULL,
  locale ENUM('ar','en') NOT NULL,
  contact_consent_at DATETIME(3) NOT NULL,
  analytics_consent BOOLEAN NOT NULL DEFAULT FALSE,
  landing_path VARCHAR(240) NULL,
  offer VARCHAR(64) NULL,
  utm_source VARCHAR(100) NULL,
  utm_medium VARCHAR(100) NULL,
  utm_campaign VARCHAR(160) NULL,
  utm_content VARCHAR(160) NULL,
  gclid VARCHAR(256) NULL,
  status ENUM('new','contacted','qualified','won','lost') NOT NULL DEFAULT 'new',
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uq_lead_ref (lead_ref),
  UNIQUE KEY uq_request_id (request_id),
  KEY ix_status_created (status,created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Atomic notification outbox: insert in same transaction as a new lead.
CREATE TABLE IF NOT EXISTS dewank_crm_notifications (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  lead_id BIGINT UNSIGNED NOT NULL,
  channel ENUM('email') NOT NULL,
  state ENUM('pending','sent','failed') NOT NULL DEFAULT 'pending',
  attempts SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  next_attempt_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uq_lead_channel (lead_id,channel),
  KEY ix_pending (state,next_attempt_at),
  CONSTRAINT fk_crm_notification_lead FOREIGN KEY (lead_id) REFERENCES dewank_crm_leads(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
