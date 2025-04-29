create user farm_service with password 'farm_service';
create database farm_management with owner=farm_service;
grant all privileges on database 'farm_management' to farm_service;

CREATE TABLE IF NOT EXISTS farms
 (
   id uuid,
   data jsonb,
   created_date timestamp with time zone DEFAULT now(),
   modified_date timestamp with time zone DEFAULT now(),
   CONSTRAINT farms_pkey PRIMARY KEY (id)
 )
 WITH (
   OIDS=FALSE
 );

CREATE TABLE IF NOT EXISTS lots
 (
   id uuid,
   data jsonb,
   created_date timestamp with time zone DEFAULT now(),
   modified_date timestamp with time zone DEFAULT now(),
   CONSTRAINT lots_pkey PRIMARY KEY (id)
 )
 WITH (
   OIDS=FALSE
 );

CREATE TABLE IF NOT EXISTS lot_events
 (
   id uuid,
   data jsonb,
   created_date timestamp with time zone DEFAULT now(),
   modified_date timestamp with time zone DEFAULT now(),
   CONSTRAINT lot_events_pkey PRIMARY KEY (id)
 )
 WITH (
   OIDS=FALSE
 );

CREATE TABLE IF NOT EXISTS users
 (
   id uuid,
   data jsonb,
   created_date timestamp with time zone DEFAULT now(),
   modified_date timestamp with time zone DEFAULT now(),
   CONSTRAINT users_pkey PRIMARY KEY (id)
 )
 WITH (
   OIDS=FALSE
 );

CREATE TABLE IF NOT EXISTS event_requests
 (
   id uuid,
   data jsonb,
   created_date timestamp with time zone DEFAULT now(),
   modified_date timestamp with time zone DEFAULT now(),
   CONSTRAINT event_requests_pkey PRIMARY KEY (id)
 )
 WITH (
   OIDS=FALSE
 );

CREATE TABLE IF NOT EXISTS event_responses
 (
   id uuid,
   data jsonb,
   created_date timestamp with time zone DEFAULT now(),
   modified_date timestamp with time zone DEFAULT now(),
   CONSTRAINT event_responses_pkey PRIMARY KEY (id)
 )
 WITH (
   OIDS=FALSE
 );

CREATE TABLE IF NOT EXISTS message_history
 (
   id uuid,
   data jsonb,
   created_date timestamp with time zone DEFAULT now(),
   modified_date timestamp with time zone DEFAULT now(),
   CONSTRAINT message_history_pkey PRIMARY KEY (id)
 )
 WITH (
   OIDS=FALSE
 );

CREATE TABLE IF NOT EXISTS farm_user_mappings
 (
   id uuid,
   data jsonb,
   created_date timestamp with time zone DEFAULT now(),
   modified_date timestamp with time zone DEFAULT now(),
   CONSTRAINT farm_user_mappings_pkey PRIMARY KEY (id)
 )
 WITH (
   OIDS=FALSE
 );