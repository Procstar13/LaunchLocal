create table if not exists public.audit_rate_limits (
 key text primary key,
 window_started_at timestamptz not null default now(),
 attempts integer not null default 1
);
alter table public.audit_rate_limits enable row level security;
revoke all on public.audit_rate_limits from anon, authenticated;
create or replace function public.check_audit_rate_limit(p_key text, p_limit integer default 30)
returns boolean language plpgsql security invoker set search_path = public as $$
declare n integer;
begin
 insert into public.audit_rate_limits(key,window_started_at,attempts) values(p_key,now(),1)
 on conflict(key) do update set
 attempts=case when audit_rate_limits.window_started_at < now()-interval '1 hour' then 1 else audit_rate_limits.attempts+1 end,
 window_started_at=case when audit_rate_limits.window_started_at < now()-interval '1 hour' then now() else audit_rate_limits.window_started_at end
 returning attempts into n;
 return n <= least(greatest(p_limit,1),100);
end; $$;
revoke all on function public.check_audit_rate_limit(text,integer) from public, anon, authenticated;
grant execute on function public.check_audit_rate_limit(text,integer) to service_role;
