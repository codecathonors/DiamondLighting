export interface Client {
    logo: string;
    name: string;
    location: string;
    website?: string;
  }
  
  export const clients: Client[] = [
    {
      logo: require("../assets/Logos/Bacardi.png"),
      name: "Bacardi Rum Headquarters",
      location: "Miami, FL",
      website: "https://www.bacardi.com/us/en/",
    },
    {
      logo: require("../assets/Logos/BiceRistorante.png"),
      name: "Bice Bistro on Ocean Drive",
      location: "Miami Beach, FL",
      website: "https://www.bice-orlando.com/",
    },
    {
        logo: require("../assets/Logos/AxisWellingtonGreen.png"),
        name: "Axis Wellington Green Apartments",
        location: "Wellington, FL",
        website: "https://axiswellingtongreen.com/",
      },
      {
        logo: require("../assets/Logos/Breakwater.png"),
        name: "Esplendor Breakwater South Beach",
        location: "Miami Beach, FL",
        website: "https://www.breakwatersouthbeach.com/",
      },
      {
        logo: require("../assets/Logos/FairfieldInn.png"),
        name: "Fairfield Inn",
        location: "Times Square - New York City, NY",
        website: "https://www.marriott.com/en-us/hotels/nycmw-fairfield-inn-and-suites-new-york-manhattan-times-square-south/overview/",
      },
      {
        logo: require("../assets/Logos/Gansevoort.png"),
        name: "Gansevoort Park Avenue",
        location: "New York City, NY",
        website: "https://www.gansevoorthotelgroup.com/gansevoort-meatpacking-nyc/eat-drink/gansevoort-rooftop",
      },
      {
        logo: require("../assets/Logos/Gansevoort.png"),
        name: "Gansevoort Miami",
        location: "Miami Beach, FL",
        website: "https://www.sbjgroup.com/i-gansevoortsouth.html",
      },
      {
        logo: require("../assets/Logos/Hampton.png"),
        name: "Hampton Inn",
        location: "Orlando, FL",
        website: "https://www.hilton.com/en/hotels/mcocchx-hampton-orlando-international-drive-convention-center/",
      },
      {
        logo: require("../assets/Logos/Hyatt.png"),
        name: "Hyatt",
        location: "Morristown, New Jersey",
        website: "https://www.hyatt.com/",
      },
      {
        logo: require("../assets/Logos/ParkLane.png"),
        name: "Park Lane",
        location: "Dallas, TX",
        website: "https://shopsatparklane.com/",
      },
      {
        logo: require("../assets/Logos/SNKAddison.png"),
        name: "SNK Addison",
        location: "Addison, TX",
        website: "https://www.realtor.com/realestateagency/58b38f5f49d62f0010539aaf",
      },
      {
        logo: require("../assets/Logos/SouthPointCasino.png"),
        name: "South Point Hotel & Casino",
        location: "Las Vegas, NV",
        website: "https://southpointcasino.com/",
      },
      {
        logo: require("../assets/Logos/StRegis.png"),
        name: "The St. Regis Bal Harbour Resort",
        location: "Bal Harbour, FL",
        website: "https://www.marriott.com/en-us/hotels/miaxr-the-st-regis-bal-harbour-resort/overview/",
      },
      {
        logo: require("../assets/Logos/BankOfWashington.png"),
        name: "The Bank of Washington",
        location: "Washington, MO",
        website: "https://www.bankofwashington.com/",
      },
      {
        logo: require("../assets/Logos/JWMarriott.png"),
        name: "JW Marriott Miami Turnberry Resort & Spa",
        location: "Miami, FL",
        website: "https://www.marriott.com/en-us/hotels/miajt-jw-marriott-miami-turnberry-resort-and-spa/overview/",
      },
      {
        logo: require("../assets/Logos/UniversityOfCalifornia.png"),
        name: "University of California Student Housing",
        location: "Davis, California",
        website: "https://housing.ucdavis.edu/",
      },
      {
        logo: require("../assets/Logos/Renaissance.png"),
        name: "Renaissance Fort Lauderdale Cruise Port Hotel",
        location: "Fort Lauderdale, FL",
        website: "https://www.marriott.com/en-us/hotels/fllbr-renaissance-fort-lauderdale-marina-hotel/overview/",
      },
      {
        logo: require("../assets/Logos/JPMorgan.png"),
        name: "J.P. Morgan Bank",
        location: "Fort Lauderdale, FL",
        website: "https://privatebank.jpmorgan.com/nam/en/locations/united-states/florida/fort-lauderdale",
      },
      {
        logo: require("../assets/Logos/Kolter.png"),
        name: "Kolter Art House",
        location: "Palm Beach, FL",
        website: "https://www.kolter.com/inside-kolters-42-story-residential-tower-art-house/",
      },
      {
        logo: require("../assets/Logos/TheDillonBuckhead.png"),
        name: "The Dillon Buckhead",
        location: "Atlanta, GA",
        website: "https://www.thedillonbuckhead.com/",
      },
      {
        logo: require("../assets/Logos/Selene.png"),
        name: "The Selene",
        location: "Fort Lauderdale, FL",
        website: "https://selenefortlauderdale.com/",
      },
      {
        logo: require("../assets/Logos/IlBellagio.png"),
        name: "Il Bellagio - Italian Kitchen & Bar",
        location: "West Palm Beach, FL",
        website: "https://ilbellagio.com/",
      },
      {
        logo: require("../assets/Logos/FrenchmansCreek.png"),
        name: "Frenchman's Creek - Beach & Country Club",
        location: "Palm Beach Gardens, FL",
        website: "https://www.frenchmanscreek.com/",
      },
      {
        logo: require("../assets/Logos/StAndrewsCountryClub.png"),
        name: "St. Andrews Country Club",
        location: "Boca Raton, FL",
        website: "https://standrewscc.com/",
      },
      {
        logo: require("../assets/Logos/TheTropic.png"),
        name: "The Tropic",
        location: "Hollywood, FL",
        website: "https://affiliateddevelopment.com/thetropic-comingsoon",
      },
      {
        logo: require("../assets/Logos/HuntersRun.png"),
        name: "Hunters Run Country Club",
        location: "Boynton Beach, FL",
        website: "https://www.huntersrun.net/",
      },
      {
        logo: require("../assets/Logos/HiltonLaRomana.png"),
        name: "Hilton La Romana",
        location: "La Romana, Dominican Republic",
        website: "https://www.hilton.com/en/hotels/lrmfmhh-hilton-la-romana-an-all-inclusive-family-resort/",
      },
      {
        logo: require("../assets/Logos/SecretsRoyalBeach.png"),
        name: "Secrets Royal Beach - Punta Cana",
        location: "Puta Cana, Dominican Republic",
        website: "https://www.hyattinclusivecollection.com/en/resorts-hotels/secrets/dominican-republic/royal-beach-punta-cana/",
      },
      {
        logo: require("../assets/Logos/OpalSol.png"),
        name: "Opal Sol",
        location: "Clearwater Beach, FL",
        website: "https://www.opalcollection.com/opal-sol/",
      },
      {
        logo: require("../assets/Logos/BonitaBayClub.png"),
        name: "Bonita Bay Club",
        location: "Bonita Springs, FL",
        website: "https://www.bonitabayclub.net/",
      },
      {
        logo: require("../assets/Logos/EsteroCountryClub.png"),
        name: "Estero Country Club",
        location: "Fort Myers, FL",
        website: "https://esterocc.com/",
      },
      {
        logo: require("../assets/Logos/Windstar.png"),
        name: "Windstar on Naples Bay",
        location: "Naples, FL",
        website: "https://www.windstarclub.com/",
      },
      {
        logo: require("../assets/Logos/AvalonGolfClub.png"),
        name: "Avalon Golf & Country Club",
        location: "Warren, OH",
        website: "https://www.avalongcc.com/",
      },
      {
        logo: require("../assets/Logos/FourSeasonsAtDelrayBeach.png"),
        name: "Four Seasons Delray Beach",
        location: "Delray Beach, FL",
        website: "http://www.fourseasonsdelraybeach.com/",
      },
      {
        logo: require("../assets/Logos/ParklandGolfClub.png"),
        name: "Parkland Golf & Country Club",
        location: "Parkland, FL",
        website: "https://www.parklandgcc.com/",
      },
      {
        logo: require("../assets/Logos/PonteVecchio.png"),
        name: "Ponte Vecchio",
        location: "Boynton Beach, FL",
        website: "http://www.pontevecchioboyntonbeach.com/",
      },
      {
        logo: require("../assets/Logos/WyndhamGrand.png"),
        name: "Wyndham Grand - Jupiter At Harbourside Place",
        location: "Jupiter, FL",
        website: "https://www.wyndhamgrandjupiter.com/",
      },
      {
        logo: require("../assets/Logos/PetitStVincent.png"),
        name: "Petit St. Vincent",
        location: "St. Vincent & the Grenadines",
        website: "https://www.petitstvincent.com/",
      },
      {
        logo: require("../assets/Logos/WarMemorialAuditorium.png"),
        name: "FTL War Memorial",
        location: "Fort Lauderdale, FL",
        website: "https://www.ftlwarmemorial.com/",
      },
      {
        logo: require("../assets/Logos/TheBrooklynTower.png"),
        name: "The Brooklyn Tower",
        location: "Brooklyn, NY",
        website: "https://thebrooklyntower.com/",
      },
      {
        logo: require("../assets/Logos/RoyalPalmPlace.png"),
        name: "Royal Palm Place",
        location: "Boca Raton, FL",
        website: "https://royalpalmplace.com/",
      },
  ];
  