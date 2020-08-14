\connect svc

CREATE TABLE cars
(
    id uuid NOT NULL,
    price integer,
    make character varying,
    model character varying,
    year integer,
    mileage integer,
    color character varying,
    vin character varying,
    state character varying,
    country character varying
);

ALTER TABLE settings OWNER TO postgres;