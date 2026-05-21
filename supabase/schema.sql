create table if not exists participants (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists predictions (
  participant_id uuid not null references participants(id) on delete cascade,
  match_id text not null,
  home_goals integer check (home_goals is null or home_goals between 0 and 15),
  away_goals integer check (away_goals is null or away_goals between 0 and 15),
  updated_at timestamptz not null default now(),
  primary key (participant_id, match_id)
);

create table if not exists match_results (
  match_id text primary key,
  home_goals integer check (home_goals is null or home_goals between 0 and 15),
  away_goals integer check (away_goals is null or away_goals between 0 and 15),
  updated_at timestamptz not null default now()
);

create table if not exists admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists predictions_updated_at on predictions;
create trigger predictions_updated_at
before update on predictions
for each row execute function set_updated_at();

drop trigger if exists match_results_updated_at on match_results;
create trigger match_results_updated_at
before update on match_results
for each row execute function set_updated_at();

alter table participants enable row level security;
alter table predictions enable row level security;
alter table match_results enable row level security;
alter table admin_users enable row level security;

drop policy if exists "participants are visible" on participants;
create policy "participants are visible"
on participants for select
using (true);

drop policy if exists "users create own participant" on participants;
create policy "users create own participant"
on participants for insert
with check (auth.uid() = id);

drop policy if exists "users update own participant" on participants;
create policy "users update own participant"
on participants for update
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "users delete own participant" on participants;
create policy "users delete own participant"
on participants for delete
using (auth.uid() = id);

drop policy if exists "predictions are visible" on predictions;
create policy "predictions are visible"
on predictions for select
using (true);

drop policy if exists "users create own predictions" on predictions;
create policy "users create own predictions"
on predictions for insert
with check (auth.uid() = participant_id);

drop policy if exists "users update own predictions" on predictions;
create policy "users update own predictions"
on predictions for update
using (auth.uid() = participant_id)
with check (auth.uid() = participant_id);

drop policy if exists "results are visible" on match_results;
create policy "results are visible"
on match_results for select
using (true);

drop policy if exists "admins create results" on match_results;
create policy "admins create results"
on match_results for insert
with check (exists (
  select 1 from admin_users
  where admin_users.user_id = auth.uid()
));

drop policy if exists "admins update results" on match_results;
create policy "admins update results"
on match_results for update
using (exists (
  select 1 from admin_users
  where admin_users.user_id = auth.uid()
))
with check (exists (
  select 1 from admin_users
  where admin_users.user_id = auth.uid()
));

drop policy if exists "users can read own admin flag" on admin_users;
create policy "users can read own admin flag"
on admin_users for select
using (auth.uid() = user_id);
