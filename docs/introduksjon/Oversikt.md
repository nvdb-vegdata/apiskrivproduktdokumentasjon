---
sidebar_label: 'Oversikt'
sidebar_position: 1
---

NVDB API Skriv eksponerer et sett med REST-baserte endepunkter for registrering og vedlikehold av data i
[Nasjonal vegdatabank](om-nvdb) (NVDB). Sammen med [NVDB API Les](https://api.vegdata.no) utgjør disse endepunktene en
komplett tjenesteportefølje for utviklere av fagsystemer som har behov for integrasjon med NVDB. APIene og NVDB eies og
forvaltes av Statens vegvesen.

Registrering og vedlikehold av NVDB-data beskrives i et _endringssett_ som behandles asynkront via endringssett-endepunktene.
Et endringssett kan manipulere både vegobjekter og vegnett, men sistnevnte er forbeholdt spesifikke vegnettsklienter. I tillegg finnes
støtte-endepunkter for:
 
* Beregning av stedfesting for vegobjekter med geometri
* Uthenting av låser, oppdrag og transaksjoner fra NVDB
* Konvertering fra andre dataformater til endringssett
* Innsyn i tildelte datarettigheter (autorisasjon)

### Prinsipper

* Endepunktene som representerer ressurser/entiteter følger designprinsippene til [Representational State Transfer (REST)](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm).
* APIet er HTTP-basert. For å hente informasjon om en ressurs benyttes en GET-request. For å registrere eller oppdatere informasjon
om en ressurs benyttes POST. Sistnevnte brukes også mot rene kommando-endepunkter. Responser vil ha en
[HTTP-statuskode](feilhåndtering) som indikerer requestens korrekthet når det gjelder
verb, URL, payload-format, tilgangskontroll m.m.  
* Alle endepunkter støtter payloads både i [JSON](https://www.json.org/json-en.html) og [XML](https://www.w3.org/XML/)-format.
En respons får samme format som requesten, med mindre noe annet er angitt med en ```Accept```-header.
* Alle URLer, URL-parametere og payloads, både i requester og responser, bruker norske domenebegreper.

### Forutsetninger

* Alle requester skal ha følgende headere:
  * ```X-Client``` skal angi navnet på klienten som anroper APIet.
  * ```X-Request-ID``` skal angi en unik identifikator (UUID) for requesten. Denne gjenbrukes i eventuelle requester som NVDB API Skriv gjør til andre baksystemer.
* Alle requester må inneholde et gyldig [autentiseringstoken](autentisering), enten i form av en cookie eller som en Authorization-header.
* Brukeren må ha [relevante roller](tilgangskontroll#tilgang-til-endepunkter-og-ressurser) i Statens vegvesens LDAP-register.
* Dersom brukeren skal registrere eller vedlikeholde data i NVDB, må hun være tildelt [datarettigheter](tilgangskontroll#datarettigheter) i NVDB API Skriv.
Datarettigheter gir tilgang til spesifikke geografiske områder, vegtyper og vegobjekttyper.

### Miljøer

NVDB API Skriv er tilgjengelig i tre ulike miljøer hos Statens vegvesen:

Miljø|Formål|Basis-URL
-|-|-
UTV|Systemtesting|https://nvdbapiskriv.utv.atlas.vegvesen.no/
STM|Systemtesting|https://nvdbapiskriv-stm.utv.atlas.vegvesen.no/
ATM|Akseptansetesting|https://nvdbapiskriv.test.atlas.vegvesen.no/
PROD|Produksjonsdrift|https://nvdbapiskriv.atlas.vegvesen.no/

De tre miljøene benytter hver sine instanser av NVDB. NVDB i STM og ATM blir jevnlig oppdatert med dump fra PROD.

STM og ATM er normalt ikke eksponert gjennom brannmur mot internett, slik at klientanrop mot disse bare kan gjøres fra
Statens vegvesen sitt lokalnett.

For utvikling og innledende testing anbefaler vi at klientutviklere integrerer seg mot en lokal Docker-container med NVDB API Skriv.
[Docker-imaget](https://hub.docker.com/repository/docker/nvdbapnevegdata/nvdb-api-skriv), som fritt kan lastes ned fra Docker Hub,
oppdateres fortløpende i tråd med videreutvikling av NVDB API Skriv. Imaget eksponerer i tillegg til NVDB API Skriv, simulerte endepunkter
for autentisering og andre infrastrukturtjenester hos Statens vegvesen. Basis-URL ved anrop til Docker-containeren er http://localhost:8010/nvdb/apiskriv/.

### Support

Forbedringer og feilrettinger i NVDB API Skriv rulles ut kontinuerlig. Endringer som er relevante for klienter og klientutviklere er beskrevet i en [endringslogg](https://github.com/nvdb-vegdata/endringslogg/blob/master/APISKRIVV3.md).

Tekniske spørsmål omkring bruk av endepunktene kan rettes til vårt rom på [Gitter](https://gitter.im/nvdb-vegdata/api-skriv-v3).

Administrative henvendelser, f.eks. forespørsler omkring brukere, roller og datarettigheter, kan sendes til [nvdb@vegvesen.no](mailto:nvdb@vegvesen.no).