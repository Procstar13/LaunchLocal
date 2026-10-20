alter table public.audit_submissions add column if not exists resume_token_hash text;
alter table public.audit_submissions add column if not exists resume_expires_at timestamptz;
alter table public.audit_submissions add column if not exists resume_email_sent_at timestamptz;
create unique index if not exists audit_resume_token_hash_idx on public.audit_submissions(resume_token_hash) where resume_token_hash is not null;