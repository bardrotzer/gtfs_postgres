--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 11.5

-- Started on 2019-09-26 10:27:45

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE gtfs_all;
--
-- TOC entry 2898 (class 1262 OID 19037)
-- Name: gtfs_all; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE gtfs_all WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United Kingdom.1252' LC_CTYPE = 'English_United Kingdom.1252';


ALTER DATABASE gtfs_all OWNER TO postgres;

\connect gtfs_all

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 27362)
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- TOC entry 2899 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 27235)
-- Name: agency; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.agency (
    agency_id character varying,
    agency_name character varying,
    agency_url character varying,
    agency_timezone character varying,
    agency_lang character varying,
    agency_phone character varying
);


ALTER TABLE public.agency OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 27247)
-- Name: calendar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.calendar (
    service_id character varying,
    monday smallint,
    tuesday smallint,
    wednesday smallint,
    thursday smallint,
    friday smallint,
    saturday smallint,
    sunday smallint,
    start_date timestamp without time zone,
    end_date timestamp without time zone,
    updated boolean
);


ALTER TABLE public.calendar OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 27241)
-- Name: calendar_dates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.calendar_dates (
    service_id character varying,
    date timestamp without time zone,
    exception_type integer,
    updated boolean
);


ALTER TABLE public.calendar_dates OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 27257)
-- Name: routes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.routes (
    route_id character varying,
    agency_id character varying,
    route_short_name character varying,
    route_long_name character varying,
    route_type integer,
    route_desc character varying,
    route_url character varying,
    route_color character varying,
    route_text_color character varying
);


ALTER TABLE public.routes OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 27302)
-- Name: shapes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shapes (
    shape_id character varying,
    shape_pt_lat numeric(10,2),
    shape_pt_lon numeric(10,2),
    shape_pt_sequence integer,
    shape_dist_traveled numeric(13,5)
);


ALTER TABLE public.shapes OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 27269)
-- Name: stop_times; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stop_times (
    trip_id character varying,
    arrival_time character varying,
    departure_time character varying,
    stop_id character varying,
    stop_sequence integer,
    pickup_type character varying,
    drop_off_type character varying,
    shape_dist_traveled numeric(10,2),
    stop_headsign character varying,
    stop_country character varying
);


ALTER TABLE public.stop_times OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 27308)
-- Name: stops; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stops (
    stop_id character varying,
    stop_code character varying,
    stop_name character varying,
    stop_desc character varying,
    stop_lat numeric(15,12),
    stop_lon numeric(15,12),
    zone_id character varying,
    stop_url character varying,
    location_type character varying,
    parent_station character varying,
    wheelchair_boarding character varying,
    stop_timezone character varying,
    platform_code character varying,
    vehicle_type integer,
    location_country character varying
);


ALTER TABLE public.stops OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 27320)
-- Name: transfers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transfers (
    from_stop_id character varying,
    to_stop_id character varying,
    transfer_type character varying,
    min_transfer_time integer,
    from_route_id character varying,
    to_route_id character varying,
    from_trip_id character varying,
    to_trip_id character varying,
    transfer_country character varying
);


ALTER TABLE public.transfers OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 27328)
-- Name: trips; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.trips (
    route_id character varying,
    service_id character varying,
    trip_id character varying,
    trip_headsign character varying,
    trip_short_name character varying,
    direction_id character varying,
    block_id character varying,
    shape_id character varying,
    wheelchair_accessible character varying,
    bikes_allowed character varying,
    trip_gtfs_country character varying
);


ALTER TABLE public.trips OWNER TO postgres;

-- Completed on 2019-09-26 10:27:45

--
-- PostgreSQL database dump complete
--

