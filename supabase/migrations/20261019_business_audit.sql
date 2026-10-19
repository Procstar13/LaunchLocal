create table if not exists public.audit_submissions (
 id uuid primary key default gen_random_uuid(),
 visitor_id uuid not null,
 variant text not null check (variant in ('A','B')),
 status text not null default 'draft' check (status in ('draft','submitted')),
 answers jsonb not null default '{}'::jsonb,
 resume_consent boolean not null default false,
 lead_id uuid references public.leads(id) on delete set null,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 submitted_at timestamptz,
 unique(visitor_id)
);
create table if not exists public.audit_events (
 id bigint generated always as identity primary key,
 visitor_id uuid not null,
 variant text not null check (variant in ('A','B')),
 event text not null check (event in ('view','step_complete','submitted')),
 step integer not null check (step between 0 and 3),
 created_at timestamptz not null default now()
);
create index if not exists audit_events_variant_event_idx on public.audit_events(variant,event,created_at);
create index if not exists audit_submissions_status_idx on public.audit_submissions(status,updated_at);
alter table public.audit_submissions enable row level security;
alter table public.audit_events enable row level security;
revoke all on public.audit_submissions from anon, authenticated;
revoke all on public.audit_events from anon, authenticated;
