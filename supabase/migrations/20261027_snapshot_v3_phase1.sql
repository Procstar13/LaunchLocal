-- Non-destructive schema additions for Snapshot v3.
alter table public.audit_submissions
  add column if not exists questionnaire_version text not null default 'v2';
create table if not exists public.audit_opportunity_reports (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null references public.audit_submissions(id) on delete restrict,
  lead_id uuid references public.leads(id) on delete set null,
  report_version text not null default 'v1',
  status text not null default 'pending' check (status in ('pending','completed','failed')),
  report_data jsonb not null default '{}'::jsonb,
  error_code text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (submission_id,report_version)
);
alter table public.audit_opportunity_reports enable row level security;
revoke all on public.audit_opportunity_reports from anon, authenticated;
create index if not exists audit_opportunity_reports_lead_idx on public.audit_opportunity_reports(lead_id);
-- Reports will only be exposed by a separately authorized internal server route.
