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
  ];
  