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